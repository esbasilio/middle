<?php

/**
 * @Author: Beto
 * @Date:   2020-08-18 23:51:57
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-24 23:22:06
 */
namespace App\Service\Connector;

use App\Service\CoreService;
use Doctrine\ORM\EntityManagerInterface;
use RocketLabs\SellerCenterSdk\Core\Client;
use RocketLabs\SellerCenterSdk\Core\Configuration;
use RocketLabs\SellerCenterSdk\Endpoint\Endpoints;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class Dafiti extends CoreService
{
    protected $access_token;
    protected $HTTPclient;

    public function __construct(HttpClientInterface $client, EntityManagerInterface $em)
    {
        $this->em         = $em;
        $this->HTTPclient = $client;
        $writer = new \Zend\Log\Writer\Stream(dirname(__DIR__).'/../var/log/dafiti.log');
        $this->logger = new \Zend\Log\Logger();
        $this->logger->addWriter($writer,1);
    }

    public function sendProduct(string $sku)
    {
        $product = $this->em->getRepository('App\Entity\Product')->findOneBy(['sku' => $sku]);
        $connect = $this->em->getRepository('App\Entity\Connector')->findByClient($product->getClient()->getStrategy(),'out','dafiti');
        $history = $this->em->getRepository('App\Entity\ProductHistory')->findByProduct($product->getSku(),$connect);     

        // Recorro y envio los productos a magento configurables y simples
        // $mapping = new DafitiMapping();
        // $prod    = $mapping->product($product);

        // Inicio del log
        $this->logger->info("================{$product->getSku()}=================");
        $this->logger->info(["URL" => $connect->getOutputUrl(), "Email" => $connect->getUserEmail(), "Token" => $connect->getToken()]);

        $client = Client::create(new Configuration($connect->getOutputUrl(), $connect->getUserEmail(), $connect->getToken()));
        
        if (empty($history) || is_null($history)) {
            $category = $this->attribute($product, 'dafiti', 'category');
            $brand    = $this->attribute($product, 'dafiti', 'brand');
            $size     = $this->attribute($product, 'dafiti', 'size');
            
            if (is_null($size) || is_null($brand) || is_null($category))
                return null;

            if ($size == 'indefinido' || $brand == 'indefinido' || $category == 'indefinido')
                return null;
            
            $res_product = $this->productCreate($product, $product->getParent()->getSku())->build()->call($client);
            if (!empty($product->getImages())) {
                foreach ($product->getImages() as $img) {
                    Endpoints::product()->image($product->getSku())->addImage($img)->build()->call($client);
                }
            }
        }else{
            $res_product = $this->productUpdate($product)->build()->call($client);
        }
        
        // Guadado de historial de producto
        // $this->saveHistory($product, $connect, $history, $res_product);
        
        return null;
    }

    public function productCreate($entity, $parent = null)
    {
        $response = Endpoints::product()->productCreate();
        // $brand           = 'Melissa'; // Please change the brand
        // $primaryCategory = 1384; // Please change the primary category        
        $category = $this->attribute($entity, 'dafiti', 'category');
        $brand    = $this->attribute($entity, 'dafiti', 'brand');        
        $size     = $this->attribute($entity, 'dafiti', 'size');

        $response->newProduct()
            ->setName($entity->getName())
            ->setSellerSku($entity->getSku())
            // ->setStatus(0)
            // ->setParentSku($parent)
            ->setVariation($size->getValue())
            ->setPrimaryCategory($category->getCode())
            ->setDescription(html_entity_decode(strip_tags($entity->getDescription())))
            ->setBrand($brand->getValue())
            ->setPrice(number_format($entity->getPrice(), 2, '.', ''))
            ->setSalePrice(number_format($entity->getSpecialPrice(), 2, '.', ''))
            ->setQuantity(intval($entity->getStock()))
            ->setSaleStartDate(new \DateTime('now'))
            ->setProductData(
                [
                    "Color"             => "Indefinido",
                    "ColorFamily"       => "Blanco",
                    "ColorNameBrand"    => "Indefinido",
                    "Gender"            => "Unisex",
                    "Occasion"          => "Casual",
                    "Season"            => "Todas las temporadas",
                    "SkuSupplierConfig" => $entity->getParent()->getSku(),
                ]
            );
        return $response;
    }

    public function productUpdate($entity)
    {
        $response = Endpoints::product()->productUpdate();

        $response
            ->updateProduct($entity->getSku())
            ->setPrice(number_format($entity->getPrice(), 2, '.', ''))
            ->setQuantity(intval($entity->getStock()))
            // ->setSalePrice(number_format(    $entity->getSpecialPrice(), 2, '.', ''))
            // ->setSaleStartDate(new \DateTime('now'))
            // ->setSaleEndDate((new DateTime('now'))->modify('+5 day'))
            ;

        return $response;
    }
}