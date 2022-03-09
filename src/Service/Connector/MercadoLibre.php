<?php

/**
 * @Author: Beto
 * @Date:   2020-08-18 23:51:57
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-11 14:49:41
 */
namespace App\Service\Connector;

use DateTime;
use Exception;
use SoapClient;
use App\Entity\Order;
use App\Entity\Product;
use App\Entity\Attribute;
use App\Entity\Connector;
use App\Entity\OrderItem;
use App\Mapping\MeliMapping;
use App\Service\CoreService;
use App\Entity\ProductHistory;
use App\Entity\ProductConnector;
use App\Service\ProductService;
use App\Entity\ConnectorOption;
use App\Service\ConnectorService;
use App\Entity\ConnectorAttribute;
use App\Entity\ConnectorAttributeSet;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\HttpExceptionInterface;

class MercadoLibre extends CoreService
{
    protected static $API_ROOT_URL = "https://api.mercadolibre.com";
    protected static $OAUTH_URL    = "/oauth/token";

    protected $redirect_uri;
    protected $access_token;
    protected $refresh_token;
    protected $client_secret;
    protected $client_id;

    private $_mapping;
    private $_product;

    public function __construct(
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        FormFactoryInterface $formFactory,
        HttpClientInterface $client, 
        SessionInterface $session,
        ProductService  $productService,
        MercadoLibreMapping $mapping
    )
    {
        parent::__construct($em, $validator, $formFactory, $client, $session);
        $this->client_id     = $_ENV['ML_ID'];
        $this->client_secret = $_ENV['ML_SECRET'];
        $this->_mapping  = $mapping;
        $this->_product = $productService;
    }

    public function pullProduct(Connector $connector)
    {
        # refresh token it's expired
        if ($connector->getTokenExpired())
            $this->refreshAccessToken($connector);
        
        $response = $this->get(
                $connector, 
                self::$API_ROOT_URL . 
                "/users/" . $connector->getOutputUserId() . "/items/search?status=active"
        );
        $data = $response->toArray(); // $data->results lista de ids de productos
        $total = 0;
        $errors = [];
        $success = [];

        if (!empty($data) && isset($data['results'])) {
            $total = count($data['results']);
            
            foreach($data['results'] as $item) {
                $_variations = [];
                
                $prod_data_ml = $this->get(
                    $connector, 
                    self::$API_ROOT_URL . '/items/' . $item
                );

                $prod_data = $prod_data_ml->toArray(); //$prod_data = json_decode($prod_data_ml, false);

                # if seller_custom_field is empty, continue
                if (empty($prod_data['seller_custom_field']))
                    continue;

                # find product by seller_custom_field
                $product = $this->em->getRepository('App\Entity\Product')->findOneBy([
                    'sku' => $prod_data['seller_custom_field']
                ]);

                # if product doesn't exists, continue
                if (empty($product)) {
                    continue;
                }

                try {
                    # save producto connector
                    $this->em->getRepository('App\Entity\ProductConnector')->saveConnector($connector, $product, [
                        'stock' => $prod_data['available_quantity'],
                        'price' => $prod_data['price'],
                        'status' => ($prod_data['status'] == 'active') ? 1 : null
                    ]);

                    # save product history
                    $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($product, $connector, "input", [
                        'reference_id' => $prod_data['id'],
                        'message'      => json_encode($prod_data),
                        'status'       => 'success',
                        'type'         => 'input',
                        'url'          => $prod_data['permalink']
                    ]);

                    # process variations
                    if (!empty($prod_data['variations']) && \is_array($prod_data['variations'])) {
                        foreach ($prod_data['variations'] as $variation_data) {
                            # find variation by seller_custom_field and parent_id
                            $variation = $this->em->getRepository('App\Entity\Product')->findOneBy([
                                'sku' => $variation_data['seller_custom_field'],
                                'parent' => $product
                            ]);

                            # if variation doesn't exists, continue
                            if (empty($variation)) {
                                continue;
                            }

                            $_variations[] = [
                                'sku' => $variation->getSku(),
                                'reference_id'  => $variation_data['id']
                            ];
                            
                            $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($variation, $connector, "input", [
                                'reference_id' => $variation_data['id'],
                                'message'      => json_encode($variation_data),
                                'status'       => 'success',
                                'url'          => $prod_data['permalink']
                            ]);
                        }
                    }

                    $success[] = [
                        'sku' => $product->getSku(),
                        'reference_id' => $prod_data['id'],
                        'variations' => $_variations
                    ];
                } catch (Exception $th) {
                    $connector->logger("err", [
                        "message" => $th->getMessage(), 
                        "file" =>$th->getFile(), 
                        "line" => $th->getLine()
                    ]);

                    $errors[] = [
                        'sku' => $product->getSku(),
                        'message' => $th->getMessage()
                    ];
                }
            }

            $return = [
                'total' => $total
            ];

            if (count($success)) {
                $return['success'] = $success;
            }

            if (count($errors)) {
                $return['errors'] = $errors;
            }

            return (Object) $return;
        }

    }

    public function runStock(Connector $connector)
    {
        try{
            $this->refreshAccessToken($connector);

            if ($connector->getTokenExpired()) $this->refreshAccessToken($connector);

            $response = $this->get(
                    $connector, 
                    self::$API_ROOT_URL . 
                    "/users/" . $connector->getOutputUserId() . "/items/search?status=active"
            );
            $data = $response->toArray();
            $total = 0;
            $mla_list = [];
            if(!empty($data) && isset($data['results'])){
                $total = count($data['results']);
                foreach($data['results'] as $item){

                    $prod_data_ml = $this->get(
                        $connector, 
                        self::$API_ROOT_URL . '/items/' . $item
                    );

                    $prod_data = $prod_data_ml->toArray();
                    if(isset($prod_data['variations']) && count($prod_data['variations']) > 0){
                        $_variations = [];
                        foreach($prod_data['variations'] as $var){
                            $_variations[] = [
                                'sku'   => $var['seller_custom_field'],
                                'stock' => $var['available_quantity']
                            ];
                        }
                        $mla_list[] = [
                            'sku'        => $prod_data['seller_custom_field'], 
                            'title'      => $prod_data['title'],
                            'stock'      => $prod_data['available_quantity'],
                            'variations' => $_variations
                        ];
                    }else{
                        $mla_list[] = [
                            'sku'   => $prod_data['seller_custom_field'],
                            'title' => $prod_data['title'],
                            'stock' => $prod_data['available_quantity']
                        ];
                    }
                }

                return (Object) ['total' => $total, 'data' => $mla_list];
            }

        } catch (Exception $th) {

            $connector->logger("err",[
                "message" => $th->getMessage(), 
                "file" =>$th->getFile(), 
                "line" => $th->getLine()]
            );
            return $th->getMessage();
        }
    }


    public function pushProduct(Connector $connector, Product $entity)
    {
        # ubica el connector requerido para el envio
		if (!$entity->hasConnector($connector)) {
			throw new \Exception("{$entity->getSku()} No esta asociado al connector {$connector->getCode()}");
		}

        if ($connector->getTokenExpired()) 
            $this->refreshAccessToken($connector);
        
        $validate = $this->_mapping->dataValidation($entity); # validacion si el producto es apto para ser enviado
		
        if ($validate->valid == false) {
            $connector->logger("err",["message" => json_encode($validate->response)]);
            throw new \Exception(json_encode($validate->response));
        }
        
        try {
            $history = $this->em->getRepository('App\Entity\ProductHistory')->findByProduct($connector, $entity);

            if (empty($history) || (isset($history) && $history->getReferenceId() == null)) {
                $prod = $this->_mapping->productCreate($connector, $entity);
    
                $res_product = $this->post($connector, self::$API_ROOT_URL."/items", $prod);
                
                // publish product description
                $product_description = $this->_mapping->description($connector, $entity);

                if (!empty($product_description)) {
                    $this->post($connector, self::$API_ROOT_URL."/items/{$res_product->toArray()['id']}/description?api_version=2", $product_description);
                }
            } else {
                $prod = $this->_mapping->productUpdate($connector, $entity);
                
                $res_product = $this->put($connector, self::$API_ROOT_URL."/items/{$history->getReferenceId()}", $prod);
            }
    
            $history = $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($entity, $connector, "output", [
                'reference_id' => $res_product->toArray()['id'],
                'message'      => $res_product->getContent(false),
                'status'       => $res_product->getStatusCode(),
                'url'          => $res_product->toArray()['permalink']
            ]);

            $variations = $entity->getVariations();
            if (!empty($variations)) {
                foreach ($variations as $variation) {
                    $_reference_ids = $res_product->toArray()['variations'];
                    $_reference_id_key = array_search($variation->getSku(), array_column($_reference_ids, 'seller_custom_field'));

                    $history = $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($variation, $connector, "output", [
                        'reference_id' => ($_reference_id_key !== false) ? $_reference_ids[$_reference_id_key]['id'] : null,
                        'message'      => $res_product->getContent(false),
                        'status'       => $res_product->getStatusCode(),
                        'url'          => $res_product->toArray()['permalink']
                    ]);
                }
            }
        } catch (\Throwable $th) {
            $message = [
                "message" => $th->getMessage(), 
                "code" => $th->getCode(), 
                "file" => $th->getFile(), 
                "line" => $th->getLine()
            ];

            $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($entity, $connector, "output", [
                'reference_id' => null,
                'message'      => $th->getMessage(),
                'status'       => 500
            ]);
            
            // throw new \Exception($th->getMessage());
        }

        return true;
    }

    public function pullOrder(Connector $connector, DateTime $date_from, DateTime $date_to = null)
    {
        if ($connector->getTokenExpired()) $this->refreshAccessToken($connector);
        $date_to = (is_null($date_to)) ? $date_from : $date_to;

        $parameters = [
            "seller"                  => $connector->getOutputUserId(),
            "order.date_created.from" => $date_from->format('Y-m-d\TH:i:00.000-00:00'),
            "order.date_created.to"   => $date_to->format('Y-m-d\TH:i:00.000-00:00'),
            "tags"                    => "paid",
        ];

        $count_orders = 0;
        try{

            $response = $this->get($connector, self::$API_ROOT_URL."/orders/search",$parameters);
            $orders = json_decode($response->getContent(false));
            $count_orders = count($orders->results);

            if ($count_orders > 0) {            
                foreach ($orders->results as $order_org) {
                    $order = $this->em->getRepository('App\Entity\Order')->findOneBy(['reference_id' => $order_org->id]);
                    $order = (empty($order) || is_null($order)) ? new Order : $order; 
                    $is_new = $order->getId() == null;
                    $order->setConnector($connector);
                    $order->setClient($connector->getClient());
                    $order->setReferenceId($order_org->payments[0]->order_id);
                    $order->setInvoiceId($order_org->payments[0]->id);
                    $order->setGrandTotal($order_org->payments[0]->total_paid_amount);
                    $order->setStore("Mercado libre"); 
                    $order->setStoreCode($order_org->payments[0]->site_id); 
                    $order->setStatus($order_org->status);
                    $order->setIssuedAt(new \DateTime($order_org->payments[0]->date_created));
                    $order->setCustomerId($order_org->buyer->id); 
                    $order->setPaymentId($order_org->payments[0]->id);
                    $order->setBuyerNickname($order_org->buyer->nickname);

                    $orderId = $order_org->payments[0]->order_id;

                    /*https://api.mercadolibre.com/orders/$ORDER_ID llamar a la api para datos de customer y orden*/
                    $customerOrderResponse = $this->get($connector, self::$API_ROOT_URL."/orders/$orderId");
                    $customerOrderInfo = json_decode($customerOrderResponse->getContent(false));
                    $order->setCustomerName($customerOrderInfo->buyer->first_name . " " .$customerOrderInfo->buyer->last_name); 
                    $order->setCustomerEmail($customerOrderInfo->buyer->email);
                    // $order->setCustomerPhone();           

                    /*https://api.mercadolibre.com/orders/$ORDER_ID/billing_info llamar a la api para datos de customer dni*/
                    $customerResponse = $this->get($connector, self::$API_ROOT_URL."/orders/$orderId/billing_info");
                    $customerInfo = json_decode($customerResponse->getContent(false));
                    $order->setCustomerDni($customerInfo->billing_info->doc_number);

                    /*https://api.mercadolibre.com/shipments/$SHIPMENT_ID llamar a la api para datos de shipping*/
                    $shippingId = $order_org->shipping->id;

                    $conn = $this->em->getRepository('App\Entity\Connector')->findByClientStrategy('tango');

                    if((int)$shippingId > 0){

                        $shippingResponse = $this->get($connector, self::$API_ROOT_URL."/shipments/$shippingId");
                        $shippingInfo = json_decode($shippingResponse->getContent(false));

                        $shipping_label = null;
                        if($shippingInfo->status == 'ready_to_ship'){
                            $shipping_label = $this->get($connector, self::$API_ROOT_URL . "/shipment_labels?shipment_ids=$shippingId");
                            $name_dir = dirname(dirname(dirname(dirname(__file__)))) . '/public/uploads/files/' . $shippingId . '.pdf';
                            // http://kaargentinadhcp.dyndns-ip.com/ecommerce/tangowebservice.asmx?WSDL
                            $client = new SoapClient($conn[0]->getOutputUrl(), [
                                'cache_wsdl' => 0
                            ]);
                            file_put_contents($name_dir, $shipping_label->getContent(false) );
                            $test = $_ENV['APP_ENV'] == 'dev';

                            $data = array(
                                'estadoFacturaWSDTO' => [
                                    'IdPedido' => $orderId,
                                    'Estado_Pedido' => 'ready_to_ship',
                                    'OperadorMagento' => 'Mercadolibre',
                                    'LinkEtiqueta' => $_ENV['APP_HOST'] . "/uploads/files/{$shippingId}.pdf"
                                ],
                                'esTest' => $test
                            );
                            $result = $client->GuardarEstadoFactura($data);

                            preg_match_all("/ERROR:\s(?P<error>.+)/i", $result->GuardarEstadoFacturaResult, $matches);

                            if(!empty($matches['error'])){
                                $connector->logger('error', $matches['error']);
                            }
                        }

                        $order->setCustomerCountry($shippingInfo->receiver_address->country->name);
                        $order->setCustomerRegion($shippingInfo->receiver_address->state->name);
                        $order->setCustomerCity($shippingInfo->receiver_address->city->name);
                        $order->setCustomerPostcode($shippingInfo->receiver_address->zip_code);
                        $order->setCustomerStreet($shippingInfo->receiver_address->street_name);
                        $order->setCustomerNumber($shippingInfo->receiver_address->street_number);
                        // $order->setCustomerFloor();
                        // $order->setCustomerApartment();
                        $order->setCustomerReferences($shippingInfo->receiver_address->comment);
                        $order->setShippingDescription($shippingInfo->shipping_option->name);
                        $order->setShippingMethod("Costo flete");
                        $order->setShippingPrice($shippingInfo->shipping_option->cost); 
                    }

                    $this->em->persist($order);
                    $this->em->flush();

                    foreach ($order_org->order_items as $item_org) {
                        $item = $this->em->getRepository('App\Entity\OrderItem')->findOneBy(['sku' => $item_org->item->seller_custom_field, 'order' => $order->getId()]);
                        $item = (empty($item) || is_null($item)) ? new OrderItem : $item; 
                        
                        $item->setOrder($order);
                        $item->setSku($item_org->item->seller_custom_field); 
                        $item->setName($item_org->item->title);
                        $item->setQty($item_org->quantity);
                        $item->setPrice($item_org->full_unit_price);
                        // $item->setDiscountPercent($item_org["discount_percent"]); 
                        // $item->setDiscountAmount($item_org["discount_amount"]);
                        $this->em->persist($item);
                        $this->em->flush();
                        if($is_new){
                            $this->_product->stockDiscount($connector, $item_org->item->seller_custom_field, $item_org->quantity);
                        }
                    }
                }
            }

        } catch (\Throwable $th) {
            $connector->logger("error", $th->getMessage());
        }
        return $count_orders;
    }

    // AUTHORIZATION
    public function getAuthUrl(string $redirect_uri, Connector $connector)
    {
        $this->redirect_uri = $redirect_uri;
        $params    = ["client_id" => $this->client_id, "response_type" => "code", "redirect_uri" => $redirect_uri];
        $auth_uri  = $connector->getOutputUrl()."/authorization?".http_build_query($params);
        $connector->logger("info",["message" => $auth_uri]);
        return $auth_uri;
    }

    public function authorize(string $code, string $redirect_uri = null, Connector $connector)
    {
        if($redirect_uri) $this->redirect_uri = $redirect_uri;
        $request = $this->HTTPclient->request('POST',self::$API_ROOT_URL . self::$OAUTH_URL, 
            [
                'json' => [
                    "grant_type"    => "authorization_code", 
                    "client_id"     => $this->client_id, 
                    "client_secret" => $this->client_secret, 
                    "code"          => $code,
                    "redirect_uri"  => $this->redirect_uri
                ]
            ]
        );

        if($request->getStatusCode() == 200) {
            $connector->logger("info",["message" => $request->getContent()]);
            $this->access_token  = $request->toArray()["access_token"];
            $this->refresh_token = $request->toArray()["refresh_token"];

            $connector->setOutputToken($request->toArray()["access_token"]);
            $connector->setOutputRefreshToken($request->toArray()["refresh_token"]);
            $connector->setOutputTokenType(ucfirst($request->toArray()["token_type"]));
            $connector->setOutputTokenExpiresIn($request->toArray()["expires_in"]);
            $connector->setOutputScope($request->toArray()["scope"]);
            $connector->setOutputUserId($request->toArray()["user_id"]);
            $this->em->persist($connector);
            $this->em->flush();
            $this->getUser($connector);
            return $request->toArray();
        }else{
            $connector->logger("err",["message" => $request->getContent(false)]);
            return $request->getContent(false);
        }
        return null; 
    }

    public function refreshAccessToken(Connector $connector)
    {       
        if($connector->getOutputRefreshToken()) {
            $response = $this->HTTPclient->request('POST',self::$API_ROOT_URL . self::$OAUTH_URL, 
                [
                    'json' => [
                        "grant_type"    => "refresh_token", 
                        "client_id"     => $this->client_id, 
                        "client_secret" => $this->client_secret, 
                        "refresh_token" => $connector->getOutputRefreshToken()
                    ]
                ]
            );
            if($response->getStatusCode() == 200) {
                $connector->logger("info",["message" => $response->getContent()]);
                $this->access_token  = $response->toArray()["access_token"];
                $this->refresh_token = $response->toArray()["refresh_token"];
                $connector->setOutputToken($response->toArray()["access_token"]);
                $connector->setOutputRefreshToken($response->toArray()["refresh_token"]);
                $connector->setOutputTokenType(ucfirst($response->toArray()["token_type"]));
                $connector->setOutputTokenExpiresIn($response->toArray()["expires_in"]);
                $connector->setOutputScope($response->toArray()["scope"]);
                $connector->setOutputUserId($response->toArray()["user_id"]);
                $this->em->persist($connector);
                $this->em->flush();
                $this->getUser($connector);
                return $response->toArray();   
            } else {
                $connector->logger("err",["message" => $response->getContent(false)]);
                return $response->getContent(false);
            }
        } else {
            return [
                'error'    => 'Offline-Access is not allowed.',
                'httpCode' => null
            ];
        }
        return null;
    }

    // https://developers.mercadolibre.com.ar/es_ar/usuarios-y-aplicaciones#modal1
    public function getUser(Connector $connector)
    {
        try {
            $response = $this->HTTPclient->request('GET',self::$API_ROOT_URL."/users/{$connector->getOutputUserId()}", [
                'headers' => [
                    'Accept'        => 'application/json',
                    'Authorization' => "{$connector->getOutputTokenType()} {$connector->getOutputToken()}"
                ],
            ]);

            $connector->setOutputUserName($response->toArray()["nickname"]);
            $this->em->persist($connector);
            $this->em->flush();
            $connector->logger("info",["message" => $response->getContent(false)]);
        } catch (TransportExceptionInterface $th) {
            $connector->logger("err",["message" => $th->getMessage(), "code" => $th->getCode(), "file" => $th->getFile(), "line" => $th->getLine()]);
            return $th->getMessage();
        }
        return $response;
    }

    // UTILS

    public function categories($connector)
    {
        if (is_integer($connector)) $connector = $this->em->getRepository('App\Entity\Connector')->findOneBy(["id"=>$connector]);
        $categories    = $this->get($connector,self::$API_ROOT_URL."/sites/MLA/categories");
        $categories = json_decode($categories->getContent(false));
        $response = [];
        foreach ($categories as $categorie) {
            $response[] = ["name" => $categorie->name, "value" => $categorie->id];
        }
        return $response;
    }

    public function subCategories($connector, string $parent)
    {
        if (is_integer($connector)) $connector = $this->em->getRepository('App\Entity\Connector')->findOneBy(["id"=>$connector]);
        $subcategory = $this->get($connector,self::$API_ROOT_URL."/categories/{$parent}");
        $categories  = json_decode($subcategory->getContent(false));
        $response = [];
        foreach ($categories->children_categories as $categorie) {
            $response[] = ["name" => $categorie->name, "value" => $categorie->id];
            $res_chils = $this->recursiveSubCaregory($connector, $categorie,$response);
            $response += $res_chils; 
        }
        return $response;
    }

    public function recursiveSubCaregory($connector, $parent, array $children)
    {
        $subcategory = $this->get($connector,self::$API_ROOT_URL."/categories/{$parent->id}");
        $subcategory = json_decode($subcategory->getContent(false));
        if (is_array($subcategory->children_categories) && $subcategory->children_categories > 0) {
            foreach ($subcategory->children_categories as $child) {
                $child->name = "{$parent->name} -> {$child->name}";
                $children[] = ["name" => $child->name, "value" => $child->id];
                $result = $this->recursiveSubCaregory($connector, $child, $children);
                if ($result > 0) {
                    $children +=$result;
                }
            }
        }
        return $children;
    }  

    public function getAttributesByCategory(Connector $conn, $entity)
    {
        $code = $entity->getReferenceId()["mercado_libre"];
        $resp_json = $this->get($conn,self::$API_ROOT_URL."/categories/{$code}");
        $response = $this->get($conn,self::$API_ROOT_URL."/categories/{$code}/attributes");
        $categoryAttributes = json_decode($response->getContent(false));

        $_category = json_decode($resp_json->getContent(false));
        if(!empty($_category)){

            $category_settings = [ 
                "max_description_length"    => $_category->settings->max_description_length,
                "max_pictures_per_item"     => $_category->settings->max_pictures_per_item,
                "max_sub_title_length"      => $_category->settings->max_sub_title_length,
                "max_title_length"          => $_category->settings->max_title_length
            ];
            $entity->setSettings($category_settings);
        }

        foreach ($categoryAttributes as $categoryAttribute) {
            if (isset($categoryAttribute->tags->hidden) || isset($categoryAttribute->tags->fixed))
                continue;
            // $attribute = $this->em->getRepository('App\Entity\Attribute')->findOneBy(['strategy' => strtolower($categoryAttribute->id)]);
            // if (empty($attribute) || is_null($attribute)) {
            //     $attribute = new Attribute;
            //     $attribute->setCode(strtolower($categoryAttribute->id));
            //     $attribute->setLabel($categoryAttribute->name);
            //     $attribute->setType((isset($categoryAttribute->tags->allow_variations) ? 'variation' : 'product'));
            //     $attribute->setInputType($categoryAttribute->value_type);
            //     $attribute->setStrategy(strtolower($categoryAttribute->id));
            //     $attribute->setIsMappingValue(false);
            //     $this->em->persist($attribute);
            //     $this->em->flush();
            // }
            
            $conns = $this->em->getRepository('App\Entity\Connector')->findBy(['client' => $conn->getClient()->getId(),'application' => $conn->getapplication()->getId()]);
            foreach ($conns as $conn) {
                $conn_attr = $this->em->getRepository('App\Entity\ConnectorAttribute')->findOneBy(['connector' => $conn->getId(), /*'attribute' => $attribute->getId(),*/ "code" => $categoryAttribute->id]);
                if (empty($conn_attr) || is_null($conn_attr)) {
                    $conn_attr = new ConnectorAttribute;
                    $conn_attr->setConnector($conn);

                    $conn_attr->setName($categoryAttribute->name);
                    $conn_attr->setCode($categoryAttribute->id);
                    $conn_attr->setAutoSaveAttributeValue(true);
                    
                    $conn_attr_set = new ConnectorAttributeSet;
                    $conn_attr_set->setAttributeSet($entity);
                    $conn_attr_set->setIsRequired(
                        ((isset($categoryAttribute->tags->required) && 
                        $categoryAttribute->tags->required ) ? true : false)
                    );
                    $conn_attr_set->setIsVariation((isset($categoryAttribute->tags->allow_variations) ? true : false));
                    $conn_attr->addConnectorAttributeSet($conn_attr_set);
                }

                try {
                    if (isset($categoryAttribute->values) and count($categoryAttribute->values) > 0) {           
                        $attr_values = $conn_attr->getAttributeValues();
                        foreach ($categoryAttribute->values as $value) {
                            $attr_key = array_search($value->id, array_column($attr_values, "value"));
                            if ($attr_key == false) {
                                $attr_values[] = ['value'=> $value->id, 'name' => $value->name];
                            }
                        }
                        $conn_attr->setAttributeValues($attr_values);
                    }
                    $this->em->persist($conn_attr, $entity);
                    $this->em->flush(); 
                } catch (\Throwable $th) {

                }
            }
        }    
    }

    public function getOfficialStore(Connector $connector)
    {        
        $request = $this->get($connector, self::$API_ROOT_URL."/users/{$connector->getOutputUserId()}/brands");

        return $request->toArray()['brands'];
    }

    public function getListingTypes()
    {
        $request = $this->HTTPclient->request('GET', self::$API_ROOT_URL."/sites/MLA/listing_types");
        
        return $request->toArray();
    }
}