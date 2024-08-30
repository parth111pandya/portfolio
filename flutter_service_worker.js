'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9c097b4ce83635ec4a500428ea55c8c9",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "97a1ea7785058a53044872b810aad643",
"/": "97a1ea7785058a53044872b810aad643",
"main.dart.js": "20bd01793172b60986ff2b7aada31c47",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "3ad6a9d86de0a3872cc26754af165a51",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "6c463829d1bbdaf92f8e576f604bc427",
"assets/NOTICES": "b98ea0cb4b9369dc042cc01920ac59df",
"assets/FontManifest.json": "44f8be415e5b6cfcee7778ff43dc6597",
"assets/AssetManifest.bin.json": "5b33ff75b240021c2c3630cf714de94a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1d99a98dab0cfe97bef28d7508479eba",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "44a8a01a267eabf948e7a2b8c388aaf6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "53d18010cc3496b6eabdf4320b0603aa",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/code.png": "c73180178f22dcf07628b0a375c285e9",
"assets/assets/images/GNWebsoft_Logo.png": "d1556064444cd8354115664aa8c7e0fd",
"assets/assets/images/expand.png": "9a4e8e0a5d97ef72beb0dd515c747070",
"assets/assets/images/coding_person_2.jpg": "66fcf3c0973ebebecc026f8cd72d33e1",
"assets/assets/images/stopwatch.png": "55d32f0994283700c98b37b11c068b5b",
"assets/assets/images/my_image.jpg": "4eb2d11100ffad60d80eb0ba4bae8662",
"assets/assets/images/key.png": "ad2912312ff508ed15e6c53ee5da5169",
"assets/assets/images/pmp.png": "f9492316d3ceeea5a7b31e2ae371b4e2",
"assets/assets/images/grid.png": "4b6ac2b54b7d54cc8694b02614e59f73",
"assets/assets/images/flutter_background.png": "50edaa62987ef56c1362d0decaf80c93",
"assets/assets/images/backgroung_image.jpg": "5ba081f053536f87af6863ac3369c520",
"assets/assets/images/appIcon.png": "fab1c8c7eea64de82dfc59b7e68c4258",
"assets/assets/images/coding_person.jpg": "c82f50646eeb0aa6f187363b988cd216",
"assets/assets/images/agri.png": "90b6481992c182604c883487d458a320",
"assets/assets/images/refresh.png": "e2eb995a7edd06e103269864f68b8d60",
"assets/assets/images/software-engineer.png": "3874f5567f86df8cc084b7b70b4c9560",
"assets/assets/gifs/scroll_down.gif": "3c173967b24e2aab6f3b82be2a37f9f8",
"assets/assets/gifs/scroll_down_1.gif": "ca3f0e2aea4338bfcdd5c383eefad011",
"assets/assets/gifs/scroll_circular.gif": "3fffc419d7be1bba2e0a1b96f54abb1c",
"assets/assets/gifs/scroll_down_arrow.gif": "6ed20d4631c9d8a79a5f0248b31a20ed",
"assets/assets/icons/app_archer_icon.png": "f8dfbd150e91a6aea62c717e0e53a64d",
"assets/assets/icons/menu.png": "3a472e1ae3a54de7b803f1aff92c4662",
"assets/assets/fonts/JetBrainsMono-Bold.ttf": "f855a5300fbbb56439586d4ca8a131b2",
"assets/assets/fonts/JetBrainsMono-Regular.ttf": "b678c7a6800a9d944ae8342905c07cb7",
"assets/assets/fonts/earthorbiterbold.ttf": "141f0082275e5cdbcbe7f18a4cc033ec",
"assets/assets/fonts/Anurati-Regular.otf": "ca8632f4d0aacae4633cbfc2f1a673f1",
"assets/assets/fonts/JetBrainsMono-Medium.ttf": "c2ef1b022d1fa4f1a625b56782523619",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
