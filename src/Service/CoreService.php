<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-10-26 17:08:54
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-04 22:35:48
 */

namespace App\Service;

use App\Entity\Product;
use Imagine\Gd\Imagine;
use App\Entity\Connector;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\HttpExceptionInterface;

class CoreService 
{
    public function __construct(
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        FormFactoryInterface $formFactory,
        HttpClientInterface $client, 
        SessionInterface $session
    )
    {
        $this->em         = $em;
        $this->valid      = $validator;
        $this->form       = $formFactory;
        $this->HTTPclient = $client;
        $this->session    = $session;
        $this->imagine    = new Imagine();
    }

    // EMERG   = 0;  // Emergency: system is unusable
    // ALERT   = 1;  // Alert: action must be taken immediately
    // CRIT    = 2;  // Critical: critical conditions
    // ERR     = 3;  // Error: error conditions
    // WARN    = 4;  // Warning: warning conditions
    // NOTICE  = 5;  // Notice: normal but significant condition
    // INFO    = 6;  // Informational: informational messages
    // DEBUG   = 7;  // Debug: debug messages
    public function logger(string $file, $messgae, string $type = null)
    {
        // $writer = new \Zend\Log\Writer\Stream();
        // $logger->addWriter($writer,1);
        $logger = new \Zend\Log\Logger();
        $logger->addWriter('stream', null, array('stream' => dirname(__DIR__)."/../var/log/{$file}.log"));
        switch ($type) {
            case 'emerg':
                $logger->emerg($messgae);
                break;
            case 'alert':
                $logger->alert($messgae);
                break;
            case 'crit':
                $logger->crit($messgae);
                break;
            case 'error':
                $logger->err($messgae);
                break;
            case 'warn':
                $logger->warn($messgae);
                break;
            case 'notice':
                $logger->notice($messgae);
                break;
            case 'info':
                $logger->info($messgae);
                break;
            default:
                $logger->debug($messgae);
                break;
        }
    }

    public function statusCode($value)
    {
        $status = [
            "success" => ["success","200","201"],
            "warning" => ["warning","401","301"],
            "error"   => ["error","404","500"],
        ];
        foreach ($status as $status_key => $statu) {
            if (in_array($value,$statu)) {
                return $status_key;
            }
        }
        return "indefinido";
    }

    public function response(string $sku, $message, string $type = 'warning')
    {        
        switch ($type) {
            case 'warning':
                $this->resp['warning'][] = ["sku" => $sku, "message" =>$message];
                break;
            case 'error':
                $this->resp['error'][] = ["sku" => $sku, "message" =>$message];
                break;
            default:
                $this->resp["info"][] = ["sku" => $sku, "message" =>$message];
                break;
        }

        return $this->resp;
    }

	public function attribute($product, string $app, string $attr)
    {
        foreach ($product->getAttributes() as $attribute) {            
			if ($attribute->getAttribute()->getCode() === $attr) {
                if ($attribute->getValue() === 'indefinido')
                    return 'indefinido';

                return $this->em
                    ->getRepository('App\Entity\ConnectorAttributeValue')
                    ->findByValue($app, $product->getClient()->getStrategy(), $attr, $attribute->getAttributeValue()->getMappingValue());
            }
        }
        return null;
    }
    
	public function dataValidation(Product $entity)
	{
		$response = [];
		$valid = true;
		
		if (count($entity->getAttributes()) <= 0){ 
			$response[] = "El producto << {$entity->getSku()} >> requiere minimo un atributo!";
		}
        
        if (count($response) > 0) $valid = false;
		
        return (object)["valid" => $valid ,"response" => $response];
	}

	public function attributeMapping($attribute, $connector, string $attr)
    {
		if ($attribute->getAttribute()->getCode() === $attr) {
			if ($attribute->getValue() === 'indefinido')
				return 'indefinido';

            if ($attribute->getAttribute()->getIsMappingValue()) {
                $attr = $this->em
                    ->getRepository('App\Entity\ConnectorAttributeValue')
                    ->findByValue(
                        $connector,
                        $attribute->getConnector()->getClient()->getStrategy(),
                        $attr,
                        $attribute->getAttributeValue()->getMappingValue()
                    );
                return $attr->getCode(); 
            }else{
                return $attribute->getValue();
            }
        }
        
        return null;
    }

    // HTTP METHOD
    public function get($connector, $path, $parameters = null)
    {
        $request = $this->HTTPclient->request('GET', $path, [
            'headers' => [
                'Accept'        => 'application/json',
                'Authorization' => "{$connector->getOutputTokenType()} {$connector->getOutputToken()}"
            ],
            'query' => $parameters 
        ]);
        $content = $request->getContent(false);

        if (in_array($request->getStatusCode(), [200]) === false) {
            $connector->logger("err", [
                'method'        => 'GET',
                'path'          => $path,
                "status"        => $request->getStatusCode(),
                "response"      => $content
            ]);
            
            throw new Exception("Error GET {$path} {$content}");
        }

        $connector->logger("info", [ 
            'method'        => 'GET',
            'path'          => $path,
            "status"        => $request->getStatusCode(),
            "response"      => $content
        ]);

        return $request;
    }

    public function post($connector, $path, $json = null)
    {
        $request = $this->HTTPclient->request('POST', $path, [
            'headers' => [
                'Authorization' => "{$connector->getOutputTokenType()} {$connector->getOutputToken()}"
            ],
            'json' => $json
        ]);

        $content = $request->getContent(false);

        if (in_array($request->getStatusCode(), [200, 201]) === false) {
            $connector->logger("err", [
                'method'        => 'POST',
                'path'          => $path,
                "status"        => $request->getStatusCode(),
                "response"      => $content
            ]);
            
            throw new Exception("Error POST {$path} {$content}");
        }
        
        $connector->logger("info", [ 
            'method'        => 'POST',
            'path'          => $path,
            'request'       => json_encode($json),
            "status"        => $request->getStatusCode(),
            "response"      => $content
        ]);

        return $request;
    }

    public function put($connector, $path, $json = null)
    {
        $request = $this->HTTPclient->request('PUT', $path, [
            'headers' => [
                'Authorization' => "{$connector->getOutputTokenType()} {$connector->getOutputToken()}"
            ],
            'json' => $json
        ]);

        $content = $request->getContent(false);

        if (in_array($request->getStatusCode(), [200, 201]) === false) {
            $connector->logger("err", [
                'method'        => 'PUT',
                'path'          => $path,
                "status"        => $request->getStatusCode(),
                "response"      => $content
            ]);
            
            throw new Exception("Error PUT {$path} {$content}");
        }

        $connector->logger("info", [ 
            'method'        => 'PUT',
            'path'          => $path,
            'request'       => json_encode($json),
            "status"        => $request->getStatusCode(),
            "response"      => $content
        ]);
        
        return $request;
    }  
}