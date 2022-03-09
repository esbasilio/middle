<?php

namespace App\Form;

use App\Entity\Connector;
use App\Service\ConnectorService;
use App\Entity\ConnectorAttribute;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use App\Form\ConnectorAttributeValueType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class ConnectorAttributeType extends AbstractType
{

    public function __construct(ConnectorService $conn, RequestStack $requestStack)
    {
        $this->_conn = $conn;
        $this->requestStack = $requestStack;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('code', TextType::class,[
                // 'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'required' => true,
                'help'     => 'Codigo que identifica al atributo en la aplicación vinculada',
                'attr'     => [
                    'placeholder' => 'code',
                    'class'       => 'form-control form-control-md'
                ]
            ])
            ->add('reference_id', TextType::class,[
                // 'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'required' => false,
                'help'     => 'Númerdo que identifica al atributo en la aplicación vinculada',
                'attr'     => [
                    'placeholder' => 'reference_id',
                    'class'       => 'form-control form-control-md'
                ]
            ])
            ->add('name', TextType::class,[
                'required' => true,
                'help'     => 'Nombre de tipo texto que identifica al atributo en la aplicación vinculada',
                'attr'     => [
                    'placeholder' => 'name',
                    'class'       => 'form-control form-control-md'
                ]
            ])
            // ->add('category_name', ChoiceType::class,[
            //     // 'choices' => [1=>"test"],
            //     'choices' => [],
            //     // 'data'    => isset($select)? $select: '',
            //     'required' => false,
            //     'help'     => 'Nombre de tipo texto que identifica al atributo en la aplicación vinculada',
            //     'attr'    => [
            //         'data-size'        => 5,
            //         'data-live-search' => true,
            //         'class'            => 'selectpicker',
            //     ]
            // ])
            // ->add('category_code', ChoiceType::class,[
            //     'required' => false,
            //     'choices' => $this->_conn->_mercado_libre->categories((int) $this->requestStack->getCurrentRequest()->get("connector_id")),
            //     'help'     => 'id o codigo que identifica al atributo en la aplicación vinculada',
            //     'attr'    => [
            //         'data-size'        => 5,
            //         'data-live-search' => true,
            //         'class'            => 'selectpicker',
            //     ]
            // ])
            ->add('attribute', EntityType::class, [
                'class'    => 'App\Entity\Attribute',
                'required' => false,
                'multiple' => false,
                'expanded' => false,
                // 'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ],
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->andWhere('a.type in (:val)')
                        ->setParameter('val', ['product','variation','connector']);
                },
            ])
            ->add('connector', EntityType::class, [
                'class'    => 'App\Entity\Connector',
                'required' => true,
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'multiple' => false,
                'expanded' => false,
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ]
            ])
            ->add('auto_save_attribute_value', CheckboxType::class,[
                'required' => false,
                'attr' => [
                    'autocomplete' => 'off',
                    'data-render'  =>'switchery',
                ]
            ])
            ->add('connector_attribute_sets', CollectionType::class, [
                'entry_type'    => ConnectorAttributeSetType::class,
                'label'        => false,
                'allow_add'    => true,
                'by_reference' => false,
                'allow_delete' => true
            ])
            ->add('attribute_values', CollectionType::class, [
                'entry_type'    => ConnectorAttributeValueType::class,
                'label'         => false,
                'entry_options' => [
                    'attr' => [
                        'class' => 'form-row'
                    ],
                ],
                'allow_add'     => true,
                'by_reference'  => false,
                'allow_delete'  => true
            ])
        ;

        // $formModifier = function (FormInterface $form, $code, $options) {
        //     if (!empty($code)) {
        //         $form->add('category_name', ChoiceType::class,[
        //             'choices' => $this->_conn->_mercado_libre->subCaregory((int) $this->requestStack->getCurrentRequest()->get("connector_id"), $code),
        //             // 'data'    => isset($select)? $select: '',
        //             'required' => false,
        //             'help'     => 'Nombre de tipo texto que identifica al atributo en la aplicación vinculada',
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
        //         $formModifier($event->getForm(), $data->getCode(), $options);
        //     }
        // );
        
        // $builder->get('category_code')->addEventListener(
        //     FormEvents::POST_SUBMIT,
        //     function (FormEvent $event) use ($formModifier, $options) {
        //         $code = $event->getForm()->getData();
        //         $formModifier($event->getForm()->getParent(), $code, $options);
        //     }
        // );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ConnectorAttribute::class,
        ]);
    }
}
