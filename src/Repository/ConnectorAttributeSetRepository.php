<?php

namespace App\Repository;

use App\Entity\Connector;
use App\Entity\ProductAttributeSet;
use App\Entity\ConnectorAttributeSet;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method ConnectorAttributeSet|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConnectorAttributeSet|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConnectorAttributeSet[]    findAll()
 * @method ConnectorAttributeSet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConnectorAttributeSetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConnectorAttributeSet::class);
    }
}
