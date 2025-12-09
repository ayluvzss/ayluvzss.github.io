// 缓存版本号
const CACHE_VERSION = 'v14';

// 需要缓存的文件列表
const CACHE_FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/index_new.html',
  '/style_new.css',
  '/app_new.js',
  '/manifest.json'
];

// 安装事件 - 预缓存文件
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => {
        console.log('Service Worker: 缓存文件中...');
        return cache.addAll(CACHE_FILES);
      })
      .then(() => {
        console.log('Service Worker: 安装完成');
        return self.skipWaiting();
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_VERSION) {
              console.log('Service Worker: 删除旧缓存', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: 激活完成');
        return self.clients.claim();
      })
  );
});

// 拦截请求 - 网络优先策略（确保获取最新文件）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 网络请求成功，更新缓存
        const responseToCache = response.clone();
        caches.open(CACHE_VERSION)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });
        return response;
      })
      .catch(() => {
        // 网络请求失败，使用缓存
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            return new Response('离线状态，无法加载资源');
          });
      })
  );
});