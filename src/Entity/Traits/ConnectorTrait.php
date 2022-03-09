<?php

namespace App\Entity\Traits;

use App\Entity\Attribute;

Trait ConnectorTrait
{

    // emerg   = 0;  // Emergency: system is unusable
    // alert   = 1;  // Alert: action must be taken immediately
    // crit    = 2;  // Critical: critical conditions
    // err     = 3;  // Error: error conditions
    // warn    = 4;  // Warning: warning conditions
    // notice  = 5;  // Notice: normal but significant condition
    // info    = 6;  // Informational: informational messages
    // debug   = 7;  // Debug: debug messages
    public function logger(string $type = null, $message)
    {
        if ($this->getEnabledLog() === false) return false;
        $date   = new \DateTime("NOW");
        $file = "{$this->getClient()->getStrategy()}_{$this->getApplication()->getStrategy()}_{$date->format("Ymd")}";
        
        $logger = new \Zend\Log\Logger();
        $logger->addWriter('stream', null, array('stream' => dirname(__DIR__)."/../../var/log/{$file}.log"));
        
        // return $this->logger($file, $messgae, $type);
        return $logger->$type($message);
    }

    public function hasInputType($type = "product")
    {
        return (bool) in_array($type, $this->getInputType());
    }

    public function hasOutputType($type = "product")
    {
        return (bool) in_array($type, $this->getOutputType());
    }

    /**
     * [getTokenExpiration retorna las dos fechas la de expiracion y la fecha actual]
     * @return [type] [description]
     */
    public function getTokenExpiration()
    {
        if (empty($this->getOutputTokenExpiresIn())) return false;
        
        $dateExpires = clone($this->getOutputTokenUpdated());
        
        return [ 
            "date_expires" => $dateExpires->modify("+{$this->getOutputTokenExpiresIn()} second"),
            "date_current" => date_create('now')
        ];
    }

    public function getReferenceName()
    {
        return ($this->getApplication()->getIsGlobal()) ? $this->getApplication()->getStrategy() : $this->getCode();

    }
    /**
     * [getTokenExpired retorna su true si la fecha esta expirada o un falso si aun no ha expirado]
     * @return [type] [description]
     */
    public function getTokenExpired(): ?bool
    {
        if (empty($this->getOutputTokenExpiresIn()))
            return false;

        $date = $this->getTokenExpiration();
        return $date["date_current"] > $date["date_expires"];
    }

    /**
     * [getTokenExpiryTime retorna la diferencia entre las fechas]
     * @return [type] [description]
     */
    public function getTokenExpiryTime()
    {
        if (empty($this->getOutputTokenExpiresIn()) || is_null($this->getOutputTokenExpiresIn()))
            return 'Does not expire';

        $date = $this->getTokenExpiration();
        return date_diff($date["date_current"],$date["date_expires"]);
    }

    public function hasAttribute(Attribute $attr): ?bool
    {
        foreach ($this->getAttributes() as $attribute) {
            if ($attribute->getAttribute()->getId() == $attr->getId())
                return true;
        }
        return false;
    }

    public function getAttribute($attr_code, $value = null)
    {
        foreach ($this->getAttributes() as $attribute) {
            // if (strcasecmp($attribute->getCode(),$attr) === 0 || strcasecmp($attribute->getattribute()->getCode(),$attr) === 0) {
            if ($attribute->getCode() == $attr_code  || $attribute->getName() == $attr_code) {
                if (is_array($value)) return false;
                if (!is_null($value) && in_array($value,$attribute->getAttributeValues())) {
                    return array_search($value,$attribute->getAttributeValues());
                }else{
                    return $attribute;
                }
            }
        }

        return null;
    }
}