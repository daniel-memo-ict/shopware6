import template from './sw-media-modal-renderer.html.twig';

interface MediaModal {
    initialFolderId?: string;
    entityContext?: string;
    defaultTab?: 'upload' | 'library';
    allowMultiSelect?: boolean;
    fileAccept?: string;
    callback: (selection: EntityCollection<'media'>[]) => void;
}

const { Component } = Shopware;

/**
 * @sw-package framework
 *
 * @private
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
Component.register('sw-media-modal-renderer', {
    template,

    computed: {
        mediaModal(): MediaModal {
            return Shopware.Store.get('media-modal').mediaModal;
        },
    },

    methods: {
        closeModal(): void {
            Shopware.Store.get('media-modal').closeModal();
        },

        onSelectionChange(selection: EntityCollection<'media'>): void {
            const mediaSelection = selection.map((media) => {
                return {
                    id: media.id,
                    name: media.fileName,
                    url: media.url,
                }
            });

            if (typeof this.mediaModal?.callback === 'function') {
                this.mediaModal.callback(mediaSelection);
            }
        },
    },
});
