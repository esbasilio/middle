<?php

namespace App\Form;

use App\Entity\ConnectorAttributeSet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ConnectorAttributeSetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ->add('connector_attributes')
            ->add('attribute_set', EntityType::class, [
                'class'    => 'App\Entity\ProductAttributeSet',
                'attr' => [
                    'data-size'        => 4,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ])
            ->add('is_required', CheckboxType::class,[
                'required' => false,
                'label' => false,
                'attr' => [
                    'data-switch'       => "true",
                    'data-handle-width' => "20",
                    'data-on-color'     => "success",
                    'data-off-text'     => "No",
                    'data-on-text'      => "Si",
                ]
            ])
            ->add('is_variation', CheckboxType::class,[
                'required' => false,
                'label' => false,
                'attr' => [
                    'data-switch'       => "true",
                    'data-handle-width' => "20",
                    'data-on-color'     => "success",
                    'data-off-text'     => "No",
                    'data-on-text'      => "Si",
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ConnectorAttributeSet::class,
        ]);
    }
}
