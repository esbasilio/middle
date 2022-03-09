<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\OrderRepository;
use App\Entity\Traits\TimestampableTrait;
use App\Entity\Traits\OrderTrait;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    use TimestampableTrait;
    use OrderTrait;
    
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
        
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Client", inversedBy="orders")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @ORM\Column(type="string", length=100, nullable=true, options={"fixed":true, "comment":"order_id"})
     */
    private $reference_id;
    
    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $invoice_id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true, options={"fixed":true, "comment":"carrito_id"})
     */
    private $pack_id;
    
    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */    
    private $grand_total;
    
    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */    
    private $store;
    
    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $store_code;
    
    /**
     * @ORM\ManyToOne(targetEntity=Connector::class, inversedBy="orders")
     * @ORM\JoinColumn(nullable=false)
     */
    private $connector;

    /**
     * @ORM\OneToMany(targetEntity=OrderItem::class, mappedBy="order", orphanRemoval=true)
     */
    private $items;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_id;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_name;
    
    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $customer_email;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_phone;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_dni;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_country;
    
    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $customer_region;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_city;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_postcode;
    
    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $customer_street;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_number;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $customer_floor;
    
    /**
     * @ORM\Column(type="string", length=510, nullable=true)
     */
    private $customer_apartment;
    
    /**
     * @ORM\Column(type="string", length=200, nullable=true)
     */
    private $shipping_description;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $shipping_method;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $shipping_price;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $customer_references;

    /**
     * @ORM\OneToMany(targetEntity=OrderHistory::class, mappedBy="order")
     */
    private $order_histories;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $payment_id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $buyer_nickname;

    /**
     * @ORM\Column(type="datetime")
     */
    private $issued_at;

    public function __construct()
    {
        $this->items           = new ArrayCollection();
        $this->order_histories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

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


    public function getInvoiceId(): ?string
    {
        return $this->invoice_id;
    }

    public function setInvoiceId(?string $invoice_id): self
    {
        $this->invoice_id = $invoice_id;

        return $this;
    }

    public function getGrandTotal(): ?string
    {
        return $this->grand_total;
    }

    public function setGrandTotal(?string $grand_total): self
    {
        $this->grand_total = $grand_total;

        return $this;
    }

    public function getStore(): ?string
    {
        return $this->store;
    }

    public function setStore(?string $store): self
    {
        $this->store = $store;

        return $this;
    }

    public function getStoreCode(): ?string
    {
        return $this->store_code;
    }

    public function setStoreCode(?string $store_code): self
    {
        $this->store_code = $store_code;

        return $this;
    }

    public function getCustomerId(): ?string
    {
        return $this->customer_id;
    }

    public function setCustomerId(?string $customer_id): self
    {
        $this->customer_id = $customer_id;

        return $this;
    }

    public function getCustomerName(): ?string
    {
        return $this->customer_name;
    }

    public function setCustomerName(?string $customer_name): self
    {
        $this->customer_name = $customer_name;

        return $this;
    }

    public function getCustomerEmail(): ?string
    {
        return $this->customer_email;
    }

    public function setCustomerEmail(?string $customer_email): self
    {
        $this->customer_email = $customer_email;

        return $this;
    }

    public function getCustomerPhone(): ?string
    {
        return $this->customer_phone;
    }

    public function setCustomerPhone(?string $customer_phone): self
    {
        $this->customer_phone = $customer_phone;

        return $this;
    }

    public function getCustomerDni(): ?string
    {
        return $this->customer_dni;
    }

    public function setCustomerDni(?string $customer_dni): self
    {
        $this->customer_dni = $customer_dni;

        return $this;
    }

    public function getCustomerCountry(): ?string
    {
        return $this->customer_country;
    }

    public function setCustomerCountry(?string $customer_country): self
    {
        $this->customer_country = $customer_country;

        return $this;
    }

    public function getCustomerRegion(): ?string
    {
        return $this->customer_region;
    }

    public function setCustomerRegion(?string $customer_region): self
    {
        $this->customer_region = $customer_region;

        return $this;
    }

    public function getCustomerCity(): ?string
    {
        return $this->customer_city;
    }

    public function setCustomerCity(?string $customer_city): self
    {
        $this->customer_city = $customer_city;

        return $this;
    }

    public function getCustomerPostcode(): ?string
    {
        return $this->customer_postcode;
    }

    public function setCustomerPostcode(?string $customer_postcode): self
    {
        $this->customer_postcode = $customer_postcode;

        return $this;
    }

    public function getCustomerStreet(): ?string
    {
        return $this->customer_street;
    }

    public function setCustomerStreet(?string $customer_street): self
    {
        $this->customer_street = $customer_street;

        return $this;
    }

    public function getCustomerNumber(): ?string
    {
        return $this->customer_number;
    }

    public function setCustomerNumber(?string $customer_number): self
    {
        $this->customer_number = $customer_number;

        return $this;
    }

    public function getCustomerFloor(): ?string
    {
        return $this->customer_floor;
    }

    public function setCustomerFloor(?string $customer_floor): self
    {
        $this->customer_floor = $customer_floor;

        return $this;
    }

    public function getCustomerApartment(): ?string
    {
        return $this->customer_apartment;
    }

    public function setCustomerApartment(?string $customer_apartment): self
    {
        $this->customer_apartment = $customer_apartment;

        return $this;
    }

    public function getCustomerReferences(): ?string
    {
        return $this->customer_references;
    }

    public function setCustomerReferences(?string $customer_references): self
    {
        $this->customer_references = $customer_references;

        return $this;
    }

    /**
     * @return Collection|OrderItem[]
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    public function addItem(OrderItem $item): self
    {
        if (!$this->items->contains($item)) {
            $this->items[] = $item;
            $item->setOrder($this);
        }

        return $this;
    }

    public function removeItem(OrderItem $item): self
    {
        if ($this->items->contains($item)) {
            $this->items->removeElement($item);
            // set the owning side to null (unless already changed)
            if ($item->getOrder() === $this) {
                $item->setOrder(null);
            }
        }

        return $this;
    }

    public function getShippingMethod(): ?string
    {
        return $this->shipping_method;
    }

    public function setShippingMethod(?string $shipping_method): self
    {
        $this->shipping_method = $shipping_method;

        return $this;
    }

    /**
     * @return Collection|OrderHistory[]
     */
    public function getOrderHistories(): Collection
    {
        return $this->order_histories;
    }

    public function addOrderHistory(OrderHistory $orderHistory): self
    {
        if (!$this->order_histories->contains($orderHistory)) {
            $this->order_histories[] = $orderHistory;
            $orderHistory->setOrder($this);
        }

        return $this;
    }

    public function removeOrderHistory(OrderHistory $orderHistory): self
    {
        if ($this->order_histories->contains($orderHistory)) {
            $this->order_histories->removeElement($orderHistory);
            // set the owning side to null (unless already changed)
            if ($orderHistory->getOrder() === $this) {
                $orderHistory->setOrder(null);
            }
        }

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

    public function getShippingDescription(): ?string
    {
        return $this->shipping_description;
    }

    public function setShippingDescription(?string $shipping_description): self
    {
        $this->shipping_description = $shipping_description;

        return $this;
    }

    public function getShippingPrice(): ?string
    {
        return $this->shipping_price;
    }

    public function setShippingPrice(?string $shipping_price): self
    {
        $this->shipping_price = $shipping_price;

        return $this;
    }

    public function getPaymentId(): ?string
    {
        return $this->payment_id;
    }

    public function setPaymentId(?string $payment_id): self
    {
        $this->payment_id = $payment_id;

        return $this;
    }

    public function getBuyerNickname(): ?string
    {
        return $this->buyer_nickname;
    }

    public function setBuyerNickname(?string $buyer_nickname): self
    {
        $this->buyer_nickname = $buyer_nickname;

        return $this;
    }

    public function getPackId(): ?string
    {
        return $this->pack_id;
    }

    public function setPackId(?string $pack_id): self
    {
        $this->pack_id = $pack_id;

        return $this;
    }

    public function getIssuedAt(): ?\DateTimeInterface
    {
        return $this->issued_at;
    }

    public function setIssuedAt(\DateTimeInterface $issued_at): self
    {
        $this->issued_at = $issued_at;

        return $this;
    }
}
