<?php

namespace App\Repository;

use App\Entity\Route;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Security;

/**
 * @method Route|null find($id, $lockMode = null, $lockVersion = null)
 * @method Route|null findOneBy(array $criteria, array $orderBy = null)
 * @method Route[]    findAll()
 * @method Route[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RouteRepository extends CoreRepository
{
    private $session;
    private $security;
    private $user;

    public function __construct(
        ManagerRegistry $registry,
        Security $security
    )
    {
        parent::__construct($registry, Route::class);
        $this->security = $security;
        $this->user = $this->security->getToken()->getUser();
    }

    // /**
    //  * @return Route[] Returns an array of Route objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Route
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
   
    public function findPermissionByModule(string $module)
    {
        return $this->createQueryBuilder('r')
            ->join('r.permissions','p')
            ->join('p.module','m')
            ->join('p.roles','rs')
            ->where('rs.code IN (:roles)')
            ->andWhere('m.strategy = :module')
            ->setParameter('roles', $this->user->getRoles())
            ->setParameter('module', $module)
            ->getQuery()
            ->getResult()
        ;
    }

    
    public function findCurrentPath(string $env, string $module, string $action)
    {
        // dump($env,$module,$action);
        return $this->createQueryBuilder('r')
            // ->select("a.name as action","m.name as title","m.path","m.icon","s.color")
            // ->join('a.routes','r')
            ->join('r.enviroment','e')
            ->join('r.action','a')
            ->join('r.permissions','p')
            ->join('p.module','m')
            ->join('p.roles','rs')
            // ->andWhere('m.is_active = :active')
            ->andWhere('e.path = :env')
            ->andWhere('m.path = :module')
            ->andWhere('a.path = :action OR r.custom_path = :action')
            ->andWhere('rs.code IN (:roles)')
            // ->setParameter('active', true)
            ->setParameter('env', $env)
            ->setParameter('module', $module)
            ->setParameter('action', $action)
            ->setParameter('roles', $this->user->getRoles())
            // ->orderBy('m.order_by', 'ASC')
            // ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult()
            // ->getResult()
        ;   
    }
}
