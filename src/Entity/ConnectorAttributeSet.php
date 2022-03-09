<?php

namespace App\Entity;

use App\Repository\ConnectorAttributeSetRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ConnectorAttributeSetRepository::class)
 */
class ConnectorAttributeSet
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=ProductAttributeSet::class, inversedBy="connector_attribute_sets")
     * @ORM\JoinColumn(nullable=false)
     */
    private $attribute_set;

    /**
     * @ORM\Column(type="boolean", options={"default":true})
     */
    private $is_required;

    /**
     * @ORM\Column(type="boolean", options={"default":false})
     */
    private $is_variation;

    /**
     * @ORM\ManyToOne(targetEntity=ConnectorAttribute::class, inversedBy="connector_attribute_sets")
     * @ORM\JoinColumn(nullable=false)
     */
    private $connector_attribute;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getAttributeSet(): ?ProductAttributeSet
    {
        return $this->attribute_set;
    }

    public function setAttributeSet(?ProductAttributeSet $attribute_set): self
    {
        $this->attribute_set = $attribute_set;

        return $this;
    }

    public function getConnectorAttribute(): ?ConnectorAttribute
    {
        return $this->connector_attribute;
    }

    public function setConnectorAttribute(?ConnectorAttribute $connector_attribute): self
    {
        $this->connector_attribute = $connector_attribute;

        return $this;
    }
}
