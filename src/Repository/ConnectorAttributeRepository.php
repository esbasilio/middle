<?php

namespace App\Repository;

use App\Entity\Connector;
use App\Entity\ConnectorAttribute;
use App\Repository\CoreRepository;
use App\Entity\ProductAttributeSet;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ConnectorAttribute|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConnectorAttribute|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConnectorAttribute[]    findAll()
 * @method ConnectorAttribute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConnectorAttributeRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConnectorAttribute::class);
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('ca');

        $query = $r->select("ca, c, a, cas, pas")
            ->join('ca.connector','c')
            ->leftJoin('ca.attribute','a')
            ->leftJoin('ca.connector_attribute_sets','cas')
            ->leftJoin('cas.attribute_set', 'pas', 'WITH', 'pas.id = cas.attribute_set')
            // ->groupBy('ca')
        ;

        // WHERE DE BUSQUEDA
        if (is_array($search) and count($search)) {
            $query = $this->searchCriteria($search, $query);
        }

        if (!is_null($order_by) and count($order_by) > 0) {
            $query->orderBy("{$order_by['name']}", $order_by['type']);
        }
        // CONSULTA DQL EN ARRAY
        $dql = $query->getQuery()->setHydrationMode(\Doctrine\ORM\AbstractQuery::HYDRATE_ARRAY);
        // PAGINAR RESULTADO
        $results = $this->paginate($dql, $first_result, $max_results);
        return ['results' => $results, 'query' => $query];
    }
   
    public function findByAttribute($application, $client, $attribute)
    {
        return $this->createQueryBuilder('ca')
            ->join('ca.connector','c')
            ->join('ca.attribute','attr')
            ->join('c.application','app')
            ->join('c.client','cli')
            ->andWhere('cli.id = :client')
            ->andWhere('app.id = :app')
            ->andWhere('attr.strategy = :attribute OR ca.code = :attribute OR ca.name = :attribute')
            ->setParameter('attribute', $attribute->getCode())
            ->setParameter('client', $client->getId())
            ->setParameter('app', $application->getId())
            ->getQuery()
            ->getResult()
        ;
    }

    public function findBytype($connector_id, $client_id, $type)
    {
        return $this->createQueryBuilder('ca')
            ->join('ca.connector','c')
            ->join('c.client','cli')
            ->join('ca.attribute','attr')
            ->andWhere('c.id = :connector')
            ->andWhere('cli.id = :client')
            ->andWhere('attr.type in (:type)')
            ->setParameter('connector', $connector_id)            
            ->setParameter('client', $client_id)
            ->setParameter('type', $type)
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * @param ConnnectorAttribute|int $connector_attr
     * @param string|int $value
     */
    public function addAttributeValue($connector_attr, $value)
    {
        if (is_numeric($connector_attr))
            $connector_attr = $this->find($connector_attr);

        if ($connector_attr->getAutoSaveAttributeValue()) {
            $attribute_values = (is_array($connector_attr->getAttributeValues())) ? $connector_attr->getAttributeValues() : array();
            $attr_key = array_search($value, array_column($attribute_values, "value"));
            if ($attr_key === false) {
                $attribute_values[] = ['value'=> $value, 'name' => $value];
                $connector_attr->setAttributeValues($attribute_values);
                $this->_em->persist($connector_attr);
                $this->_em->flush();
            }
        }
        
        return $connector_attr;
    }
}
