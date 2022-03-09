<?php

namespace App\Entity\Traits;

Trait UserTrait
{
    public function getRoles(): array
    {
        $roles = $this->role->getHierarchy();
        $roles[] = $this->role->getCode();

        return array_unique($roles);
    }

    public function getFullName(): ?string
    {
        return $this->first_name.' '.$this->last_name;
    }

    public function getProducts()
    {
        $products = [];
        foreach ($this->clients as $client) {
            $products += $client->getProducts()->toArray();
        }
        return $products;
    }
}