<?php

namespace App\Repository;

use App\Entity\Section;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Section|null find($id, $lockMode = null, $lockVersion = null)
 * @method Section|null findOneBy(array $criteria, array $orderBy = null)
 * @method Section[]    findAll()
 * @method Section[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SectionRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Section::class);
    }
    
    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('s');
        $query = $r->select("s");
        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->where($r->expr()->orX(
                $r->expr()->like('s.label', ':search'),
                $r->expr()->like('s.color', ':search'),
                $r->expr()->like('s.name', ':search'),
                $r->expr()->like('s.order_by', ':search')
                // $r->expr()->like('m.name', $r->expr()->literal("%$search%"))
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
    
    /**
     * [findPermission description]
     * @param  array  $roles      [description]
     * @param  string $enviroment [description]
     * @return [type]             [description]
     */
    public function findPermission(array $roles)
    {
        return $this->createQueryBuilder('s')
            ->select("s")
            ->join('s.modules','m')
            ->join('m.permissions','p')
            // ->join('m.enviroment','e')
            ->join('p.roles','rs')
            // ->andWhere('e.path = :enviroment')
            ->andWhere('rs.code IN (:roles)')
            ->andWhere('s.is_active = :active')
            ->andWhere('m.is_active = :active')
            ->andWhere('m.in_menu = :active')
            ->setParameter('roles', $roles)
            ->setParameter('active', true)
            // ->setParameter('enviroment', $enviroment)
            ->getQuery()
            ->getResult()
        ;
    }
}
