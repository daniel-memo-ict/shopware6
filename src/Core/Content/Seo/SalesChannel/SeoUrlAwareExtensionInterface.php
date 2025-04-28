<?php declare(strict_types=1);

namespace Shopware\Core\Content\Seo\SalesChannel;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;
use Shopware\Core\Framework\Log\Package;

#[Package('inventory')]
interface SeoUrlAwareExtensionInterface
{
    /**
     * @return array<string, EntitySearchResult<EntityCollection<Entity>>>
     */
    public function getEntities(): array;
}
