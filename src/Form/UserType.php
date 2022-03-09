<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use App\Entity\Role;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class UserType extends AbstractType
{
    public function __construct(EntityManagerInterface $entityManager,Security $security)
    {
        $this->em       = $entityManager;
        $this->security = $security;
    }
    
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
                'attr' => [
                    'autocomplete'      => 'off',
                    'data-parsley-type' => "email"
                ]
            ])
            ->add('role', EntityType::class, [
                'required' => true,
                'multiple' => false,
                'class'    => Role::class,
                'expanded' => false,
                // 'help'     => 'key.trans.is_alone_view',
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ],
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('r')
                        ->andWhere('r.code in (:val)')
                        ->setParameter('val', $this->security->getToken()->getUser()->getRoles());
                },
            ])
            ->add('plainPassword', RepeatedType::class, array(
                'required' => false,
                'mapped'         => true,
                'type'           => PasswordType::class,
                'first_options'  => ['label' => 'Password'],
                'second_options' => ['label' => 'Repeat Password'],
                'attr' => [
                    'data-parsley-type' => "false"
                ],
                'constraints' => [
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        'max' => 4096,
                    ]),
                ]
            ))
/*            ->add('clients', EntityType::class, [
                'required' => false,
                'multiple' => true,
                'class'    => 'App\Entity\Client',
                'expanded' => false,
                // 'help'     => 'key.trans.is_alone_view',
                'attr' => [
                    'data-size'        => 5,
                    'data-live-search' => true,
                    'class'            => 'selectpicker',
                ]
            ])*/
            ->add('token', TextType::class,[
                'required' => true,
                'help'     => '',
                'attr'     => [
                    "data-target" => 'generate-token'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
