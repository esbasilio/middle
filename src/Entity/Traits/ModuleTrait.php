<?php
/**
 * @Author: Alberto Urbaez
 * @Date:   2020-07-16 19:48:31
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-22 17:38:30
 */
namespace App\Entity\Traits;

Trait ModuleTrait
{
    public function getMainPath(string $env = 'admin'): ?String
    {
        foreach ($this->routes as $key => $route) {
        	if ($route->getMainAction() == 1 && $route->getEnviroment() == $env) {
        		return $route->getRouteName();
        	}
        }
        return "admin_{$this->getPath()}_list";
    }
}