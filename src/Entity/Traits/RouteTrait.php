<?php

namespace App\Entity\Traits;

// use Gedmo\Mapping\Annotation as Gedmo;

Trait RouteTrait
{
    public function getRouteName(): ?String
    {
        return "{$this->getEnviroment()->getPath()}_{$this->getModule()->getPath()}_{$this->getPath()}";
    }

    public function getPath(): ?String
    {
    	$path = (is_null($this->getCustomPath())) ? $this->getAction()->getPath() : $this->getCustomPath();
    	return $path;
    }

    public function viewType()
    {
    	$type = (is_null($this->getViewType())) ? $this->getAction()->getViewType() : $this->getViewType();
        return $type;
    }
}