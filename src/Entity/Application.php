<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ApplicationRepository")
 */
class Application
{
    const STRATEGY_MAGENTO = 'magento_23';
    const STRATEGY_MERCADOLIBRE = 'mercado_libre';
    const STRATEGY_TANGO = 'tango';
    const STRATEGY_DAFITI = 'dafiti';
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_active;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_global;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $logo;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Connector", mappedBy="application")
     */
    private $connectors;

    /**
     * @Gedmo\Slug(fields={"name"}, updatable=false)
     * @ORM\Column(length=255, unique=true)
     */
    private $strategy;

    public function __construct()
    {
        $this->connectors        = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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

    /**
     * @return Collection|Connector[]
     */
    public function getConnectors(): Collection
    {
        return $this->connectors;
    }

    public function addConnector(Connector $connector): self
    {
        if (!$this->connectors->contains($connector)) {
            $this->connectors[] = $connector;
            $connector->setApplication($this);
        }

        return $this;
    }

    public function removeConnector(Connector $connector): self
    {
        if ($this->connectors->contains($connector)) {
            $this->connectors->removeElement($connector);
            // set the owning side to null (unless already changed)
            if ($connector->getApplication() === $this) {
                $connector->setApplication(null);
            }
        }

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

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getIsGlobal(): ?bool
    {
        return $this->is_global;
    }

    public function setIsGlobal(bool $is_global): self
    {
        $this->is_global = $is_global;

        return $this;
    }
}
