<?php

namespace App\Repository;

use App\Entity\ProductAttributeSet;
use App\Repository\CoreRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;

/**
 * @method ProductAttributeSet|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductAttributeSet|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductAttributeSet[]    findAll()
 * @method ProductAttributeSet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductAttributeSetRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry, Security $security)
    {
        $this->security = $security;
        parent::__construct($registry, ProductAttributeSet::class);
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('a');
        $idClientByUser = $this->security->getToken()->getUser()->getClient();
        
        $query = $r
            ->select("a,cli")
            ->join('a.client','cli')
            ->where('cli.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser)
            // ->join('a.attributes','attr')
        ;

        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->andWhere($r->expr()->orX(
                $r->expr()->like('a.name', ':search')
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

    public function getSetByClient()
    {
        $idClientByUser = $this->security->getToken()->getUser()->getClient();
        $dql = $this->createQueryBuilder('a')
            ->join('a.client','cli')
            ->where('cli.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser)
            ->getQuery()
            ->getResult();

        return $dql;
    }
}