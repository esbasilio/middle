<?php
/*
 * Project: middleware
 * Version: 7.1.2
 * Author: Alberto Urbaez (Alberto.urbaez@25watts.com.ar)
 * Modified By: Alberto Urbaez (Alberto.urbaez@25watts.com.ar)
 * Created: 2021-03-21 4:39:23 pm
 * Modified: 2021-06-25 5:15:25 pm
 * Copyright - 2021, 25watts
 */

namespace App\Entity\Traits;

use App\Entity\Connector;
use App\Entity\ProductAttribute;

Trait ProductTrait
{

    public function getPrimaryKey(): ?string
    {
        $response = "{$this->sku}-{$this->client->getId()}"; 
        return $response;
    }

    public function hasParent(): ?bool
    { 
        return (empty($this->getParent()) || is_null($this->getParent())) ? false : true;
    }

    public function getType()
    {
        return ($this->hasParent()) ? "variation" : "product";
    }

    public function findReferenceId(Connector $conn)
    {
        $keys = $this->getReferenceIds();
        return (array_key_exists($conn->getCode(),$keys)) ? $keys[$conn->getCode()] : null;
    }

    public function hasConnector(Connector $conn)
    {
        $connectors = $this->hasParent() ? $this->getParent()->getConnectors() : $this->getConnectors();
        foreach ($connectors as $connector) {
            if ($connector->getConnector()->getId() === $conn->getId()) return true;
        }
        return false;
    }

    public function getStockParent()
    {
        $stock = 0;
        
        if (!$this->hasParent()) {
            foreach ($this->getVariations() as $variation) {
                $stock += $variation->getStock();
            }
        }
        
        return $stock;
    }

    public function getAttribute(string $attr_code)
    {
        $array = [];
        foreach ($this->getAttributes() as $attr) {
            if ($attr->getAttribute()->getCode() === $attr_code) {
                if ($attr->getAttribute()->getInputType() == 'array') {
                    $array[] = $attr->getMappingValues();
                }else{
                    return $attr;
                }
            }
        }
        return count($array) > 0 ? $array : null;
    }

    public function searchAttributeByCode($attr_code)
    {
        foreach ($this->getAttributes() as $attr) {
            if ($attr->getAttribute()->getCode() === $attr_code) {
                return $attr; 
            }
        }
        return false;
    }
    
	public function getAttributeMapping(Connector $conn, $attr_code)
    {
        $prod_attr = $this->searchAttributeByCode($attr_code);
        
        if ($prod_attr != false && $conn->hasAttribute($prod_attr->getAttribute())) {
            if (!$prod_attr->getAttributeMapping())
                throw new \Exception("El attributo {$prod_attr->getAttribute()->getlabel()} no posee mapeo de dato");

            foreach ($prod_attr->getAttributeMapping()->getMappingValues() as $mapping_values) {
                if ($mapping_values->getConnector()->getId() == $conn->getId()) {
                    return $mapping_values;
                }
            }
        }
        return null;
    }
    
    // ===== TANGO =====
    public function getTangoStore()
    {
        switch($this->getStoreCode()) {
            case 4:
                $empresa = 'SI';
                break;
            case 6:
            case 7:
            case 9:
            case 10:
                $empresa = 'WB';
                break;
            case 11:
                $empresa = 'JM';
                break;
            default:
                $empresa = 'KA';
                break;
        }

        return $empresa;
    }

    public function getTangoCodCarrier()
    {        
        switch($this->getShippingMethod()) {
            case 'watts25_storepickup_watts25_storepickup':
                $res = 'RPAN';
                break;
            default:
                $res = 'OCA1';
                break;
        }
        return $res;
    }
}