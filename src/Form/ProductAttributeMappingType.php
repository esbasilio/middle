<?php

namespace App\Form;

use App\Entity\Client;
use App\Entity\Attribute;
use App\Service\ConnectorService;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use App\Entity\ProductAttributeMapping;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ProductAttributeMappingType extends AbstractType
{

    public function __construct(ConnectorService $conn)
    {
        $this->_conn = $conn;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('name', TextType::class,[
                // 'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'help'     => 'ingrese un nombre unico que identifique el valor del atributo',
                'attr'     => [
                    'class'       => 'form-control'
                ]
            ])
            ->add('client', EntityType::class, [
                'class'    => 'App\Entity\Client',
                'label'    => 'client',
                'required' => false,
                'multiple' => false,
                'expanded' => false,
                'label'    => 'client',
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ]
            ])
            ->add('attribute', EntityType::class, [
                'class'    => 'App\Entity\Attribute',
                'required' => false,
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'label'    => 'attribute',
                'attr'     => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                    'placeholder'      => '',
                ],
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->andWhere('a.type in (:val)')
                        ->andWhere('a.is_mapping_value = true')
                        ->setParameter('val', ['product','variation']);
                },
            ])
        ;

        $formModifier = function (FormInterface $form, Attribute $attribute = null, Client $client = null, $options) {
            $mapping = $options['data'];
            if (!empty($client)) {            
                foreach ($client->getConnectors() as $connect) {
                    $mapping_value = $mapping->getMappingValue($connect->getCode());
                    foreach ($connect->getAttributes() as $attr) {
                        if ($attr->getAttribute()->getStrategy() == $attribute->getStrategy()) {
                            if (is_array($attr->getAttributeValues())) {
                                foreach ($this->_conn->attributeValue($attr) as $val) {
                                    $response["{$val['value']} - {$val['name']}"] = "{$val['value']} - {$val['name']}";
                                    if ($mapping_value && $mapping_value->getValue() == $val['value']) {
                                        $select = "{$val['value']} - {$val['name']}";
                                    }
                                }
                            }
                        }
                    }
                
                    if (isset($response)) {
                        $form->add($connect->getApplication()->getStrategy(), ChoiceType::class, [
                            'choices' => $response,
                            'data'    => isset($select)? $select: '',
                            'mapped'  => false,
                            'required' => false,
                            'attr'    => [
                                'data-size'        => 5,
                                'data-live-search' => true,
                                'class'            => 'selectpicker',
                            ]
                        ]);
                    }
                    unset($response);
                }
            }
        };
        $client = null;
        $attr = null;

        $builder->addEventListener(
            FormEvents::PRE_SET_DATA,
            function (FormEvent $event) use ($formModifier, $options) {
                $data = $event->getData();
                $formModifier($event->getForm(), $data->getAttribute(), $data->getClient(), $options);
            }
        );

        $builder->get('client')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event){
                $this->client = $event->getForm()->getData();
            }
        );

        $builder->get('attribute')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) use ($formModifier, $options) {
                $client = $event->getForm()->getData();
                $this->attr = $client;
                $formModifier($event->getForm()->getParent(), $this->attr, $this->client, $options);
            }
        );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductAttributeMapping::class
        ]);
    }
}
