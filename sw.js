const CACHE_NAME = "danktrust-v2";
const FILES = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./logo.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.map(x => { if(x !== CACHE_NAME) return caches.delete(x); })))); self.clients.claim(); });
self.addEventListener("fetch", e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });