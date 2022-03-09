<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-02-26 20:50:45
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-07-05 22:59:28
 */

namespace App\EventSubscriber;

use Gedmo\Blameable\BlameableListener;
use Gedmo\Translatable\TranslatableListener;
use Gedmo\Loggable\LoggableListener;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\FinishRequestEvent;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class DoctrineExtensionSubscriber implements EventSubscriberInterface
{
    /**
     * @var BlameableListener
     */
    private $blameableListener;
    /**
     * @var TokenStorageInterface
     */
    private $tokenStorage;
    /**
     * @var TranslatableListener
     */
    private $translatableListener;
    /**
     * @var LoggableListener
     */
    private $loggableListener;


    public function __construct(
        BlameableListener $blameableListener,
        TokenStorageInterface $tokenStorage,
        TranslatableListener $translatableListener,
        LoggableListener $loggableListener
    ) {
        $this->blameableListener    = $blameableListener;
        $this->tokenStorage         = $tokenStorage;
        $this->translatableListener = $translatableListener;
        $this->loggableListener     = $loggableListener;
    }    


    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::REQUEST        => 'onKernelRequest',
            KernelEvents::FINISH_REQUEST => 'onLateKernelRequest'
        ];
    }
    public function onKernelRequest(RequestEvent $event): void
    {
        $this->translatableListener->setTranslatableLocale($event->getRequest()->getLocale());
        if ($this->tokenStorage !== null &&
            $this->tokenStorage->getToken() !== null &&
            $this->tokenStorage->getToken()->isAuthenticated() === true
        ) {
            $this->blameableListener->setUserValue($this->tokenStorage->getToken()->getUser());
        }
    }
    
    public function onLateKernelRequest(): void
    {
        $this->translatableListener->setTranslatableLocale('pt');
    }

}