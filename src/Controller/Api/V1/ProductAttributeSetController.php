<?php

namespace App\Controller\Api\V1;

use App\Controller\Api\ApiController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class ProductAttributeSetController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function list(Request $request): Response
    {
        $page_current = ($request->get('start')) ? $request->get('start') : 0 ;
        $length       = ($request->get('length')) ? $request->get('length') : 10 ;
        $search       = $request->get('search') ? $request->get('search')['value']: null;
        $columns       = $request->get('columns') ? $request->get('columns'): null;
        $order       = $request->get('order') ? $request->get('order'): null;
        $colum_order = is_null($columns) ? null : ["name" => $columns[$order[0]['column']]['name'], "type" => $order[0]['dir']];
        $query        = $this->getDoctrine()->getRepository("App\Entity\ProductAttributeSet")->findByPage($page_current, $length, $search, $colum_order);
        // format
        $response_query = $query['results'];
        $pages_totals   = ceil($response_query->count()/$length);

        $response = $response_query->getIterator()->getArrayCopy();
        // foreach ($response as $key => $mm) {
        //     foreach ($mm['mapping_value'] as $mkey => $m) {
        //         $response[$key][$mkey] = $m['name']; 
        //     }
        // }   

        return new JsonResponse((object)[
            "pageCurrent"     => $page_current,
            "pagesTotals"     => $pages_totals,
            "rowLength"       => $length,
            "search"          => $search,
            "recordsTotal"    => $response_query->count(),
            "recordsFiltered" => $response_query->count(),
            'data'            => $response
        ], Response::HTTP_OK);
    }
}
