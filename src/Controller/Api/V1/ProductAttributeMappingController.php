<?php

namespace App\Controller\Api\V1;

use App\Controller\Api\ApiController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class ProductAttributeMappingController extends ApiController
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
        $query        = $this->getDoctrine()->getRepository("App\Entity\ProductAttributeMapping")->findByPage($page_current, $length, $search, $colum_order);
        // format
        $response_query = $query['results'];
        $pages_totals   = ceil($response_query->count()/$length);

        $response = $response_query->getIterator()->getArrayCopy();
        foreach ($response as $key => $mm) {
            $mapping_value = $this->getDoctrine()->getRepository("App\Entity\ProductAttributeMappingValue")->findBy(["attribute_mapping" => $mm["id"]]);
            foreach ($mapping_value as $mv) {
                $response[$key][$mv->getConnector()->getApplication()->getStrategy()] = $mv->getName(); 
            }
        }

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

    public function list_product(Request $request): Response
    {
        $page_current = ($request->get('start')) ? $request->get('start') : 0 ;
        $length       = ($request->get('length')) ? $request->get('length') : 10 ;
        $search       = $request->get('search') ? $request->get('search')['value']: null;
        $columns       = $request->get('columns') ? $request->get('columns'): null;
        $order       = $request->get('order') ? $request->get('order'): null;
        $product    = $request->query->get('product');
        $colum_order = is_null($columns) ? null : ["name" => $columns[$order[0]['column']]['name'], "type" => $order[0]['dir']];
        $product        = $this->getDoctrine()->getRepository("App\Entity\Product")->findOneBy(["id" => $product]);

        $response = [];
        $addAttribute = function($prod, $attr){
            $response = [];
            if (!is_null($attr->getAttributeMapping()) ) {
                // dump($attr->getAttributeMapping()->getMappingValues()->toArray());
                foreach ($attr->getAttributeMapping()->getMappingValues() as $a) {
                    $response[$a->getConnector()->getCode()] = $a->getName(); 
                }
            }
            
            return [
                "product" => [
                    "id"  => $prod->getId(),
                    "sku" => $prod->getSku(),
                ],
                "attribute" => [
                    "id"        => $attr->getId(),
                    "code"      => $attr->getAttribute()->getCode(),
                    "reference" => $attr->getMappingValues(),
                ],
                "mapping"   => is_null($attr->getAttributeMapping()) ? "no mapping": [
                    "name"   => $attr->getAttributeMapping()->getName(),
                    "values" => $response,
                ]
            ];
        };
        foreach ($product->getAttributes() as $attribte) {
            $response[] = $addAttribute($product, $attribte);
        }
        foreach ($product->getVariations() as $variation) {
            foreach ($variation->getAttributes() as $attribte) {
                $response[] = $addAttribute($variation, $attribte);
            }
        }
        // dd($response);
        $pages_totals   = ceil(count($response)/$length);

        return new JsonResponse((object)[
            "pageCurrent"     => $page_current,
            "pagesTotals"     => $pages_totals,
            "rowLength"       => $length,
            "search"          => $search,
            "recordsTotal"    => count($response),
            "recordsFiltered" => count($response),
            'data'            => $response
        ], Response::HTTP_OK);
    }
}