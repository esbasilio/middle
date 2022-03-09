<?php

namespace App\Form;

use App\Entity\Role;
use App\Form\Type\IconChoiceType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class RoleType extends AbstractType
{
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
    }

    public function roles($options)
    {
        $response = [];
        $roles = $this->em->getRepository(Role::class)->findAll([], ['id' => 'desc']);
        foreach ($roles as $rol) {
            if (isset($options['data']) && $rol->getCode() != $options['data']->getCode()) {
                $response[$rol->getName()] = $rol->getCode();
            }
        }
        return $response; 
    }
    
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,[
                'required' => true,
                'label'    => 'name',
                'attr'     => [
                    'autocomplete'      => 'off',
                ]
            ])
            ->add('code', TextType::class,[
                'required' => true,
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'attr'     => [
                    'autocomplete' => 'off'
                ]
            ])
            ->add('hierarchy', ChoiceType::class, [
                'multiple' => true,
                'expanded' => false,
                'required' => false,
                'choices'  => $this->roles($options),
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Role::class,
        ]);
    }
}
