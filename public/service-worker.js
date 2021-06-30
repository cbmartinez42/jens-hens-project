const FILES_TO_CACHE = [
    "/",
    "/manifest.webmanifest",
    '/css/style.css',
    '/js/checkout.js',
    '/js/dashboard.js',
    '/js/home.js',
    '/js/index.js',
    '/js/login.js',
    '/js/logout.js',
    '/js/materialize.js',
    '/js/myorders.js',
    '/js/placeorder.js',
    '/images/jens-hens-logo-297x139.png',
    '/images/favicon.ico',
    '/images/stock/breakfast-3106870_1920.jpg',
    '/images/stock/chicken-1851495_1920.jpg',
    '/images/stock/chicken-1867521_1920.jpg',
    '/images/stock/chicken-2742352_1920.jpg',
    '/images/stock/chicken-3587380_1920.jpg',
    '/images/stock/eggs-1374141_1920.jpg',
    '/images/stock/egg-4903676_1920.jpg'
    // 'views/layouts/main.handlebars',
    // 'views/partials/shippingmethod.handlebars',
    // 'views/checkout.handlebars',
    // 'views/dashboard.handlebars',
    // 'views/homepage.handlebars',
    // 'views/login.handlebars',
    // 'views/myorders.handlebars',
    // 'views/placeorder.handlebars',
    // 'views/termsofservice.handlebars',
    // 'views/thankyou.handlebars'
  ];
  
  const CACHE_NAME = "static-cache-v2";
  const DATA_CACHE_NAME = "data-cache-v1";

  // install
self.addEventListener("install", function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });

  self.addEventListener("activate", function(evt) {
    evt.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
  
    self.clients.claim();
  });

  // fetch
self.addEventListener("fetch", function(evt) {
    // cache successful requests to the API
    if (evt.request.url.includes("/api/")) {
      evt.respondWith(
        caches.open(DATA_CACHE_NAME).then(cache => {
          return fetch(evt.request)
            .then(response => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }
  
              return response;
            })
            .catch(err => {
              // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
        }).catch(err => console.log(err))
      );
  
      return;
    }

// if the request is not for the API, serve static assets using "offline-first" approach.
// see https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
    evt.respondWith(
    caches.match(evt.request).then(function(response) {
        return response || fetch(evt.request);
    })
    );
});
