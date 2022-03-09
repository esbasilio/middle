<?php

namespace App\Form;

use App\Entity\Route;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class RouteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('custom_path', TextType::class,[
                'required' => false,
            ])
            ->add('action', EntityType::class, [
                'class'    => 'App\Entity\Action',
                'attr' => [
                    'data-size'        => 4,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ])
            ->add('view_type', ChoiceType::class, [
                'multiple' => false,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 3,
                    'data-live-search' => false,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    'Default' => null,
                    'View'    => 'view',
                    'Modal'   => 'modal',
                ]
            ])
            ->add('main_action', CheckboxType::class,[
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

            ->add('enviroment', EntityType::class, [
                'class'    => 'App\Entity\Enviroment',
                'expanded' => false,
                // 'help'     => 'is_alone_view',
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Route::class,
        ]);
    }
}
