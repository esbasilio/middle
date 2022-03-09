<?php

namespace App\Entity\Traits;
Trait ProductAttributeMappingTrait
{
    public function getMappingValue(string $connector_code)
    {
        foreach ($this->getMappingValues() as $value) {
            if ($value->getConnector()->getCode() == $connector_code) return $value;
        }
        return false;
    }
}