<?php

namespace App\Entity;

use App\Entity\Traits\ProductAttributeMappingTrait;
use App\Repository\ProductAttributeMappingRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductAttributeMappingRepository::class)
 * @ORM\Table(uniqueConstraints={
 *      @ORM\UniqueConstraint(name="UNIQ_ATTRIBUTE_NAME", columns={"attribute_id", "name"})
 * }, indexes={
 *      @ORM\Index(name="name", columns={"name"})
 * })
 */
class ProductAttributeMapping
{
    use ProductAttributeMappingTrait;
    
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="attributes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @ORM\ManyToOne(targetEntity=Attribute::class, inversedBy="value_mappings")
     */
    private $attribute;

    /**
     * @ORM\OneToMany(targetEntity=ProductAttribute::class, mappedBy="attribute_mapping")
     */
    private $product_attributes;

    /**
     * @ORM\OneToMany(targetEntity=ProductAttributeMappingValue::class, mappedBy="attribute_mapping", orphanRemoval=true , cascade={"persist"}))
     */
    private $mapping_values;

    public function __construct()
    {
        $this->product_attributes = new ArrayCollection();
        $this->mapping_values = new ArrayCollection();
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

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

        return $this;
    }

    public function getAttribute(): ?Attribute
    {
        return $this->attribute;
    }

    public function setAttribute(?Attribute $attribute): self
    {
        $this->attribute = $attribute;

        return $this;
    }

    /**
     * @return Collection|ProductAttribute[]
     */
    public function getProductAttributes(): Collection
    {
        return $this->product_attributes;
    }

    public function addProductAttribute(ProductAttribute $productAttribute): self
    {
        if (!$this->product_attributes->contains($productAttribute)) {
            $this->product_attributes[] = $productAttribute;
            $productAttribute->setAttributeMapping($this);
        }

        return $this;
    }

    public function removeProductAttribute(ProductAttribute $productAttribute): self
    {
        if ($this->product_attributes->removeElement($productAttribute)) {
            // set the owning side to null (unless already changed)
            if ($productAttribute->getAttributeMapping() === $this) {
                $productAttribute->setAttributeMapping(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProductAttributeMappingValue[]
     */
    public function getMappingValues(): Collection
    {
        return $this->mapping_values;
    }

    public function addMappingValue(ProductAttributeMappingValue $mappingValue): self
    {
        if (!$this->mapping_values->contains($mappingValue)) {
            $this->mapping_values[] = $mappingValue;
            $mappingValue->setAttributeMapping($this);
        }

        return $this;
    }

    public function removeMappingValue(ProductAttributeMappingValue $mappingValue): self
    {
        if ($this->mapping_values->removeElement($mappingValue)) {
            // set the owning side to null (unless already changed)
            if ($mappingValue->getAttributeMapping() === $this) {
                $mappingValue->setAttributeMapping(null);
            }
        }

        return $this;
    }
}