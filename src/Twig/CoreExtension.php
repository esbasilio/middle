<?php

namespace App\Twig;

use Twig\TwigFilter;
use Twig\TwigFunction;
use App\Controller\CoreController;
use Twig\Extension\AbstractExtension;
use App\Controller\Admin\AdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class CoreExtension extends AbstractExtension
{
    private $_core;
    private $_admin;
    private $session;
    private $request;
    private $requestStack;

    public function __construct(
        CoreController $core,
        AdminController $admin,
        SessionInterface $session,
        RequestStack $requestStack = null
    )
    {
        $this->_core        = $core;
        $this->_admin       = $admin;
        $this->session      = $session;
        $this->requestStack = $requestStack;
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('filter_notification', [$this, 'doSomething']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('ext_notification', [$this, 'getNotification']),
            new TwigFunction('data_view', [$this, 'callDataView']),
        ];
    }

    public function setRequest(Request $request = null)
    {
        $this->request = $request;
    }

    /**
     * @return Request|null
     */
    private function getRequest()
    {
        if ($this->requestStack && $request = $this->requestStack->getCurrentRequest()) {
            return $request;
        }

        return $this->request;
    }

    public function doSomething($value)
    {
        // ...
    }

    /**
     * [getNotification description]
     * @param  string $path [description]
     * @return [type]       [description]
     */
    public function getNotification(string $path = null)
    {
        $path = ($path) ?: $this->getRequest()->attributes->get('_route');
        return $this->_core->getNotification($path);
    }

    /**
     * [getDataView description]
     * @param  string|null $path [description]
     * @return [type]            [description]
     */
    public function callDataView(string $path = null)
    {
        $path = ($path) ?: $this->getRequest()->attributes->get('_route');
        $response = $this->_core->dataView($path);
        return $response;
    }

}
