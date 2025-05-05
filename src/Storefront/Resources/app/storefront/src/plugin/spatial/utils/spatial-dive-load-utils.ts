declare global {
    interface Window {
        DIVEClass: typeof import('@shopware-ag/dive').DIVE;
        loadDiveUtil: {
            isLoaded: boolean;
            promise: Promise<void> | null;
            promiseResolve: () => void;
        };
    }
}

/**
 * @package innovation
 *
 * @experimental stableVersion:v6.8.0 feature:SPATIAL_BASES
 */
export async function loadDIVE(): Promise<void> {

    if (!window.loadDiveUtil) {
        window.loadDiveUtil = {
            isLoaded: false,
            promise: null,
            promiseResolve: () => {},
        };
    }

    /* eslint-disable */
    if (window.loadDiveUtil.isLoaded) {
        return;
    }

    if (window.loadDiveUtil.promise) {
        await window.loadDiveUtil.promise;
        return;
    }

    window.loadDiveUtil.promise = new Promise((resolve) => {
        window.loadDiveUtil.promiseResolve = resolve;
    });

    if (!window.DIVEClass) {
        window.DIVEClass = (await import('@shopware-ag/dive')).DIVE;
        await import ('@shopware-ag/dive/modules/State');
    }

    window.loadDiveUtil.promiseResolve();
    window.loadDiveUtil.isLoaded = true;
    /* eslint-enable */
}
