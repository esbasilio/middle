<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-02-29 20:44:35
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-21 13:20:59
 */
namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ColorChoiceType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'attr' => [
                'data-size'        => 5,
                'data-live-search' => true,
                'class'            => 'selectpicker',
            ],
            'choices'  => [
                'Primary'   => 'primary',
                'Secondary' => 'secondary',
                'Success'   => 'success',
                'Danger'    => 'danger',
                'Warning'   => 'warning',
                'Info'      => 'info',
                'Light'     => 'light',
                'Dark'      => 'dark',
            ],
            'choice_attr' => function($choice, $key, $value) {
                return ['class' => 'bg-'.strtolower($key).' text-light-'.strtolower($key)];
            }
        ]);
    }
    public function getParent()
    {
        return ChoiceType::class;
    }
}