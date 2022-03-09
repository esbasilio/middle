<?php

/**
 * @Author: Beto
 * @Date:   2020-08-18 23:51:57
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-02 15:43:54
 */
namespace App\Service\Connector;

use DateTime;
use App\Entity\Order;
use App\Entity\Product;
use App\Entity\Connector;
use App\Entity\OrderItem;
use App\Service\CoreService;
use App\Entity\ConnectorAttribute;
use App\Service\ProductService;
use Doctrine\ORM\EntityManagerInterface;
use stdClass;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class Magento extends CoreService
{
    /**
     * App\Service\ProductService
     */
    private $_product;

    /**
     * App\Service\Connector\MagentoMapping
     */
    private $_mapping;
    
    public function __construct(
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        FormFactoryInterface $formFactory,
        HttpClientInterface $client, 
        SessionInterface $session,
        ProductService  $productService,
        MagentoMapping $mapping
    )
    {
        parent::__construct($em, $validator, $formFactory, $client, $session);
        $this->_mapping  = $mapping;
        $this->_product = $productService;
    }

    public function pushProduct(Connector $connector, Product $product)
    {   
        if (empty($product) || empty($connector))
            return false;

        // push variations
        $variations = $product->getVariations();
        if (!empty($variations)) {
            foreach($variations as $variation) {
                $this->_pushProduct($connector, $variation);
            }
        }

        // push product
        $this->_pushProduct($connector, $product);
    }

    /**
     * @deprecated
     */
    public function pullProduct(Connector $connector, DateTime $date)
    {
        $products = $this->get($connector, "{$connector->getOutputUrl()}/rest/V1/watts25/middleware/products?updated_at={$date->format('Y-m-d H:i:s')}");
        $products = json_decode($products->getContent(false), true);

        if (empty($products))
            return "No hay datos para procesar";
        
        if (!is_array($products))
            return "Se esperaba una collection de datos";

        // significa que viene con un error
        if (isset($products['message']))
            return $products['message'];

        $date_current = new \DateTime("NOW");
        $response = [];
        $t = $c = $u = $f = 0;
        foreach ($products as $product) {
            $entity = $this->em->getRepository('App\Entity\Product')->findOneBy(['sku' => $product['sku'], 'client' => $connector->getClient()->getId()]);

            # Continue if product doesn't exists
            if (! $entity) {
                $connector->logger("info", [
                    'type'      => 'product-input',
                    "connector" => $connector->getCode(),
                    'date'      => $date_current->format('Y-m-d H:i:s'),
                    'request'   => json_encode($product),
                    'response'  => "Product Sku {$product['sku']} doesn't exists for cliente {$connector->getClient()->getId()}"
                ]);
                
                continue;
            }
            
            $resp = $this->_product->preparedToSave($connector, $product);
            
            $response['total']   = ++$t;
            $response['created'] = $resp->method == "create" ? ++$c: $c;
            $response['updated'] = $resp->method == "update" ? ++$u : $u;
            $response['failed']  = $resp->method == "failed" ? ++$f : $f;
            if (isset($resp->warning)) $response['warning']  = $resp->warning;
            if (isset($resp->error)) $response['errors']  =  $resp->error;
        }

        $connector->logger("info",
            [
                'type'      => 'product-input',
                "connector" => $connector->getCode(),
                'date'      => $date_current->format('Y-m-d H:i:s'),
                'request'   => json_encode($products),
                'response'  => json_encode($response)
            ]
        );

        return (object) $response;
    }

    public function getStock(Connector $connector, $sku)
    {

        $salable = $this->get(
                $connector,
                "{$connector->getOutputUrl()}/rest/V1/inventory/get-product-salable-quantity/{$sku}/1"
        );

        $salable = json_decode($salable->getContent(false));

        return ['type' => gettype($salable), 'value' => $salable];
    }

    public function pullOrder(Connector $connector, DateTime $date)
    {
        $page_current = 0;
        $row = 50;
        $count_orders = 0;        
        
        do {
            $page_current++;
            
            $url = "{$connector->getOutputUrl()}/rest/V1/watts25/middleware/orders?updated_at={$date->format('Y-m-d H:i:s')}";
            $request = $this->get($connector, $url . "&row={$row}&iteration={$page_current}");
            $response = json_decode($request->getContent(false));

            /**
             * DELETE: compatibilidad json viejo
             */
            if (is_array($response)) {
                $_old_response = $response;
                $response = new stdClass();

                $response->items = $_old_response;
                $response->page_last = $page_current;
            }
            
            $page_last = $response->page_last;
            
            if (isset($response->items) && count($response->items)) {
                $orders = $response->items;
                $count_orders += count($response->items);
                
                foreach ($orders as $order_org) {
                    $order = $this->em->getRepository('App\Entity\Order')->findOneBy(['reference_id' => $order_org->order_id]);
                    $_is_new = false;
                    
                    if(empty($order)) {
                        $order = new Order;
                        $_is_new = true;
                    }
    
                    $order->setReferenceId($order_org->order_id);
                    $order->setInvoiceId($order_org->invoice_id);
                    $order->setGrandTotal($order_org->grand_total);
                    $order->setStore($order_org->store);
                    $order->setStoreCode($order_org->store_code);
                    $order->setConnector($connector);
                    $order->setClient($connector->getClient());
                    $order->setStatus($order_org->order_status);
                    $order->setIssuedAt(new \DateTime($order_org->created_at));
                    $order->setCustomerId($order_org->customer->id);
                    $order->setCustomerName($order_org->customer->name);
                    $order->setCustomerEmail($order_org->customer->email);
                    $order->setCustomerPhone($order_org->customer->phone);
                    $order->setCustomerDni($order_org->customer->dni);
                    $order->setCustomerCountry($order_org->customer->country);
                    $order->setCustomerRegion($order_org->customer->region);
                    $order->setCustomerCity($order_org->customer->city);
                    $order->setCustomerPostcode($order_org->customer->postcode);
                    $order->setCustomerStreet($order_org->customer->street);
                    $order->setCustomerNumber($order_org->customer->number);
                    $order->setCustomerFloor($order_org->customer->floor);
                    $order->setCustomerApartment($order_org->customer->apartment);
                    $order->setCustomerReferences($order_org->customer->references);
                    $order->setShippingDescription($order_org->shipping->description);
                    $order->setShippingMethod($order_org->shipping->method);
                    $order->setShippingPrice($order_org->shipping->price);
    
                    if (isset($order_org->payment->additional_information->paymentResponse->id)) {
                        $order->setPaymentId($order_org->payment->additional_information->paymentResponse->id);
                    }
                    
                    try {
                        $this->em->persist($order);
                        $this->em->flush();
                    } catch (\Throwable $th) {
                        $connector->logger("err",["message" => $th->getMessage(), "code" => $th->getCode(), "file" => $th->getFile(), "line" => $th->getLine()]);
                    }
                    
                    foreach ($order_org->items as $item_org) {
                        $item = $this->em->getRepository('App\Entity\OrderItem')->findOneBy(['sku' => $item_org->sku, 'order' => $order->getId()]);                    
                        
                        if(empty($item)) $item = new OrderItem;
                        
                        try {
                            $item->setSku($item_org->sku);
                            $item->setOrder($order);
                            $item->setName($item_org->name);
                            $item->setQty($item_org->qty);
                            $item->setPrice($item_org->price);
                            $item->setDiscountPercent($item_org->discount_percent);
                            // $item->setDiscountAmount($item_org->discount_amount);
                            $this->em->persist($item);
                            $this->em->flush();
    
                            /* los nuevos campos que llegan
                            dd(['state:' . $order_org->order_state, 
                            'qty:' . $item_org->qty, 
                            'qty_canceled:' . $item_org->qty_canceled, // orden cancelada
                            'qty_invoiced:' . $item_org->qty_invoiced,
                            'qty_refunded:' . $item_org->qty_refunded,
                            'qty_shipped:' . $item_org->qty_shipped,
                            'qty_backordered:' . $item_org->qty_backordered
                            ]);*/
    
                            # Excecute only if order is new
                            if ($_is_new && in_array($order_org->order_state, ['new', 'processing', 'complete']) ) {
                                $this->_product->stockDiscount($connector, $item_org->sku, $item_org->qty);
                            }else{
                                switch ($order_org->order_state) {
                                    case 'canceled':
                                        $this->_product->stockAdd($connector, $item_org->sku, $item_org->qty_canceled);
                                        break;
                                }
                            }
                        } catch (\Throwable $th) {
                            $connector->logger("err",["message" => $th->getMessage(), "code" => $th->getCode(), "file" => $th->getFile(), "line" => $th->getLine()]);
                            // throw new \Exception($th->getMessage());
                        }
                    }

                    $this->em->getRepository('App\Entity\OrderHistory')->saveHistory($order, $connector, "input", [
                        'message' => json_encode($order_org), 'status' => 'success'
                    ]);
                }
            }
        } while ($page_current < $page_last);

        return $count_orders;
    }

    public function sendTangoCustomerCode(Order $order, string $tangoCustomerCode)
    {
        $connector = $order->getConnector();
        $request = $this->post(
            $connector, 
            "{$connector->getOutputUrl()}/rest/V1/watts25/middleware/orders/{$order->getReferenceId()}/tangocustomercode",
            [
                'tangocustomercode' => $tangoCustomerCode
            ]
        );
        
        return $request->getContent(false);
    }

    public function sites(ConnectorAttribute $client_attr)
    {
        $connector = $client_attr->getConnector();
        // $attribute = $this->em->getRepository('App\Entity\Attribute')->findOneBy(['code' => 'site']);
        $sites     = $this->get($connector,"{$connector->getOutputUrl()}/rest/all/V1/store/websites");
        $sites = json_decode($sites->getContent(false));
        if (count($sites) > 0) {            
            foreach ($sites as $key => $site) {
                $data[$key] = ["value" => $site->id, "name" => $site->name];
            }
            // $client_attr->setAttributeValues($data);
            // $this->em->persist($client_attr);
            // $this->em->flush();
        }        
        
        return $sites;
    }

    public function attributes(ConnectorAttribute $conn_attr)
    {
        $connector = $conn_attr->getConnector();
        $parameters = "searchCriteria[filterGroups][0][filters][0][field]=attribute_id&searchCriteria[filterGroups][0][filters][0][value]={$conn_attr->getCode()}&fields=items[attribute_code,options]";
        $attributes = $this->get($connector,"{$connector->getOutputUrl()}/rest/V1/products/attributes?{$parameters}");
        $attributes = json_decode($attributes->getContent(false));
        $response = $attributes->items[0]->options;
        if (!empty($response) && count($response) > 0){       
            foreach ($response as $key => $attr_value) {
                $data[$key] = ["value" => $attr_value->value, "name" => $attr_value->label];
            }
        }        
        
        return $data;
    }

    public function categories($client_attr)
    {
        $connector = $client_attr->getConnector();
        $categories    = $this->get($connector,"{$connector->getOutputUrl()}/rest/all/V1/categories/");
        $categories = json_decode($categories->getContent(false));
        if (count($categories->children_data) > 0) {
            $result = $this->recursiveCaregory($categories->name,$categories->children_data);
        }
        return $result;
    }

    public function recursiveCaregory(string $parent ,array $children)
    {
        $result = [];
        foreach ($children as $child) {
            $name = "{$parent}->{$child->name}";
            $result[] = ['name' => $name, 'value' => $child->id];
            if (is_array($child->children_data) && $child->children_data > 0) {
                $res_child = $this->recursiveCaregory($name, $child->children_data);
                if (count($res_child) > 0) {
                    foreach ($res_child as $chil) {
                        $result[] = $chil;
                    }
                }
            }
        }
        return $result;
    }

    private function saveHistory(Product $prod, Connector $conn, $id = null, $code, $message)
    {
        $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($prod, $conn, "output", [
            'reference_id' => $id,
            'status'       => $code,
            'message'      => $message
        ]);
    }

    private function _pushProduct(Connector $connector, Product $product)
    {   
        $date = new \DateTime(date('Y-m-d H:i:s'));
        $history = $this->em->getRepository('App\Entity\ProductHistory')->findByProduct($connector, $product);

        try {
            // If the product has already been sent, update, but create it
            if (empty($history) || (isset($history) && $history->getReferenceId() == null)) {
                /**
                 * Se comentó porque Tango a veces nos manda marca y género vacío
                 * y genera error al querer enviar a Magento
                 * Por otro lado, la validación está obsoleta de la forma en que está
                 */
                // $validate = $this->_mapping->dataValidation($product);
    
                // if ($validate->valid == false) 
                //     throw new \Exception(json_encode($validate->response)); 
                
                $request = ($product->hasParent()) 
                    ? $this->_mapping->createProductSimple($connector,$product) 
                    : $this->_mapping->createProductConfigurable($connector,$product);
                $response = $this->post($connector, "{$connector->getOutputUrl()}/rest/V1/products", $request);
            } else {
                $request = ($product->hasParent()) 
                    ? $this->_mapping->updateProductSimple($connector,$product) 
                    : $this->_mapping->updateProductConfigurable($connector,$product);
                $response = $this->put($connector, "{$connector->getOutputUrl()}/rest/V1/products/{$product->getSku()}", $request);
            }

            $this->saveHistory($product, $connector, $response->toArray()['id'], $response->getStatusCode(), $response->getContent(false));

            $connector->logger("info",
            [
                'type'      => 'product-output',
                "connector" => $connector->getCode(),
                'date'      => $date->format('Y-m-d H:i:s'),
                'request'   => json_encode($request),
                'response'  => json_encode($response->toArray())
            ]);

            return $response;
        } catch (\Throwable $th) {
            $message = [
                "message" => $th->getMessage(), 
                "code" => $th->getCode(), 
                "file" => $th->getFile(), 
                "line" => $th->getLine(),
                "Product" => $product->getSku(),
                "Request" => isset($request) ? json_encode($request) : '',
            ];
            $connector->logger("err", $message);
            $this->saveHistory($product, $connector, null, 404, $message);
            
            throw new \Exception($th->getMessage());
        }
    }
}