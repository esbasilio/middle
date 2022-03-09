<?php

namespace App\Form;

use App\Entity\Module;
use App\Entity\Action;
use App\Entity\Section;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ResetType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\Type\IconChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class ModuleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('is_active', CheckboxType::class,[
                'required' => false,
                'help'     => '',
                'attr'     => []
            ])
            ->add('order_by')
            ->add('label')
            ->add('path')
            ->add('in_menu', CheckboxType::class,[
                'required' => false,
                'help'     => '',
                'attr'     => []
            ])            
            ->add('section', EntityType::class, [
                'required' => false,
                'multiple' => false,
                'class'    => Section::class,
                'expanded' => false,
                // 'help'     => 'is_alone_view',
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ]
            ])

            ->add('parent', EntityType::class, [
                'required' => false,
                'multiple' => false,
                'class'    => Module::class,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ]
            ])

            ->add('icon', IconChoiceType::class,[
                'required' => false
            ])

            ->add('routes', CollectionType::class, [
                'entry_type'   => RouteType::class,
                'label'        => false,
                'allow_add'    => true,
                'by_reference' => false,
                'allow_delete' => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Module::class,
        ]);
    }
}
