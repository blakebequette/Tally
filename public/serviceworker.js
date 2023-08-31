var staticCacheName = "score-cache-v1";
 
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/images/B-192x192.png',
  '/images/B-512x512.png',
  '/assets/bundle.js',
  '/assets/index.css'
]



self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(CACHE_ASSETS);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});