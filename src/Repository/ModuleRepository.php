<?php

namespace App\Repository;

use App\Entity\Module;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Security;

/**
 * @method Module|null find($id, $lockMode = null, $lockVersion = null)
 * @method Module|null findOneBy(array $criteria, array $orderBy = null)
 * @method Module[]    findAll()
 * @method Module[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ModuleRepository extends CoreRepository
{
    private $session;
    private $security;

    public function __construct(
        ManagerRegistry $registry,
        Security $security
    )
    {
        parent::__construct($registry, Module::class);
        $this->security    = $security;
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('m');

        $query = $r
            ->select("m,s,p")
            ->join('m.section','s')
            ->leftJoin('m.parent','p')
            ;

        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->where($r->expr()->orX(
                $r->expr()->like('m.path', ':search'),
                $r->expr()->like('m.name', ':search')
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

    public function findPermission(array $roles)
    {
        return $this->createQueryBuilder('m')
            // ->select("r")
            // ->join('m.section','s')
            // ->join('m.enviroment','e')
            ->join('m.permissions','p')
            ->join('p.roles','rs')
            // ->join('p.actions','a')
            ->andWhere('rs.code IN (:roles)')
            ->andWhere('m.is_active = :active')
            ->andWhere('m.in_menu = :active')
            // ->andWhere('e.path = :enviroment')
            ->setParameter('active', true)
            ->setParameter('roles', $roles)
            // ->setParameter('enviroment', $enviroment)
            ->orderBy('m.order_by', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * [findPath description]
     * @param  string $enviroment [description]
     * @param  string $module      [description]
     * @return [type]             [description]
     */
    public function findPath(string $module)
    {
        $user = $this->security->getToken()->getUser();
        return $this->createQueryBuilder('m')
            ->join('m.section','s')
            // ->join('m.enviroment','e')
            ->join('m.permissions','p')
            ->join('p.roles','rs')
            // ->join('p.routes','r')
            ->andWhere('m.is_active = :active')
            // ->andWhere('e.path = :enviroment')
            ->andWhere('m.path = :module')
            ->andWhere('rs.code IN (:roles)')
            ->setParameter('active', true)
            // ->setParameter('enviroment', $enviroment)
            ->setParameter('module', $module)
            ->setParameter('roles', $user->getRoles())
            ->orderBy('m.order_by', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
}
