<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Connector;
use App\Service\CoreService;
use App\Entity\ProductHistory;
use App\Repository\CoreRepository;
use Symfony\Component\Security\Core\Security;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ProductHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductHistory[]    findAll()
 * @method ProductHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductHistoryRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry,CoreService $coreService, Security $security)
    {
        $this->security = $security;
        parent::__construct($registry, ProductHistory::class);
        $this->core_ser = $coreService;
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $r = $this->createQueryBuilder('ph');
        $query = $r->select("ph,p,conn,a,c")
            ->join('ph.product', 'p')
            ->join('p.client','c')
            ->leftJoin('ph.connector','conn')
            ->leftJoin('conn.application','a')
            ->where('c.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser);

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

    public function findByProduct(Connector $conn, Product $prod)
    {
        return $this->createQueryBuilder('ph')
            ->where('ph.product = :product')
            ->andWhere('ph.connector = :connector')
            ->setParameter('product', $prod->getId())
            ->setParameter('connector', $conn->getId())
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function lastSync(Connector $conn, $type, $status = 'success')
    {
        return $this->createQueryBuilder('ph')
            ->join("ph.connector", "c")
            ->andWhere('ph.type = :type')
            ->andWhere('c.id = :conn')
            ->setParameter('type', $type)
            ->setParameter('conn', $conn->getId())
            ->orderBy('ph.updated','DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function saveHistory(Product $product, Connector $connector, $type = "output", $data)
    {
		$history = $this->findOneBy(['connector' => $connector->getId(), 'product' => $product->getId()]);
		
		if (empty($history)) {
			$history = new ProductHistory();
            $history->setConnector($connector);
            $history->setProduct($product);
		}
		
		if (!empty($data['reference_id'])) {
            $history->setReferenceId($data['reference_id']);
		}
        
		if (!empty($data['url'])) {
            $history->setUrl($data['url']);
		}
        
        $history->setCreated(new \DateTime('NOW'));
		if (!empty($data['created_at'])) {
            $history->setCreated(new \DateTime($data['created_at']));
		}
        
        $history->setUpdated(new \DateTime('NOW'));
		if (!empty($data['updated_at'])) {
            $history->setUpdated(new \DateTime($data['updated_at']));
		}

        if (!empty($data['status'])) {
            $history->setStatus($this->core_ser->statusCode($data['status']));
        }

        // warning, success, error
        if (in_array($history->getStatus(),["warning"])) {
            $attempt = ($history->getFailedAttempts() == 0) ? 1 : $history->getFailedAttempts() + 1;
            $history->setFailedAttempts($attempt);
            if ($history->getFailedAttempts() >= 3) $history->setStatus("error");
        }
        
        $history->setMessage((!empty($data['message'])) ? json_encode($data['message']) : null);
        $history->setType($type);
        
        $this->_em->persist($history);
        $this->_em->flush();

        if (!empty($data['reference_id'])) {
            $this->_em->getRepository('App\Entity\Product')->updateData($connector, $product, $data);
		}
        
        return $history;
    }
}
