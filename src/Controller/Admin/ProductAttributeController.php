<?php

namespace App\Controller\Admin;

use App\Entity\ProductAttribute;
use App\Form\ProductAttributeType;
use App\Controller\Admin\AdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @IsGranted("ROLE_USER")
 */
class ProductAttributeController extends AdminController
{
    public function __construct()
    {
        parent::__construct(new ProductAttribute, ProductAttributeType::class);
        
    }

    public function postSave($formSave, $entityClass, Request $request)
    {
        if ($formSave == true){
            $id = $entityClass->getProduct()->hasParent() ? $entityClass->getProduct()->getParent()->getId() : $entityClass->getProduct()->getId();
            // se comenta linea, error cuando el producto no tiene parent y trata de acceder al getPatenr->getId()
            //$url = $this->generateUrl('admin_product_maping-show', ['id' => $entityClass->getProduct()->getParent()->getId()]);
            $url = $this->generateUrl('admin_product_maping-show', ['id' => $id]);
            $request->attributes->set('referer', $url);
        }
    }

}