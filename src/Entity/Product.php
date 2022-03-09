<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\TimestampableTrait;
use App\Entity\Traits\ProductTrait;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(name="search_idx", columns={"sku", "client_id"})})
 */
class Product
{
    use TimestampableTrait;
    use ProductTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=250)
     * @Assert\NotBlank(message = "Campo SKU es requerido")
     * @Assert\Length(
     *      min = 3,
     *      max = 20,
     *      minMessage = "el SKU debe tener un minimo de {{ limit }} caracteres",
     *      maxMessage = "el SKU debe tener un maximo de {{ limit }} caracteres",
     *      allowEmptyString = false
     * )
     */
    private $sku;

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="variations")
     */
    private $parent;
    
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Client", inversedBy="products")
     * @Assert\NotBlank(message = "No se reconoce el cliente asociado al producto")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     * @Assert\Length(min=1)
     */
    private $price;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $special_price;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $stock;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $images = [];

    /**
     * @ORM\Column(type="boolean", options={"default":false})
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProductAttribute", mappedBy="product", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $attributes;

    /**
     * @ORM\OneToMany(targetEntity=Product::class, mappedBy="parent", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $variations;

    /**
     * @ORM\OneToMany(targetEntity=ProductHistory::class, mappedBy="product", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $histories;

    /**
     * @ORM\OneToMany(targetEntity=ProductConnector::class, mappedBy="product", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $connectors;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $reference_ids = [];

    /**
     * @ORM\ManyToOne(targetEntity=ProductAttributeSet::class, inversedBy="products")
     */
    private $attribute_set;

    /**
     * @ORM\ManyToOne(targetEntity=Connector::class)
     */
    private $last_connector;

    public function __construct()
    {
        $this->attributes = new ArrayCollection();
        $this->variations = new ArrayCollection();
        $this->histories = new ArrayCollection();
        $this->connectors = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSku(): ?string
    {
        return $this->sku;
    }

    public function setSku(string $sku): self
    {
        $this->sku = $sku;

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

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection|ProductAttribute[]
     */
    public function getAttributes(): Collection
    {
        return $this->attributes;
    }

    public function addAttribute(ProductAttribute $attribute): self
    {
        if (!$this->attributes->contains($attribute)) {
            $this->attributes[] = $attribute;
            $attribute->setProduct($this);
        }

        return $this;
    }

    public function removeAttribute(ProductAttribute $attribute): self
    {
        if ($this->attributes->contains($attribute)) {
            $this->attributes->removeElement($attribute);
            // set the owning side to null (unless already changed)
            if ($attribute->getProduct() === $this) {
                $attribute->setProduct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getVariations(): Collection
    {
        return $this->variations;
    }

    public function addVariation(Product $variation): self
    {
        if (!$this->variations->contains($variation)) {
            $this->variations[] = $variation;
            $variation->setParent($this);
        }

        return $this;
    }

    public function removeVariation(Product $variation): self
    {
        if ($this->variations->contains($variation)) {
            $this->variations->removeElement($variation);
            // set the owning side to null (unless already changed)
            if ($variation->getParent() === $this) {
                $variation->setParent(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProductHistory[]
     */
    public function getHistories(): Collection
    {
        return $this->histories;
    }

    public function addHistory(ProductHistory $history): self
    {
        if (!$this->histories->contains($history)) {
            $this->histories[] = $history;
            $history->setProduct($this);
        }

        return $this;
    }

    public function removeHistory(ProductHistory $history): self
    {
        if ($this->histories->contains($history)) {
            $this->histories->removeElement($history);
            // set the owning side to null (unless already changed)
            if ($history->getProduct() === $this) {
                $history->setProduct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProductConnector[]
     */
    public function getConnectors(): Collection
    {
        return $this->connectors;
    }

    public function addConnector(ProductConnector $connector): self
    {
        if (!$this->connectors->contains($connector)) {
            $this->connectors[] = $connector;
            $connector->setProduct($this);
        }

        return $this;
    }

    public function removeConnector(ProductConnector $connector): self
    {
        if ($this->connectors->contains($connector)) {
            $this->connectors->removeElement($connector);
            // set the owning side to null (unless already changed)
            if ($connector->getProduct() === $this) {
                $connector->setProduct(null);
            }
        }

        return $this;
    }

    public function getImages(): ?array
    {
        return $this->images;
    }

    public function setImages(?array $images): self
    {
        $this->images = $images;

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

    public function getReferenceIds(): ?array
    {
        return $this->reference_ids;
    }

    public function setReferenceIds(?array $reference_ids): self
    {
        $this->reference_ids = $reference_ids;

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

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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

    public function getLastConnector(): ?Connector
    {
        return $this->last_connector;
    }

    public function setLastConnector(?Connector $last_connector): self
    {
        $this->last_connector = $last_connector;

        return $this;
    }
}