<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\GeneralTrait;
use App\Entity\Traits\BlameableTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PermissionRepository")
 */
class Permission
{
    use GeneralTrait;
    use BlameableTrait;
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Module", inversedBy="permissions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $module;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Role", inversedBy="permissions")
     */
    private $roles;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Route", inversedBy="permissions")
     */
    private $routes;

    public function __construct()
    {
        $this->roles   = new ArrayCollection();
        $this->routes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModule(): ?Module
    {
        return $this->module;
    }

    public function setModule(?Module $module): self
    {
        $this->module = $module;

        return $this;
    }

    /**
     * @return Collection|Role[]
     */
    public function getRoles(): Collection
    {
        return $this->roles;
    }

    public function addRole(Role $role): self
    {
        if (!$this->roles->contains($role)) {
            $this->roles[] = $role;
        }

        return $this;
    }

    public function removeRole(Role $role): self
    {
        if ($this->roles->contains($role)) {
            $this->roles->removeElement($role);
        }

        return $this;
    }

    /**
     * @return Collection|Route[]
     */
    public function getRoutes(): Collection
    {
        return $this->routes;
    }

    public function addRoute(Route $route): self
    {
        if (!$this->routes->contains($route)) {
            $this->routes[] = $route;
        }

        return $this;
    }

    public function removeRoute(Route $route): self
    {
        $this->routes->removeElement($route);

        return $this;
    }
}
