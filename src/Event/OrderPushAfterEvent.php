<?php

namespace App\Event;

use Symfony\Contracts\EventDispatcher\Event;
use App\Entity\Order;

class OrderPushAfterEvent extends Event
{
    const NAME = 'order.push.after';

    protected $order;

    protected $strategy;
    
    protected $data;

    public function __construct(Order $order, $strategy = null, $data = [])
    {
        $this->order = $order;
        $this->strategy = $strategy;
        $this->data = $data;
    }

    public function getOrder(): Order
    {
        return $this->order;
    }

    public function getData(): Array
    {
        return $this->data;
    }

    public function getStrategy()
    {
        return $this->strategy;
    }
}
