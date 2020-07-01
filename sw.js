// Polyfill for Chrome caching
importScripts('utils/cache-polyfill.js')

// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(
    // Open a cache
    caches.open('v1').then(function(cache) {
      // Define what we want to cache
      return cache.addAll([
        '/',
        'index.html',
        'index.css',
        'utils/index.js',
        'utils/jquery.min.js',
        'components/loader.js',
        'components/notes.js',
        'components/themeSwitcher.js',
        'helpers/imports.js',
        'helpers/index.js',
        'constants/index.js',
        'public/manifest.json',
        'public/favicon.png',
        'public/images/icon-60.png',
        'public/images/icon-114.png',
        'public/images/icon-152.png',
        'public/images/icon-558.png'
      ]);
    })
  );
});

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {
      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});