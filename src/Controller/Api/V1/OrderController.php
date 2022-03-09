<?php

namespace App\Controller\Api\V1;

use App\Controller\Api\ApiController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class OrderController extends ApiController
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
        $query        = $this->getDoctrine()->getRepository("App\Entity\Order")->findByPage($page_current, $length, $search, $colum_order);
        // format
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

    public function historyList(Request $request): Response
    {
        $page_current = ($request->get('start')) ? $request->get('start') : 0 ;
        $length       = ($request->get('length')) ? $request->get('length') : 10 ;
        $search       = $request->get('search') ? $request->get('search')['value']: null;
        $columns       = $request->get('columns') ? $request->get('columns'): null;
        $order       = $request->get('order') ? $request->get('order'): null;
        $colum_order = is_null($columns) ? null : ["name" => $columns[$order[0]['column']]['name'], "type" => $order[0]['dir']];
        $query        = $this->getDoctrine()->getRepository("App\Entity\OrderHistory")->findByPage($page_current, $length, $search, $colum_order);
        // format
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
