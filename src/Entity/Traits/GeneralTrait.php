<?php

namespace App\Entity\Traits;

use Gedmo\Mapping\Annotation as Gedmo;
use App\Entity\Traits\BlameableTrait;
use App\Entity\Traits\TimestampableTrait;
use App\Entity\Traits\TranslatableTrait;

Trait GeneralTrait
{
  use BlameableTrait;
  use TimestampableTrait;
  use TranslatableTrait;
}