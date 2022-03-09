<?php

namespace App\Form;

use App\Entity\Action;
use App\Form\Type\IconChoiceType;
use App\Form\Type\ColorChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ActionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,[
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'attr'     => [
                    'class'       => 'form-control'
                ]
            ])
            ->add('path')
            ->add('code')
            ->add('icon', IconChoiceType::class,[
                'required' => true,
            ])
            ->add('color', ColorChoiceType::class)
            ->add('view_type', ChoiceType::class, [
                'multiple' => false,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 2,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    'View'  => 'view',
                    'Modal' => 'modal',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Action::class,
        ]);
    }
}
