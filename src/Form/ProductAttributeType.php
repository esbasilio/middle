<?php

namespace App\Form;

use App\Entity\ProductAttribute;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


class ProductAttributeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('attribute')
            ->add('attribute_mapping', EntityType::class, [
                'class'    => 'App\Entity\ProductAttributeMapping',
                'required' => false,
                'multiple' => false,
                'expanded' => false,
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ],
                'query_builder' => function (EntityRepository $er) use ($options){
                    return $er->createQueryBuilder('cam')
                        ->andWhere('cam.attribute = (:val)')
                        ->setParameter('val', $options['data']->getAttribute());
                },
            ])
            ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductAttribute::class,
        ]);
    }
}
