console.log("Hello PWA");


//Install Service Worker
self.addEventListener('install', ev => {
  console.log("Service Worker Success: Installed", ev);
})


// Activate Service Worker
self.addEventListener('activate', ev => {
  console.log("Service Worker Success: Activated", ev);
})

// Fetch Event from Service Worker
self.addEventListener('fetch', ev => {
  console.log("Service Worker Success: Fetching Event", ev);
})