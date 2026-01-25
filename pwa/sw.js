// sw.js - Service Worker Mínimo para PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Apenas repassa a requisição (necessário para PWA funcionar)
  e.respondWith(fetch(e.request));
});
