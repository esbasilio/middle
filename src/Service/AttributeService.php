<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-10-26 17:08:54
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-04 22:35:48
 */

namespace App\Service;

use App\Entity\Connector;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class AttributeService extends CoreService
{
    public $resp = [];

    public function __construct(
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        FormFactoryInterface $formFactory,
        HttpClientInterface $client,
        SessionInterface $session
    ) {
        parent::__construct($em, $validator, $formFactory, $client, $session);
    }

    /**
     * [prepareAttributes verifica, valida y setea los id del atributo correspondinte]
     * @param  [type] $attr [description]
     * @return [type]       [description]
     */
    public function prepareAndSave(Connector $conn, Product $product, $prod_attrs)
    {
        $sku = $product->getSku();
        $attributes = $this->getRequiredAttributes($conn, $product);

        foreach ($attributes as $attribute) {
            $_prod_attr_key = array_search($attribute['code'], array_column($prod_attrs, 'code'));

            if ($_prod_attr_key === false && isset($attribute['is_required']) && $attribute['is_required'] == true) {
                $this->resp = $this->response($sku, "Atributo << {$attribute['code']} >> contienen un valor vacio o nulo  << {$sku} >>", 'warning');

                continue;
            }

            $_prod_attr = $prod_attrs[$_prod_attr_key];

            # Valido que no vengan vacíos o con tipos de datos no correspondientes
            if (empty($_prod_attr['value']) || (gettype($_prod_attr['value']) !== $attribute['input_type'])) {
                $this->resp = $this->response($sku, "Atributo << {$attribute['code']} >> contienen un valor vacio o no corresponde con el tipo de dato  << {$sku} >>", 'warning');

                continue;
            }

            // Guardo el atributo
            if (is_array($_prod_attr['value'])) {
                foreach ($_prod_attr['value'] as $value) {
                    $this->_saveAttribute($attribute['connector_attribute_id'], $product, $value);
                }
            } else {
                $this->_saveAttribute($attribute['connector_attribute_id'], $product, $_prod_attr['value']);
            }
        }

        return $this->resp;
    }

    private function _saveAttribute($conn_attr, $prod, $value)
    {
        $value = trim($value); # elimino espacios

        # Si es el ID busco la entidad
        if (is_numeric($conn_attr))
            $conn_attr = $this->em->getRepository('App\Entity\ConnectorAttribute')->find($conn_attr);

        $this->em->getRepository('App\Entity\ConnectorAttribute')->addAttributeValue($conn_attr, $value); # buscar y guardar valor del attributo 
        $this->em->getRepository('App\Entity\ProductAttribute')->addAttribute($conn_attr, $prod, $conn_attr->getAttribute(), $value);
    }

    public function getRequiredAttributes(Connector $connector, Product $product)
    {
        $attribute_set = ($product->hasParent()) ? $product->getParent()->getAttributeSet() : $product->getAttributeSet();
        $product_type = $product->hasParent() ? 'variation' : 'product';
        $required_attrs = $this->em->getRepository('App\Entity\Attribute')->findByConnector(
            $connector->getId(),
            isset($attribute_set)
                ? $attribute_set->getId()
                : null,
            $product_type
        );

        return $required_attrs;
    }
}
