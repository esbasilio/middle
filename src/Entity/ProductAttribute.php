<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\TimestampableTrait;
use App\Entity\Traits\ProductAttributeTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductAttributeRepository")
 */
class ProductAttribute
{
    use TimestampableTrait;
    use ProductAttributeTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Product", inversedBy="attributes",cascade={"persist"})
     */
    private $product;
    
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Attribute", inversedBy="product_attributes", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $attribute;
    
    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $mapping_values = [];

    /**
     * @ORM\ManyToOne(targetEntity=ProductAttributeMapping::class, inversedBy="product_attributes")
     */
    private $attribute_mapping;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $value;

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMappingValues(): ?array
    {
        return $this->mapping_values;
    }

    public function setMappingValues(?array $mapping_values): self
    {
        $this->mapping_values = $mapping_values;

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(?string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

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

    public function getAttributeMapping(): ?ProductAttributeMapping
    {
        return $this->attribute_mapping;
    }

    public function setAttributeMapping(?ProductAttributeMapping $attribute_mapping): self
    {
        $this->attribute_mapping = $attribute_mapping;

        return $this;
    }

}
