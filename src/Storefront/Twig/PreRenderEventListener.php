<?php

namespace Shopware\Storefront\Twig;

use Composer\InstalledVersions;
use Shopware\Core\Framework\Adapter\Twig\TemplateFinderInterface;
use Shopware\Core\Framework\Log\Package;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

use Symfony\UX\TwigComponent\Event\PreRenderEvent;

#[Package('core')]
#[AsEventListener]
class PreRenderEventListener
{
    /** @internal  */
    public function __construct(private readonly TemplateFinderInterface $finder)
    {
    }

    public function __invoke(PreRenderEvent $event): void
    {
        if (!$this->isSymfonyUxTwigComponentsInstalled()) {
            return;
        }

        /** Checking for components that are used from a custom namespace, for example extensions. */
        if (str_starts_with($event->getTemplate(), '@')) {
            $template = $this->finder->find($event->getTemplate());
        } else {
            $template = $this->finder->find('@Storefront/' . $event->getTemplate());
        }

        $event->setTemplate($template);
    }

    private function isSymfonyUxTwigComponentsInstalled(): bool
    {
        return InstalledVersions::isInstalled('symfony/ux-twig-component', false);
    }
}
