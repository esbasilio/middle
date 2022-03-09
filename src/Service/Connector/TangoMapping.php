<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-08-08 20:00:20
 * @Last Modified by:   Beto
 * @Last Modified time: 2020-10-06 17:33:26
*/

namespace App\Service\Connector;

use App\Entity\Product;
use App\Service\CoreService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Asset\Context\NullContext;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class TangoMapping extends CoreService
{
	public function order($entity)
	{        
		$order = [       
            'Empresa'                  => $entity->getTangoStore(), # string
            'NumeroOperacionEcommerce' => $entity->getInvoiceId(), # int
            'CodCliente'               => $entity->getTangoCodClient(), # string
            'Nombre'                   => $entity->getCustomerName(), # string
            'CodTipoDocumento'         => '96', # int
            'NumeroDocumento'          => $entity->getCustomerDni(), # string
            'CondicionIVA'             => '2', # int
            'Telefono'                 => $entity->getCustomerPhone(), # string
            'Celular'                  => $entity->getCustomerPhone(), # string
            'Email'                    => $entity->getCustomerEmail(), # string
            'CodProvincia'             => $entity->getTangoCodRegion(), # string
            'Localidad'                => $entity->getCustomerCity(), # string
            'CodPostal'                => $entity->getCustomerPostcode(), # string
            'DomicilioComercial'       => "{$entity->getCustomerStreet()} {$entity->getCustomerNumber()}", # string
            'DomicilioLegal'           => "{$entity->getCustomerStreet()} {$entity->getCustomerNumber()}", # string
            'NumeroTango'              => '', # string
            'FechaEmision'             => is_null($entity->getIssuedAt()) ? $entity->getCreated()->format('c') : $entity->getIssuedAt()->format('c'), # dateTime
            'CodCondicionVenta'        => '1', # int
            'CodTransportista'         => $entity->getTangoCodCarrier(), # string
            'PorcDescuento'            => '0.00', # double
            'ImporteTotal'             => $entity->getGrandTotal(), # double
            'Observaciones'            => '', # string
            'MensajeTango'             => '', # string
            'DomicilioEntrega1'        => "{$entity->getCustomerStreet()} {$entity->getCustomerNumber()}, {$entity->getCustomerCity()}, {$entity->getCustomerRegion()}, cp: {$entity->getCustomerPostcode()}", # string
            'DomicilioEntrega2'        => '', # string
            'IdPedido'                 => $entity->getReferenceId(), # string
            'Estado_Pedido'            => $entity->getStatus(), # string
            'Operador'                 => null,
            'LinkEtiqueta'             => null, # string
            'MarketPlace'              => null, # string
            'IdPagoMercadoLibre'       => $entity->getPaymentId(), # string
        ];

        if ($entity->getStoreCode() == "MLA") {
            $order += [
                'IdCarrito' => $entity->getPackId(), # string
                'ApodoML'   => $entity->getBuyerNickname(),
            ];
        }

        if (!empty($entity->getCustomerReferences()) || !is_null($entity->getCustomerReferences())) {
            $order['ReferenciaDomicilio'] = $entity->getCustomerReferences(); # string
        }

        # add Estado_Pedido to invoice
        if (!empty($shipmentProvider)) {
            $order['Estado_Pedido'] .= "/" . $shipmentProvider;
        }

        if (count($entity->getItems()) < 1)
            throw new \Exception("No se localizo los item de la order << {$entity->getInvoiceId()} >>");
        
        $total_items = number_format($entity->getShippingPrice(), 2, '.', '');
        $items[] = [
            'CodArticulo'          => 'A0008',
            'DescArticulo'         => substr('Costo Flete',0,30),
            'DescAdicional'        => substr($entity->getShippingDescription(),0,20),
            'Cantidad'             => '1',
            'PrecioUnitarioConIVA' => number_format($entity->getShippingPrice(), 2, '.', ''),
            #'PrecioDescuento'      => '0.00',
            'PorcDescuento'        => '0.00',
        ];

        foreach ($entity->getItems() as $item) {
            $total_items += $item->TotalPrice();
            $items[] = [
                'CodArticulo'          => $item->getSku(), #'string'
                'DescArticulo'         => substr($item->getName(),0,30), #'string'
                'DescAdicional'        => substr($item->getName(),0,20), #'string'
                'Cantidad'             => $item->getQty(), #'double'
                'PrecioUnitarioConIVA' => number_format($item->getPrice(), 2, '.', ''), #'double'
                #'PrecioDescuento'      => $item->getSpecialPrice(), #'double'
                'PorcDescuento'        => $item->getDiscountPercent() #'double'
            ];
        };

        if ($entity->getGrandTotal() <> $total_items)
            throw new \Exception("EL importe total de la oreden << {$entity->getInvoiceId()} >> no conincide con el total de items << {$entity->getGrandTotal()} / {$total_items} >>");

        $order['RenglonesFacturaDTO'] = [
            'FacturaRenglonWSDTO' => $items
        ];

        // $encoders    = [new XmlEncoder()];
        // $normalizers = [new ObjectNormalizer()];
        // $serializer  = new Serializer($normalizers, $encoders);
        $response    = [
            'facturaDTO' => $order, 
            'esTest'     => $_ENV['APP_ENV'] == "prod" ? FALSE : TRUE
        ];

        // return $serializer->serialize($response, 'xml');
        return $response;
	}
}