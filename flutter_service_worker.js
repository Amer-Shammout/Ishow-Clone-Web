'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c8e0ac96330818e471475d475e83b18b",
"assets/AssetManifest.bin.json": "7f7ea7bad4d5e9629e0929f6e800a60f",
"assets/AssetManifest.json": "d05f2ffbf8c5a76e95252ad80227df88",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/images/Anime.png": "2dbd93abb0e8d98a9a14b01029f5740c",
"assets/assets/images/Arabic.png": "0628340a05e7562175e5f6ef10e57d81",
"assets/assets/images/avatar.png": "47cf674c0d0357c6f557df0a0896945b",
"assets/assets/images/banner_1.png": "d37ff5d0e600da95dfa87bb07918138c",
"assets/assets/images/banner_2.png": "8e5f14814172cd4a81c4c6b96ff77749",
"assets/assets/images/banner_3.jpg": "ca077a951f31f388e8d1405b3c79371d",
"assets/assets/images/banner_4.png": "737129bd73d29f096531a378bfabf74b",
"assets/assets/images/banner_5.png": "b263601f476b217e0475f9109e900b5b",
"assets/assets/images/book.png": "23a80f50555f57093ae575cc11d9292f",
"assets/assets/images/camera.png": "b608aa1a7d14be82eee269650ee38a7c",
"assets/assets/images/Cartoon.png": "c8fad18baeb694f36da2a887e90f2208",
"assets/assets/images/compititions.png": "3bf374080ac4e307725511d473767b44",
"assets/assets/images/content.png": "4ef6696322a4255f6317a5c626c691fc",
"assets/assets/images/conversation.png": "d7c82f97482b87d8d12d3f954d5ba21b",
"assets/assets/images/Cooking_programs.png": "83364de4ef9f77a8989a4dcd1bb506f4",
"assets/assets/images/diverse.png": "b3a66b063e30ead0919095aa0ea0f875",
"assets/assets/images/drawer_logo.png": "bef7c2b201300996716f2470e763def9",
"assets/assets/images/entertainment.png": "cdce39688cc36d2fed97fc0e37f62f69",
"assets/assets/images/favourite.png": "c8e9b7dea8ce4d0400eee22603b354a3",
"assets/assets/images/feedback.png": "284fc35a2b5c7d399c716f2a18413f12",
"assets/assets/images/food.png": "96b4f8a8e60bf90478060351ecb35100",
"assets/assets/images/Foreign.png": "3dbfefe1a343cdd941e4a22f2c23492c",
"assets/assets/images/gift.png": "5beed2e2019443f04461c4a8e8f593b6",
"assets/assets/images/gift_progress_indicator_item.png": "5094f3bb7f726c8d59c5c8b31905bd6d",
"assets/assets/images/health.png": "4e8515e03f774cccb749c802fb4ab81c",
"assets/assets/images/history.png": "1a866e73baa6258774d6069f2d56e22e",
"assets/assets/images/home.png": "87490e0f51a5f8668b61ba85cab91131",
"assets/assets/images/hot.png": "17dfd04b7fa6546c1c43a94ed5cb501e",
"assets/assets/images/Ishow_Logo.png": "afc22a57714daa0ecb3f72185b1dada2",
"assets/assets/images/left_arrow.svg": "cbbe3de65473e96e1cc68c1186256cdd",
"assets/assets/images/logout.svg": "8a34095791f56074e5dd343e57269b6a",
"assets/assets/images/menu.svg": "055d0228f9fa7cd6a443c23bb9b2a7d4",
"assets/assets/images/moview_2.png": "f8a8cd32ecca80f18662dd3a35512c1b",
"assets/assets/images/movie_1.jpg": "f6d1af2b3b9fc08f7d66982208881c9f",
"assets/assets/images/movie_10.png": "4748e10032e590125bef6d47e1b0c2e0",
"assets/assets/images/movie_11.jpg": "4d00b6c82a49dc13ec3594b67ad6f75f",
"assets/assets/images/movie_12.jpg": "4bae1f587956b6d9b7d28ff75d9ffe41",
"assets/assets/images/movie_12.png": "543cc5b993785b1b1be6e81143d0a477",
"assets/assets/images/movie_13.jpg": "8b4edaea8041f7d9d464006004fc5b92",
"assets/assets/images/movie_14.jpg": "eb7c495f75bb82f0a9b3d374a27f86a1",
"assets/assets/images/movie_15.png": "fe249631ca7857694f5f8896a392a981",
"assets/assets/images/movie_16.png": "061825ff102fa1b3e2ad1c1175fca71e",
"assets/assets/images/movie_17.jpg": "54740ae9a2aaf00d656cafd0bc2f0de6",
"assets/assets/images/movie_3.png": "1619c4feb1ba6aceee652270051354b8",
"assets/assets/images/movie_4.jpg": "34d6504617e6b0e3bd38f98026844b16",
"assets/assets/images/movie_5.png": "8bedf75e9f918ba4957904caccf1b863",
"assets/assets/images/movie_6.jpg": "38bfec73b1d888e635a5090822e6ac89",
"assets/assets/images/movie_7.jpg": "e32720259af55a1cb0955c6b11262a0a",
"assets/assets/images/movie_8.jpg": "3df79a06fb416b0e24b5afb93c6e0798",
"assets/assets/images/movie_9.jpeg": "988f3caa27dc532fcaaac816c7f825ce",
"assets/assets/images/notification.svg": "767d4514afdb537e2d4fec31f9056468",
"assets/assets/images/plays.png": "fbd9a3a7db83e29eb7fc4f1ec49a0458",
"assets/assets/images/podcast.png": "6241e7e8738c48cde56418a41e89e064",
"assets/assets/images/presons.png": "f363ed3d18b3bd73d2acf19da0792824",
"assets/assets/images/right_arrow.svg": "4a443dfbbc20f0b8221685b100487bd2",
"assets/assets/images/search.svg": "55f9864254762dc40f4131d63b17cbc8",
"assets/assets/images/series_2024.png": "4587b8dfac9be651d4f8a47ecd952c17",
"assets/assets/images/settings.png": "27103644e53210848b5dd49b7f9293db",
"assets/assets/images/share.png": "a1fb5cb558f9aac32f1b4e3cd50327fa",
"assets/assets/images/social.png": "110ae89acb36fc8480e17a7423e2edf6",
"assets/assets/images/sport_1.png": "41a5d583a4ca5b18711c811c59060479",
"assets/assets/images/sport_2.png": "47a8d3c2a5a7591a8435de6f6ff3f023",
"assets/assets/images/sport_3.png": "aba928e87ce430262c05d91ca5058264",
"assets/assets/images/sport_4.png": "87f113e2eb0259b4ec22994def7e8555",
"assets/assets/images/sport_5.png": "e79fe5345ea01e9ab76353def824bedd",
"assets/assets/images/sport_6.png": "2bc2e4613fc4de2c5001221345f85897",
"assets/assets/images/sport_7.png": "1775381fb8c3858adc49a354ae6813df",
"assets/assets/images/sport_8.png": "060a2162ae42ca79b344eb103746efa5",
"assets/assets/images/sport_9.png": "daec49690150e40874e81dbfc196b18c",
"assets/assets/images/star.svg": "d1d842a68cebefae13902b324da9037e",
"assets/assets/images/watch-now_players.png": "7ddfbf293e505b6793b0c703cf7aa7f3",
"assets/assets/images/watch.png": "10a6cc2fb625f931d54a77ec4d84203d",
"assets/assets/images/xtra_1.png": "5d2f0f94ddbd93814044bbf1a67824ff",
"assets/assets/images/Youtube.png": "11d39c9682ec08e889e772851955518b",
"assets/assets/images/YouTube_programs%2520.png": "fda6325956eaa1d964a90d6672c710a1",
"assets/FontManifest.json": "6f02d4afdea70c730e39ce86f09dff2c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "d2e5738c97027509ff4c1e71f4dfa246",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0fadc7791feea5dfc8b53aaacd6f5e20",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d121cd68da81b2aa6d016da9fe84ddee",
"/": "d121cd68da81b2aa6d016da9fe84ddee",
"main.dart.js": "3c19c8d67acf1441a900690da6f2768b",
"manifest.json": "a8425fd028e0b5344a5e4aeb5b1f1c77",
"version.json": "a603425a87ce37133ebfcc3778464742"};
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
