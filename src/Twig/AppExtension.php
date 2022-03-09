<?php

/**
 * @Author: Alberto Urbaez
 * @Date:   2020-05-21 21:36:24
 * @Last Modified by:   Alberto Urbaez
 * @Last Modified time: 2020-11-22 12:27:08
 */
namespace App\Twig;

use App\Repository\ModuleRepository;
use Twig\TwigFilter;
use Twig\TwigFunction;
use App\Utils\Markdown;
use Twig\Extension\AbstractExtension;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authentication\Token\SwitchUserToken;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;


class AppExtension extends AbstractExtension
{
    private $parser;
    private $security;
    private $em;
    private $session;

    public function __construct(
        Markdown $parser,
        Security $security,
        ManagerRegistry $registry,
        SessionInterface $session
    )
    {
        $this->parser = $parser;
        $this->security    = $security;
        $this->em          = $registry;
        $this->session     = $session;
    }

    /**
     * {@inheritdoc}
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('md2html', [$this, 'markdownToHtml'], ['is_safe' => ['html']]),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('impersonatorUser', [$this, 'getImpersonatorUser']),
            new TwigFunction('granted_permission', [$this, 'getGrantedPermission']),
            new TwigFunction('all_user', [$this, 'getAllUser']),
        ];
    }

    /**
     * Transforms the given Markdown content into HTML content.
     */
    public function markdownToHtml(string $content): string
    {
        return $this->parser->toHtml($content);
    }

    /**
     * [getImpersonatorUser Recupera el usuario origual el cual es el suplantador]
     * @return [type] [description]
     */
    public function getImpersonatorUser()
    {
        $token = $this->security->getToken();
        if ($token instanceof SwitchUserToken) {
            return $impersonatorUser = $token->getOriginalToken()->getUser();
        }

        return;
    }

    /**
     * [getModule description]
     * @param  string $module [description]
     * @return [type]        [description]
     */
    public function getModule(string $module)
    {
        $response = $this->session->get('module');
        $var = null;
        foreach ($response as $key => $value) {
            if ($value->getPath() === $module) {
                $var = $value;
                break; 
            }
        }
        return $var; 
    }

    /**
     * [getGrantedPermission description]
     * @param  string     $type [description]
     * @param  array|null $viws [description]
     * @return [type]           [description]
     */
    public function getGrantedPermission(string $type, array $viws = null)
    {
        $user = $this->security->getToken()->getUser();
        // dump($user);
        switch ($type) {
            case 'section':
                if ($this->session->get('section')) {
                    $response = $this->session->get('section');
                    // dump('session section');
                }else{
                    // dump('section');
                    $response = $this->em->getRepository('App\Entity\Section')->findPermission($user->getRoles());
                    // $this->session->set('section', $response);
                }
                break;
            case 'module':
                if ($this->session->get('module')) {
                    $response = $this->session->get('module');
                    // dump('session module');
                }else{
                    // dump('module');
                    $response = $this->em->getRepository('App\Entity\Module')->findPermission($user->getRoles());
                    // $this->session->set('module', $response);
                }
                break;
            case 'action':
                if ($this->session->get('action')) {
                    $response = $this->session->get('action');
                    // dump('session action');
                }else{
                    // dump('action');
                    $response = $this->em->getRepository('App\Entity\Section')->findPermission($user->getRoles());
                    // $this->session->set('action', $response);
                }
                break;
            default:
                break;
        }
        return $response;
    }
}