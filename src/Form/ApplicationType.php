<?php

namespace App\Form;

use App\Entity\Application;
use App\Form\Type\IconChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ApplicationType extends AbstractType
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
            ->add('is_active', CheckboxType::class,[
                'required' => false,
                'data'     => true,
                'help'     => '',
                'label'    => 'is_active',
                'attr'     => [
                    'autocomplete' => 'off',
                    'data-render'  => 'switchery',
                ]
            ])
            ->add('is_global', CheckboxType::class,[
                'required' => false,
                'data'     => false,
                'attr'     => [
                    'autocomplete' => 'off',
                    'data-render'  => 'switchery',
                ]
            ])
            ->add('logo', FileType::class, [
                'mapped' => false,
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Application::class,
        ]);
    }
}