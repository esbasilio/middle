<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Zend\Log\Logger;
use Zend\Log\Writer\Stream;

class CoreController extends AbstractController
{
	/**
	 * [__construct description]
	 */
    public function __construct()
    {}

	public function getPathData(string $path): Object
    {
    	$basePath   = explode("_", $path);
		$enviroment = current($basePath);
		$action     = end($basePath);
		array_pop($basePath);
		$base = implode('_',$basePath);
		unset($basePath[0]);
		$module      = implode('_',$basePath);

		return (Object) [
			'original'   => $path,
			'enviroment' => $enviroment,
			'module'     => $module,
			'action'     => $action,
			'base'       => $base,
		];
    }


	public function dataView(string $path): ?Object
	{
		$path   = $this->getPathData($path);
		// dump($path);
		$em     = $this->getDoctrine();
		$module = $em->getRepository('App\Entity\Module')->findPath($path->module);

		// dump($module);
		if (!empty($module) && is_object($module)) {
			$routes_p = $em->getRepository('App\Entity\Route')->findPermissionByModule($module->getStrategy());
			// $routes = $em->getRepository('App\Entity\Permission')->findByModule($module->getStrategy());
		}

		if (!isset($routes_p) || empty($routes_p) || count($routes_p) <= 0 ) {
			 $this->addFlash("warrning", 'error al ingresar a la vista solicitada, Permisos Denegados');
			 return $this->redirectToRoute("admin_home_index");
		}

		/*foreach ($module->getRoutes() as $key => $route) {
			$actions[$route->getAction()->getName()] = (Object) [];
		}*/
        // $fileLocator = new FileLocator([__DIR__.'/../Routing/Admin']);
        // $yamlFiles   = $fileLocator->locate('module.yaml', null, false);
        // $yaml        = Yaml::parseFile($yamlFiles[0]);

		foreach ($routes_p as $route) {	
			foreach ($this->get('router')->getRouteCollection() as $route_name => $rou) {
				if ($route_name === $route->getRouteName()) {
					// dump([$route_name, $rou]);
					$pathRoute = $rou->getPath();
					// $request = new Request();
					// $request->attributes->add($rou->getDefaults());
					// dump($request);
					break;
				}
			}			

			$routes[$route->getAction()->getName()] = (Object) [
				'id'        => $route->getId(),
				'name'      => $route->getAction()->getName(),
				'path'      => $route->getRouteName(),
				'url' 		=> $pathRoute,
				'view_type' => $route->viewType(),
				'icon'      => $route->getAction()->getIcon(),
				'color'     => $route->getAction()->getColor()
			];
		}

		$current = $this->currentView($path->original);
		if ($current == null) {
			$this->addFlash("warrning", 'error al ingresar a la vista solicitada');
			return $this->redirectToRoute("admin_home_index");
		}
		
		return (Object) [
			'current' => $current,
			'path'    => $path,
			'module'  => $module,
			'routes'  => $routes
		];
	}

    public function currentView(string $path): ?Object
    {
		$path   = $this->getPathData($path);
		$source = $this->getDoctrine()->getRepository('App\Entity\Route')->findCurrentPath($path->enviroment, $path->module, $path->action);
		if (is_null($source)){
        	$this->addFlash("warrning", 'Permisos Denegados');
        	return null;
		}
        
        return $source; 
    }


	/**
	 * [getNotification description]
	 * @param  string $path [description]
	 * @return [type]       [description]
	 */
	public function getNotification(string $path)
	{
		$notifi = $this->getDoctrine()->getRepository('App\Entity\Notification')->findOneByPath($path);

		if(empty($notifi)) return;

		$notification = (object) [
            'type'    => $notifi->getType(), // simple, note
            'color'   => $notifi->getColor(), // primary, secondary, success, danger, warning, yellow, info, lime, purple, light, dark
            'icon'    => $notifi->getIcon(),
            'title'   => $notifi->getTitle(),
            'message' => $notifi->getMessage(),
        ];

        return $notification;
	}

	/**
	 * [getEntity description]
	 * @param  [type] $entity [description]
	 * @return [type]         [description]
	 */
    public function class_entity($entity = null)
    {
    	if(empty($entity)) return;
        // $em = $this->getDoctrine()->getManager();
        // $entityName = $em->getMetadataFactory()->getMetadataFor(get_class($entity))->getName();
        $entityName = get_class($entity);
		$basePath   = explode("\\", $entityName);
		$entity     = end($basePath);

        return (object) [
			'name' => strtolower($entity),
			'path' => $entityName,
        ];
    }

	public function generateToken()
	{
	    return rtrim(strtr(base64_encode(random_bytes(14)), '+/', '-_'), '=');
	}
}