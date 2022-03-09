<?php

namespace App\Repository;

use App\Entity\Connector;
use App\Entity\ConnectorHistory;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method ConnectorHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConnectorHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConnectorHistory[]    findAll()
 * @method ConnectorHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConnectorHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConnectorHistory::class);
    }

    // /**
    //  * @return ConnectorHistory[] Returns an array of ConnectorHistory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    public function lastSync(Connector $conn, $type)
    {
        return $this->createQueryBuilder('ch')
            ->join("ch.connector", "c")
            ->andWhere('c.id = :conn')
            ->andWhere('ch.type = :type')
            ->setParameter('conn', $conn->getId())
            ->setParameter('type', $type)
            ->orderBy('ch.execution','DESC')
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function saveHistory(Connector $connector, $data)
    {
		$history = $this->findOneBy(['connector' => $connector->getId(), "type" => $data['type']]);
        if (empty($history) || is_null($history)){
			$history = new ConnectorHistory();
		}
        
		if (isset($data['extra']) || !empty($data['extra'])) {
            $history->setExtra($data['extra']);
		}
        
        $history->setType($data['type']);
        $history->setConnector($connector);
        $history->setExecution($data['execution_at']);
        $history->setMessage((isset($data['message']) || !empty($data['message'])) ? json_encode($data['message']) : null);
        
        $this->_em->persist($history);
        $this->_em->flush();
        return $history;
    }
}
