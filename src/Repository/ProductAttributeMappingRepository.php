<?php

namespace App\Repository;

use App\Entity\ConnectorAttribute;
use App\Repository\CoreRepository;
use App\Entity\ProductAttributeMapping;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\ProductAttributeMappingValue;
use Symfony\Component\Security\Core\Security;


/**
 * @method ProductAttributeMapping|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductAttributeMapping|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductAttributeMapping[]    findAll()
 * @method ProductAttributeMapping[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductAttributeMappingRepository extends CoreRepository
{
    public function __construct(ManagerRegistry $registry, Security $security)
    {
        $this->security = $security;
        parent::__construct($registry, ProductAttributeMapping::class);
    }

    public function findByPage($first_result = 0, $max_results = 10, $search = null, $order_by = null)
    {
        $r = $this->createQueryBuilder('c');

        $idClientByUser = $this->security->getToken()->getUser()->getClient();

        $query = $r
            ->select("c.id,c.name,cli.name as client,a.label as attribute")
            ->join('c.client','cli')
            ->join('c.attribute','a')
            ->where('cli.id = :idClientByUser')
            ->setParameter("idClientByUser", $idClientByUser)
        ;

        // WHERE DE BUSQUEDA
        if (!is_null($search) && $search) {
            $query->andWhere($r->expr()->orX(
                $r->expr()->like('c.name', ':search'),
                $r->expr()->like('a.code', ':search'),
                $r->expr()->like('a.label', ':search')
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

    public function findByValue($connector, $attribute, $attr_prod)
    {
        $r = $this->createQueryBuilder('cmr');
        $query = $r
            ->join("cmr.client","c")
            ->join("cmr.attribute","a")
            ->andWhere('c.id = :client_id')
            ->andWhere('a.id = :attribute_id')
            ->setParameter('client_id', $connector->getClient()->getId())
            ->setParameter('attribute_id', $attribute->getId())
        ;

        $query->where($r->expr()->orX(
            $r->expr()->like('cmr.value_mappings', ':search')
        ))
        ->setParameter('search', "%{$attr_prod->getValue()}%");

        $query->getQuery()->getOneOrNullResult();
    }

}
