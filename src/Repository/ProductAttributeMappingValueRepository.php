<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Attribute;
use App\Entity\Connector;
use App\Entity\ConnectorAttribute;
use App\Entity\ProductAttributeMapping;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\ProductAttributeMappingValue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method ProductAttributeMappingValue|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductAttributeMappingValue|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductAttributeMappingValue[]    findAll()
 * @method ProductAttributeMappingValue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductAttributeMappingValueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProductAttributeMappingValue::class);
    }

    public function addMapping(ConnectorAttribute $conn_attr, $mapping_value, ProductAttributeMapping $mapping = null)
    {
        // variable con function de guardado de attribute
        $save_mapping = function(ConnectorAttribute $conn_attr, $name){
            $mapping = new ProductAttributeMapping();
            $mapping->setAttribute($conn_attr->getAttribute());
            $mapping->setClient($conn_attr->getConnector()->getClient());
            // $mapping->setName(strtolower(uniqid()));
            $mapping->setName($name);
            return $mapping;
        };

        $save_attribute = function(ProductAttributeMapping $mapping, ConnectorAttribute $conn_attr, $value){
            $mapping_value = new ProductAttributeMappingValue();
            $mapping_value->setConnector($conn_attr->getConnector());
            $mapping_value->setValue($value);
            $mapping_value->setName($value);
            $mapping->addMappingValue($mapping_value);
            $this->_em->persist($mapping);
            $this->_em->flush();
            return $mapping;
        };
        
        // $qb_mapping = $this->createQueryBuilder('pamv')
        //     ->select("pamv")
        //     ->join('pamv.attribute_mapping','am')
        //     ->where('pamv.connector = :conn_id')
        //     ->andWhere('am.attribute = :attr_id')
        //     ->andWhere('pamv.value = :value')
        //     ->setParameter('conn_id', $conn_attr->getConnector()->getid())            
        //     ->setParameter('attr_id', $conn_attr->getAttribute()->getId())
        //     ->setParameter('value', $mapping_value)
        //     ->getQuery()
        //     ->getResult();

        $qb_mapping = $this->findValueByConnector($conn_attr->getConnector(), $conn_attr->getAttribute(), $mapping_value);
        
        // dd($mapping, count($qb_mapping));
        if (is_null($mapping)) {
            if (is_null($qb_mapping)) { // verificar si no existe el attributo "crearlo"
                $response_mapping = $save_attribute($save_mapping($conn_attr, $mapping_value), $conn_attr, $mapping_value);
            }elseif (isset($qb_mapping)) { // verificar si el attributo ya existe en un mapeo   
                $response_mapping = $qb_mapping->getAttributeMapping();
            }elseif (count($qb_mapping) > 1) { // verificar si el attributo ya existe pero otros de sus atributos es diferente "guardarlo como un nuevo attributo"   
                // dd("null,>1",$mapping, $qb_mapping);
            }
        }else{
            if (is_null($qb_mapping)) { // verificar si no existe el attributo "crearlo"
                $response_mapping = $save_attribute($mapping, $conn_attr, $mapping_value);
            }elseif (isset($qb_mapping)) { // verificar si el attributo ya existe en un mapeo   
                if ($qb_mapping->getAttributeMapping()->getId() != $mapping->getId()) {
                    $response_mapping = $save_attribute($qb_mapping->getAttributeMapping(), $conn_attr, $mapping_value);
                }else{
                    $response_mapping = $mapping;
                }
            }elseif (count($qb_mapping) > 1) { // verificar si el attributo ya existe pero otros de sus atributos es diferente "guardarlo como un nuevo attributo"   
                // dd("not null,>1");
            }
        }
        return isset($response_mapping) ? $response_mapping : null;
    }

    public function findValueByConnector(Connector $conn, Attribute $attr, $value = null)
    {
        $qb = $this->createQueryBuilder('pamv')
            ->join('pamv.attribute_mapping','am')
            ->where('pamv.connector = :conn_id')
            ->andWhere('am.attribute = :attr_id')
            ->andWhere('pamv.value = :value')
            ->setParameter('conn_id', $conn->getId())            
            ->setParameter('attr_id', $attr->getId())
            ->setParameter('value', $value);
        return $qb->getQuery()->getOneOrNullResult();
    }

    public function getRequiredAttributesByProduct(int $product_id, int $conn_id, $type = 'product')
    {
        return $this->createQueryBuilder('pamv')
                    ->select('a.strategy,a.code,pamv.value,pamv.name')
                    ->join('pamv.attribute_mapping', 'pam')
                    ->join('pam.product_attributes', 'pa')
                    ->join('pa.product', 'p')
                    ->join('pamv.connector', 'conn')
                    ->join('pam.attribute','a')
                    ->where('p.id = :prod_id')
                    ->andWhere('conn.id = :conn_id')
                    ->andWhere('a.type = :type')
                    ->setParameter('prod_id', $product_id)
                    ->setParameter('conn_id', $conn_id)
                    ->setParameter('type', $type)
                    ->getQuery()
                    ->getResult();

    }
}
