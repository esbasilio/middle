<?php

namespace App\Form;

use App\Entity\Client;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;


class ClientType extends AbstractType
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
            ->add('email', EmailType::class,[
                'required' => true,
                'label'    => 'email',
                'attr'     => [
                    'autocomplete'      => 'off',
                    'data-parsley-type' => "email"
                ]
            ])
            ->add('is_active', CheckboxType::class,[
                'required' => false,
                'label'    => 'is_active',
                'attr'     => [
                    'autocomplete' => 'off',
                    'data-render'  =>'switchery',
                ]
            ])
            ->add('users', EntityType::class, [
                'required' => false,
                'multiple' => true,
                'class'    => 'App\Entity\User',
                'expanded' => false,
                'label'    => 'users',
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
            ])
            ->add('token', TextType::class,[
                'required'    => true,
                // 'disabled' => 'disabled',
                'help'        => 'X-AUTH-TOKEN in header',
                'label'       => 'token',
                'attr'        => [
                    "data-target" => 'generate-token'
                ]
            ])
            ->add('parent_sku_format', TextType::class,[
                'required' => true,
                'help'     => 'ingrese la expresión regular para determinar el SKU del producto padre',
            ])
            ->add('logo', FileType::class, [
                // unmapped means that this field is not associated to any entity property
                'mapped' => false,
                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Client::class,
        ]);
    }
}
