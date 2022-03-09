<?php

namespace App\Repository;

use App\Entity\Order;
use App\Entity\Connector;
use App\Entity\OrderHistory;
use App\Repository\CoreRepository;
use App\Service\CoreService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;

/**
 * @method OrderHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderHistory[]    findAll()
 * @method OrderHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderHistoryRepository extends CoreRepository
{
    
    public function __construct(
        ManagerRegistry $registry,
        CoreService $coreService,
        Security $security
    )
    {
        parent::__construct($registry, OrderHistory::class);
        $this->security = $security;
        $this->core_ser = $coreService;
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('oh');

        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $query = $r
            ->select("oh,o,c,a")
            ->join('oh.connector','c')
            ->join('oh.order','o')
            ->join('c.application','a')
            ->join('c.client', 'cl')
            ->where('cl.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser)
            ;
        
        // WHERE DE BUSQUEDA
        if (is_array($search) and count($search)) {
            $query = $this->searchCriteria($search, $query);
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


    public function saveHistory(Order $order, Connector $connector, $type = "output", $data)
    {
		$history = $this->findOneBy(['order' => $order->getId(), 'connector' => $connector->getId()]);
		if (empty($history) || is_null($history)){
            $history = new OrderHistory();
		}

        if (isset($data['status']) || !empty($data['status'])) {
            $history->setStatus($this->core_ser->statusCode($data['status']));
        }

        // warning, success, error
        if (in_array($history->getStatus(),["warning", "error"])) {
            $attempt = ($history->getFailedAttempts() == 0) ? 1 : $history->getFailedAttempts() + 1;
            $history->setFailedAttempts($attempt);
            
            if ($history->getFailedAttempts() >= 3) {
                $history->setStatus("error");
            } else {
                $history->setStatus("warning");
            }
        }

        $history->setMessage((isset($data['message']) || !empty($data['message'])) ? json_encode($data['message']) : null);
        $history->setReferenceId((isset($data['reference_id']) || !empty($data['reference_id'])) ? json_encode($data['reference_id']) : null);
        $history->setConnector($connector);
        $history->setOrder($order);
        $history->setType($type);
        $this->_em->persist($history);
        $this->_em->flush();
        return $history;
    }
}
