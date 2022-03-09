<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Service\AttributeService;
use App\Entity\Traits\AttributeTrait;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Entity\Traits\TimestampableTrait;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AttributeRepository")
 */
class Attribute
{
    use TimestampableTrait;
    use AttributeTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $label;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $input_type;

    /**
     * @Gedmo\Slug(fields={"code"}, updatable=false)
     * @ORM\Column(length=255, unique=true)
     */
    private $strategy;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProductAttribute", mappedBy="attribute", orphanRemoval=true)
     */
    private $product_attributes;

    /**
     * @ORM\OneToMany(targetEntity=ConnectorAttribute::class, mappedBy="attribute",orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $connector_attributes;

    /**
     * @ORM\Column(type="boolean", options={"default":true})
     */
    private $is_mapping_value;

    /**
     * @ORM\OneToMany(targetEntity=ProductAttributeMapping::class, mappedBy="attribute")
     */
    private $value_mappings;

    public function __construct()
    {
        $this->product_attributes = new ArrayCollection();
        $this->connector_attributes  = new ArrayCollection();
        $this->value_mappings = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->code;
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

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getInputType(): ?string
    {
        return $this->input_type;
    }

    public function setInputType(string $input_type): self
    {
        $this->input_type = $input_type;

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

    public function getIsMappingValue(): ?bool
    {
        return $this->is_mapping_value;
    }

    public function setIsMappingValue(bool $is_mapping_value): self
    {
        $this->is_mapping_value = $is_mapping_value;

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
            $productAttribute->setAttribute($this);
        }

        return $this;
    }

    public function removeProductAttribute(ProductAttribute $productAttribute): self
    {
        if ($this->product_attributes->removeElement($productAttribute)) {
            // set the owning side to null (unless already changed)
            if ($productAttribute->getAttribute() === $this) {
                $productAttribute->setAttribute(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ConnectorAttribute[]
     */
    public function getConnectorAttributes(): Collection
    {
        return $this->connector_attributes;
    }

    public function addConnectorAttribute(ConnectorAttribute $connectorAttribute): self
    {
        if (!$this->connector_attributes->contains($connectorAttribute)) {
            $this->connector_attributes[] = $connectorAttribute;
            $connectorAttribute->setAttribute($this);
        }

        return $this;
    }

    public function removeConnectorAttribute(ConnectorAttribute $connectorAttribute): self
    {
        if ($this->connector_attributes->removeElement($connectorAttribute)) {
            // set the owning side to null (unless already changed)
            if ($connectorAttribute->getAttribute() === $this) {
                $connectorAttribute->setAttribute(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProductAttributeMapping[]
     */
    public function getValueMappings(): Collection
    {
        return $this->value_mappings;
    }

    public function addValueMapping(ProductAttributeMapping $valueMapping): self
    {
        if (!$this->value_mappings->contains($valueMapping)) {
            $this->value_mappings[] = $valueMapping;
            $valueMapping->setAttribute($this);
        }

        return $this;
    }

    public function removeValueMapping(ProductAttributeMapping $valueMapping): self
    {
        if ($this->value_mappings->removeElement($valueMapping)) {
            // set the owning side to null (unless already changed)
            if ($valueMapping->getAttribute() === $this) {
                $valueMapping->setAttribute(null);
            }
        }

        return $this;
    }
}
