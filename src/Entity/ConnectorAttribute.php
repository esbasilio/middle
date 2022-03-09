<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Service\AttributeService;
use App\Entity\Traits\AttributeTrait;
use App\Entity\Traits\TimestampableTrait;
use Doctrine\Common\Collections\Collection;
use App\Repository\ConnectorAttributeRepository;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=ConnectorAttributeRepository::class)
 */
class ConnectorAttribute
{
    use AttributeTrait;
    use TimestampableTrait;
    
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Attribute::class, inversedBy="connector_attributes")
     */
    private $attribute;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $code;

    /**
     * @ORM\Column(type="smallint", length=5, nullable=true)
     */
    private $reference_id = null;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=200, nullable=true)
     */
    private $category_name;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $category_code;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $attribute_values = [];

    /**
     * @ORM\ManyToOne(targetEntity=Connector::class, inversedBy="attributes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $connector;

    /**
     * @ORM\Column(type="boolean")
     */
    private $auto_save_attribute_value;

    /**
     * @ORM\OneToMany(targetEntity=ConnectorAttributeSet::class, mappedBy="connector_attribute", orphanRemoval=true, cascade={"persist"})
     */
    private $connector_attribute_sets;

    private $is_required = false;

    public function __construct()
    {
        $this->connector_attribute_sets = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->code;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getReferenceId(): ?string
    {
        return $this->reference_id;
    }

    public function setReferenceId(?string $reference_id): self
    {
        $this->reference_id = $reference_id;

        return $this;
    }

    public function getIsRequired(): ?bool
    {
        return $this->is_required;
    }

    public function setIsRequired(bool $is_required): self
    {
        $this->is_required = $is_required;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getIsVariation(): ?bool
    {
        return $this->is_variation;
    }

    public function setIsVariation(bool $is_variation): self
    {
        $this->is_variation = $is_variation;

        return $this;
    }

    public function getConnector(): ?Connector
    {
        return $this->connector;
    }

    public function setConnector(?Connector $connector): self
    {
        $this->connector = $connector;

        return $this;
    }

    public function getAttributeValues(): ?array
    {
        return $this->attribute_values;
    }

    public function setAttributeValues(?array $attribute_values): self
    {
        $this->attribute_values = $attribute_values;

        return $this;
    }

    public function getCategoryName(): ?string
    {
        return $this->category_name;
    }

    public function setCategoryName(?string $category_name): self
    {
        $this->category_name = $category_name;

        return $this;
    }

    public function getCategoryCode(): ?string
    {
        return $this->category_code;
    }

    public function setCategoryCode(?string $category_code): self
    {
        $this->category_code = $category_code;

        return $this;
    }

    public function getAutoSaveAttributeValue(): ?bool
    {
        return $this->auto_save_attribute_value;
    }

    public function setAutoSaveAttributeValue(bool $auto_save_attribute_value): self
    {
        $this->auto_save_attribute_value = $auto_save_attribute_value;

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
            $connectorAttributeSet->setConnectorAttribute($this);
        }

        return $this;
    }

    public function removeConnectorAttributeSet(ConnectorAttributeSet $connectorAttributeSet): self
    {
        if ($this->connector_attribute_sets->removeElement($connectorAttributeSet)) {
            // set the owning side to null (unless already changed)
            if ($connectorAttributeSet->getConnectorAttribute() === $this) {
                $connectorAttributeSet->setConnectorAttribute(null);
            }
        }

        return $this;
    }
}