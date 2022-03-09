<?php

namespace App\Controller\Admin;

use App\Entity\ConnectorAttribute;
use App\Entity\Connector;
use App\Entity\ProductAttributeSet;
use App\Form\ConnectorAttributeType;
use App\Repository\ConnectorAttributeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Controller\Admin\AdminController;
use App\Service\ConnectorService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @IsGranted("ROLE_USER")
 */
class ConnectorAttributeController extends AdminController
{
    public function __construct(ConnectorService $connectorService)
    {
        $this->_conn = $connectorService;
        parent::__construct(new ConnectorAttribute, ConnectorAttributeType::class);
    }

    public function list(TranslatorInterface $translator, Request $request): Response
    {
        return $this->render("admin/{$this->entity->name}/index.html.twig", [
            'view' => $this->dataView($request->attributes->get('_route')),
            'product_attributes_set' => $this->getDoctrine()->getRepository(ProductAttributeSet::class)->findAll(),
            'connectors' => $this->getDoctrine()->getRepository(Connector::class)->findAll()
        ]);
    }

    public function syncValue($con_attr_id)
    {
        $con_attr = $this->getDoctrine()->getRepository(ConnectorAttribute::class)->findOneBy(["id" => $con_attr_id]);
        switch ($con_attr->getAttribute()->getStrategy()) {
            case 'category':
                // $datas = $this->_conn->_mercado_libre->categories($con_attr->getConnector());
                $datas = $this->_conn->_mercado_libre->subCategories($con_attr->getConnector(), "MLA1430");
                // foreach ($datas as $data) {
                // }
                break;
            case 'site':
                // $magento->multiSites($con_attr);
                break;
            default:
                // $magento->attributes($con_attr);
                break;
        }
        
        $con_attr->setAttributeValues($datas);
        $this->getDoctrine()->getManager()->persist($con_attr);
        $this->getDoctrine()->getManager()->flush();

        $this->addFlash("success", "Sincronización exítosa");
        return $this->redirectToRoute('admin_connector_edit',['application'=>$con_attr->getConnector()->getApplication()->getStrategy() ,'id' => $con_attr->getConnector()->getId()]);
    }

    public function preSave($target, Request $request)
    {
        $connector_id = $request->get('connector_id');
        
        if (!empty($connector_id)) {
            $connector = $this->getDoctrine()->getRepository('App\Entity\Connector')
                ->findOneBy(['id' => $connector_id]);
    
            $target->setConnector($connector);
        }

        return $target;
    }

    public function postSave($formSave, $entityClass, Request $request)
    {
        $connector_id = $request->get('connector_id');
        
        if ($formSave == true && !empty($connector_id)) {
            $url = $this->generateUrl('admin_connector_edit', ['application' => $entityClass->getConnector()->getApplication()->getStrategy(), 'id' => $entityClass->getConnector()->getId()]);
            $request->attributes->set('referer', $url);
        }
    }
}