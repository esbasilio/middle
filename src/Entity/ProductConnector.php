<?php

namespace App\Entity;

use App\Repository\ProductConnectorRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ProductConnectorRepository::class)
 */
class ProductConnector
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="connectors")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     * @Assert\Length(min=1)
     */
    private $price = null;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $special_price = null;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $stock = null;

    /**
     * @ORM\ManyToOne(targetEntity=Connector::class, inversedBy="products_connector")
     * @ORM\JoinColumn(nullable=false)
     */
    private $connector;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $sites = [];

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_active = false;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $options = [];

    public function getId(): ?int
    {
        return $this->id;
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

    public function getConnector(): ?Connector
    {
        return $this->connector;
    }

    public function setConnector(?Connector $connector): self
    {
        $this->connector = $connector;

        return $this;
    }

    public function getSites(): ?array
    {
        return $this->sites;
    }

    public function setSites(?array $sites): self
    {
        $this->sites = $sites;

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

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(?string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getSpecialPrice(): ?string
    {
        return $this->special_price;
    }

    public function setSpecialPrice(?string $special_price): self
    {
        $this->special_price = $special_price;

        return $this;
    }

    public function getStock(): ?string
    {
        return $this->stock;
    }

    public function setStock(?string $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getOptions(): ?array
    {
        return $this->options;
    }

    public function setOptions(?array $options): self
    {
        $this->options = $options;

        return $this;
    }
}
