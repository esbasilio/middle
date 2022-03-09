<?php

namespace App\Entity\Traits;

use Gedmo\Mapping\Annotation as Gedmo;

Trait BlameableTrait
{
    /**
     * @var User $created_by
     *
     * @Gedmo\Blameable(on="create")
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(name="created_by", referencedColumnName="id",nullable=true)
     */
    private $created_by;

    /**
     * @var User $updated_by
     *
     * @Gedmo\Blameable(on="update")
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(name="updated_by", referencedColumnName="id", nullable=true)
     */
    private $updated_by;


    public function getCreatedBy()
    {
        return $this->created_by;
    }

    public function setCreatedBy(int $created_by)
    {
        $this->created_by = $created_by;

        return $this;
    }

    public function getUpdatedBy()
    {
        return $this->updated_by;
    }

    public function setUpdatedBy(int $updated_by)
    {
        $this->updated_by = $updated_by;

        return $this;
    }
}