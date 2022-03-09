<?php
/**
 * @Author: Alberto Urbaez
 * @Date:   2020-07-16 00:00:37
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-21 23:58:10
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\Translatable\Translatable;
use App\Entity\Traits\GeneralTrait;
use App\Entity\Traits\ModuleTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ModuleRepository")
 */
class Module implements Translatable
{
    use GeneralTrait;
    use ModuleTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $icon;

    /**
     * @ORM\Column(type="string", length=200, options={"default":"#"})
     */
    private $path;

    /**
     * @ORM\Column(type="boolean", options={"default":1})
     */
    private $is_active;

    /**
     * @ORM\Column(type="smallint", options={"default":0})
     */
    private $order_by;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Module", inversedBy="children")
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Module", mappedBy="parent")
     */
    private $children;

    /**
     * @Gedmo\Slug(fields={"name"}, updatable=false)
     * @ORM\Column(length=255, unique=true)
     */
    private $strategy;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Section", inversedBy="modules")
     */
    private $section;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Permission", mappedBy="module", orphanRemoval=true)
     */
    private $permissions;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $label;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $in_menu;

    /**
     * @ORM\OneToMany(targetEntity=Route::class, mappedBy="module", orphanRemoval=true, cascade={"persist"})
     */
    private $routes;

    public function __construct()
    {
        $this->children    = new ArrayCollection();
        $this->permissions = new ArrayCollection();
        $this->routes      = new ArrayCollection();
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

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getOrderBy(): ?int
    {
        return $this->order_by;
    }

    public function setOrderBy(int $order_by): self
    {
        $this->order_by = $order_by;

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }

    public function addChild(self $child): self
    {
        if (!$this->children->contains($child)) {
            $this->children[] = $child;
            $child->setParent($this);
        }

        return $this;
    }

    public function removeChild(self $child): self
    {
        if ($this->children->contains($child)) {
            $this->children->removeElement($child);
            // set the owning side to null (unless already changed)
            if ($child->getParent() === $this) {
                $child->setParent(null);
            }
        }

        return $this;
    }

    /**
     * [getStrategy description]
     * @return [type] [description]
     */
    public function getStrategy()
    {
        return $this->strategy;
    }

    public function setStrategy(string $strategy): self
    {
        $this->strategy = $strategy;

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

    public function getIsActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): self
    {
        $this->is_active = $is_active;

        return $this;
    }

    /**
     * @return Collection|Permission[]
     */
    public function getPermissions(): Collection
    {
        return $this->permissions;
    }

    public function addPermission(Permission $permission): self
    {
        if (!$this->permissions->contains($permission)) {
            $this->permissions[] = $permission;
            $permission->setModule($this);
        }

        return $this;
    }

    public function removePermission(Permission $permission): self
    {
        if ($this->permissions->contains($permission)) {
            $this->permissions->removeElement($permission);
            // set the owning side to null (unless already changed)
            if ($permission->getModule() === $this) {
                $permission->setModule(null);
            }
        }

        return $this;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(?string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getInMenu(): ?bool
    {
        return $this->in_menu;
    }

    public function setInMenu(?bool $in_menu): self
    {
        $this->in_menu = $in_menu;

        return $this;
    }

    public function getSection(): ?Section
    {
        return $this->section;
    }

    public function setSection(?Section $section): self
    {
        $this->section = $section;

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
            $route->setModule($this);
        }

        return $this;
    }

    public function removeRoute(Route $route): self
    {
        if ($this->routes->removeElement($route)) {
            // set the owning side to null (unless already changed)
            if ($route->getModule() === $this) {
                $route->setModule(null);
            }
        }

        return $this;
    }    

}
