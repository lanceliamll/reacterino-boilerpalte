// Create Cache Name
const CACHE_NAME = 'version-1';
const urlsToCache = ['offline.html'];

const self = this;

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache Opened', cache);
        return cache.addAll(urlsToCache);
      })
  )
})

// Listen for Requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(err => {
            console.error(err);
            caches.match('offline.html');
          })
      })
  )
})

// Active Service Worker
self.addEventListener('active', event => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  // Keep only the specific Cache(CACHE_NAME)
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      Promise.all(cacheNames.map(cacheName => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      }))
    })
  )
})