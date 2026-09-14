const CACHE = 'ebs-vocabulary-pwa-20260914-text-exam-1';
const ROOT = new URL('./', self.location.href);
const ASSETS = ["./","https://cdn.tailwindcss.com","https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js","https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js","https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js","pronunciations.js?v=20260914-dictionary-1","september-exam-words.js?v=20260914-text-1","app.js?v=20260914-text-1","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css","style.css?v=20260914-install-1","manifest.webmanifest","icons/blue-face-180.png","icons/blue-face-192.png","pwa.js?v=20260914-install-1","assets/mascots-cloud.webp","icons/blue-face-512.png"];
const ALLOWED = new Set(ASSETS.map(path => new URL(path, ROOT).href));
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        // Require the entire learning shell, including its CDN dependencies.
        await Promise.all(ASSETS.map(async path => {
            const url = new URL(path, ROOT);
            const response = await fetch(url.href, {
                mode: url.origin === ROOT.origin ? 'same-origin' : 'no-cors',
                cache: 'reload'
            });
            if (!response.ok && response.type !== 'opaque') throw new Error('Asset unavailable: ' + path);
            await cache.put(url.href, response);
        }));
        await self.skipWaiting();
    })());
});
self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        for (const key of await caches.keys()) {
            if (key.startsWith('ebs-vocabulary-pwa-') && key !== CACHE) await caches.delete(key);
        }
        await self.clients.claim();
    })());
});
self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    const navigation = request.mode === 'navigate' && url.origin === ROOT.origin && url.pathname.startsWith(ROOT.pathname);
    const localAsset = url.origin === ROOT.origin && url.pathname.startsWith(ROOT.pathname) &&
        /\.(?:js|css|png|webp|svg|webmanifest)$/.test(url.pathname);
    const iconFont = url.origin === 'https://cdnjs.cloudflare.com' &&
        url.pathname.startsWith('/ajax/libs/font-awesome/6.4.0/webfonts/');
    // Never cache authentication, Firestore requests or ranking responses.
    if (!navigation && !localAsset && !ALLOWED.has(url.href) && !iconFont) return;
    event.respondWith((async () => {
        const cache = await caches.open(CACHE);
        try {
            const response = await fetch(request);
            if (response.ok || response.type === 'opaque') {
                await cache.put(request, response.clone());
                return response;
            }
            const cached = await cache.match(request);
            return cached || response;
        } catch (error) {
            const cached = await cache.match(request) ||
                (navigation ? await cache.match(ROOT.href) : undefined);
            if (cached) return cached;
            throw error;
        }
    })());
});
