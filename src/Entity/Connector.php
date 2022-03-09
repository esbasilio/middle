<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\BlameableTrait;
use App\Entity\Traits\ConnectorTrait;
use Gedmo\Mapping\Annotation as Gedmo;

use App\Entity\Traits\TimestampableTrait;
use Gedmo\Mapping\Annotation\SlugHandler;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConnectorRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Connector
{
    use TimestampableTrait;
    use ConnectorTrait;
    use BlameableTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     */
    private $code;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Client", inversedBy="connectors")
     */
    private $client;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Application", inversedBy="connectors")
     */
    private $application;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, options={"fixed":true, "comment":"token de entrada"})
     */
    private $input_token;

    /**
     * @ORM\Column(type="json", nullable=true, options={"fixed":true, "comment":"drive de entrada"})
     */
    private $input_type = [];

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $output_url;
    
    /**
     * @ORM\Column(type="string", length=255, nullable=true, options={"fixed":true, "comment":"token de conexcion"})
     */
    private $output_token;
    
    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"fixed":true, "comment":"Campo de Mercado Libre"})
     */
    private $output_token_type;
    
    /**
     * @ORM\Column(type="integer", nullable=true , options={"fixed":true, "comment":"Campo de Mercado Libre"})
     */
    private $output_token_expires_in;
    
    /**
     * @Gedmo\Timestampable(on="change", field={"output_token_expires_in", "output_token"})
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $output_token_updated;
    
    /**
     * @ORM\Column(type="json", nullable=true, options={"fixed":true, "comment":"drive de salida"})
     */
    private $output_type = [];
    
    /**
     * @ORM\Column(type="string", length=255, nullable=true, options={"fixed":true, "comment":"Campo de Mercado Libre"})
     */
    private $output_refresh_token;
    
    /**
     * @ORM\Column(type="string", length=255, nullable=true, options={"fixed":true, "comment":"Campo de Mercado Libre"})
     */
    private $output_scope;
    
    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"fixed":true, "comment":"Campo de Dafiti"})
     */
    private $output_user_email;
    /**
     * @ORM\Column(type="string", length=50, nullable=true, options={"fixed":true, "comment":"Campo de mercado libre"})
     */
    private $output_user_name;
    
    /**
     * @ORM\Column(type="string", length=50, nullable=true, options={"fixed":true, "comment":"Campo de mercado libre"})
     */
    private $output_user_id;

    /**
     * @ORM\Column(type="boolean", options={"default":true})
     */
    private $is_active;

    /**
     * @ORM\Column(type="boolean", options={"default":false})
     */
    private $enabled_cron;

    /**
     * @ORM\Column(type="boolean", options={"default":false})
     */
    private $enabled_log;

    /**
     * @ORM\Column(type="boolean", options={"default":false})
     */
    private $enabled_product_sync;

    /**
     * @ORM\OneToMany(targetEntity=ProductConnector::class, mappedBy="connector", orphanRemoval=true)
     */
    private $products_connector;

    /**
     * @ORM\OneToMany(targetEntity=ConnectorAttribute::class, mappedBy="connector", orphanRemoval=true, cascade={"persist","remove"})
     */
    private $attributes;

    /**
     * @ORM\OneToMany(targetEntity=Order::class, mappedBy="connector", orphanRemoval=true)
     */
    private $orders;

    /**
     * @ORM\OneToMany(targetEntity=ConnectorHistory::class, mappedBy="connector", orphanRemoval=true, cascade={"persist","remove"})
     */
    private $histories;

    public function __construct()
    {
        $this->histories          = new ArrayCollection();
        $this->products_connector = new ArrayCollection();
        $this->attributes         = new ArrayCollection();
        $this->orders             = new ArrayCollection();
    }

    public function __toString()
    {
        return "{$this->getCode()} => ({$this->getApplication()->getName()})";
    }

    /**
     * @ORM\PrePersist()
     */
    public function PrePersist()
    {
        $this->setCode(uniqid("{$this->getClient()->getStrategy()}_"));
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function clone()
    {
        $this->id = null;

        return $this;
    }

    public function getInputToken(): ?string
    {
        return $this->input_token;
    }

    public function setInputToken(?string $input_token): self
    {
        $this->input_token = $input_token;

        return $this;
    }

    public function getInputType(): ?array
    {
        return $this->input_type;
    }

    public function setInputType(?array $input_type): self
    {
        $this->input_type = $input_type;

        return $this;
    }

    public function getOutputUrl(): ?string
    {
        return $this->output_url;
    }

    public function setOutputUrl(?string $output_url): self
    {
        $this->output_url = $output_url;

        return $this;
    }

    public function getOutputToken(): ?string
    {
        return $this->output_token;
    }

    public function setOutputToken(?string $output_token): self
    {
        $this->output_token = $output_token;

        return $this;
    }

    public function getOutputTokenType(): ?string
    {
        return $this->output_token_type;
    }

    public function setOutputTokenType(?string $output_token_type): self
    {
        $this->output_token_type = $output_token_type;

        return $this;
    }

    public function getOutputTokenExpiresIn(): ?int
    {
        return $this->output_token_expires_in;
    }

    public function setOutputTokenExpiresIn(?int $output_token_expires_in): self
    {
        $this->output_token_expires_in = $output_token_expires_in;

        return $this;
    }

    public function getOutputTokenUpdated(): ?\DateTimeInterface
    {
        return $this->output_token_updated;
    }

    public function setOutputTokenUpdated(?\DateTimeInterface $output_token_updated): self
    {
        $this->output_token_updated = $output_token_updated;

        return $this;
    }

    public function getOutputType(): ?array
    {
        return $this->output_type;
    }

    public function setOutputType(?array $output_type): self
    {
        $this->output_type = $output_type;

        return $this;
    }

    public function getOutputRefreshToken(): ?string
    {
        return $this->output_refresh_token;
    }

    public function setOutputRefreshToken(?string $output_refresh_token): self
    {
        $this->output_refresh_token = $output_refresh_token;

        return $this;
    }

    public function getOutputScope(): ?string
    {
        return $this->output_scope;
    }

    public function setOutputScope(?string $output_scope): self
    {
        $this->output_scope = $output_scope;

        return $this;
    }

    public function getOutputUserEmail(): ?string
    {
        return $this->output_user_email;
    }

    public function setOutputUserEmail(?string $output_user_email): self
    {
        $this->output_user_email = $output_user_email;

        return $this;
    }

    public function getOutputUserName(): ?string
    {
        return $this->output_user_name;
    }

    public function setOutputUserName(?string $output_user_name): self
    {
        $this->output_user_name = $output_user_name;

        return $this;
    }

    public function getOutputUserId(): ?string
    {
        return $this->output_user_id;
    }

    public function setOutputUserId(?string $output_user_id): self
    {
        $this->output_user_id = $output_user_id;

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

    public function getEnabledCron(): ?bool
    {
        return $this->enabled_cron;
    }

    public function setEnabledCron(bool $enabled_cron): self
    {
        $this->enabled_cron = $enabled_cron;

        return $this;
    }

    public function getEnabledLog(): ?bool
    {
        return $this->enabled_log;
    }

    public function setEnabledLog(bool $enabled_log): self
    {
        $this->enabled_log = $enabled_log;

        return $this;
    }

    public function getEnabledProductSync(): ?bool
    {
        return $this->enabled_product_sync;
    }

    public function setEnabledProductSync(bool $enabled_product_sync): self
    {
        $this->enabled_product_sync = $enabled_product_sync;

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

    public function getApplication(): ?Application
    {
        return $this->application;
    }

    public function setApplication(?Application $application): self
    {
        $this->application = $application;

        return $this;
    }

    /**
     * @return Collection|ProductConnector[]
     */
    public function getProductsConnector(): Collection
    {
        return $this->products_connector;
    }

    public function addProductsConnector(ProductConnector $productsConnector): self
    {
        if (!$this->products_connector->contains($productsConnector)) {
            $this->products_connector[] = $productsConnector;
            $productsConnector->setConnector($this);
        }

        return $this;
    }

    public function removeProductsConnector(ProductConnector $productsConnector): self
    {
        if ($this->products_connector->removeElement($productsConnector)) {
            // set the owning side to null (unless already changed)
            if ($productsConnector->getConnector() === $this) {
                $productsConnector->setConnector(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ConnectorAttribute[]
     */
    public function getAttributes(): Collection
    {
        return $this->attributes;
    }

    public function addAttribute(ConnectorAttribute $attribute): self
    {
        if (!$this->attributes->contains($attribute)) {
            $this->attributes[] = $attribute;
            $attribute->setConnector($this);
        }

        return $this;
    }

    public function removeAttribute(ConnectorAttribute $attribute): self
    {
        if ($this->attributes->removeElement($attribute)) {
            // set the owning side to null (unless already changed)
            if ($attribute->getConnector() === $this) {
                $attribute->setConnector(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Order[]
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setConnector($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getConnector() === $this) {
                $order->setConnector(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ConnectorHistory[]
     */
    public function getHistories(): Collection
    {
        return $this->histories;
    }

    public function addHistory(ConnectorHistory $history): self
    {
        if (!$this->histories->contains($history)) {
            $this->histories[] = $history;
            $history->setConnector($this);
        }

        return $this;
    }

    public function removeHistory(ConnectorHistory $history): self
    {
        if ($this->histories->removeElement($history)) {
            // set the owning side to null (unless already changed)
            if ($history->getConnector() === $this) {
                $history->setConnector(null);
            }
        }

        return $this;
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
 
}