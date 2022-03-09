<?php

namespace App\Form;

use App\Entity\Connector;
use App\Entity\Application;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class ConnectorDafitiType extends AbstractType 
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('output_url', UrlType::class,[
                'label'   => 'domain',
                'default_protocol' => 'https'
            ])
            ->add('user_email', EmailType::class,[
                'required' => true,
                'label'    => 'user_email',
                'attr'     => [
                    'autocomplete'      => 'off',
                    'data-parsley-type' => "email"
                ]
            ])
            ->add('output_token', TextType::class,[
                'required' => true,
                'label'    => 'token',
                'help'     => 'ingrese el Access Token de la integración de magento',
                'attr'     => [
                    'autocomplete' => 'off',
                ]
            ])
            ->add('token_type', TextType::class,[
                'required' => false,
                'help'     => 'ej: Bearer',
                'attr'     => [
                    'autocomplete' => 'off',
                ]
            ])
            ->add('input_token', TextType::class,[
                'required' => true,
                'label'    => 'token',
                'disabled' => 'disabled',
                'attr'     => [
                    'autocomplete' => 'off',
                    "data-target" => 'generate-token'
                ]
            ])
            ->add('is_active', CheckboxType::class,[
                'required' => false,
                'label'    => 'is_active',
                'attr'     => [
                    'data-render'  => 'switchery',
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Connector::class,
        ]);
    }
}
