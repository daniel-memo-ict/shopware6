/**
 * @sw-package framework
 */

import { createPinia, setActivePinia } from 'pinia';

describe('modals.store', () => {
    let store = Shopware.Store.get('media-modal');

    beforeEach(() => {
        setActivePinia(createPinia());
        store = Shopware.Store.get('media-modal');
    });

    it('has initial state', () => {
        expect(store.mediaModal).toBeNull();
    });

    it('opens a modal', () => {
        store.openModal({
            locationId: 'test',
            title: 'Test Modal',
        });

        expect(store.mediaModal).toStrictEqual(
            {
                locationId: 'test',
                title: 'Test Modal',
            },
        ]);
    });
});
