<?php

namespace App\Cron;

interface FieldFactoryInterface
{
    public function getField(int $position);
}
