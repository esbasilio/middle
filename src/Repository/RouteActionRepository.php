<?php

namespace App\Repository;

use App\Entity\RouteAction;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method RouteAction|null find($id, $lockMode = null, $lockVersion = null)
 * @method RouteAction|null findOneBy(array $criteria, array $orderBy = null)
 * @method RouteAction[]    findAll()
 * @method RouteAction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RouteActionRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RouteAction::class);
    }

    // /**
    //  * @return RouteAction[] Returns an array of RouteAction objects
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
    public function findOneBySomeField($value): ?RouteAction
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
