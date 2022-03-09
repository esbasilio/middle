<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Entity\Traits\GeneralTrait;
use Gedmo\Translatable\Translatable;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RoleRepository")
 */
class Role
{
    use GeneralTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=200, unique=true)
     */
    private $code;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @Gedmo\Slug(fields={"name"}, updatable=false)
     * @ORM\Column(length=255, unique=true)
     */
    private $strategy;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Permission", mappedBy="roles")
     */
    private $permissions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="role")
     */
    private $users;

    /**
     * @ORM\Column(type="json")
     */
    private $hierarchy = [];

    public function __construct()
    {
        $this->permissions = new ArrayCollection();
        $this->users       = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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
            $permission->addRole($this);
        }

        return $this;
    }

    public function removePermission(Permission $permission): self
    {
        if ($this->permissions->contains($permission)) {
            $this->permissions->removeElement($permission);
            $permission->removeRole($this);
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setRole($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            // set the owning side to null (unless already changed)
            if ($user->getRole() === $this) {
                $user->setRole(null);
            }
        }

        return $this;
    }

    public function getHierarchy(): ?array
    {
        // return $this->hierarchy;
        $hierarchy = $this->hierarchy;
        // guarantee every user at least has ROLE_USER
        // $hierarchy[] = 'ROLE_USER';

        return array_unique($hierarchy);
    }

    public function setHierarchy(array $hierarchy): self
    {
        $this->hierarchy = $hierarchy;
        return $this;
    }
}