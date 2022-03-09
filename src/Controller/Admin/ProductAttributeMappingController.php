<?php

namespace App\Controller\Admin;

use App\Controller\Admin\AdminController;
use App\Entity\ProductAttributeMapping;
use App\Entity\ProductAttributeMappingValue;
use App\Form\ProductAttributeMappingType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Contracts\Translation\TranslatorInterface;
use App\Repository\ProductAttributeMappingRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @IsGranted("ROLE_USER")
 */
class ProductAttributeMappingController extends AdminController
{
    private $security;

    public function __construct(Security $security)
    {
        parent::__construct(new ProductAttributeMapping, ProductAttributeMappingType::class);
        $this->security    = $security;
    }
    
    public function list(TranslatorInterface $translator, Request $request): Response
    {
        $viewDefault = (empty($request->attributes->get('template'))) ? "admin/{$this->entity->name}/index.html.twig" : $request->attributes->get('template') ;
        $user = $this->security->getToken()->getUser();
        foreach ($user->getClients() as $client) {
            foreach ($client->getConnectors() as $connect) {
                $application[$connect->getApplication()->getStrategy()] = $connect->getApplication()->getName();
            }
        }

        return $this->render($viewDefault, [
            // 'response' => $this->getDoctrine()->getRepository($this->entity->path)->findAll(),
            'view'     => $this->dataView($request->attributes->get('_route')),
            'applications' => $application
        ]);
    }
    

    public function preSave($entityClass, Request $request)
    {
        dump($entityClass->getMappingValues()->toArray());
        dump($request->get('product_attribute_mapping'));
        $conns = $this->security->getToken()->getUser()->getClient()->getConnectors();
        dump($conns->toArray());
        foreach ($request->get('product_attribute_mapping') as $key => $value) {
            foreach ($conns as $conn) {
                if ($conn->getApplication()->getStrategy() == $key){
                    if ($test = $entityClass->getMappingValue($conn->getCode())) {
                        $data = explode(" - ",$value);
                        $test->setValue($data[0]);
                        $test->setName($data[1]);
                    }elseif (!empty($value)) {
                        $mv = new ProductAttributeMappingValue;
                        $data = explode(" - ",$value);
                        $mv->setConnector($conn);
                        $mv->setValue($data[0]);
                        $mv->setName($data[1]);
                        $entityClass->addMappingValue($mv);
                    }
                }
            }
        }
        // dd($entityClass->getMappingValues()->toArray());
        if (isset($mapping_value)) {
            $entityClass->setMappingValue($mapping_value);
        }

        return $entityClass;
    }
}