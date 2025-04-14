/**
 * @sw-package framework
 */

import type { uiMediaModalOpen } from '@shopware-ag/meteor-admin-sdk/es/ui/media-modal';

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export type  MediaModalItemEntry = Omit<uiMediaModalOpen, 'responseType'>;

// interface MediaModal {
//     initialFolderId?: string;
//     entityContext?: string;
//     defaultTab?: 'upload' | 'library';
//     allowMultiSelect?: boolean;
//     fileAccept?: string;
//     callback: (selection: string[]) => void;
// }

const mediaModalStore = Shopware.Store.register({
    id: 'media-modal',

    state: () => ({
        mediaModal: null as MediaModalItemEntry | null,
    }),

    actions: {
        openModal(modalConfig: MediaModalItemEntry): void {
            this.mediaModal = modalConfig;
        },

        closeModal(): void {
            this.mediaModal = null;
        },
    },
});

/**
 * @private
 */
export type MediaModalStore = ReturnType<typeof mediaModalStore>;

/**
 * @private
 */
export default mediaModalStore;
