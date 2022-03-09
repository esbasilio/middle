<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Connector;
use App\Entity\ProductConnector;
use App\Repository\CoreRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProductConnector|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductConnector|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductConnector[]    findAll()
 * @method ProductConnector[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductConnectorRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProductConnector::class);
    }

    public function findByProduct($product)
    {
        return $this->createQueryBuilder('pc')
            ->join('pc.product','p')
            ->join('pc.connector','c')
            ->where('p.id = :id')
            ->setParameter('id', $product->getId())
            ->getQuery()
            ->getResult();
    }

    public function saveConnector(Connector $connector, Product $product, array $data)
    {
        $product_parent = (is_null($product->getParent())) ? $product : $product->getParent();
        $in_array = array_search("product", $connector->getOutputType());
        
        if ($in_array === false)
            return false;

        $prod_connect = $this->createQueryBuilder('pc')
            ->join('pc.product','p')
            ->join('pc.connector','c')
            ->where('p.sku = :sku')
            ->andWhere('c.id = :connector_id')
            ->setParameter('sku', $product_parent->getSku())
            ->setParameter('connector_id', $connector->getId())
            ->getQuery()
            ->getOneOrNullResult()
        ;

        if (empty($prod_connect) || is_null($prod_connect)){
			$prod_connect = new ProductConnector();
            $prod_connect->setConnector($connector);
            $prod_connect->setProduct($product_parent);
		}

        if (isset($data['stock'])) {
            $prod_connect->setStock($data['stock']);
        }

        if (isset($data['price'])) {
            $prod_connect->setPrice($data['price']);
        }

        if (isset($data['special_price'])) {
            $prod_connect->setSpecialPrice($data['special_price']);
        }

        if (isset($data['status'])) {
            $prod_connect->setIsActive($data['status']);
        }

        if (isset($data['options']) && is_array($data['options'])) {
            $prod_connect->setOptions($data['options']);
        }
        
        $site = $connector->getAttribute('sites');
        if (!empty($site)) {
            if (isset($data[$site->getCode()]) || !empty($data[$site->getCode()])) {
                $prod_connect->setSites($data[$site->getCode()]);
            }
        }
            
        $this->_em->persist($prod_connect);
        $this->_em->flush();
        return true;
    }

}
