<?php

namespace App\Form;

use App\Entity\Client;
use App\Entity\ProductAttributeSet;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ProductAttributeSetType extends AbstractType
{
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $reference_ids = isset($options['data']) ? $options['data']->getReferenceId() : [];
        $builder
            ->add('name')
            ->add('is_default');
        
        foreach ($this->security->getToken()->getUser()->getClient()->getConnectors() as $connect) {                
            $input_label = "{$connect->getCode()} ({$connect->getApplication()->getName()})";
            $input_value = isset($reference_ids[$connect->getCode()]) ? $reference_ids[$connect->getCode()] : '';
            
            if ($connect->getApplication()->getIsGlobal()) {
                $input_label = $connect->getApplication()->getName();
                $input_value = isset($reference_ids[$connect->getApplication()->getStrategy()]) ? $reference_ids[$connect->getApplication()->getStrategy()] : '';
            }
            
            $builder->add($connect->getReferenceName(), TextType::class, [
                'mapped'   => false,
                'required' => false,
                'label'    => $input_label,
                'data'    => $input_value,
                'attr'     => [
                    'class' => 'form-control'
                ]
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductAttributeSet::class,
        ]);
    }
}
