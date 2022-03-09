<?php

namespace App\Form;

use App\Entity\Section;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\Type\IconChoiceType;
use App\Form\Type\ColorChoiceType;
use App\Entity\Module;

class SectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,[
                'required' => true,
                'help' => '',
                'attr' => [
                    'autocomplete'      => 'off',
                    // 'data-parsley-type' => "text"
                    // 'class'             => 'form-control'
                ]
            ])
            ->add('type', ChoiceType::class, [
                'multiple' => false,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 10,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    'General'  => 'general',
                    'Config'   => 'configuration',
                    'Security' => 'security',
                ]
            ])
            ->add('is_active', CheckboxType::class,[
                'required' => false,
                'help' => '',
                'attr' => [
                    'autocomplete' => 'off',
                    'data-render'  =>'switchery',
                ]
            ])
            ->add('color', ColorChoiceType::class)
            ->add('icon', IconChoiceType::class,[
                'required' => false
            ])
/*            ->add('modules', EntityType::class, [
                'required' => false,
                'class'    => Module::class,
                'multiple' => true,
                'expanded' => false,
                'attr'     => [
                    'size'     => 8,
                    'disabled' => true
                ],
            ])*/
            ->add('order_by')
            ->add('label')

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Section::class,
        ]);
    }
}
