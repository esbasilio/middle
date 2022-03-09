<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-08-08 20:00:20
 * @Last Modified by:   Beto
 * @Last Modified time: 2020-10-06 17:33:26
 */

namespace App\Service\Connector;

use App\Entity\Product;
use App\Entity\Connector;
use App\Service\CoreService;
use App\Service\AttributeService;
use App\Service\ProductService;
use Doctrine\ORM\EntityManagerInterface;

class MercadoLibreMapping extends CoreService
{
	private $em;
	private $_attribute;
	private $_productService;

    public function __construct(EntityManagerInterface $em, AttributeService  $attributeService, ProductService  $productService)
    {
        $this->em = $em;
		$this->_attribute = $attributeService;
		$this->_productService = $productService;
    }

	public function productCreate(Connector $connector, Product $entity)
	{
		$category_id = null;
		$_product = [];
		$_product_attributes = [];
		$_variations = [];
		$_images = [];
		$_qty = [];

		if(!empty($entity->getAttributeSet()) && !empty($entity->getAttributeSet()->getReferenceId())){
			$category_id = $entity->getAttributeSet()->getReferenceId()['mercado_libre'];
			$settings = $entity->getAttributeSet()->getSettings();

			if($settings!=null){
				if($settings['max_title_length'] < strlen($entity->getName()))
					throw new \Exception("El el titulo del producto supera los {$settings['max_title_length']} caracteres");
			}
		}

		if (is_null($category_id))
			throw new \Exception("Es obligatorio asignar una categoría de Mercadolibre al publicar un producto");

		$_product = [
			"title"              => "{$entity->getName()}",
			"category_id"        => $category_id,
			"price"              => number_format($entity->getPrice(), 2, '.', ''),
			"currency_id"        => "ARS",
			"buying_mode"        => "buy_it_now",
			"condition"          => "new",
			"listing_type_id"    => "gold_special",
			'accepts_mercadopago' => true,
			"seller_custom_field" => $entity->getSku(),
            "shipping" => array(
                "mode" => "me2",
                "local_pick_up" => true,
                "free_shipping" => false,
                "free_methods" => array(

                ),
            ),
            "tags" => [
                "immediate_payment",
			]
		];

		// set custom product options
		$product_connector = $this->em->getRepository('App\Entity\ProductConnector')->findOneBy(['connector' => $connector, 'product' => $entity]);

		if ($_options = $product_connector->getOptions()) {
			foreach ($_options as $key => $option) {
				if (empty($option))
					continue;
				
				$_product[$key] = $option;
			}
		}

		$attributes = $this->_productService->prepareAttributes($connector, $entity);

		if (!empty($attributes)) {
			foreach ($attributes as $attribute) {
				$_product_attributes[] = [
					"id" 			=> $attribute['code'],
					"value_name" 	=> $attribute['value']
				];
			}

			if (!empty($_product_attributes)) {
				$_product['attributes'] = $_product_attributes;
			}
		}
		
		# variations
		foreach ($entity->getVariations() as $variation) {
			try {
				$_variations[] = $this->variationCreate($connector, $variation);
				$_images = array_merge($_images, $variation->getImages());
				$_qty[] = intval($variation->getStock());
			} catch (\Exception $e) {
				$connector->logger("err", [
					"message" => $e->getMessage(), 
					"code" => $e->getCode()
				]);

				continue;
			}
		}

		# add available_quantity
		if (count($_qty)) {
			$_product['available_quantity'] = array_sum($_qty);
		} else {
			$_product['available_quantity'] = intval($entity->getStock());
		}

		# add item images
		if (count($_images)) {
			foreach ($_images as $_image) {
				$_product['pictures'][] = [
					"source" => $_image
				];
			}
		}

		# add item variations
		if (count($_variations)) {
			$_product['variations'] = $_variations;
		}

		return $_product;
	}

	public function productUpdate(Connector $connector, Product $entity)
	{
		$entity = (is_null($entity)) ? $this->entity : $entity;
		$_product = [
			// "price"              => number_format($entity->getPrice(), 2, '.', ''),
			// "available_quantity" => intval($entity->getStock()),
		];
		$_variations = [];
		$_images = [];
		
		foreach ($entity->getVariations() as $variation) {
			try {
				$_variations[] = $this->variationCreate($connector, $variation);
				$_images = array_merge($_images, $variation->getImages());
			} catch (\Exception $e) {
				$connector->logger("err", [
					"message" => $e->getMessage(), 
					"code" => $e->getCode()
				]);

				continue;
			}
		}

		# fix item images
		if (count($_images)) {
			foreach ($_images as $_image) {
				$_product['pictures'][] = [
					"source" => $_image
				];
			}
		}

		# add item variations
		if (count($_variations)) {
			$_product['variations'] = $_variations;
		}

		return $_product;
	}

	public function variationCreate(Connector $conn, Product $variation)
	{
		$_variation = [];
		$_stock = (int) $variation->getStock();
		$_attribute_combinations = [];
		$_price = number_format($variation->getParent()->getPrice(), 2, '.', ''); // todas las variaciones deben tener el mismo precio, por eso se usa el del padre
		$reference_ids = $variation->getReferenceIds();

		// check for variation id
		if (isset($reference_ids[$conn->getCode()])) {
			$_variation['id'] = intval($reference_ids[$conn->getCode()]);
		}

		// enviar stock cero solo cuando el producto ya fue sincronizado
		if ($_stock < 1 && empty($_variation['id'])) {
			throw new \Exception(
				"No se puede enviar la variacion a ML ya que cantidad debe ser mayor a 0 (cero) para el producto variacion {$variation->getSku()}",
				400
			);
		}

		$attributes = $this->_productService->prepareAttributes($conn, $variation);

		if (!empty($attributes)) {
			foreach ($attributes as $attribute) {
				$_attribute_combinations[] = (object)[
					"id"         => $attribute['code'],
					"value_name" => $attribute['value']
				];
			}
		}

		if (empty($_attribute_combinations)) {
			throw new \Exception(
				"No se puede enviar la variacion a ML ya que la variacion no tiene seteado atributos requeridos para ML, para el producto variacion {$variation->getSku()}", 
				400
			);
		}

		$_variation['price'] = number_format($_price, 2, '.', '');
		$_variation['available_quantity'] = intval($_stock);
		$_variation["seller_custom_field"] = $variation->getSku();
		$_variation["attribute_combinations"] = $_attribute_combinations;

		if (!empty($variation->getImages())) {
			$_variation['picture_ids'] = $variation->getImages();
		}

		return $_variation;
	}

	public function description(Connector $conn, Product $prod)
	{
		$_product_description = $prod->getDescription();

		if (empty($_product_description))
			return false;
		
		return (object) [
			"plain_text" => html_entity_decode(strip_tags($prod->getDescription()))
		];
	}

	public function dataValidation(Product $entity)
	{
		$response = [];
		$valid = true;
		
		if (count($entity->getAttributes()) <= 0){ 
			$response[] = "El producto << {$entity->getSku()} >> requiere minimo un atributo!";
			$valid = false;
		}

		if (count($entity->getImages()) <= 0){ 
			$response[] = "El producto << {$entity->getSku()} >> requiere una imagen!";
			$valid = false;
		}
		return (object)["valid" => $valid ,"response" => $response];
	}
}