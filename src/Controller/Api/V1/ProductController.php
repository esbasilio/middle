<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-11-12 22:19:45
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-24 21:29:38
 */
namespace App\Controller\Api\V1;

use App\Service\CoreService;
use App\Service\ProductService;
use App\Service\ConnectorService;
use App\Controller\Api\ApiController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class ProductController extends ApiController
{
    public function __construct(CoreService $core, ConnectorService $_CONN)
    {
        $this->core  = $core;
        $this->_CONN = $_CONN;
    }

    public function list(Request $request): Response
    {
        $page_current = ($request->get('start')) ? $request->get('start') : 0 ;
        $length       = ($request->get('length')) ? $request->get('length') : 10 ;
        $search       = $request->get('search') ? $request->get('search')['value']: '';
        $columns      = $request->get('columns') ? $request->get('columns'): null;
        $order        = $request->get('order') ? $request->get('order'): null;
        $colum_order  = is_null($columns) ? null : ["name" => $columns[$order[0]['column']]['name'], "type" => $order[0]['dir']];
        $type         = $request->get('type') ? $request->get('type'): null;
        $search_data  = [];
        $serach_by_sku = false;
        if (!empty($columns)) {
            $i = 0;
            foreach ($columns as $column) {
                if ((bool) $column['searchable'] !== true)
                    continue;
                
                $search_value = (isset($column['search']['value']) && $column['search']['value'] != '')
                    ? $column['search']['value']
                    : $search;
    
                if ($search_value == '')
                    continue;
    
                $condition_type = 'like';
    
                if ($search_value === 'isnull') {
                    $condition_type = 'isnull';
                } elseif (is_numeric($search_value)) {
                    $condition_type = 'eq';
                }
                
                $search_data[0]['filter_groups'][$i++]['filters'][] = [
                    "field" => $column['name'],
                    "value" => $search_value,
                    "condition_type" => $condition_type
                ];
                if($column['name']=='p.sku'){
                    $serach_by_sku = true;
                }
            }
        }
        
        switch ($type) {
            case 'no mapping':
                $query = $this->getDoctrine()->getRepository("App\Entity\Product")->findByNoMapping($page_current, $length, $search_data, $colum_order);
                break;            
            default:
                $query = $this->getDoctrine()->getRepository("App\Entity\Product")->findByPage($page_current, $length, $search_data, $colum_order, $serach_by_sku);
                break;
        }
        // format
        $response_query = $query['results'];
        $pages_totals   = ceil($response_query->count()/$length);
        $data           = $response_query->getIterator()->getArrayCopy();

        // fix datatable selected
        foreach ($data as $i => $row) {
            $data[$i]['DT_RowId'] = $row['id'];
        }

        return new JsonResponse((object)[
            "pageCurrent"     => $page_current,
            "pagesTotals"     => $pages_totals,
            "rowLength"       => $length,
            "search"          => $search,
            "recordsTotal"    => $response_query->count(),
            "recordsFiltered" => $response_query->count(),
            'data'            => $data
        ], Response::HTTP_OK);
    }
    
    public function saveCollection(ProductService $ps, Request $request)
    {
        try {
            // Verificacion del token
            $connector = $this->connectToken($request);
        } catch (\Throwable $th) {
            return new JsonResponse((object)["message"=>$th->getMessage()], Response::HTTP_NOT_FOUND);
        }

        $prods_req  = json_decode($request->getContent(), true);
        if (!is_array($prods_req)) return new JsonResponse((object)["message"=>"Se esperaba una collection de datos"], Response::HTTP_NOT_FOUND);
        if (empty($prods_req)) return new JsonResponse((object)["message"=>"Se esperaba un JSON"], Response::HTTP_NOT_FOUND);

        $date_current = new \DateTime("NOW");
        $response = [];
        $t = $c = $u = $f = 0;
        foreach ($prods_req as $prod_req) {            
            // preparar data del produto y realiza el proceso de guardado
            $resp = $ps->preparedToSave($connector, $prod_req);
            $response['total']   = ++$t;
            $response['created'] = $resp->method == "create" ? ++$c: $c;
            $response['updated'] = $resp->method == "update" ? ++$u: $u;
            $response['failed']  = $resp->method == "failed" ? ++$f : $f;
            if (isset($resp->warning)) {
                $response['warning'] = $resp->warning;
            }
            if (isset($resp->error)) {
                $response['errors'] =  $resp->error;
            }
        }
        $connector->logger("info",
            [
                'type'      => 'API',
                "connector" => $connector->getCode(),
                'date'      => $date_current->format('Y-m-d H:i:s'),
                'request'   => json_encode($prods_req),
                'response'  => json_encode($response)
            ]
        );
        return new JsonResponse($response, Response::HTTP_OK);
    } 

    public function saveObject(ProductService $ps, Request $request)
    {
        try {
            $connector = $this->connectToken($request);
        } catch (\Throwable $th) {
            return new JsonResponse((object)["message"=>$th->getMessage()], Response::HTTP_NOT_FOUND);
        }
        
        $prod_req  = json_decode($request->getContent(), true);
        if (empty($prod_req)) return new JsonResponse((object)["message"=>"Se esperaba un JSON"], Response::HTTP_NOT_FOUND);
        
        $date_current = new \DateTime("NOW");
        // preparar data del produto y realiza el proceso de guardado
        $response = $ps->preparedToSave($connector, $prod_req);
        $http_code = ($response->method == "failed") ? Response::HTTP_NOT_FOUND : Response::HTTP_OK;
        $this->core->logger("{$connector->getClient()->getStrategy()}_{$connector->getApplication()->getStrategy()}_{$date_current->format('Ymd')}",
            [
                'input'     => 'API',
                "connector" => $connector->getCode(),
                'date'      => $date_current->format('Y-m-d H:i:s'),
                'request'   => json_encode($prod_req),
                'response'  => json_encode($response)
            ],
            "info"
        );
        return new JsonResponse($response, $http_code);
    }
}