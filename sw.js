const CACHE_NAME = 'eliminacode-v1';
const ASSETS = [
  './',
  './index.html',
  './informatore.html',
  './admin.html',
  './qr.html',
  './cartello-pazienti.html',
  './cartello-interno.html',
  './manifest.json',
  './manifest-admin.json',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => null));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Non intercetta le API Cloudflare: i dati della coda devono restare sempre aggiornati.
  if (url.hostname.includes('workers.dev')) return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
