<?php

namespace App\Form;

use App\Entity\Product;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use App\Form\ProductHistoryType;
use App\Form\ProductAttributeType;

class ProductVariantionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('sku')
            ->add('sync', CollectionType::class, [
                'entry_type'    => TextType::class,
                'allow_add'     => true,
                'by_reference'  => false,
                'allow_delete'  => true
            ])
            ->add('client')
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
            ->add('attributes', CollectionType::class, [
                'entry_type'    => ProductAttributeType::class,
                'allow_add'     => true,
                'by_reference'  => false,
                'allow_delete'  => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
