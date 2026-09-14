const CACHE_NAME = "danktrust-v2"; // Changed v1 to v3 - forces update!
const urlsToCache = [
  "./",
  "./index.html",
  "./logo.png",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Force new version immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete OLD cache
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control now
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
