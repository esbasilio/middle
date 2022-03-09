<?php

namespace App\Entity;
use DateTime;
use Doctrine\ORM\Mapping as ORM;
use InvalidArgumentException;
use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\Translatable\Translatable;
use App\Entity\Traits\TimestampableTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LogRepository")
 * @ORM\Table(name="log")
 */
class Log
{
    use TimestampableTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $message;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $summary;

    /**
     * @ORM\Column(type="json",nullable=true)
     */
    private $dump = [];

    /**
     * @ORM\Column(type="smallint",nullable=true)
     */
    private $level;

    /**
     * @ORM\Column(type="string", length=50,nullable=true)
     */
    private $levelName;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    private $channel;

    /**
     * @ORM\Column(type="string",nullable=true)
     */
    private $path;

    /**
     * @ORM\Column(type="string",nullable=true)
     */
    private $method;

    /**
     * @ORM\Column(type="string",nullable=true)
     */
    private $controller;
    
    /**
     * @ORM\Column(type="array",nullable=true)
     */
    private $extra = [];

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private $formatted;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private $clientIp;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private $server;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private $browser;
    
    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private $clientLanguage;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $request = [];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $user;

    public function __construct()
    {
        $this->createdAt = new DateTime();
    }

    /**
     * @ORM\PrePersist
     */
    public function onPrePersist()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getContext(): ?array
    {
        return $this->context;
    }

    public function setContext(array $context): self
    {
        $this->context = $context;

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(int $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getLevelName(): ?string
    {
        return $this->levelName;
    }

    public function setLevelName(string $levelName): self
    {
        $this->levelName = $levelName;

        return $this;
    }

    public function getChannel(): ?string
    {
        return $this->channel;
    }

    public function setChannel(string $channel): self
    {
        $this->channel = $channel;

        return $this;
    }

    public function getExtra(): ?array
    {
        return $this->extra;
    }

    public function setExtra(array $extra): self
    {
        $this->extra = $extra;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getFormatted(): ?string
    {
        return $this->formatted;
    }

    public function setFormatted(string $formatted): self
    {
        $this->formatted = $formatted;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getMethod(): ?string
    {
        return $this->method;
    }

    public function setMethod(string $method): self
    {
        $this->method = $method;

        return $this;
    }

    public function getController(): ?string
    {
        return $this->controller;
    }

    public function setController(string $controller): self
    {
        $this->controller = $controller;

        return $this;
    }

    public function getClientIp(): ?string
    {
        return $this->clientIp;
    }

    public function setClientIp(?string $clientIp): self
    {
        $this->clientIp = $clientIp;

        return $this;
    }

    public function getServer(): ?string
    {
        return $this->server;
    }

    public function setServer(?string $server): self
    {
        $this->server = $server;

        return $this;
    }

    public function getRequest(): ?array
    {
        return $this->request;
    }

    public function setRequest(?array $request): self
    {
        $this->request = $request;

        return $this;
    }

    public function getClientLanguage(): ?string
    {
        return $this->clientLanguage;
    }

    public function setClientLanguage(?string $clientLanguage): self
    {
        $this->clientLanguage = $clientLanguage;

        return $this;
    }

    public function getBrowser(): ?string
    {
        return $this->browser;
    }

    public function setBrowser(?string $browser): self
    {
        $this->browser = $browser;

        return $this;
    }

    public function getSummary(): ?string
    {
        return $this->summary;
    }

    public function setSummary(?string $summary): self
    {
        $this->summary = $summary;

        return $this;
    }

    public function getDump(): ?array
    {
        return $this->dump;
    }

    public function setDump(?array $dump): self
    {
        $this->dump = $dump;

        return $this;
    }
}