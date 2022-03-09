<?php

namespace App\Form;

use App\Entity\Role;
use App\Entity\User;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class,[
                'disabled' => empty($options['data']->getId()) ? false : 'disabled',
                'attr'     => [
                    'class'       => 'form-control'
                ]
            ])
            ->add('first_name')
            ->add('last_name')
            ->add('email', EmailType::class,[
                'required' => true,
                'label'    => 'email',
                'attr'     => [
                    'autocomplete'      => 'off',
                    'data-parsley-type' => "email"
                ]
            ])
            ->add('plainPassword', RepeatedType::class, array(
                'required'       => false,
                'label'          => 'plainPassword',
                'mapped'         => true,
                'type'           => PasswordType::class,
                'first_options'  => ['label' => 'Password'],
                'second_options' => ['label' => 'Repeat Password'],
                'attr'           => [
                    'data-parsley-type' => "false"
                ],
                'constraints' => [
                    new Length([
                        'min'        => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        'max'        => 4096,
                    ]),
                ]
            ))
            ->add('token')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
