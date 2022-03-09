<?php

namespace App\EventSubscriber;

use App\Event\OrderPushBeforeEvent;
use App\Event\OrderPushAfterEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use App\Service\Connector\Magento;
use Doctrine\ORM\EntityManagerInterface;

class OrderPushSubscriber implements EventSubscriberInterface
{
    protected $magentoConnector;
    protected $em;
    
    public function __construct(Magento $magentoConnector, EntityManagerInterface $em)
    {
        $this->magentoConnector = $magentoConnector;
        $this->em = $em;
    }
    
    public static function getSubscribedEvents()
    {
        return [
            OrderPushBeforeEvent::NAME => 'onOrderPushBefore',
            OrderPushAfterEvent::NAME => 'onOrderPushAfter'
        ];
    }

    public function onOrderPushBefore(OrderPushBeforeEvent $event)
    {
        $order = $event->getOrder();

        $event->setOrder($order);
    }

    public function onOrderPushAfter(OrderPushAfterEvent $event)
    {
        if ($event->getStrategy() != \App\Entity\Application::STRATEGY_TANGO) {
            return;
        }
        
        $order = $event->getOrder();
        $data = $event->getData();

        /**
         * Send Tango Customer Code to Magento
         */
        if ($order->getConnector()->getApplication()->getStrategy() == \App\Entity\Application::STRATEGY_MAGENTO 
            && !empty($data['reference_id'])) {
            $orderHistory = $this->em->getRepository(\App\Entity\OrderHistory::class)->findOneBy([
                'id' => $order->getId(), 'connector' => $order->getConnector()
            ]);

            if ($orderHistory == null || (isset($orderHistory) && empty($orderHistory->getReferenceId()))) {
                $this->magentoConnector->sendTangoCustomerCode($order, $data['reference_id']);
            }
        }
    }
}