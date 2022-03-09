<?php

namespace App\Service\Connector;

use App\Entity\Order;
use App\Entity\Connector;
use App\Service\CoreService;
use App\Service\Connector\TangoMapping;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class Tango extends CoreService
{
    public function __construct(
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        FormFactoryInterface $formFactory,
        HttpClientInterface $client, 
        SessionInterface $session,
        TangoMapping $mapping
    )
    {
        parent::__construct($em, $validator, $formFactory, $client, $session);
        $this->_mapping  = $mapping;
    }
    
    public function pushOrder(Connector $connector, Order $order)
    {
        // $order = $this->em->getRepository('App\Entity\Order')->findOneBy(["id" => $order->getId()]);
        $message = "OK";
        $request = $this->_mapping->order($order);
        
        try {
            $soap_client = new \SoapClient($connector->getOutputUrl());
            $soap_client->response_timeout = 5000;
            $soap_client->soap_defencoding = 'UTF-8';
            $soap_client->decode_utf8      = false;
            $soap_resp = $soap_client->IngresarFactura2($request);
            $soap_result = $soap_resp->IngresarFactura2Result;

            if ($soap_result->Resultado != "OK") {
                throw new \Exception($soap_result->Resultado);
            }
            
            $response  = $soap_result;
            $data_resp = ['message' => json_encode($soap_result), 'reference_id' => $soap_result->CodCliente, 'method' => 'SOAP', 'status' => 'success'];

            $connector->logger("debug",
                [
                    "Type"        => "order-output", 
                    "Connector"   => $connector->getCode(),
                    "Application" => $connector->getApplication()->getName(),
                    "Request"     => json_encode($request),
                    "Status"      => $message,
                    "Response"    => $response,
                ]
            );
        } catch (\Throwable $th) {
            $connector->logger("err",["message" => $th->getMessage(), "code" => $th->getCode(), "file" => $th->getFile(), "line" => $th->getLine()]);
            $data_resp = ['message' => $th->getMessage(), 'method' => 'SOAP', 'status' => 'warning'];
            $message = "ERROR";
        }

        $this->em->getRepository('App\Entity\OrderHistory')->saveHistory($order, $connector,"output", $data_resp);
        
        return $data_resp;
    }
}