const CACHE_NAME = 'souzafoot-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './squads.js',
  './mundial.js',
  './continental_tournaments.js',
  './mundial_integration.js',
  './manifest.json',
  './icon.svg'
];

// Instalação do Service Worker e Caching dos arquivos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Fazendo cache dos arquivos estáticos');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Ativação do Service Worker e Limpeza de caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Removendo cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Intercepção de requisições
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Apenas lida com requisições GET
  if (req.method !== 'GET') return;

  // Estratégia Cache First para arquivos estáticos locais
  if (STATIC_ASSETS.some(asset => req.url.includes(asset.replace('./', ''))) || url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then(cachedResponse => {
        if (cachedResponse) {
          // Retorna do cache, mas atualiza em background (Stale While Revalidate)
          fetch(req).then(networkResponse => {
            if (networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => cache.put(req, networkResponse));
            }
          }).catch(() => {/* Ignora erros de rede quando offline */});
          return cachedResponse;
        }
        return fetch(req).then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(req, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  } else {
    // Estratégia Network First com Fallback para Cache para CDNs externas (ui-avatars, fonts, fontawesome)
    event.respondWith(
      fetch(req)
        .then(networkResponse => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(req).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;
            // Se for uma imagem externa (ex: escudos remotos) que falhou e não está no cache, retorna o avatar de fallback offline
            if (req.destination === 'image') {
              return caches.match('./icon.svg');
            }
          });
        })
    );
  }
});
