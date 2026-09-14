// Keep installation support separate from learning and score storage.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' })
            .catch(error => console.warn('앱 오프라인 준비 실패:', error));
    });
}
