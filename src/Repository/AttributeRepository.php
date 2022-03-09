<?php

namespace App\Repository;

use App\Entity\Attribute;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Attribute|null find($id, $lockMode = null, $lockVersion = null)
 * @method Attribute|null findOneBy(array $criteria, array $orderBy = null)
 * @method Attribute[]    findAll()
 * @method Attribute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttributeRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Attribute::class);
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('a');

        $query = $r->select("a");

        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->where($r->expr()->orX(
                $r->expr()->like('a.name', ':search'),
                $r->expr()->like('a.code', ':search')
            ))
            ->setParameter('search', "%$search%");
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

    public function findByConnector(int $connector_id, int $attr_set_id = null, $type = 'product')
    {
        $columns = ['a.id', 'a.strategy', 'a.label', 'a.input_type', 'ca.code', 'ca.id as connector_attribute_id', 'ca.reference_id'];
        $query = $this->createQueryBuilder('a')
                    ->join('a.connector_attributes', 'ca')
                    ->join('ca.connector','conn')
                    ->where('conn.id = :c_id')
                    ->andWhere('a.type = :type')
                    ->setParameter('c_id', $connector_id)
                    ->setParameter('type', $type);


        if ($attr_set_id != null) {
            $query
                ->join('ca.connector_attribute_sets', 'cas')
                ->join('cas.attribute_set','product_attribute_set')
                ->andWhere('product_attribute_set.id = :pas_id')
                ->setParameter('pas_id', $attr_set_id);

            $columns[] = 'cas.is_required';
        }

        return $query
            ->select(implode(',', $columns))
            ->getQuery()
            ->getResult();
    }

}
