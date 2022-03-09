<?php

namespace App\Entity\Traits;

use Gedmo\Mapping\Annotation as Gedmo;

Trait TranslatableTrait
{
    /**
     * @Gedmo\Locale
     * Used locale to override Translation listener`s locale
     * this is not a mapped field of entity metadata, just a simple property
     * and it is not necessary because globally locale can be set in listener
     */
    private $locale;

    public function setTranslatableLocale($locale)
    {
        $this->locale = $locale;
    }
}