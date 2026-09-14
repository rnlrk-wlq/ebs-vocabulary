// Keep installation support separate from learning and score storage.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' })
            .catch(error => console.warn('앱 오프라인 준비 실패:', error));
    });
}

(() => {
    const groups = [...document.querySelectorAll('[data-pwa-install]')];
    const buttons = [...document.querySelectorAll('[data-pwa-install-button]')];
    const guide = document.getElementById('pwaInstallGuide');
    const message = document.getElementById('pwaInstallMessage');
    const closeButton = document.getElementById('pwaInstallClose');
    const standalone = window.matchMedia('(display-mode: standalone)');
    let pendingPrompt = null;
    let busy = false;
    let installed = false;
    let trigger = null;

    function updateVisibility() {
        const hidden = installed || standalone.matches || navigator.standalone === true;
        groups.forEach(group => { group.hidden = hidden; });
        if (hidden && guide.open) guide.close();
    }
    function showGuide(button) {
        trigger = button;
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        message.textContent = ios
            ? 'Safari 아래쪽의 공유 버튼을 누른 다음 ‘홈 화면에 추가’를 선택하세요.'
            : 'Chrome 또는 Safari에서 이 페이지를 연 뒤 홈 화면에 추가해 주세요.';
        if (!guide.open) guide.showModal();
    }
    window.addEventListener('beforeinstallprompt', event => {
        event.preventDefault();
        pendingPrompt = event;
        updateVisibility();
    });
    window.addEventListener('appinstalled', () => {
        installed = true;
        pendingPrompt = null;
        updateVisibility();
    });
    if (standalone.addEventListener) standalone.addEventListener('change', updateVisibility);
    else if (standalone.addListener) standalone.addListener(updateVisibility);
    window.addEventListener('pageshow', updateVisibility);

    buttons.forEach(button => button.addEventListener('click', async () => {
        if (busy || installed || standalone.matches || navigator.standalone === true) return;
        if (!pendingPrompt) { showGuide(button); return; }
        busy = true;
        buttons.forEach(item => { item.disabled = true; });
        const event = pendingPrompt;
        pendingPrompt = null; // Each browser prompt event can be used only once.
        try {
            await event.prompt();
            await event.userChoice;
            // appinstalled is the completion signal; cancellation keeps buttons visible.
        } catch (error) {
            showGuide(button);
        } finally {
            busy = false;
            buttons.forEach(item => { item.disabled = false; });
            updateVisibility();
        }
    }));
    closeButton.addEventListener('click', () => guide.close());
    guide.addEventListener('click', event => {
        const bounds = guide.getBoundingClientRect();
        if (event.target === guide && (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom)) guide.close();
    });
    // Native dialog handles Escape and keeps keyboard focus inside the guide.
    guide.addEventListener('close', () => { if (trigger && !trigger.closest('[hidden]')) trigger.focus(); });
    updateVisibility();
})();
