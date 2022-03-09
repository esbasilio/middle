<?php

namespace App\Form;

use App\Entity\Permission;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\Module;
use App\Entity\Role;
use App\Entity\Action;

class PermissionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('roles', EntityType::class, [
                'class'    => Role::class,
                'multiple' => true,
                'expanded' => false,
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ])
            ->add('module', EntityType::class, [
                'class' => Module::class,
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ])
        ;

        $formModifier = function (FormInterface $form, Module $module = null) {
            $routes = null === $module ? [] : $module->getRoutes();
            $form->add('routes', EntityType::class, [
                'required' => false,
                'multiple' => true,
                'expanded' => false,
                'class'    => 'App\Entity\Route',
                'choices'  => $routes,
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ]);
        };

        $builder->addEventListener(
            FormEvents::PRE_SET_DATA,
            function (FormEvent $event) use ($formModifier) {
                $data = $event->getData();
                $formModifier($event->getForm(), $data->getModule());
            }
        );

        $builder->get('module')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) use ($formModifier) {
                $module = $event->getForm()->getData();
                $formModifier($event->getForm()->getParent(), $module);
            }
        );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Permission::class,
        ]);
    }
}
