<?php

namespace App\Entity;

use App\Repository\ProductAttributeMappingValueRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductAttributeMappingValueRepository::class)
 * @ORM\Table(uniqueConstraints={
 *      @ORM\UniqueConstraint(name="UNIQ_ATTRIBUTE_VALUE", columns={"attribute_mapping_id","connector_id", "value"})
 * }, indexes={
 *      @ORM\Index(name="name", columns={"name"}),
 *      @ORM\Index(name="value", columns={"value"})
 * })
 */
class ProductAttributeMappingValue
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Connector::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $connector;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $value;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=ProductAttributeMapping::class, inversedBy="mapping_values")
     * @ORM\JoinColumn(nullable=false)
     */
    private $attribute_mapping;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

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
