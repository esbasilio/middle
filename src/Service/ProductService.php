<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-10-26 17:08:54
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-04 22:35:48
 */

namespace App\Service;

use App\Entity\Product;
use Imagine\Gd\Imagine;
use App\Entity\Connector;
use App\Form\ProductType;
use App\Service\AttributeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ProductService extends CoreService
{
    public $resp = [];
    private $attribute;

    public function __construct(
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        FormFactoryInterface $formFactory,
        HttpClientInterface $client, 
        SessionInterface $session,
        // ConnectorService $connectorService,
        AttributeService $attribute
    )
    {
        parent::__construct($em, $validator, $formFactory, $client, $session);
        // $this->_conn     = $connectorService;
        $this->attribute = $attribute;
    }

    public function generateSkuParent(Connector $connector, string $sku)
    {
        try {
            preg_match_all($connector->getClient()->getParentSkuFormat(), $sku, $matches);
        } catch (\Throwable $th) {
            throw new \Exception("No se pudo generar el sku del producto padre a partir del SKU << {$sku} >>, verifique que la expresión regular del cliente << {$connector->getClient()->getName()} >> este bien configurada: << {$connector->getClient()->getParentSkuFormat()} >>");
        }

        if (is_array($matches) && count($matches) >= 1 ) {
            if (empty($matches[0][0])) {
                throw new \Exception("No se pudo generar el SKU para el producto padre a partir del SKU << {$sku} >>, el SKU ingresado no cumple con la expresión {$connector->getClient()->getParentSkuFormat()}");
                // return false;
            }            
            return $matches[0][0];
        }else{
            throw new \Exception("No se pudo generar el SKU para el producto padre a partir del SKU << {$sku} >>, verifique la expresión regular utilizada");
        }
        
        return false;
    }

    public function preparedToSave(Connector $connector, $request)
    {
        if (empty($request['sku'])) {
            $this->resp = $this->response("sku indefindo","Se requiere SKU", 'error');
            
            return false;
        }
        
        $_is_new = false;
        $_is_parent_new = false;
        $entity = $this->em->getRepository('App\Entity\Product')->findOneBy(['sku' => $request['sku'], 'client' => $connector->getClient()->getId()]);

        if (empty($entity)) {
            $entity = new Product();
            $_is_new = true;
        }
        
        // create parent product if not exists
        try {
            $parent_sku = $this->generateSkuParent($connector, $request['sku']);

            if ($parent_sku != $request['sku'] && $entity->getParent() == null) {
                $parent = $this->prepareParent($connector, $request);
                
                if ($parent !== false) {
                    $request['parent'] = $parent['entity']->getId();
                    $_is_parent_new = true;

                    // TODO: asociar variaciones existentes sin padre que coincidan con el sku padre
                }
            }
        } catch (\Throwable $th) {
            $this->resp = $this->response($request['sku'], $th->getMessage(), 'error');
        }

        // create variation
        $product = $this->prepareVariation($connector, $entity, $request);

        $response = (object)[
            "method"  => isset($product["method"]) ? $product["method"] : "failed"
        ];
        
        if (isset($this->resp['error'])) {
            $response->error = $this->resp['error'];
            
            return $response;
        }
        
        if (isset($request['attributes'])) {
            $this->resp = $this->attribute->prepareAndSave($connector, $product["entity"], $request['attributes']);

            /** Save parent product attributes by child only if parent is new */
            if ($_is_parent_new) {
                $_parent = $product["entity"]->getParent();

                if (!is_null($_parent)) {
                    $this->attribute->prepareAndSave($connector, $product["entity"]->getParent(), $request['attributes']);
                }
            }
        }
        
        if (isset($this->resp['warning'])) {
            $response->warning = $this->resp['warning'];
        }
        
        if (isset($this->resp['error'])) {
            $response->error = $this->resp['error'];
        }
        
        return $response;
    }

    /**
     * [createdProductParent description]
     * @return [type] [description]
     */
    public function prepareParent(Connector $connector, $prod_req)
    {
        $prod_pre = $prod_req;
        try {
            // Genera el SKU del producto padre a traves de una expresion regular agregada en la configuracion
            $prod_pre['sku'] = $this->generateSkuParent($connector, $prod_req['sku']);
            $prod_req['reference_id'] = $prod_pre['sku'];
        } catch (\Throwable $th) {
            $this->resp = $this->response($prod_req['sku'],$th->getMessage(), 'error');
            return false;
        }

        $prod_pre["client"] = $connector->getClient()->getId();
        
        if (isset($prod_pre["attribute_set"]) && gettype($prod_pre["attribute_set"]) === "string") {
            $attribute_set = $this->em->getRepository('App\Entity\ProductAttributeSet')->findOneBy(['strategy' => $prod_pre['attribute_set'], "client"=> $prod_pre["client"]]);
            
            if (!empty($attribute_set)) {
                $prod_pre["attribute_set"] = $attribute_set->getId();
            } else {
                $this->resp = $this->response($prod_req['sku'], "el set de attributo << {$prod_pre["attribute_set"]} >> ingresado no existe, recuerde que debe ingresar el ID o CODIGO del Attribute_set");
                unset($prod_pre['attribute_set']);
            }
        }

        if (empty($prod_pre["attribute_set"])) {
            $attribute_set = $this->em->getRepository('App\Entity\ProductAttributeSet')->findOneBy(['is_default' => 1, "client"=> $prod_pre["client"]]);
            
            if (!empty($attribute_set)) {
                $prod_pre["attribute_set"] = $attribute_set->getId();
            } else {
                unset($prod_pre['attribute_set']);
            }
        }
        
        unset($prod_pre['reference_id']);
        unset($prod_pre['parent']);
        unset($prod_pre['attributes']);
        unset($prod_pre['special_price']);
        unset($prod_pre['price']);
        unset($prod_pre['stock']);
        unset($prod_pre['url']);
        unset($prod_pre['description']);
        unset($prod_pre['created_at']);
        unset($prod_pre['updated_at']);
        
        return $this->save($connector, $prod_pre, $prod_req);
    }

    public function prepareVariation(Connector $connector, Product $variation, $request)
    {
        $data = [
            "sku"           => trim($request['sku']),
            "client"        => empty($variation->getClient()) ? $connector->getClient()->getId() : $variation->getClient()->getId(),
            "parent"        => empty($request['parent']) ? null : $request['parent'],
            "name"          => empty($request['name']) ? $variation->getName() : $request['name'],
            "description"   => empty($request['description']) ? $variation->getDescription() : $request['description'],
            "price"         => isset($request['price']) ? $request['price'] : $variation->getPrice(),
            "special_price" => isset($request['special_price']) ? $request['special_price'] : $variation->getSpecialPrice(),
            "stock"         => isset($request['stock']) ? $request['stock'] : $variation->getStock(),
            "status"        => isset($request['status']) ? $request['status'] : $variation->getStatus(),
            "images"        => empty($request['images']) ? $variation->getImages() : $request['images'],
        ];

        if($data['stock'] == null){ // en caso de ser null $variation->getStock()
            $data['stock'] = 0;
        }

        if (empty($request['parent']) && $variation->getParent() !== null) {
            $data['parent'] = $variation->getParent()->getId();
        }

        $response = $this->save($connector, $data, $request);

        if ($response['entity']->hasParent()) {
            // TODO: cuando se envía a Mercadolibre, todos los items deben tener el mismo precio, por ende el producto
            // debería tener el precio más alto y las variaciones llevar el precio del padre
            $this->updateStockParent($connector, $response['entity']->getParent()->getSku(), $response['entity']->getPrice());
        }
        
        return $response;
    }

    public function updateStockParent(Connector $connector, string $sku, $price = null)
    {
        $product = $this->em->getRepository('App\Entity\Product')->findOneBy(['sku' => $sku, 'client' => $connector->getClient()->getId()]);

        if (empty($product)) {
            throw new \Exception("Paren product sku {$sku} doesn't exists");
        }

        // $product->setStock($product->getStockParent());
        // if ($price != null) $product->setPrice($price);
        // $this->em->persist($product);
        // $this->em->flush();

        /** FIX: TimestampableTrait */
        /** 
         * TODO: crear un método para desactivarlo
         * https://stackoverflow.com/questions/29533795/disable-doctrine-timestampable-auto-updating-the-updatedat-field-on-certain-up
         */
        $tableName = $this->em->getClassMetadata('App\Entity\Product')->getTableName();
        $sql = "UPDATE {$tableName} set stock = :stock, price = :price where id = :id";
        $params['stock'] = $product->getStockParent();
        $params['price'] = isset($price) ? $price : $product->getPrice();
        $params['id'] = $product->getId();
        $stmt = $this->em->getConnection()->prepare($sql);
        $stmt->execute($params);
    }

    public function stockDiscount(Connector $connector, string $sku, int $stock)
    {
        $product = $this->em->getRepository('App\Entity\Product')->findOneBy(['sku' => $sku, 'client' => $connector->getClient()->getId()]);

        if (empty($product)) {
            throw new \Exception("Product sku {$sku} doesn't exists");
        }

        $total_stock = $product->getStock()-$stock;
        // $product->setStock($total_stock);
        // $this->em->persist($product);
        // $this->em->flush();

        /** FIX: TimestampableTrait */
        /** 
         * TODO: crear un método para desactivarlo
         * https://stackoverflow.com/questions/29533795/disable-doctrine-timestampable-auto-updating-the-updatedat-field-on-certain-up
         */
        $tableName = $this->em->getClassMetadata('App\Entity\Product')->getTableName();
        $sql = "UPDATE {$tableName} set stock = :stock where id = :id";
        $params['stock'] = $total_stock;
        $params['id'] = $product->getId();
        $stmt = $this->em->getConnection()->prepare($sql);
        $stmt->execute($params);

        $this->updateStockParent($connector, $product->getParent()->getSku());
    }


    public function stockAdd(Connector $connector, string $sku, int $stock)
    {
        $product = $this->em->getRepository('App\Entity\Product')->findOneBy(['sku' => $sku, 'client' => $connector->getClient()->getId()]);
        if (empty($product)) {
            throw new \Exception("Product sku {$sku} doesn't exists");
        }
        $total_stock = $product->getStock() + $stock;
        $tableName = $this->em->getClassMetadata('App\Entity\Product')->getTableName();
        $stmt = $this->em->getConnection()->prepare("UPDATE {$tableName} set stock = :stock where id = :id");
        $stmt->execute(['stock' => $total_stock, 'id' => $product->getId()]);
        $this->updateStockParent($connector, $product->getParent()->getSku());
    }

    /**
     * [save - Realiza todo el proceso de guardado de objeto producto]
     * @param  [type] $prod [description]
     * @return [type]       [description]
     */
    public function save(Connector $connector, $prod_pre, $prod_req)
    {
        $is_new = false;
        $prod_entity = $this->em->getRepository('App\Entity\Product')->findOneBy(['sku' => $prod_pre['sku'], 'client' => $connector->getClient()->getId()]);
        
        if (empty($prod_entity) || is_null($prod_entity)){
            $prod_entity = new Product();
            $is_new = true;
        }

        $form = $this->form->create(ProductType::class, $prod_entity);

        $frm_fields = (array)$form->all();
        $frm_keys = [];
        foreach($frm_fields as $key => $val){
            $frm_keys[$key] = $key;
        }
        foreach($prod_pre as $key => $val){
            if(!in_array($key, $frm_keys)){
                unset($prod_pre[$key]);
            }
        }

        $form->submit($prod_pre, $is_new); # se le pasa $is_new para que al actualizar no pase a null los valores que no vienen
        
        // validacion de data con el formulario
        $errors = $this->valid->validate($form);
        
        if (count($errors) > 0) {
            // $errorsString = (string) $errors;
            foreach ($errors as $violation) {
                // $messages[$violation->getPropertyPath()][] = $violation;
                $value = isset($violation->getParameters()["{{ value }}"])? $violation->getParameters()["{{ value }}"]: "";
                $fields = isset($violation->getParameters()["{{ extra_fields }}"])? $violation->getParameters()["{{ extra_fields }}"]: "";
                $this->resp = $this->response($prod_req['sku'],"{$violation->getPropertyPath()} => {$fields} {$value} - {$violation->getMessage()}", 'error');
            }
            
            return false;
        }

        if ($form->isSubmitted()) {
            try {
                # Update parent updated and last connector
                if ($prod_entity->hasParent()) {
                    $prod_entity->getParent()->setUpdated(new \DateTime('NOW'));
                    $prod_entity->getParent()->setLastConnector($connector);
                }

                # Set the last connector that updated the product
                $prod_entity->setLastConnector($connector);
                
                $this->em->persist($prod_entity);
                $this->em->flush();

                $prod_req['message'] = $prod_req;

                try {
                    // force status
                    $prod_req['status'] = 'success';
                    
                    $this->em->getRepository('App\Entity\ProductConnector')->saveConnector($connector, $prod_entity, $prod_req);

                    if($is_new){ 
                        // si el producto es nuevo busca conectores con la opción enabled_product_sync habilitada
                        $connectors = $this->em->getRepository('App\Entity\Connector')
                            ->findBy(['enabled_product_sync' => 1]);
                            
                        // guarda la relacion entre product -> connector
                        if(!empty(($connectors))){
                            foreach($connectors as $conn){
                                // excluyo conector actual
                                if ($connector->getId() == $conn->getId())
                                    continue;
                                
                                $this->em->getRepository('App\Entity\ProductConnector')
                                    ->saveConnector($conn, $prod_entity, $prod_req);
                            }
                        }
                    }

                    $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($prod_entity, $connector, "input", $prod_req);
                } catch (\Throwable $th) {
                    $connector->logger("err",["message" => $th->getMessage(), "code" => $th->getCode(), "file" => $th->getFile(), "line" => $th->getLine()]);
                    $this->resp = $this->response($prod_req['sku'],"No se logro guardar el historial del producto: {$th->getMessage()}", 'warning');

                    // force status
                    $prod_req['status'] = 'error';

                    $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($prod_entity, $connector, "input", $prod_req);
                }
                return ['method' =>  $is_new ? "create" : "update", 'entity' => $prod_entity];
            } catch (\Throwable $th) {
                $prod_req['status'] = 'error';
                $connector->logger("err",["message" => $th->getMessage(), "code" => $th->getCode(), "file" => $th->getFile(), "line" => $th->getLine()]);
                $this->em->getRepository('App\Entity\ProductHistory')->saveHistory($prod_entity, $connector, "input", $prod_req);
                $this->resp = $this->response($prod_req['sku'], $th->getMessage(), 'error');
                
                return false;
            }
        }
    }

    public function prepareImage(string $img, string $sku)
    {
        $min_width  = 250;
        $min_height = 250;
        $max_size   = 625000; // bytes
        $mime_type  = ["image/jpg","image/jpeg"];
        $mime_type_string = implode(",",$mime_type);

        $imagine = new Imagine();
        $image = $imagine->open($img);

        // falta validacion si es una imagen o si el link esta roto

        // verifica el tamaño de la imagen
        if ($image->metadata()['file.FileSize'] > $max_size ){
            $this->resp = $this->response($sku, "La imagen << {$image->metadata()['uri']} >> no cumple con el tamaño maximo permitido required size < {$max_size} Byte");
        }

        // verifica si el width y height de la imagen es el permitido
        if ($image->metadata()['computed.Width'] < $min_width || $image->metadata()['computed.Height'] < $min_height){
            $this->resp = $this->response($sku,"La imagen << {$image->metadata()['uri']} >> no cumple con las dimensiones minimas requeridas required width >= {$min_width}px","height >= {$min_height}px");
        }

        // verifica si el formato de la imegn es el permitido
        if (!in_array($image->metadata()['file.MimeType'],$mime_type)){
            $this->resp = $this->response($sku,"La imagen << {$image->metadata()['uri']} >> no cumple con el formato permitido required MimeType = {$mime_type_string}");
        }

        return $image->metadata()['uri'];
    }

    public function prepareAttributes(Connector $connector, Product $entity)
    {
        $product_type = $entity->hasParent() ? 'variation' : 'product';
		$attributes = $this->attribute->getRequiredAttributes($connector, $entity);
		$product_values = $this->em->getRepository('App\Entity\ProductAttribute')->findByProduct($entity->getId(), $product_type);
        $_attributes = [];

		foreach ($attributes as $attribute) {
            $_attribute_key = array_search($attribute['id'], array_column($product_values, 'attribute_id'));

            // throw error is the product value is null and attribute is required
            if ($_attribute_key === false && (isset($_attribute['is_required']) && $_attribute['is_required'])) {
                throw new \Exception("El attributo {$attribute['label']} no puede estar vacío");
            }

            if ($_attribute_key !== false) {

                $_product_value = $product_values[$_attribute_key];
                $_attribute_value = $_product_value['value'];
                
                if ((isset($_attribute['is_required']) && $_attribute['is_required']) && empty($_attribute_value)) {
                    throw new \Exception("El attributo {$attribute['label']} no puede estar vacío");
                }
    
                $_attributes[] = array_merge($_product_value, $attribute);
            }
		}

        return $_attributes;
    }
}