<?php

namespace App\Controller\Admin;

use App\Entity\ConnectorAttributeSet;
use App\Form\ConnectorAttributeSetType;
use App\Controller\Admin\AdminController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @IsGranted("ROLE_USER")
 */
class ConnectorAttributeSetController extends AdminController
{
    public function __construct()
    {
        parent::__construct(new ConnectorAttributeSet, ConnectorAttributeSetType::class);
    }
}