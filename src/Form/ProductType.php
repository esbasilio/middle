<?php

namespace App\Form;

use App\Entity\Product;
use App\Form\ProductHistoryType;
use App\Form\ProductAttributeType;
use App\Form\ProductVariantionType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('sku', null, [
                'trim' => false,
            ])
            ->add('parent')
            ->add('client', EntityType::class, [
                'class'    => "App\Entity\Client",
                'required' => true,
            ])
            ->add('attribute_set', EntityType::class, [
                'class'    => "App\Entity\ProductAttributeSet",
                'required' => false,
            ])
            ->add('name')
            ->add('description')
            ->add('price')
            ->add('special_price')
            ->add('stock')
            ->add('images', CollectionType::class, [
                'entry_type'    => TextType::class,
                'allow_add'     => true,
                'by_reference'  => false,
                'allow_delete'  => true
            ])
            ->add('status')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
            // 'allow_extra_fields' => true
        ]);
    }
}
