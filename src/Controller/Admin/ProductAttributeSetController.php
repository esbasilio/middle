<?php

namespace App\Controller\Admin;

use App\Service\ConnectorService;
use App\Entity\ProductAttributeSet;
use App\Form\ProductAttributeSetType;
use App\Controller\Admin\AdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @IsGranted("ROLE_USER")
 */
class ProductAttributeSetController extends AdminController
{
    public function __construct(Security $security, ConnectorService $_CONN)
    {
        $this->security = $security;
        $this->_CONN = $_CONN;
        parent::__construct(new ProductAttributeSet, ProductAttributeSetType::class);
    }

    public function preSave($entityClass, Request $request)
    {
        $entityClass->setClient($this->security->getToken()->getUser()->getClient());
        $conns = $this->security->getToken()->getUser()->getClient()->getConnectors();
        $data = [];
        foreach ($request->get('product_attribute_set') as $key => $value) {
            foreach ($conns as $conn) {
                if ($conn->getReferenceName() == $key){
                    $data[$conn->getReferenceName()] = $value;
                }
            }
        }

        $entityClass->setReferenceId($data);

        return $entityClass;
    }


    public function postSave($formSave, $entityClass, Request $request)
    {
        if ($formSave == false)
            return $entityClass;
        
        if (empty($request->request->get('product_attribute_set')['mercado_libre']))
            return $entityClass;

        $conns = $this->security->getToken()->getUser()->getClient()->getConnectors();
        foreach ($entityClass->getReferenceId() as $key => $value) {
            foreach ($conns as $conn) {
                if ($conn->getReferenceName() == $key){
                    if ($conn->getApplication()->getStrategy() == "mercado_libre") {
                        $this->_CONN->_mercado_libre->getAttributesByCategory($conn,$entityClass);
                    }
                }
            }
        }
        return $entityClass;
    }
}