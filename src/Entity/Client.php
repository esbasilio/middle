<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * @ORM\Entity(repositoryClass="App\Repository\ClientRepository")
 */
class Client
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_active;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Product", mappedBy="client")
     */
    private $products;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Order", mappedBy="client")
     */
    private $orders;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Connector", mappedBy="client", cascade={"persist"})
     */
    private $connectors;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $email;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", inversedBy="clients")
     */
    private $users;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $token;

    /**
     * @Gedmo\Slug(fields={"name"}, updatable=false)
     * @ORM\Column(length=255, unique=true)
     */
    private $strategy;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $parent_sku_format;

    /**
     * @ORM\OneToMany(targetEntity=ProductAttributeMapping::class, mappedBy="client", orphanRemoval=true)
     */
    private $attributes;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $logo;

    /**
     * @ORM\OneToMany(targetEntity=ProductAttributeSet::class, mappedBy="client", orphanRemoval=true)
     */
    private $attribute_client;

    public function __construct()
    {
        $this->products   = new ArrayCollection();
        $this->connectors = new ArrayCollection();
        $this->users      = new ArrayCollection();
        $this->attributes = new ArrayCollection();
        $this->orders     = new ArrayCollection();
        $this->attribute_client = new ArrayCollection();
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

    public function getIsActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): self
    {
        $this->is_active = $is_active;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

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

    public function getParentSkuFormat(): ?string
    {
        return $this->parent_sku_format;
    }

    public function setParentSkuFormat(?string $parent_sku_format): self
    {
        $this->parent_sku_format = $parent_sku_format;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setClient($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getClient() === $this) {
                $product->setClient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Order[]
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setClient($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getClient() === $this) {
                $order->setClient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Connector[]
     */
    public function getConnectors(): Collection
    {
        return $this->connectors;
    }

    public function addConnector(Connector $connector): self
    {
        if (!$this->connectors->contains($connector)) {
            $this->connectors[] = $connector;
            $connector->setClient($this);
        }

        return $this;
    }

    public function removeConnector(Connector $connector): self
    {
        if ($this->connectors->removeElement($connector)) {
            // set the owning side to null (unless already changed)
            if ($connector->getClient() === $this) {
                $connector->setClient(null);
            }
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
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        $this->users->removeElement($user);

        return $this;
    }

    /**
     * @return Collection|ProductAttributeMapping[]
     */
    public function getAttributes(): Collection
    {
        return $this->attributes;
    }

    public function addAttribute(ProductAttributeMapping $attribute): self
    {
        if (!$this->attributes->contains($attribute)) {
            $this->attributes[] = $attribute;
            $attribute->setClient($this);
        }

        return $this;
    }

    public function removeAttribute(ProductAttributeMapping $attribute): self
    {
        if ($this->attributes->removeElement($attribute)) {
            // set the owning side to null (unless already changed)
            if ($attribute->getClient() === $this) {
                $attribute->setClient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProductAttributeSet[]
     */
    public function getAttributeClient(): Collection
    {
        return $this->attribute_client;
    }

    public function addAttributeClient(ProductAttributeSet $attributeClient): self
    {
        if (!$this->attribute_client->contains($attributeClient)) {
            $this->attribute_client[] = $attributeClient;
            $attributeClient->setClient($this);
        }

        return $this;
    }

    public function removeAttributeClient(ProductAttributeSet $attributeClient): self
    {
        if ($this->attribute_client->removeElement($attributeClient)) {
            // set the owning side to null (unless already changed)
            if ($attributeClient->getClient() === $this) {
                $attributeClient->setClient(null);
            }
        }

        return $this;
    }

}
