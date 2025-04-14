/**
 * @sw-package framework
 */
import initializeMediaModal from 'src/app/init/media-modal.init';
import { ui } from '@shopware-ag/meteor-admin-sdk';

describe('src/app/init/media-modal.init.ts', () => {
    beforeAll(() => {
        initializeMediaModal();
    });

    beforeEach(() => {
        Shopware.Store.get('media-modal').mediaModal = null;
    });

    it('should handle incoming uiMediaModalOpen requests', async () => {
        await ui.mediaModal.open({
            title: 'Your modal title',
            locationId: 'your-location-id',
        });

        expect(Shopware.Store.get('media-modal').mediaModal).toStrictEqual({
            title: 'Your modal title',
            locationId: 'your-location-id',
        });
    });
});
