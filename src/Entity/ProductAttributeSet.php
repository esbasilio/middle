<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Entity\Traits\TimestampableTrait;
use App\Repository\ProductAttributeSetRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ProductAttributeSetRepository::class)
 */
class ProductAttributeSet
{
    use TimestampableTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="attribute_client")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @Gedmo\Slug(fields={"name"}, updatable=true)
     * @ORM\Column(length=255, unique=true)
     */
    private $strategy;

    /**
     * @ORM\OneToMany(targetEntity=Product::class, mappedBy="attribute_set")
     */
    private $products;

    /**
     * @ORM\OneToMany(targetEntity=ConnectorAttributeSet::class, mappedBy="attribute_set", orphanRemoval=true)
     */
    private $connector_attribute_sets;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $reference_id = [];

    /**
     * @ORM\Column(type="boolean", options={"default":false})
     */
    private $is_default;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $settings = [];


    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->attributes = new ArrayCollection();
        $this->products = new ArrayCollection();
        $this->connector_attribute_sets = new ArrayCollection();
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

    public function getStrategy(): ?string
    {
        return $this->strategy;
    }

    public function setStrategy(string $strategy): self
    {
        $this->strategy = $strategy;

        return $this;
    }

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

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
            $product->setAttributeSet($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getAttributeSet() === $this) {
                $product->setAttributeSet(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ConnectorAttributeSet[]
     */
    public function getConnectorAttributeSets(): Collection
    {
        return $this->connector_attribute_sets;
    }

    public function addConnectorAttributeSet(ConnectorAttributeSet $connectorAttributeSet): self
    {
        if (!$this->connector_attribute_sets->contains($connectorAttributeSet)) {
            $this->connector_attribute_sets[] = $connectorAttributeSet;
            $connectorAttributeSet->setAttributeSet($this);
        }

        return $this;
    }

    public function removeConnectorAttributeSet(ConnectorAttributeSet $connectorAttributeSet): self
    {
        if ($this->connector_attribute_sets->removeElement($connectorAttributeSet)) {
            // set the owning side to null (unless already changed)
            if ($connectorAttributeSet->getAttributeSet() === $this) {
                $connectorAttributeSet->setAttributeSet(null);
            }
        }

        return $this;
    }

    public function getReferenceId(): ?array
    {
        return $this->reference_id;
    }

    public function setReferenceId(?array $reference_id): self
    {
        $this->reference_id = $reference_id;

        return $this;
    }

    public function getIsDefault(): ?bool
    {
        return $this->is_default;
    }

    public function setIsDefault(bool $is_default): self
    {
        $this->is_default = $is_default;

        return $this;
    }

    public function getSettings(): ?array
    {
        return $this->settings;
    }

    public function setSettings(?array $settings): self
    {
        $this->settings = $settings;

        return $this;
    }

}