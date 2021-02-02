// console.log("Hello PWA");
const CACHE_SITE = 'boilerplate-v4';
const CACHE_ASSETS = [
  "/_snowpack/pkg/react.js",
  "/_snowpack/pkg/react-dom.js",
  "/_snowpack/hmr-client.js",
  "/_snowpack/hmr-error-overlay.js",
  "/dist/App.css.proxy.js",
  "/_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js",
  "/dist/App.js",
  "/dist/index.js",
  "/index.html",
  "/index.css",
  "/asset-manifest.json",
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300&display=swap",
  "https://fonts.gstatic.com/s/roboto/v20/KFOiCnqEu92Fr1Mu51QrEz0dL-vwnYh2eg.woff2"
]

//Install Service Worker
self.addEventListener('install', ev => {
  console.log("Service Worker Success: Installed", ev);

  // Finish this line first before declaring finish install
  ev.waitUntil(
    // Open Cache
    caches.open(CACHE_SITE)
      .then(cache => {
        cache.addAll(CACHE_ASSETS)
      })
      .catch(err => {
        console.error('Service Worker Failed: Loading Cache Failed', err);
      })
  )
})


// Activate Service Worker
self.addEventListener('activate', ev => {
  console.log("Service Worker Success: Activated", ev);

  //Delete Old Cache
  ev.waitUntil(
    caches.keys()
      .then(keys => {
        // Delete Old Cache that is not equal to CACHE_SITE value.
        return Promise.all(
          keys
            .filter(key => key !== CACHE_SITE)
            .map(key => caches.delete(key))
        )
      })
  )
})

// Fetch Event from Service Worker
self.addEventListener('fetch', ev => {
  console.log("Service Worker Success: Fetching Event", ev);

  // Respond with Caches
  ev.respondWith(
    caches.match(ev.request)
      .then(cacheRes => {
        // If cache is not available return the request
        return cacheRes || fetch(ev.request)
      })
  )
})