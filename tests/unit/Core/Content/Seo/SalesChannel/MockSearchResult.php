<?php declare(strict_types=1);

namespace Shopware\Tests\Unit\Core\Content\Seo\SalesChannel;

use Shopware\Core\Content\Seo\SalesChannel\SeoUrlAwareExtensionInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;
use Shopware\Core\Framework\Log\Package;
use Shopware\Core\Framework\Struct\Struct;

/**
 * @internal
 */
#[Package('inventory')]
class MockSearchResult extends Struct implements SeoUrlAwareExtensionInterface
{
    /**
     * @var array<string, EntitySearchResult<EntityCollection<Entity>>>
     */
    private array $searchResults = [];

    /**
     * Add a search result to the collection.
     *
     * @param EntitySearchResult<EntityCollection<Entity>> $entityResult
     */
    public function addSearch(EntitySearchResult $entityResult, string $entityName): void
    {
        $this->searchResults[$entityName] = $entityResult;
    }

    /**
     * Get a search result by entity name.
     *
     * @return EntitySearchResult<EntityCollection<Entity>>|null
     */
    public function getResult(string $entityName): ?EntitySearchResult
    {
        return $this->searchResults[$entityName] ?? null;
    }

    /**
     * Get all search results.
     *
     * @return array<string, EntitySearchResult<EntityCollection<Entity>>>
     */
    public function getEntities(): array
    {
        return $this->searchResults;
    }
}
