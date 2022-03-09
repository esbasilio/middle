<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Connector;
use App\Repository\CoreRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry, Security $security)
    {
        $this->security = $security;
        parent::__construct($registry, Product::class);
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null, $serach_by_sku = false)
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();
        $query = $this->createQueryBuilder('p')
            ->select("p,a,c,v,pc,conn")
            ->join('p.client','c')
            ->leftJoin('p.connectors','pc')
            ->leftJoin('pc.connector', 'conn', 'WITH', 'conn.id = pc.connector')
            ->leftJoin('p.attribute_set','a');

        if($serach_by_sku){
            $query->leftJoin('p.variations','v');
        }else{
            $query->join('p.variations','v');
        }
        /*$query
            ->where('c.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser)
            ->andWhere(
                $query->expr()->orX(
                    $query->expr()->isNull('p.parent')
                )
            )*/
            ;
        
        // WHERE DE BUSQUEDA
        if (is_array($search) and count($search)) {
            $query = $this->searchCriteria($search, $query);
        }

        if (!is_null($order_by) and count($order_by)) {
            $query->orderBy("{$order_by['name']}", $order_by['type']);
        }
        
        $dql = $query->getQuery()->setHydrationMode(\Doctrine\ORM\AbstractQuery::HYDRATE_ARRAY);
        $results = $this->paginate($dql, $first_result, $max_results);
        
        return ['results' => $results, 'query' => $query];
    }

    public function findByUpdated(Connector $conn, \DateTime $date)
    {
        $query = $this->createQueryBuilder('p');

        $query
            //->join('p.histories','h')
            // ->join('p.variations','v')
            ->join('p.connectors','c')
            ->where(
                $query->expr()->andX(
                    $query->expr()->orX(
                        $query->expr()->gte('p.updated', ':date'),
                        // $query->expr()->gte('v.updated', ':date')
                    )
                )
            )
            ->andWhere('c.connector = :conn_id')
            // ->andWhere('p.last_connector != :conn_id')
            ->setParameter('conn_id', $conn->getId())
            ->setParameter('date', $date->format('Y-m-d H:i:s'));

        return $query->orderBy('p.updated', 'ASC')->getQuery()->getResult();
    }

    public function updateData(Connector $connector, Product $product, $data)
    {       
        if (isset($data["reference_id"]) && !is_null($data["reference_id"]) ) {
            $reference_ids = (is_array($product->getReferenceIds())) ? $product->getReferenceIds() : array();
            if (array_key_exists($connector->getApplication()->getStrategy(),$reference_ids)) {
                unset($reference_ids[$connector->getApplication()->getStrategy()]);   
            }
            $reference_ids[$connector->getCode()] = $data["reference_id"];
            $product->setReferenceIds($reference_ids);
        }

        $this->_em->persist($product);
        $this->_em->flush();
        return $product;
    }


    public function totalProducts()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $r = $this->createQueryBuilder('p');
        $totalProducts = $r ->select('count(p.id)')
        ->where('p.parent is NULL')
        ->andWhere('p.client = :idClientByUser')
        ->setParameter("idClientByUser", $idClientByUser);

        return $totalProducts->getQuery()->getSingleScalarResult();
    }

    public function noStockProducts()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $r = $this->createQueryBuilder('p');
        $noStockProducts = $r ->select('count(p.id)')  
        ->where('p.stock is NULL AND p.parent is NULL')
        ->andWhere('p.client = :idClientByUser')
        ->setParameter("idClientByUser", $idClientByUser);
        
        return $noStockProducts->getQuery()->getSingleScalarResult();
    }
    
    public function lastProductsWidget()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $r = $this->createQueryBuilder('p');
        $lastProductsWidget = $r ->select('a.name as application, p.name, p.price, p.stock, p.sku, p.updated, a.id')
        ->join('p.connectors', 'c')
        ->join('c.connector', 'cc')
        ->join('cc.application', 'a')
        ->where('p.parent is NULL')
        ->andWhere('p.client = :idClientByUser')
        ->setParameter("idClientByUser", $idClientByUser)
        ->orderBy('p.updated', 'DESC')
        ->setFirstResult(0)
        ->setMaxResults(5);
        return $lastProductsWidget->getQuery()->getResult();
    }

    public function getSingleProducts()
    {
        $r = $this->createQueryBuilder('p');
        $list = $r ->select('p.sku,p.name,p.stock')
        ->where('p.parent is NOT NULL');        
        return $list->getQuery()->getScalarResult();
    }
}
