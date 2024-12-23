const cacheName = 'v1';
const cachedFiles = ['/', 'index.html', '/en', '/blog', '/logo.png'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Opened cache');
            return cache.addAll(cachedFiles);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
