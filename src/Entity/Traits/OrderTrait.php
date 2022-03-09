<?php

namespace App\Entity\Traits;

Trait OrderTrait
{
    public function getTangoStore()
    {
        switch($this->getStoreCode()) {
            // Si es NB facturar a Sport Icon
            case "espanol_newbalance":
                $empresa = 'SI';
                break;
            // Si es birkenstock o melissa facturar a White Butterfly
            case "espanol_birkenstock":
            case "espanol_melissa":
            case "hydroflask_espanol":
            case "fjallraven_espanol":
                $empresa = 'WB';
                break;
            case "geoh_espanol":
                $empresa = 'JM';
                break;
            default:
                $empresa = 'KA';
                break;
        }

        return $empresa;
    }

    public function getTangoCodCarrier()
    {        
        switch($this->getShippingMethod()) {
            case 'watts25_storepickup_watts25_storepickup':
                $res = 'RPAN';
                break;
            default:
                $res = 'OCA1';
                break;
        }
        return $res;
    }

    public function getTangoCodRegion()
    {
        $cod_region = [
            '00' => 'Capital Federal',
            '01' => 'Buenos Aires',
            '02' => 'Catamarca',
            '03' => 'Córdoba',
            '04' => 'Corrientes',
            '05' => 'Entre Ríos',
            '06' => 'Jujuy',
            '07' => 'Mendoza',
            '08' => 'La Rioja',
            '09' => 'Salta',
            '10' => 'San Juan',
            '11' => 'San Luis',
            '12' => 'Santa Fe',
            '13' => 'Santiago del Estero',
            '14' => 'Tucumán',
            '16' => 'Chaco',
            '17' => 'Chubut',
            '18' => 'Formosa',
            '19' => 'Misiones',
            '20' => 'Neuquén',
            '21' => 'La Pampa',
            '22' => 'Río Negro',
            '23' => 'Santa Cruz',
            '24' => 'Tierra',
        ];

        $idExit = '';
        foreach ($cod_region as $key => $value) {
            similar_text($value, $this->getCustomerRegion(), $percent);
            if ($percent >= 60) {
                $idExit = $key;
                break;
            }
        }

        return $idExit;
    }

    public function getTangoCodClient()
    {
        return str_pad($this->getCustomerId(), 6, "0", STR_PAD_LEFT);
    }
}