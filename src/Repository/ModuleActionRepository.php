<?php

namespace App\Repository;

use App\Entity\ModuleAction;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ModuleAction|null find($id, $lockMode = null, $lockVersion = null)
 * @method ModuleAction|null findOneBy(array $criteria, array $orderBy = null)
 * @method ModuleAction[]    findAll()
 * @method ModuleAction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ModuleActionRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ModuleAction::class);
    }

    // /**
    //  * @return ModuleAction[] Returns an array of ModuleAction objects
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
    public function findOneBySomeField($value): ?ModuleAction
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
