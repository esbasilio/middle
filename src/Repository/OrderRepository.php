<?php

namespace App\Repository;

use App\Entity\Order;
use App\Entity\Connector;
use App\Repository\CoreRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;

/**
 * @method Order|null find($id, $lockMode = null, $lockVersion = null)
 * @method Order|null findOneBy(array $criteria, array $orderBy = null)
 * @method Order[]    findAll()
 * @method Order[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry, Security $security)
    {
        $this->security = $security;
        parent::__construct($registry, Order::class);
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('o');

        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $query = $r
            ->select("o,i,c,a")
            ->join('o.connector','c')
            ->join('o.items','i')
            ->join('c.application','a')
            ->join('c.client', 'cl')
            ->where('cl.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser)
            ;
        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->andWhere($r->expr()->orX(
                $r->expr()->like('o.invoice_id', ':search'),
                $r->expr()->like('o.reference_id', ':search'),
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

    // /**
    //  * @return Order[] Returns an array of Order objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    public function findOne()
    {
        $query = $this->createQueryBuilder('o')
            ->select("o.updated")
            ->orderBy('o.updated', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        return $query;
    }

    public function findByUpdated(Connector $connector, $date)
    {
        $r = $this->createQueryBuilder('o');
        $query = $r
            ->leftJoin("o.order_histories","h")
            ->where('o.client = :client_id')
            ->setParameter('date', $date)
            ->setParameter('status', "warning")
            ->setParameter('client_id', $connector->getClient()->getId())
            ->orderBy('o.updated', 'ASC');

        $query->andWhere(
            $r->expr()->orX(
                $r->expr()->gte('o.created', ':date'),
                $r->expr()->andX(
                    $r->expr()->lt('h.failed_attempts', '3'),
                    $r->expr()->eq('h.status', ':status')
                )
            )
        );

        return $query->getQuery()->getResult();
    }

    public function totalOrders()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();
        
        $r = $this->createQueryBuilder('o');
        $query = $r ->select('sum(o.grand_total)')
        ->join('o.connector', 'oc')
        ->join('oc.client', 'cl')
        ->Where('cl.id = :idClientByUser')
        ->andWhere('o.created BETWEEN :bMonth AND :eMonth')
        ->setParameter("idClientByUser", $idClientByUser)
        ->setParameter('bMonth', new \DateTime('midnight first day of this month'))
        ->setParameter('eMonth', new \DateTime('now'));

        return $query->getQuery()->getSingleScalarResult();
    }

    public function lastOrdersWidget()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $r = $this->createQueryBuilder('o');
        $query = $r ->select('a.name as application, o.invoice_id, o.grand_total, o.created, a.id')
        ->join('o.connector', 'c')
        ->join('c.application', 'a')
        ->join('c.client', 'cl')
        ->where('cl.id = :idClientByUser')
        ->setParameter("idClientByUser", $idClientByUser)
        ->setFirstResult(0)
        ->setMaxResults(9);

        return $query->getQuery()->getResult();
    }
}
