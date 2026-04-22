const cacheName = 'estoque-v1';
const assets = [
  './',
  './index.html',
  './style.css', // certifique-se de que o nome do seu arquivo CSS está correto
  './script.js'  // certifique-se de que o nome do seu arquivo JS está correto
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
