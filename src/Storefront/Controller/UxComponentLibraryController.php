<?php

declare(strict_types=1);

namespace Shopware\Storefront\Controller;

use Shopware\Core\Framework\Log\Package;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * @internal
 */
#[Route(defaults: ['_routeScope' => ['storefront']])]
#[Package('storefront')]
class UxComponentLibraryController extends StorefrontController
{
    #[Route(path: '/ux-component-library', name: 'frontend.ux.component.library', defaults: ['_loginRequired' => false, '_noStore' => true], methods: ['GET'])]
    public function index(): Response
    {
        return $this->renderStorefront('@Storefront/storefront/page/ux-component-library/index.html.twig');
    }
}
