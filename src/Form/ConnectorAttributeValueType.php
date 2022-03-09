<?php

namespace App\Form;

// use App\Entity\ConnectorAttributeValue;
// use App\Entity\Attribute;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class ConnectorAttributeValueType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,[
                'label'    => false,
                'required' => false,
                'attr'     => [
                    'placeholder' => 'nombre',
                    'class'       => 'form-control form-control-sm'
                ]
            ])
            ->add('value', TextType::class,[
                'label'    => false,
                'required' => false,
                'attr'     => [
                    'placeholder' => 'valor',
                    'class'       => 'form-control form-control-sm'
                ]
            ])
        ;
    }

}
