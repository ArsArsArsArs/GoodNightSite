const CACHE_NAME = "gn-site-v1.2"
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
    "/images/GoodNightPng.png",
    "/images/sdc96.png",
    "/images/support.svg",
    "/images/topgg96.png"
]

self.addEventListener("install", event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return Promise.all(
            urlsToCache.map(url => {
              return cache.add(url).catch(err => {
                console.error("Failed to cache:", url, err);
              });
            })
          );
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
    if (event.request.method !== "GET") {
        event.respondWith(fetch(event.request).catch(error => {
            console.error("Fetch failed in the service worker for a non-GET request:", error);
            throw error;
        }));
        return;
    }

    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(error => {
                console.error("Fetch failed in the service worker:", error);
                throw error;
            });
        })
    );
});

self.addEventListener("push", (push) => {
    const data = push.data.json();
    const title = data.title || "Notification";
    const options = {
        body: data.body,
        icon: data.icon || "/images/GoodNightPng.png",
        data: data.url || "/"
    };

    push.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener("notificationclick", (click) => {
    click.notification.close();
    click.waitUntil(
        clients.openWindow(click.notification.data)
    );

    click.waitUntil(
        self.registration.getNotifications().then((notifications) => {
            notifications.forEach((notification) => notification.close());
        })
    );
});

