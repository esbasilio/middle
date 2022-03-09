<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\TimestampableTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductHistoryRepository")
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(name="search_idx", columns={"product_id", "connector_id"})})
 */
class ProductHistory
{
    use TimestampableTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $reference_id;

    /**
     * @ORM\Column(type="string", length=300, nullable=true)
     */
    private $url;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $message;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="histories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;

    /**
     * @ORM\ManyToOne(targetEntity=Connector::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $connector;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $failed_attempts;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $type;
    

    public function __toString()
    {
        return $this->connector->getApplication()->getName();
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

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

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

    public function getConnector(): ?Connector
    {
        return $this->connector;
    }

    public function setConnector(?Connector $connector): self
    {
        $this->connector = $connector;

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getFailedAttempts(): ?int
    {
        return $this->failed_attempts;
    }

    public function setFailedAttempts(int $failed_attempts): self
    {
        $this->failed_attempts = $failed_attempts;

        return $this;
    }

}
