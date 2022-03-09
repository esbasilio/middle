<?php

namespace App\Repository;

use App\Entity\Action;
use App\Repository\CoreRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Security;

/**
 * @method Action|null find($id, $lockMode = null, $lockVersion = null)
 * @method Action|null findOneBy(array $criteria, array $orderBy = null)
 * @method Action[]    findAll()
 * @method Action[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActionRepository extends CoreRepository
{
    private $session;
    private $security;

    public function __construct(
        ManagerRegistry $registry,
        Security $security
    )
    {
        parent::__construct($registry, Action::class);
        $this->security = $security;
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('a');

        $query = $r->select("a");

        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->where($r->expr()->orX(
                $r->expr()->like('a.path', ':search'),
                $r->expr()->like('a.name', ':search'),
                $r->expr()->like('a.code', ':search')
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
}
