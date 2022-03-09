<?php

namespace App\Controller\Admin;

use App\Entity\Connector;
use App\Form\ConnectorType;
use App\Form\ConnectorMeliType;
use App\Form\ConnectorDafitiType;
use App\Service\ConnectorService;
use App\Form\ConnectorMagentoType;
use App\Controller\Admin\AdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use Symfony\Component\HttpFoundation\StreamedResponse;

use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;

/**
 * @IsGranted("ROLE_USER")
 */
class ConnectorController extends AdminController
{
    public function __construct(SessionInterface $session, Security $security)
    {
        $this->security = $security;
        $this->session = $session;
        parent::__construct(new Connector, ConnectorType::class);
    }

    public function list(TranslatorInterface $translator, Request $request): Response
    {
        $viewDefault = (empty($request->attributes->get('template'))) ? "admin/{$this->entity->name}/index.html.twig" : $request->attributes->get('template') ;
        $view = $this->dataView($request->attributes->get('_route'));
        
        if ($view == null) {
            return $this->redirectToRoute("admin_home_index");
        }

        return $this->render($viewDefault, [
            'response'     => $this->getDoctrine()->getRepository($this->entity->path)->clientConnector(),
            'view'         => $view,
            'applications' => $this->getDoctrine()->getRepository("App\Entity\Application")->findBy(['is_active'=> true])
        ]);
    }

    public function preForm(TranslatorInterface $translator, Request $request, $id = null)
    {
        switch ($request->attributes->get('application')) {
            case 'dafiti':
                $request->attributes->set('entityType', ConnectorDafitiType::class);
                $request->attributes->set('template', 'admin/connector/form/dafiti.html.twig');
                break;
            case 'magento_23':
                $request->attributes->set('entityType', ConnectorMagentoType::class);
                $request->attributes->set('template', 'admin/connector/form/magento.html.twig');
                break;
            case 'mercado_libre':
                $request->attributes->set('entityType', ConnectorMeliType::class);
                $request->attributes->set('template', 'admin/connector/form/meli.html.twig');
                break;
            default:
                $request->attributes->set('entityType', ConnectorType::class);
                $request->attributes->set('template', 'admin/connector/form.html.twig');
                break;
        }
        return $this->form($translator, $request, $id);
    }

    public function preSave($target, Request $request)
    {
        $application = $this->getDoctrine()->getRepository('App\Entity\Application')
                            ->findOneBy(['strategy' => $request->attributes->get('application')]);
        $target->setApplication($application);
        $target->setEnabledProductSync(false);
        $target->setClient($this->security->getToken()->getUser()->getClient());

        return $target;
    }

    public function postSave($formSave, $entityClass, Request $request)
    {
        if ($formSave == true){
            $url = $this->generateUrl('admin_connector_edit', ['application' => $entityClass->getApplication()->getStrategy(), 'id' => $entityClass->getId()]);
            $request->attributes->set('referer', $url);
        }
    }

    /**
     * [authorization description]
     * @param  Request $request [description]
     * @param  [type]  $id      [description]
     * @return [type]           [description]
     */
    public function meliAuthorization(ConnectorService $conn, Request $request, $connector_id = null): Response
    {
        if(!is_null($connector_id) and is_numeric($connector_id)) {
            $this->session->set('connector', $connector_id);
        }
        $connector_id = $connector_id ?: $this->session->get('connector');
        // consultar data en db
        $connector = $this->getDoctrine()->getRepository(Connector::class)->findOneBy(["id" => $connector_id]);
        // generando url de redirec
        $aut_url     = $this->generateUrl('admin_meli_authorization');
        $scheme      = ($request->server->get('REQUEST_SCHEME')) ? $request->server->get('REQUEST_SCHEME') : 'http';
        $redirec_url = "{$scheme}://{$request->headers->get('host')}{$aut_url}";
        // verificacion si existe el parametro code en url
        if (!empty($request->query->get('code'))) {
            $conn->_mercado_libre->authorize($request->query->get('code'), $redirec_url, $connector);
        }
        // refresacar el token
        if ($connector->getTokenExpired() && !empty($connector->getOutputRefreshToken())) {
            $conn->_mercado_libre->refreshAccessToken($connector);
        }        
        // virificacion si existe un refreshtoken generado 
        if (empty($connector->getOutputRefreshToken()) && !is_null($connector)) {
            $getAuth = $conn->_mercado_libre->getAuthUrl($redirec_url, $connector);
            return $this->redirect($getAuth);
        }
        return $this->redirectToRoute('admin_connector_list');
    }

    public function user(ConnectorService $conn, Request $request, $connector_id = null): Response
    {
        if(!is_null($connector_id) and is_numeric($connector_id)) {
            $this->session->set('connector', $connector_id);
        }
        $connector_id = $connector_id ?: $this->session->get('connector');
        $connector = $this->getDoctrine()->getRepository(Connector::class)->findOneBy(["id" => $connector_id]);
        // dd($connector);

        $conn->_mercado_libre->getUser($connector);
        return $this->redirectToRoute('admin_connector_list');
    }

    public function productStockMeli(ConnectorService $connectorService, int $id)
    {
        $connector = $this->getDoctrine()->getRepository('App\Entity\Connector')->findOneBy([
            "id" => $id, 'is_active' => 1
        ]);

        if ($connector == false) {

        }

        $send_res = $connectorService->sync($connector);
        $list = [];
        if(isset($send_res->total) && $send_res->total > 0){

            foreach($send_res->data as $prod){

                $product = $this->getDoctrine()->getRepository('App\Entity\Product')->findOneBy([
                    "sku" => $prod['sku']
                ]);
    
                $mw_prod_stock = 0;
    
                if(!empty($product)){
                    $mw_prod_stock = (int) $product->getStock();
                }
    
                $list[] = [$prod['title'], $prod['sku'], $prod['stock'], $mw_prod_stock];
    
                if(isset($prod['variations']) && count($prod['variations']) > 0){
    
                    foreach($prod['variations'] as $var){
    
                        $variation = $this->getDoctrine()->getRepository('App\Entity\Product')->findOneBy([
                            "sku" => $var['sku']
                        ]);
                        $mw_var_stock = 0;
                        if(!empty($product)){
                            $mw_var_stock = (int) $variation->getStock();
                        }
    
                        $list[] = ['', $var['sku'], $var['stock'], $mw_var_stock];
                    }
                }
            }

        }else{
            $list[] = ['Sin registros'];
            // logea con anterioridad el error
        }

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('User List');
        $sheet->getCell('A1')->setValue('NOMBRE');
        $sheet->getCell('B1')->setValue('SKU');
        $sheet->getCell('C1')->setValue('STOCK');
        $sheet->getCell('D1')->setValue('MIDDLEWARE STOCK');

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
    }
}