<?php

namespace App\Entity\Traits;

Trait OrderItemTrait
{
    public function TotalPrice()
    {
        $price = $this->getPrice()*$this->getQty();
        if (!is_null($this->getDiscountPercent())) {
            $price -= ($price * $this->getDiscountPercent()/100);
        }
        return number_format($price, 2, '.', '');
    }
}