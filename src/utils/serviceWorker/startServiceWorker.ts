export const startServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').then(payload => {
                console.log('sw success: ', payload)
            }).catch((e: string) => {
                console.log('sw err: ', e);
            });
        });
    }
}