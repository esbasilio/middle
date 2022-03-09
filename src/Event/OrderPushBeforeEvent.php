<?php

namespace App\Event;

use Symfony\Contracts\EventDispatcher\Event;
use App\Entity\Order;

class OrderPushBeforeEvent extends Event
{
    const NAME = 'order.push.before';

    protected $order;

    protected $strategy;

    public function __construct(Order $order, $strategy = null)
    {
        $this->order = $order;
        $this->strategy = $strategy;
    }

    public function getOrder(): Order
    {
        return $this->order;
    }

    public function setOrder(Order $order)
    {
        $this->order = $order;
    }

    public function getStrategy()
    {
        return $this->strategy;
    }
}
