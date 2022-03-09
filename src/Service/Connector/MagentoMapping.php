<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-08-08 20:00:20
 * @Last Modified by:   Beto
 * @Last Modified time: 2020-10-06 17:27:42
 */
namespace App\Service\Connector;

use App\Entity\Product;
use App\Entity\Connector;
use App\Service\CoreService;
use App\Service\AttributeService;
use App\Service\ProductService;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use stdClass;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class MagentoMapping extends CoreService
{
    private $attribute;
	private $_productService;

    public function __construct(
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        FormFactoryInterface $formFactory,
        HttpClientInterface $client, 
        SessionInterface $session,
        AttributeService $attribute,
		ProductService $productService
    )
    {
        parent::__construct($em, $validator, $formFactory, $client, $session, $productService);
        $this->attribute = $attribute;
		$this->_productService = $productService;
    }

	public function createProductConfigurable(Connector $conn, Product $entity)
	{
		$product = (object) [
			"name"             => !empty($entity->getName()) ? $entity->getName() : $entity->getSku(),
			"sku"              => "{$entity->getSku()}",
			"attribute_set_id" => 4,
			"status"           => intval($entity->getStatus()),
			"visibility"       => 4,
			"type_id"          => "configurable",
			"weight"           => 0.1
		];
		$options = [];

        $attribute_set = $entity->getAttributeSet();

		if (empty($attribute_set)) {
			throw new Exception("El producto {$entity->getSku()} no contiene Grupo de atributo asignado");
		}

        $variation_attributes = $this->em->getRepository('App\Entity\Attribute')->findByConnector($conn->getId(), $attribute_set->getId(), 'variation');

		foreach ($variation_attributes as $position => $attribute) {
			$options[] = (object)[
				"attribute_id"   => $attribute['reference_id'],
				"label"          => $attribute['label'],
				"position"       => $position,
				"is_use_default" => true,
				"values"         => [
					(object) [
						"value_index" => random_int(999, 9999)
					]
				]
			];
		}

		$product->extension_attributes = new stdClass();
		
		if (!empty($options)) {
			$product->extension_attributes->configurable_product_options = $options;
		}

		foreach ($entity->getVariations() as $variation) {
			$key = $variation->findReferenceId($conn);
			if (isset($key) && !is_null($key)) $links[] = $key;
		}
		if (isset($links) && count($links) > 0) {
			$product->extension_attributes->configurable_product_links = $links;
		}

		$attributes = $this->prepareAttributes($conn, $entity);

		/**
		 * add watts_product_sync to products created by middleware
		 */
		$attributes = array_merge($attributes, [
			(object)[
				"attribute_code" 	=> 'watts_product_sync',
				"value" 			=> 1
			]
		]);

		if (!empty($attributes)) {
			$product->custom_attributes = $attributes;
		}
		
		if (!empty($entity->getImages())) {
			$images = $this->prepareImages($entity);
			if(!is_null($images)) $product->media_gallery_entries = $images;
		}

		return (object)["product" => $product];
	}

	public function updateproductConfigurable(Connector $conn, Product $entity)
	{
		$product = (object) [
			"price"  => number_format($entity->getPrice(), 2, '.', ''),
			"status" => intval($entity->getStatus()),
		];

		foreach ($entity->getVariations() as $variation) {
			$key = $variation->findReferenceId($conn);
			if (isset($key) && !is_null($key)) $links[] = $key;
		}

		if (isset($links) && count($links) > 0) {
			$product->extension_attributes = (object)["configurable_product_links" => $links];
		}
		
		return (object)["product" => $product];
	}

	public function createProductSimple(Connector $conn, Product $entity)
	{
		$product = (object) [
			"name"                 => !empty($entity->getName()) ? $entity->getName() : $entity->getSku(),
			"sku"                  => "{$entity->getSku()}",
			"attribute_set_id"     => 4,
			"status"               => intval($entity->getStatus()),
			"price"                => number_format($entity->getPrice(), 2, '.', ''),
			"visibility"           => 1,
			"type_id"              => "simple",
			"weight"               => 0.1,
			"extension_attributes" => (object)[
				"stock_item" => (object)[
					"qty"         => intval($entity->getStock()),
					"is_in_stock" => intval($entity->getStock()) > 0 ? true : false,
				]
			]
		];

		$attributes = $this->prepareAttributes($conn, $entity);

		/**
		 * add watts_product_sync to products created by middleware
		 */
		$attributes = array_merge($attributes, [
			(object)[
				"attribute_code" 	=> 'watts_product_sync',
				"value" 			=> 1
			]
		]);

		if (!empty($attributes)) {
			$product->custom_attributes = $attributes;
		}

		if (!empty($entity->getImages())) {
			$images = $this->prepareImages($entity);
			if(!is_null($images)) $product->media_gallery_entries = $images;
		}

		return (object)["product" => $product];
	}

	public function updateProductSimple(Connector $conn, Product $entity)
	{
		$product = (object) [
			"type_id"          	   => "simple",
			"status"               => intval($entity->getStatus()),
			"price"                => number_format($entity->getPrice(), 2, '.', ''),
			"extension_attributes" => (object)[
				"stock_item" => (object)[
					"qty"         => intval($entity->getStock()),
					"is_in_stock" => intval($entity->getStock()) > 0 ? true : false,
				]
			]
		];

		return (object)["product" => $product];
	}

	public function prepareImages(Product $product)
	{
		$pictures = [];
		
		foreach ($product->getImages() as $position => $img) {
			try {
				$image = $this->imagine->open($img);
				if(!stream_is_local($img)){
					$data = get_headers($img, 1);
					$mimeType = explode("/", $data["Content-Type"]);
				}else{
					$mimeType = explode("/", $image->metadata()['file.MimeType']);
				}
	
				$pictures[] = (object)[
					"position"   => $position,
					"media_type" => $mimeType[0],
					"label"      => $product->getName(),
					"disabled"   => false,
					"types"      => ["image", "small_image", "thumbnail"],
					"content"    => (object)[
						"type"                => $mimeType[0] .'/'. $mimeType[1],
						"base64_encoded_data" => base64_encode($image->get($mimeType[1])),
						"name"                => "{$product->getSku()}_{$position}.{$mimeType[1]}"
					]
				];
			} catch (\Exception $e) {
				continue;
			}
		}

		return (isset($pictures) || count($pictures) > 0) ? $pictures : null;	
	}

    protected function prepareAttributes(Connector $connector, Product $product)
    {
		$attributes = $this->_productService->prepareAttributes($connector, $product);
		$_attributes = [];

		if (!empty($attributes)) {
			foreach ($attributes as $attribute) {
				$_attribute_value = $attribute['value'];
				

				if (empty($_attribute_value)) {
					continue;
				}
				
				// TODO: publicar atributos antes de publicar producto.
				// sería bueno crear un proceso cron que tome los valores de atributos de productos creados
				// y los publique en cada plataforma
				$magento_attribute_options = $this->get($connector, "{$connector->getOutputUrl()}/rest/all/V1/products/attributes/{$attribute['code']}/options");
				$magento_attribute_options = $magento_attribute_options->getContent(false);

				if (empty($magento_attribute_options)) {
					throw new \Exception("No se pudo obtener los valores de Magento para el atributo <<{$attribute['code']}>>");
				}

				# FIXME: convierto data en array porque httpClient->toArray() a veces falla
				$magento_attribute_options = json_decode($magento_attribute_options, true);

				$magento_attribute_option_key = array_search(strtolower($attribute['value']), array_map('strtolower', array_column($magento_attribute_options, 'label')));

				if ($magento_attribute_option_key !== false) {
					$_attribute_value = $magento_attribute_options[$magento_attribute_option_key]['value'];
				} else {
					$params = [
						'option' => [
							'label' => $attribute['value']
						]
					];
					$request = $this->post($connector, "{$connector->getOutputUrl()}/rest/V1/products/attributes/{$attribute['code']}/options", $params);
					$response = $request->getContent(false);

					# FIXME: convierto data en array porque httpClient->toArray() a veces falla
					$response = json_decode($response, true);
					
					if (in_array($request->getStatusCode(), [200, 201])) {
						$_attribute_value = (int) filter_var($response, FILTER_SANITIZE_NUMBER_INT);
					}
				}

				$_attributes[] = (object)[
					"attribute_code" 	=> $attribute['code'],
					"value" 			=> $_attribute_value
				];
			}
		}

        return $_attributes;
    }
}