<?php

namespace App\Entity;

use App\Repository\RouteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\RouteTrait;


/**
 * @ORM\Entity(repositoryClass=RouteRepository::class)
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(name="search_idx", columns={"module", "action"})})
 * @ORM\Table(name="module_route")
 */
class Route
{
    use RouteTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Module::class, inversedBy="routes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $module;

    /**
     * @ORM\ManyToOne(targetEntity=Action::class, inversedBy="routes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $action;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $custom_path;    

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $view_type;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $main_action;

    /**
     * @ORM\ManyToOne(targetEntity=Enviroment::class, inversedBy="routes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $enviroment;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Permission", mappedBy="routes")
     */
    private $permissions;

    public function __construct()
    {
        $this->permissions = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->action->getName();
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

    public function getAction(): ?Action
    {
        return $this->action;
    }

    public function setAction(?Action $action): self
    {
        $this->action = $action;

        return $this;
    }

    public function getMainAction(): ?bool
    {
        return $this->main_action;
    }

    public function setMainAction(?bool $main_action): self
    {
        $this->main_action = $main_action;

        return $this;
    }

    public function getCustomPath(): ?string
    {
        return $this->custom_path;
    }

    public function setCustomPath(?string $custom_path): self
    {
        $this->custom_path = $custom_path;

        return $this;
    }

    public function getEnviroment(): ?Enviroment
    {
        return $this->enviroment;
    }

    public function setEnviroment(?Enviroment $enviroment): self
    {
        $this->enviroment = $enviroment;

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
            $permission->addRoute($this);
        }

        return $this;
    }

    public function removePermission(Permission $permission): self
    {
        if ($this->permissions->removeElement($permission)) {
            $permission->removeRoute($this);
        }

        return $this;
    }

    public function getViewType(): ?string
    {
        return $this->view_type;
    }

    public function setViewType(?string $view_type): self
    {
        $this->view_type = $view_type;

        return $this;
    }

}
