<?php

namespace App\Entity\Traits;

Trait ProductAttributeTrait
{
    public function getPrimaryKey(): ?string
    {
        $response = "{$this->sku}-{$this->client->getId()}"; 
        return $response;
    }

    public function getMappingValue(string $attr_code)
    {
        $array = [];
        foreach ($this->getAttributes() as $attr) {
            if ($attr->getAttribute()->getCode() === $attr_code ) {
                if ($attr->getAttribute()->getInputType() == 'array') {
                    $array[] = $attr;
                }else{
                    return $attr;
                }
            }
        }
        return $array;
    }

    public function getPrimaryCategory()
    {
        return $this->categories[0];
    }
}