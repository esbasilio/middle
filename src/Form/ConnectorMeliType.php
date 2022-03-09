<?php

namespace App\Form;

use App\Entity\Connector;
use App\Entity\Application;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ConnectorMeliType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('output_url', ChoiceType::class, [
                'multiple' => false,
                'expanded' => false,
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'label'    => 'domain',
                'attr'     => [
                    'data-size'        => 10,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    "MLA - Argentina"   => "https://auth.mercadolibre.com.ar", // Argentina 
                    // "MLB - Brasil"      => "https://auth.mercadolivre.com.br", // Brasil
                    // "MCO - Colombia"    => "https://auth.mercadolibre.com.co", // Colombia
                    // "MCR - Costa Rica"  => "https://auth.mercadolibre.com.cr", // Costa Rica
                    // "MEC - Ecuador"     => "https://auth.mercadolibre.com.ec", // Ecuador
                    // "MLC - Chile"       => "https://auth.mercadolibre.cl", // Chile
                    // "MLM - Mexico"      => "https://auth.mercadolibre.com.mx", // Mexico
                    // "MLU - Uruguay"     => "https://auth.mercadolibre.com.uy", // Uruguay
                    // "MLV - Venezuela"   => "https://auth.mercadolibre.com.ve", // Venezuela
                    // "MPA - Panama"      => "https://auth.mercadolibre.com.pa", // Panama
                    // "MPE - Peru"        => "https://auth.mercadolibre.com.pe", // Peru
                    // "MPT - Prtugal"     => "https://auth.mercadolibre.com.pt", // Prtugal
                    // "MRD - Dominicana"  => "https://auth.mercadolibre.com.do",  // Dominicana
                    // "CBT - CBT"         => "https://global-selling.mercadolibre.com"  // CBT
                ]
            ])
            ->add('is_active', CheckboxType::class,[
                'required' => false,
                'label'    => 'is_active',
                'attr'     => [
                    'autocomplete' => 'off',
                    'data-render'  =>'switchery'
                ]
            ])
            ->add('enabled_cron', CheckboxType::class,[
                'required' => false,
                'label'    => 'cron',
                'attr'     => [
                    'autocomplete' => 'off',
                    'data-render'  =>'switchery'
                ]
            ])
            ->add('enabled_log', CheckboxType::class,[
                'required' => false,
                'label'    => 'enabled_log',
                'attr'     => [
                    'data-render'  => 'switchery'
                ]
            ])
            ->add('input_token', TextType::class,[
                'required' => false,
                'label'    => 'token',
                'disabled' => empty($options['data']->getInputToken()) ? false : 'disabled',
                'attr'     => [
                    'autocomplete' => 'off',
                    "data-target" => 'generate-token'
                ]
            ])
            ->add('output_token', TextType::class,[
                'required' => false,
                'label'    => 'token',
                'disabled' => 'disabled',
                'help'     => 'ingrese el Access Token de la integración de magento',
                'attr'     => [
                    'autocomplete' => 'off',
                ]
            ])
            ->add('output_token_type', TextType::class,[
                'required' => false,
                'help'     => 'ej: Bearer',
                'attr'     => [
                    'autocomplete' => 'off',
                ]
            ])
            ->add('output_type', ChoiceType::class, [
                'required' => false,
                'multiple' => true,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 2,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    'Producto' => 'product',
                    'Order'    => 'order',
                ]
            ])
            ->add('input_type', ChoiceType::class, [
                'required' => false,
                'multiple' => true,
                'expanded' => false,
                'attr' => [
                    'data-size'        => 2,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'choices'  => [
                    'Producto' => 'product',
                    'Order'    => 'order',
                ]
            ])
            ->add('clone', SubmitType::class, [
                'attr' => ['class' => 'btn btn-info font-weight-bolder mr-2'],
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Connector::class,
        ]);
    }
}
