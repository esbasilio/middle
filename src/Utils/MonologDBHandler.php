<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-02-24 17:30:49
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-07-05 22:59:28
 */
namespace App\Utils;

use App\Entity\Log;
use App\Entity\User;
use Doctrine\ORM\ORMException;
use Doctrine\ORM\EntityManagerInterface;
use Monolog\Handler\AbstractProcessingHandler;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Security;

use Monolog\Logger;


class MonologDBHandler extends AbstractProcessingHandler
{
    /**
     * @var EntityManagerInterface
     */
    protected $em;

    protected $requestStack;

    private $sessionManager;

    private $securityContext;

    /**
     * @var Security
     */
    private $security;

    public function __construct(
        EntityManagerInterface $em,
        $level = Logger::ERROR,
        $bubble = true,
        Security $security,
        RequestStack $requestStack
    )
    {
        $this->em           = $em;
        $this->requestStack = $requestStack;
        $this->security     = $security;
        parent::__construct($level, $bubble);
    }

    /**
     * Called when writing to our database
     * @param array $record
     */
    protected function write(array $record): void
    {
        /*
        if (isset($record['context']['route']) and $record['context']['route'] == '_wdt') {
            return;
        }
        
        try {
            // dump($record);
            $logEntry = new Log();
            $logEntry->setMessage($record['message']);
            $logEntry->setLevel($record['level']);
            $logEntry->setLevelName($record['level_name']);
            $logEntry->setChannel($record['channel']);
            $logEntry->setFormatted($record['formatted']);
            $logEntry->setPath($this->requestStack->getCurrentRequest()->getRequestUri());
            $logEntry->setMethod($this->requestStack->getCurrentRequest()->getMethod());
            $logEntry->setClientIp($this->requestStack->getCurrentRequest()->getClientIp());
            $logEntry->setServer($this->requestStack->getCurrentRequest()->server->get('HTTP_HOST'));
            $logEntry->setRequest($this->requestStack->getCurrentRequest()->request->all());
            $logEntry->setBrowser($this->requestStack->getCurrentRequest()->server->get('HTTP_USER_AGENT'));
            $logEntry->setClientLanguage($this->requestStack->getCurrentRequest()->server->get('LANGUAGE'));

            if ($record['level'] != 200) {
                $logEntry->setSummary($record['context']['exception']->getMessage());
            }else{
                // $logEntry->setController($record['context']['route_parameters']['_controller']);
            }

            if(is_array($record['extra']))
            {
                $logEntry->setExtra($record['extra']);
            } else {
                $logEntry->setExtra([]);
            }

            // $user = $this->security->getUser();

            // if ($user instanceof User) {
            //     $logEntry->setUser($user);
            // }

            if (is_array($record['context'])) {
                $logEntry->setDump($record);
            } else {
                $logEntry->setDump([]);
            }

            $this->em->persist($logEntry);
            // $this->em->flush();
        } catch (\Throwable $th) {

        }
        */
    }

}