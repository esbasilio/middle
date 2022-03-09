<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Attribute;
use App\Entity\ProductAttribute;
use App\Entity\ConnectorAttribute;
use App\Repository\CoreRepository;
use Symfony\Component\Security\Core\Security;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ProductAttribute|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductAttribute|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductAttribute[]    findAll()
 * @method ProductAttribute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductAttributeRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry, Security $security)
    {
        $this->security = $security;
        parent::__construct($registry, ProductAttribute::class);
    }


    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('pa');

        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $query = $r
            ->select("pa,a,p,am")
            ->join('pa.attribute','a')
            ->leftJoin('pa.attribute_mapping','am')
            ->join('pa.product','p')
            ->leftJoin('p.client','c')
            ->where('c.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser)
            // ->andWhere(
            //     $r->expr()->orX(
            //         $r->expr()->isNull('pa.attribute_mapping')
            //     )
            // )
            ;
        
        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->andWhere($r->expr()->orX(
                $r->expr()->like('p.name', ':search'),
                $r->expr()->like('p.sku', ':search'),
                $r->expr()->like('p.stock', ':search'),
                $r->expr()->like('p.price', ':search')
                // $r->expr()->like('m.name', $r->expr()->literal("%$search%"))
            ))
            ->setParameter('search', "%$search%");
        }

        if (!is_null($order_by) and count($order_by) > 0) {
            $query->orderBy("{$order_by['name']}", $order_by['type']);
        }
        $dql = $query->getQuery()->setHydrationMode(\Doctrine\ORM\AbstractQuery::HYDRATE_ARRAY);
        $results = $this->paginate($dql, $first_result, $max_results);
        return ['results' => $results, 'query' => $query];
    }

    /**
     * @param ConnnectorAttribute|int $conn_attr
     * @param Product $product
     * @param Attribute $attr
     * @param string|int $value
     */
    public function addAttribute($conn_attr, Product $product, Attribute $attr, $value)
    {
        if (is_numeric($conn_attr))
            $conn_attr = $this->_em->getRepository('App\Entity\ConnectorAttribute')->find($conn_attr);
        
        $exception = in_array($attr->getInputType(),["array"]);
        $prod_attr = $this->findOneBy(['product' => $product, 'attribute' => $attr]);
        
        if (empty($prod_attr)) {
            $prod_attr = new ProductAttribute();
            $prod_attr->setAttribute($attr);
            $prod_attr->setProduct($product);
        }

        // if ($prod_attr->getAttribute()->getIsMappingValue()) {
        //     $prod_attr_value = $this->_em->getRepository('App\Entity\ProductAttributeMappingValue')->findValueByConnector($conn_attr->getConnector(),$attr,$value);
            
        //     if (is_null($prod_attr_value)){
        //         $prod_attr = ($exception == true) ? $new_prod_attr($product, $attr) : $prod_attr;
        //         $mapping = $this->_em->getRepository('App\Entity\ProductAttributeMappingValue')->addMapping($conn_attr, trim($value), $prod_attr->getAttributeMapping());
        //         $prod_attr->setAttributeMapping($mapping);

        //         $mapping_value = (count($prod_attr->getMappingValues()) > 0) ? $prod_attr->getMappingValues() : [];
        //         if (array_key_exists($conn_attr->getConnector()->getApplication()->getStrategy(),$mapping_value)) {
        //             unset($mapping_value[$conn_attr->getConnector()->getApplication()->getStrategy()]);   
        //         }
        //         $mapping_value[$conn_attr->getConnector()->getCode()] = trim($value);
        //         $prod_attr->setMappingValues($mapping_value);
        //     }
        // }

        $prod_attr->setValue($value);

        $this->_em->persist($prod_attr);
        $this->_em->flush();

        return true;
    }

    public function findByProduct(int $product_id, $type = null)
    {
        $columns = ['product_attribute.value', 'attribute.id as attribute_id', 'attribute.code', 'attribute.label', 'attribute.input_type'];
        $query = $this
            ->createQueryBuilder('product_attribute')
            ->join('product_attribute.product', 'product')
            ->join('product_attribute.attribute', 'attribute')
            ->where('product.id = :product_id')
            ->setParameter('product_id', $product_id);

        if ($type != null) {
            $query
                ->andWhere('attribute.type = :attribute_type')
                ->setParameter('attribute_type', $type);
        }

        return $query
            ->select(implode(',', $columns))
            ->getQuery()
            ->getResult();
    }
}
