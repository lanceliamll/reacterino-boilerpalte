console.log("Hello PWA");


//Install Service Worker
self.addEventListener('install', ev => {
  console.log("Success: Service Worker Installed", ev);
})
