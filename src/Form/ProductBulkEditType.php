<?php

namespace App\Form;

use App\Entity\Connector;
use App\Entity\ProductAttributeSet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ProductBulkEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('attribute_set', EntityType::class, [
                'class'    => ProductAttributeSet::class,
                'required' => false,
            ])
            ->add('status', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    "" => "",
                    "Active" => 1,
                    "Inactive" => 0
                ],
            ])
            ->add('ids', HiddenType::class);
    }
}
