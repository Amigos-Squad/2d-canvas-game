// const URLS = [
//   '/',
// ];
// const CACHE_NAME = 'cache-v1';

// this.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//     .then(cache => {
//       console.log("Opened cache");
//       // return cache.addAll(URLS);
//     })
//     .catch(err => { 
//       console.log(err);
//       throw err;
//     })
//   );
// });

// this.addEventListener("activate", event => {
//   event.waitUntil( 
//     caches.keys().then(cacheNames => { 
//       return Promise.all( 
//         cacheNames 
//         .filter(name => true) 
//         .map(name => caches.delete(name))  
//       )
//     })
//   )
// });

// this.addEventListener('fetch', event => { 
//   event.respondWith(
//     fetch(event.request).then(response => {
//       const responseToCache = response.clone(); 
//       caches.open(CACHE_NAME) 
//       .then(cache => { 
//         cache.put(event.request, responseToCache);
//       });
//       return response
//     }).catch(() => caches.match(event.request))
//   );
// }); 