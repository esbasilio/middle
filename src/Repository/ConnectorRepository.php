<?php

namespace App\Repository;

use App\Entity\Connector;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;

/**
 * @method Connector|null find($id, $lockMode = null, $lockVersion = null)
 * @method Connector|null findOneBy(array $criteria, array $orderBy = null)
 * @method Connector[]    findAll()
 * @method Connector[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConnectorRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry, Security $security)
    {
        $this->security = $security;
        parent::__construct($registry, Connector::class);
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('c');

        $query = $r->select("c,a,cli")
            ->join('c.application','a')
            ->join('c.client','cli')
        ;

        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->where($r->expr()->orX(
                $r->expr()->like('a.name', ':search'),
                $r->expr()->like('c.name', ':search'),
                $r->expr()->like('cli.code', ':search')
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

    
    public function findByDrive($type = "input", $drive = "product")
    {
        $r = $this->createQueryBuilder('c');
        $query = $r->join('c.application','a')
            ->join('c.client','cl')
            ->where('c.is_active = true')
            ->andWhere('c.enabled_cron = true')
            ->andWhere("c.{$type}_type LIKE :drive")
            ->setParameter('drive', "%$drive%");

        return $query->getQuery()->getResult(); 
    }

    public function findByClient($client, $type, $strategy)
    {
        return $this->createQueryBuilder('c')
            ->join('c.application','a')
            ->join('c.client','cli')
            ->andWhere('a.strategy = :strategy')
            ->andWhere('cli.strategy = :client')
            ->andWhere('a.method LIKE :type')
            ->setParameter('strategy', $strategy)            
            ->setParameter('client', $client)
            ->setParameter('type', "%$type%")
            ->getQuery()
            // ->getResult()
            ->getOneOrNullResult()
        ;
    }

    public function clientConnector()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $r = $this->createQueryBuilder('c');
        $query = $r->join('c.client','cli')
        ->where('cli.id = :idClientByUser')
        ->setParameter("idClientByUser", $idClientByUser);

        return $query->getQuery()->getResult();
    } 

    public function connectorInfo()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $r = $this->createQueryBuilder('c');
        $query = $r ->select('c.code, cl.name as client, a.name as application, count(p) as products, c.is_active')
        ->addSelect(
            '(SELECT count(co)
            FROM App\Entity\Order co
            WHERE co.connector = c.id
            ) AS orders')
        ->addSelect(    
            '(SELECT ch.execution
            FROM App\Entity\ConnectorHistory ch
            WHERE ch.connector = c.id
            AND ch.type = :product_input
            ) AS last_products_in')
        ->addSelect(
            '(SELECT ch1.execution
            FROM App\Entity\ConnectorHistory ch1
            WHERE ch1.connector = c.id
            AND ch1.type = :product_output
            ) AS last_products_out')
        ->addSelect(
            '(SELECT ch2.execution
            FROM App\Entity\ConnectorHistory ch2
            WHERE ch2.connector = c.id
            AND ch2.type = :order_input
            ) AS last_order_in')
        ->addSelect(
            '(SELECT ch3.execution
            FROM App\Entity\ConnectorHistory ch3
            WHERE ch3.connector = c.id
            AND ch3.type = :order_output
            ) AS last_order_out')
        ->join('c.client','cl')
        ->leftJoin('c.products_connector', 'p')
        ->join('c.application', 'a')
        ->groupBy('c.id')
        ->andWhere('cl.id = :idClientByUser')
        ->setParameter("idClientByUser", $idClientByUser)
        ->setParameter("product_input", "product-input")
        ->setParameter("product_output", "product-output")
        ->setParameter("order_input", "order-input")
        ->setParameter("order_output", "order-output");

        return $query->getQuery()->getResult();
    }

    public function findByClientStrategy($strategy)
    {
        return $this->createQueryBuilder('c')
            ->join('c.application','a')
            ->where('a.strategy = :strategy')
            ->setParameter('strategy', $strategy)
            ->getQuery()
            ->getResult()
        ;
    }

}
