<?php

namespace App\Controller\Admin;

use App\Entity\ProductConnector;
// use App\Form\ProductSyncType;
use App\Form\ProductConnectorType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Admin\AdminController;
use Symfony\Component\Security\Core\Security;

/**
 * @IsGranted("ROLE_USER")
 */
class ProductConnectorController extends AdminController
{
    public function __construct(Security $security)
    {
        parent::__construct(new ProductConnector, ProductConnectorType::class);
    }

    public function preSave($entityClass, Request $request)
    {
        $product_id = $request->attributes->get('product');
        $request->attributes->set('referer', "/product/show/connectors/{$product_id}");
        $product = $this->getDoctrine()->getRepository('App\Entity\Product')->find($product_id);
        $entityClass->setProduct($product);
        return $entityClass;
    }
}