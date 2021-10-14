/* export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('sw.js')
        .then((payload) => {
          console.warn('sw success: ', payload);
        })
        .catch((e: string) => {
          console.warn('sw err: ', e);
        });
    });
  }
};
 */
