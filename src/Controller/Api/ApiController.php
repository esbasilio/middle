<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-04-18 17:48:07
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-19 14:18:36
 */

namespace App\Controller\Api;

use App\Entity\Connector;
use App\Controller\CoreController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ApiController extends CoreController
{
    public $resp_warning = [];
    public $resp_error = [];

    public function __construct()
    {
        parent::__construct();
    }

    public function getToken()
    {       
        return new JsonResponse(['token' => $this->generateToken()], Response::HTTP_OK);
    }

    /**
     * [getUserToken verifica el token enviado en el request y optiene el Cliente que corresponde]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function authToken(string $token)
    {    	
        if (!empty($token)){
			$client =  $this->getDoctrine()->getRepository('App\Entity\Client')->findOneBy(['token' => $token]);
            if (empty($client) || is_null($client)) throw new \Exception("El X-AUTH-TOKEN no corresponde a un cliente registrado");
        }else{
            throw new \Exception("Error en la autenticacion");
        }
        
        return $client;
    }
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function connectToken(Request $request): ?Connector
    {
        if ($request->headers->has('X-CONNECT-TOKEN')){
            if(empty($request->headers->get('X-CONNECT-TOKEN'))) throw new \Exception("se requiere de un token valido");

            $connect =  $this->getDoctrine()->getRepository('App\Entity\Connector')->findOneBy(['input_token' => $request->headers->get('X-CONNECT-TOKEN')]);
            
            if (empty($connect) || is_null($connect)) throw new \Exception("El X-CONNECT-TOKEN no corresponde a un cliente registrado");
        }else{
            throw new \Exception("Error en la autenticacion, se requiere el parametro X-CONNECT-TOKEN con un token valido");
        }

        return $connect;
    }

}
