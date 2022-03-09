<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * @method Module|null find($id, $lockMode = null, $lockVersion = null)
 * @method Module|null findOneBy(array $criteria, array $orderBy = null)
 * @method Module[]    findAll()
 * @method Module[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CoreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, $entity)
    {
        parent::__construct($registry, $entity);
    }

    public function paginate($query, $first_result = 0, $max_results = 10)
    {
        $paginator = new Paginator($query);
        $paginator->setUseOutputWalkers(false);
        $paginator->getQuery()->setFirstResult($first_result)->setMaxResults($max_results);
        
        return $paginator;
    }

    protected function searchCriteria($criterias, $qb)
    {   
        foreach ($criterias as $criteria_idx => $criteria) 
        {
            $relation = $criteria['relation'] ?? 'AND';
            $relation = strtoupper($relation);
            
            foreach ($criteria['filter_groups'] as $group_idx => $group)
            {
                $where = [];
                $group_relation = $group['relation'] ?? 'OR';
                $group_relation = strtoupper($group_relation);
                
                foreach ($group['filters'] as $filter_idx => $filter) {
                    $condition_type = $filter['condition_type'] ?? 'eq';
                    $condition_type = strtolower($condition_type);
                    $value = (is_array($filter['value']) && $condition_type != 'between') 
                        ? join(',', $filter['value']) 
                        : $filter['value'];
                    $field = $filter['field'];

                    switch ($condition_type) {
                        case 'like':
                            $where[] = $qb->expr()->orX($qb->expr()->like("{$field}", ":criteria_{$group_idx}_{$filter_idx}"));
                            $qb->setParameter(":criteria_{$group_idx}_{$filter_idx}", "%{$value}%");
                        break;
                        
                        case 'in':
                            $where[] = $qb->expr()->orX($qb->expr()->in("{$field}", ":criteria_{$group_idx}_{$filter_idx}"));
                            $qb->setParameter(":criteria_{$group_idx}_{$filter_idx}", "%{$value}%");
                        break;

                        case 'isnull':
                            $where[] = $qb->expr()->orX($qb->expr()->isNull("{$field}"));
                        break;

                        case 'isnotnull':
                            $where[] = $qb->expr()->orX($qb->expr()->isNotNull("{$field}"));
                        break;

                        case 'between':
                            $where[] = $qb->expr()->orX($qb->expr()->between("{$field}", "{$value[0]}", "{$value[1]}"));
                        break;
                        
                        default:
                            $where[] = $qb->expr()->orX($qb->expr()->eq("{$field}", ":criteria_{$group_idx}_{$filter_idx}"));
                            $qb->setParameter(":criteria_{$group_idx}_{$filter_idx}", "{$value}");
                        break;
                    }
                }
                
                switch ($relation) {
                    case 'AND':
                        $qb->andWhere(join(" {$group_relation} ", $where));
                    break;

                    case 'OR':
                        $qb->orWhere(join(" {$group_relation} ", $where));
                    break;
                }
            }
        }

        return $qb;
    }
}
