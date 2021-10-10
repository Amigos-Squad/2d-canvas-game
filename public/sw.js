const URLS = [
  '/',
];
const CACHE_NAME = 'cache-v1';

this.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log("Opened cache");
      return cache.addAll(URLS);
    })
    .catch(err => { 
      console.log(err);
      throw err;
    })
  );
});

this.addEventListener("activate", event => {
  event.waitUntil( 
    caches.keys().then(cacheNames => { 
      return Promise.all( 
        cacheNames 
        .filter(name => {/* Нужно вернуть true, если хотите удалить этот файл из кеша совсем */}) 
        .map(name => caches.delete(name))  
      )
    })
  )
});

this.addEventListener('fetch', event => { 
  event.respondWith( 
    caches.match(event.request) 
    .then(response => { 
      if (response) { 
          return response; 
      } 
      const fetchRequest = event.request.clone(); 
      return fetch(fetchRequest) 
      .then(response => { 
        if(!response || response.status !== 200) { 
          return response;
        } 
        const responseToCache = response.clone(); 
        caches.open(CACHE_NAME) 
        .then(cache => { 
          cache.put(event.request, responseToCache);
        }); 
        return response; 
      }); 
    })
  );
}); 