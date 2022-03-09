<?php

/**
 * @Author: Beto
 * @Date:   2020-08-18 23:51:57
 * @Last Modified by:   Beto
 * @Last Modified time: 2020-09-26 21:51:28
 */
namespace App\Service;

use App\Entity\Order;
use App\Entity\Product;
use App\Entity\Connector;
use App\Service\Connector\Tango;
use App\Entity\ConnectorAttribute;
use App\Service\Connector\Magento;
use App\Service\Connector\MercadoLibre;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use App\Event\OrderPushBeforeEvent;
use App\Event\OrderPushAfterEvent;
use Exception;

class ConnectorService
{
    public function __construct(
        EntityManagerInterface $em, 
        Tango $tango, 
        Magento $magento, 
        MercadoLibre $mercado_libre, 
        EventDispatcherInterface $dispatcher
    ) {
        $this->em             = $em;
        $this->_tango         = $tango;
        $this->_magento       = $magento;
        $this->_mercado_libre = $mercado_libre;
        $this->dispatcher     = $dispatcher;
    }

    public function sync(Connector $conn)
    {
        return $this->_mercado_libre->runStock($conn);
    }

    public function getMagentoStock(Connector $conn, $sku)
    {
        return $this->_magento->getStock($conn, $sku);
    }

    public function pullProduct(Connector $conn, \DateTime $date, $optional = null)
    {
        switch ($conn->getApplication()->getStrategy()) {
            case \App\Entity\Application::STRATEGY_MAGENTO :
                return $this->_magento->pullProduct($conn, $date);
                break;
            case \App\Entity\Application::STRATEGY_MERCADOLIBRE :
                return $this->_mercado_libre->pullProduct($conn, $optional);
                break;
            case \App\Entity\Application::STRATEGY_DAFITI :
                throw new \Exception("La App: {$conn->getApplication()->getName()} no esta disponible");
                break;    
            default:
                throw new \Exception("No se encontro proceso para el Cliente: {$conn->getClient()->getName()}, App: {$conn->getApplication()->getName()}");
                break;
        }
    }

    public function pushProduct(Connector $conn, Product $product)
    {
        switch ($conn->getApplication()->getStrategy()) {
            case \App\Entity\Application::STRATEGY_MAGENTO :
                return $this->_magento->pushProduct($conn, $product);
                break;
            case \App\Entity\Application::STRATEGY_MERCADOLIBRE :
                return $this->_mercado_libre->pushProduct($conn, $product);
                break;
            case \App\Entity\Application::STRATEGY_DAFITI :
                throw new \Exception("La App: {$conn->getApplication()->getName()} no esta disponible");
                break;
            default:
                throw new \Exception("No se encontro proceso para el Cliente: {$conn->getClient()->getName()}, App: {$conn->getApplication()->getName()}");
                break;
        }
    }

    public function pullOrder(Connector $conn, \DateTime $date)
    {
        switch ($conn->getApplication()->getStrategy()) {
            case \App\Entity\Application::STRATEGY_MAGENTO :
                return $this->_magento->pullOrder($conn, $date);
                break;
            case \App\Entity\Application::STRATEGY_MERCADOLIBRE :
                return $this->_mercado_libre->pullOrder($conn, $date);
                break;
            case \App\Entity\Application::STRATEGY_DAFITI :
                throw new \Exception("La App: {$conn->getApplication()->getName()} no esta disponible");
                break;
            default:
                throw new \Exception("No se encontro proceso para el Cliente: {$conn->getClient()->getName()}, App: {$conn->getApplication()->getName()}");
                break;
        }
    }

    public function pushOrder(Connector $conn, Order $order)
    {
        $_strategy = $conn->getApplication()->getStrategy();
        $response = [];

        /**
         * Dispatch order.push.before event
         */
        $event = new OrderPushBeforeEvent($order, $_strategy);
        $this->dispatcher->dispatch($event, OrderPushBeforeEvent::NAME);

        $order = $event->getOrder();
        
        switch ($_strategy) {
            case \App\Entity\Application::STRATEGY_TANGO :
                $response = $this->_tango->pushOrder($conn, $order);
                break;
            default:
                throw new \Exception("No se encontro proceso para el Cliente: {$conn->getClient()->getName()}, App: {$conn->getApplication()->getName()}");
                break;
        }

        /**
         * Dispatch order.push.after event
         */
        $event = new OrderPushAfterEvent($order, $_strategy, $response);
        $this->dispatcher->dispatch($event, OrderPushAfterEvent::NAME);

        return $response;
    }

    public function attributeValue(ConnectorAttribute $conn_attr)
    {
        switch ($conn_attr->getConnector()->getApplication()->getStrategy()) {
            case \App\Entity\Application::STRATEGY_MAGENTO :
                if ($conn_attr->getAttribute()->getStrategy() == "category") {
                    return $this->_magento->categories($conn_attr);
                }else{
                    return $this->_magento->attributes($conn_attr);
                }
                break;
            default:
                return $conn_attr->getAttributeValues();
                break;
        }
    }
}