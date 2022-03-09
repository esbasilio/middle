<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * @ORM\Entity(repositoryClass="App\Repository\ActionRepository")
 */
class Action
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $path;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $icon;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $code;

    /**
     * @Gedmo\Slug(fields={"code"}, updatable=false)
     * @ORM\Column(length=255, unique=true)
     */
    private $strategy;

    /**
     * @ORM\OneToMany(targetEntity=Route::class, mappedBy="action", orphanRemoval=true)
     */
    private $routes;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $view_type;

    public function __construct()
    {
        $this->modules     = new ArrayCollection();
        $this->routes = new ArrayCollection();
    }
    
    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(?string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(?string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * @return Collection|Permission[]
     */
    public function getPermissions(): Collection
    {
        return $this->permissions;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }


    public function getStrategy(): ?string
    {
        return $this->strategy;
    }

    public function setStrategy(string $strategy): self
    {
        $this->strategy = $strategy;

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
            $route->setAction($this);
        }

        return $this;
    }

    public function removeRoute(Route $route): self
    {
        if ($this->routes->removeElement($route)) {
            // set the owning side to null (unless already changed)
            if ($route->getAction() === $this) {
                $route->setAction(null);
            }
        }

        return $this;
    }

    public function getViewType(): ?string
    {
        return $this->view_type;
    }

    public function setViewType(string $view_type): self
    {
        $this->view_type = $view_type;

        return $this;
    }

}
