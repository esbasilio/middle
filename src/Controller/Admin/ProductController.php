<?php

namespace App\Controller\Admin;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use App\Form\ProductBulkConnectorEditType;
use App\Controller\Admin\AdminController;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use App\Form\ProductBulkEditType;
use App\Service\ConnectorService;
use App\Entity\ProductConnector;
use App\Form\ProductType;
use App\Entity\Product;

/**
 * @IsGranted("ROLE_USER")
 */
class ProductController extends AdminController
{
    private $security;

    public function __construct(Security $security, ConnectorService $connector_service)
    {
        parent::__construct(new Product, ProductType::class);
        $this->security = $security;
        $this->_CONN    = $connector_service;
    }

    public function list(TranslatorInterface $translator, Request $request): Response
    {
        return $this->render("admin/{$this->entity->name}/index.html.twig", [
            'view' => $this->dataView($request->attributes->get('_route')),
            'product_attributes_set' => $this->getDoctrine()->getRepository("App\Entity\ProductAttributeSet")->findAll(),
            'connectors' => $this->getDoctrine()->getRepository("App\Entity\Connector")->findAll()
        ]);
    }

    public function history(TranslatorInterface $translator, Request $request): Response
    {
        return $this->render("admin/{$this->entity->name}/list_history.html.twig", [
            'view' => $this->dataView($request->attributes->get('_route')),
            'product_attributes_set' => $this->getDoctrine()->getRepository("App\Entity\ProductHistory")->findAll(),
            'connectors' => $this->getDoctrine()->getRepository("App\Entity\Connector")->findAll()
        ]);
    }

    public function show(TranslatorInterface $translator, Request $request, $id = null): Response
    {
        $view = $request->attributes->get('view');
        return $this->render("admin/{$this->entity->name}/_show_{$view}.html.twig", [
            'entity' => $this->getDoctrine()->getRepository($this->entity->path)->find($id),
            'view'   => $this->dataView($request->attributes->get('_route'))
        ]);
    }

    public function bulkEdit(Request $request, $ids): Response
    {
        $form = $this->createForm(ProductBulkEditType::class, ['ids' => base64_decode($ids)]);
        $form->get('ids')->setData($ids);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $formData = $form->getData();
            $productIds = explode(',', base64_decode($formData['ids']));

            if (!is_array($productIds) or empty($productIds)) {
                $this->addFlash("error", "No se seleccionaron productos");

                return $this->redirectToRoute('admin_product_list');
            }

            if ($formData['attribute_set'] !== null or $formData['status'] !== '') {
                foreach ($productIds as $productId) {
                    $_product = $this->getDoctrine()->getRepository($this->entity->path)->find($productId);
                    $_connectors = [];
                    $_productConnectors = [];
                    
                    if (!empty($formData['attribute_set'])) {
                        $_product->setAttributeSet($formData['attribute_set']);
                    }

                    if ($formData['status'] !== '') {
                        $_product->setStatus($formData['status']);
                    }
    
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->persist($_product);
                    $entityManager->flush();
                }
            }

            $this->addFlash("success", "Productos editados correctamente!");
            
            return $this->redirectToRoute('admin_product_list');
        }

        return $this->render('admin/product/_form_bulk_edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    public function bulkConnectorEdit(Request $request, $ids, $connector = null): Response
    {
        $connectors = $this->getDoctrine()->getRepository("App\Entity\Connector")->findAll();
        $_current_connector = !empty($connector) 
            ? $this->getDoctrine()->getRepository("App\Entity\Connector")->find($connector) 
            : null;

        if ($request->isMethod('post')) {
            try {
                $submittedToken = $request->request->get('token');

                if (! $this->isCsrfTokenValid('bulk-connector-edit', $submittedToken)) {
                    throw $this->createAccessDeniedException('Invalid form token.');
                }
                
                $productIds = explode(',', base64_decode($ids));
                $connector_options = $request->request->get('connector');
                $data = [];


                # check connector output type
                if ($_current_connector->hasOutputType('product') == false) {
                    throw $this->createAccessDeniedException("Connector {$_current_connector->getCode()} does not have output type product enabled.");
                }

                if (is_array($connector_options) 
                    && isset($connector_options[$_current_connector->getCode()])) {
                    $data['options'] = $connector_options[$_current_connector->getCode()];
                }
                
                foreach ($productIds as $productId) {
                    $_product = $this->getDoctrine()->getRepository("App\Entity\Product")->find($productId);
                    
                    $this->getDoctrine()->getRepository("App\Entity\ProductConnector")->saveConnector(
                        $_current_connector, $_product, $data
                    );
                }
    
                $this->addFlash("success", "Productos asignados correctamente!");
            } catch (\Exception $e) {
                $this->addFlash("error", $e->getMessage());
            }
            
            return $this->redirectToRoute('admin_product_list');
        }

        return $this->render('admin/product/_form_bulk_connector_edit.html.twig', [
            'ids'                   => $ids,
            'connectors'            => $connectors,
            '_current_connector'    => $_current_connector
        ]);
    }

    public function postSave($formSave, $entityClass, Request $request)
    {

        /*$em = $this->getDoctrine()->getManager();
        $childs = $this->getDoctrine()->getManager() // product's childen
                    ->getRepository(Product::class)
                    ->getChildren($entityClass->getId()); usar getVariations
        $mla_category = $entityClass->getAttributeSet(); //  la categoria de mercado libre
        $entity_connector = null;
        foreach($entityClass->getConnectors() as $product){
            //if($product->getConnector()->getApplication()->getStrategy() != '@mercado_libre'){
                $_connector = $product->getConnector();

                //$required_attrs = $em->getRepository('App\Entity\ConnectorAttributeSet') // da error en producto sin categoria
                //                ->findByAttributeSet($_connector, $mla_category, $entityClass->getType());
                //dump('attr_connector:' . $_connector->getId(), $required_attrs);
            //}
        }*/

        if ($formSave == true){
            $request->attributes->set('referer', $request->headers->get('referer'));
        }
    }

    public function sendProduct(Request $request)
    {
        try {
            if (empty($request->attributes->get('id')) || empty($request->attributes->get('sku'))) return;
            $product   = $this->getDoctrine()->getRepository($this->entity->path)->findOneBy(['sku' => $request->attributes->get('sku')]);
            $connector = $this->getDoctrine()->getRepository("App\Entity\Connector")->find($request->attributes->get('id'));
            $this->_CONN->pushProduct($connector,$product);
            $this->addFlash("success", "Producto Sincronizado");
        } catch (\Throwable $th) {
            $this->addFlash("error", $th->getMessage());
        }        
        return $this->redirectToRoute('admin_product_connectors-show',['id' => $product->getId()]);
    }

    public function productStockMiddleware(ConnectorService $connectorService)
    {

        $products = $this->getDoctrine()->getRepository('App\Entity\Product')
                         ->getSingleProducts();
        $list = [];

        if(!empty($products)){

            foreach($products as $prod){

                $list[] = [$prod['sku'], $prod['name'], (int)$prod['stock']];
            }

        }else{
            $list[] = ['Sin registros'];
        }

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('User List');
        $sheet->getCell('A1')->setValue('SKU');
        $sheet->getCell('B1')->setValue('NOMBRE');
        $sheet->getCell('C1')->setValue('STOCK MDD');
        //$sheet->getCell('D1')->setValue('STOCK MGT');

        $sheet->fromArray($list, null, 'A2', true);
        $writer = new Csv($spreadsheet);
        $response =  new StreamedResponse(
            function () use ($writer) {
                $writer->save('php://output');
            }
        );

        $response->headers->set('Content-Type', 'application/vnd.ms-excel');
        $response->headers->set('Content-Disposition', 'attachment;filename="Stock.csv"');
        $response->headers->set('Cache-Control','max-age=0');
        $response->send();
        return $response;
    }

}