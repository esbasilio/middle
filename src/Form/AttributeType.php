<?php

namespace App\Form;

use App\Entity\Attribute;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class AttributeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('code', TextType::class,[
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'attr'     => [
                    'class'       => 'form-control'
                ]
            ])
            ->add('label')
            ->add('type', ChoiceType::class, [
                'multiple' => false,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    'Producto'   => 'product',
                    'Variación' => 'variation'
                ]
            ])
            ->add('input_type', ChoiceType::class, [
                'multiple' => false,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    "Boolean"      => "boolean",
                    "Integer"      => "integer",
                    "Double"       => "double",
                    "String"       => "string",
                    "Array"        => "array",
                    "Object"       => "object",
                    "Resource"     => "resource",
                    "NULL"         => "NULL",
                    "Unknown type" => "unknown type"
                ]
            ])
            ->add('is_mapping_value', CheckboxType::class,[
                'required' => false,
                'help'     => '',
                'attr' => [
                    'autocomplete' => 'off',
                    'data-render'  =>'switchery',
                ]
            ])
            
            ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Attribute::class,
        ]);
    }
}
