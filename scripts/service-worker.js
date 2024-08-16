const CACHE_NAME = "gn-site-v1"
const urlsToCache = [
    "/",
    "/index.html",
    "/pp.html",
    "/tos.html",
    "/about.html",
    "/404.html",
    "/styles/index.css",
    "/styles/styles.css",
    "/scripts/translating.js",
    "/images/add.svg",
    "/images/btc96.png",
    "/images/GoodNightLogo.svg",
    "/images/GoodNightLogoPng.png",
    "/images/sdc96.png",
    "/images/support.svg",
    "/images/topgg96.png"
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("activate", (event) => {
    const cacheWL = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWL.indexOf(cacheName) == -1) {
                        return caches.delete(cacheName);
                    };
                })
            )
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});