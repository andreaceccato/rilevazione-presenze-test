self.addEventListener('install', e => { console.log('Service Worker installato'); });
self.addEventListener('fetch', e => { /* puoi aggiungere cache se vuoi */ });