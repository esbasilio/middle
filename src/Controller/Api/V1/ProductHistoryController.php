<?php

namespace App\Controller\Api\V1;

use App\Controller\Api\ApiController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\ProductHistory;

class ProductHistoryController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
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

        $i = 0;
        if (!empty($columns)) {
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
            }
        }
        
        $query = $this->getDoctrine()->getRepository(ProductHistory::class)->findByPage($page_current, $length, $search_data, $colum_order);
        $response_query = $query['results'];
        $pages_totals   = ceil($response_query->count()/$length);
        
        return new JsonResponse((object)[
            "pageCurrent"     => $page_current,
            "pagesTotals"     => $pages_totals,
            "rowLength"       => $length,
            "search"          => $search,
            "recordsTotal"    => $response_query->count(),
            "recordsFiltered" => $response_query->count(),
            'data'            => $response_query->getIterator()->getArrayCopy()
        ], Response::HTTP_OK);
    }
}
