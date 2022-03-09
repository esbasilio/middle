<?php

namespace App\Form;

use App\Entity\Connector;
use App\Entity\ProductConnector;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;   
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ProductConnectorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ->add('stock')
            // ->add('price')
            ->add('connector', EntityType::class, [
                'class'    => "App\Entity\Connector",
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'expanded' => false,
                // 'query_builder' => function (EntityRepository $er) {
                //     return $er->createQueryBuilder('c')
                //         ->join('c.application','a')
                //         ->andWhere('a.method LIKE :val')
                //         ->setParameter('val', '%out%');
                // },
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ]
            ])
            ->add('sites', ChoiceType::class, [
                'required' => false,
                'multiple' => true,
                'expanded' => false,
                'attr'     => [
                    'data-id'          => "site_value",
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ])
            ->add('is_active', CheckboxType::class,[
                'required' => false,
                // 'label'    => false,
                'attr' => [
                    'autocomplete' => 'off',
                    'data-render'  =>'switchery',
                ]
            ])
        ;

        // $formModifier = function (FormInterface $form,  Connector $connector = null, $options) {
        //     if (!empty($connector)) { 
        //         $response = [];           
        //         foreach ($connector->getAttributes() as $attr) {
        //             if ($attr->getAttribute()->getStrategy() === "site") {
        //                 foreach ($attr->getAttributeValues() as $key => $attr_value) {
        //                     $response[$attr_value['name']] = "{$attr_value['value']}";
        //                 }
        //             }
        //         }
        //         $form->add("sites", ChoiceType::class, [
        //             'choices' => $response,
        //             'multiple' => true,
        //             'attr'    => [
        //                 'data-size'        => 5,
        //                 'data-live-search' => true,
        //                 'class'            => 'selectpicker',
        //             ]
        //         ]);
        //     }
        // };

        // $builder->addEventListener(
        //     FormEvents::PRE_SET_DATA,
        //     function (FormEvent $event) use ($formModifier, $options) {
        //         $data = $event->getData();
        //         $formModifier($event->getForm(), $data->getConnector(), $options);
        //     }
        // );

        // $builder->get('connector')->addEventListener(
        //     FormEvents::POST_SUBMIT,
        //     function (FormEvent $event) use ($formModifier, $options) {
        //         $formModifier($event->getForm()->getParent(), $event->getForm()->getData(), $options);
        //     }
        // );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductConnector::class,
        ]);
    }
}
