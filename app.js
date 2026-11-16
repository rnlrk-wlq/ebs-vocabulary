tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// Protected vocabulary is loaded from Firestore only after school approval.
let defaultWords = [];
const studyFolders = {};
const documentWordOrder = [];
const documentWordFolders = {};
window.dictionaryPronunciations = {};

function repairMeaningParenthesis(item) {
    if (/\s*\($/.test(item.word || "") && /^[^()]*\)/.test(item.meaning || "")) {
        return { ...item, word: item.word.replace(/\s*\($/, ""), meaning: "(" + item.meaning };
    }
    return item;
}

function sortDocumentWords(items) {
    const positions = new Map(documentWordOrder.map((id, index) => [id, index]));
    return [...items].sort((a, b) => (positions.get(a.id) ?? Infinity) - (positions.get(b.id) ?? Infinity));
}

let words = [];
let selectedFolder = null;
let selectedFolderIds = new Set();
let pendingFolderTab = 'flashcard';
let activeStudyTab = 'flashcard';
let selectedStudyWordIds = new Set();
let selectedOnlyMode = false;
let matchSession = 0;

function wordFolder(item) {
    if (documentWordFolders[item.id]) return documentWordFolders[item.id];
    if (item.folderScheme === 'hwp' && studyFolders[item.folderId]) return item.folderId;
    return ({1: 4, 2: 5, 3: 8, 4: 9})[item.folderId] || 4;
}


let customFolders = [];

function loadCustomFolders() {
    customFolders = [];
}

function renderCustomFolderOptions() {
    const group = document.getElementById('customFolderOptions');
    const menu = document.getElementById('listFilter');
    const previousValue = menu.value;
    group.innerHTML = '';
    customFolders.forEach(folder => {
        const option = document.createElement('option');
        option.value = 'folder:' + folder.id;
        option.textContent = folder.name + ' (' +
            words.filter(word => wordFolder(word) === folder.id).length + '개)';
        group.appendChild(option);
    });
    group.disabled = customFolders.length === 0;
    menu.value = previousValue;
}

function createCustomFolder() {
    document.getElementById('customFolderModal').classList.remove('hidden');
    document.getElementById('customFolderName').value = '';
    document.getElementById('customFolderName').focus();
}

function closeCustomFolderModal() {
    document.getElementById('customFolderModal').classList.add('hidden');
}

function submitCustomFolder(event) {
    event.preventDefault();
    const input = document.getElementById('customFolderName').value;
    const name = input.trim();
    if (!name || name.length > 30) {
        alert('폴더 이름을 1~30자로 입력해 주세요.');
        return;
    }
    if (Object.values(studyFolders).some(existing => existing.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        alert('같은 이름의 폴더가 있습니다. 다른 이름을 입력해 주세요.');
        return;
    }
    const folder = { id: Math.max(Date.now(), ...customFolders.map(item => item.id + 1)), name };
    closeCustomFolderModal();
    customFolders.push(folder);
    studyFolders[folder.id] = folder.name;
    renderCustomFolderOptions();
    document.getElementById('listFilter').value = 'folder:' + folder.id;
    handleListFilterChange();
    if (typeof queueProgressSave === 'function') queueProgressSave();
}

let listStatusFilter = 'all';

function handleListFilterChange() {
    const menu = document.getElementById('listFilter');
    const value = menu.value;
    if (value.startsWith('folder:')) {
        const raw = value.slice(7);
        const folder = raw === 'all' ? 'all' : Number(raw);
        pendingFolderTab = activeStudyTab;
        selectWordFolder(folder);
        if (selectedFolder !== folder) {
            menu.value = listStatusFilter === 'all' ? 'folder:' + selectedFolder : listStatusFilter;
            return;
        }
        listStatusFilter = 'all';
    } else {
        listStatusFilter = value;
    }
    renderVocabList();
}

function selectWordFolder(folder) {
    if (!(folder === 'all' || Object.hasOwn(studyFolders, folder))) return;
    const isSameSingleFolder = folder === 'all'
        ? selectedFolder === 'all'
        : selectedFolder === folder && selectedFolderIds.size === 1 && selectedFolderIds.has(Number(folder));
    if (!isSameSingleFolder) {
        const quizActive = !document.getElementById('quizActiveContainer').classList.contains('hidden');
        const matchActive = matchTimer !== null;
        if (selectedFolder !== null && (quizActive || matchActive) &&
            !confirm('폴더를 바꾸면 진행 중인 학습이 종료됩니다. 폴더를 변경할까요?')) return;
        preserveMatchSessionScore();
        matchSession++;
        if (matchTimer) clearInterval(matchTimer);
        matchTimer = null;
        matchResolving = false;
        selectedMatchCards = [];
        quizPool = [];
        quizIndex = 0;
        quizAnswered = false;
        flashcardIndex = 0;
        spellingIndex = 0;
        spellingAnswered = false;
        selectedStudyWordIds.clear();
        selectedOnlyMode = false;
        selectedFolder = folder;
        selectedFolderIds = folder === 'all' ? new Set() : new Set([Number(folder)]);
        showQuizPrepScreen();
        showMatchPrepScreen();
    }
    document.getElementById('studyMain').classList.remove('hidden');
    updateStudySelectionLabel();
    switchTab(pendingFolderTab);
    if (typeof queueProgressSave === 'function') queueProgressSave();
}

function getSelectedFolderLabel() {
    if (selectedFolder === 'all') return '전체 단어';
    if (selectedFolderIds.size > 1) return `선택 폴더 ${selectedFolderIds.size}개 · 총 ${getFolderWords().length}개 단어`;
    return studyFolders[selectedFolder] || '선택 폴더';
}

function getSelectableFolders() {
    return Object.keys(studyFolders).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
}

function updateMultiFolderCount() {
    const checked = document.querySelectorAll('#multiFolderOptions input[type="checkbox"]:checked');
    const count = Array.from(checked).reduce((sum, input) => sum + Number(input.dataset.wordCount || 0), 0);
    const label = document.getElementById('multiFolderCount');
    if (label) label.innerText = `폴더 ${checked.length}개 · 단어 ${count}개`;
}

function openMultiFolderModal() {
    const options = document.getElementById('multiFolderOptions');
    options.innerHTML = getSelectableFolders().map(folderId => {
        const count = words.filter(word => Number(wordFolder(word)) === folderId).length;
        const checked = selectedFolder === 'all' || selectedFolderIds.has(folderId) ? 'checked' : '';
        return `<label class="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 p-3 cursor-pointer hover:bg-indigo-50 dark:hover:bg-slate-700/70 transition">
            <input type="checkbox" name="multiFolder" value="${folderId}" data-word-count="${count}" ${checked} onchange="updateMultiFolderCount()" class="w-4 h-4 accent-indigo-600">
            <span class="min-w-0"><span class="block text-xs font-bold text-slate-800 dark:text-slate-100">${escapeHtml(studyFolders[folderId])}</span><span class="text-[11px] text-slate-500 dark:text-slate-400">${count}개 단어</span></span>
        </label>`;
    }).join('');
    document.getElementById('multiFolderModal').classList.remove('hidden');
    updateMultiFolderCount();
}

function closeMultiFolderModal() {
    document.getElementById('multiFolderModal').classList.add('hidden');
}

function toggleAllMultiFolders(checked) {
    document.querySelectorAll('#multiFolderOptions input[type="checkbox"]').forEach(input => { input.checked = checked; });
    updateMultiFolderCount();
}

function applyMultiFolderSelection(event) {
    event.preventDefault();
    const folderIds = Array.from(document.querySelectorAll('#multiFolderOptions input[type="checkbox"]:checked')).map(input => Number(input.value));
    if (folderIds.length === 0) {
        alert('학습할 폴더를 한 개 이상 선택해 주세요.');
        return;
    }
    const quizActive = !document.getElementById('quizActiveContainer').classList.contains('hidden');
    const matchActive = matchTimer !== null;
    if ((quizActive || matchActive) && !confirm('폴더를 바꾸면 진행 중인 학습이 종료됩니다. 선택한 폴더로 변경할까요?')) return;
    preserveMatchSessionScore();
    matchSession++;
    if (matchTimer) clearInterval(matchTimer);
    matchTimer = null;
    matchResolving = false;
    selectedMatchCards = [];
    quizPool = [];
    quizIndex = 0;
    quizAnswered = false;
    flashcardIndex = 0;
    spellingIndex = 0;
    spellingAnswered = false;
    selectedStudyWordIds.clear();
    selectedOnlyMode = false;
    selectedFolderIds = new Set(folderIds);
    selectedFolder = folderIds[0];
    listStatusFilter = 'all';
    const menu = document.getElementById('listFilter');
    if (menu) menu.value = `folder:${selectedFolder}`;
    closeMultiFolderModal();
    document.getElementById('studyMain').classList.remove('hidden');
    showQuizPrepScreen();
    showMatchPrepScreen();
    updateStudySelectionLabel();
    renderVocabList();
    switchTab(activeStudyTab);
    if (typeof queueProgressSave === 'function') queueProgressSave();
}


let flashcardIndex = 0;
let spellingIndex = 0;
let spellingAnswered = false;

// Quiz State
let quizIndex = 0;
let quizScore = 0;
let quizMode = 'choice'; // 'choice' or 'typing'
let quizPool = [];
let quizBatchSize = 10;
let quizBatchCorrect = 0;
let quizAnswered = false;

// User Profile & Leaderboard
let currentUser = {
    deviceId: '',
    nickname: "학습자",
    totalScore: 0,
    completedQuizzes: 0
};

// Matching Game State
let matchCards = [];
let selectedMatchCards = [];
let matchResolving = false;
let matchScore = 0;
let matchTimer = null;
let matchTimeRemaining = 300;
let matchGameActive = false;
let matchWordQueue = [];
let matchNextWordIndex = 0;
let matchCompletedPairs = 0;
let matchCumulativeScore = 0;
let matchBestScore = 0;
let matchLastScore = null;
let matchPlayCount = 0;
let rankingDb = null;
let rankingUser = null;
let stopQuizRankingListener = null;
let onlineQuizBoard = [];
let quizRankingReady = false;
let combinedRankingError = false;

const firebaseConfig = {
    apiKey: "AIzaSyDnVNB0UN1WPxf97fgQqERdkc5yZ7XUOp4",
    authDomain: "ebs-vocabulary-ranking.firebaseapp.com",
    projectId: "ebs-vocabulary-ranking",
    storageBucket: "ebs-vocabulary-ranking.firebasestorage.app",
    messagingSenderId: "367184184736",
    appId: "1:367184184736:web:aab99e89d9c4489b2550c5",
    measurementId: "G-REZK1RBF72"
};

function normalize(str) {
    if (!str) return '';
    return str.toString()
              .toLowerCase()
              .replace(/[\u2018\u2019]/g, "'") // Convert curly apostrophes
              .replace(/[^a-z0-9]/g, '') // Keep letters and digits only
              .trim();
}

function escapeHtml(str) {
    if (!str) return '';
    return str.toString()
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function loadWordsFromStorage() {
    return JSON.parse(JSON.stringify(defaultWords));
}

function saveWordsToStorage() {
    if (typeof queueProgressSave === 'function') queueProgressSave();
}

function resetWordsToDefault() {
    if (selectedFolder === null) return;
    if (selectedFolderIds.size > 1) {
        alert('단어 초기화는 한 번에 한 폴더씩 할 수 있습니다. 먼저 폴더 하나를 선택해 주세요.');
        return;
    }
    if (customFolders.some(folder => folder.id === selectedFolder)) {
        alert('직접 만든 폴더에는 초기화할 기본 단어가 없습니다. 단어 목록에서 개별 단어를 삭제할 수 있습니다.');
        return;
    }
    if (confirm(selectedFolder === 'all' ? '전체 단어장을 기본 단어로 초기화하시겠습니까?' : `폴더 ${selectedFolder}의 단어만 기본 단어로 초기화하시겠습니까?`)) {
        words = selectedFolder === 'all' ? JSON.parse(JSON.stringify(defaultWords)) : words.filter(item => wordFolder(item) !== selectedFolder)
            .concat(JSON.parse(JSON.stringify(defaultWords.filter(item => wordFolder(item) === selectedFolder))));
        saveWordsToStorage();
        flashcardIndex = 0;
        spellingIndex = 0;
        renderVocabList();
        updateFlashcard();
        updateSpellingUI();
        showQuizPrepScreen();
    }
}

function getFolderWords() {
    if (selectedFolder === null) return [];
    if (selectedFolder === 'all') return [...words];
    if (selectedFolderIds.size > 0) return words.filter(item => selectedFolderIds.has(Number(wordFolder(item))));
    return words.filter(item => wordFolder(item) === selectedFolder);
}

function getEffectiveWords() {
    const folderWords = getFolderWords();
    return selectedOnlyMode ? folderWords.filter(item => selectedStudyWordIds.has(item.id)) : folderWords;
}

function updateStudySelectionLabel() {
    const label = document.getElementById('selectedFolderLabel');
    if (!label || selectedFolder === null) return;
    const folderName = getSelectedFolderLabel();
    label.innerText = selectedOnlyMode ? `${folderName} · 선택 단어 ${getEffectiveWords().length}개 학습 중` : folderName;
}

function switchTab(tabName) {
    clearQuizHint();
    if (selectedFolder === null) {
        pendingFolderTab = tabName;
        selectWordFolder('all');
        return;
    }
    activeStudyTab = tabName;
    pendingFolderTab = tabName;
    if (tabName !== 'match') {
        preserveMatchSessionScore();
        matchSession++;
        if (matchTimer) clearInterval(matchTimer);
        matchTimer = null;
    }
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'dark:bg-slate-700', 'text-blue-600', 'dark:text-blue-400', 'shadow-sm');
        btn.classList.add('text-slate-600', 'dark:text-slate-400');
    });

    const activeBtn = document.getElementById(`tab-${tabName}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-white', 'dark:bg-slate-700', 'text-blue-600', 'dark:text-blue-400', 'shadow-sm');
        activeBtn.classList.remove('text-slate-600', 'dark:text-slate-400');
    }

    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.add('hidden');
    });

    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) {
        targetView.classList.remove('hidden');
    }

    // Tab specific triggers
    if (tabName === 'flashcard') {
        updateFlashcard();
    } else if (tabName === 'spelling-practice') {
        spellingAnswered = false;
        updateSpellingUI();
    } else if (tabName === 'quiz') {
        showQuizPrepScreen();
    } else if (tabName === 'ranking') {
        renderLeaderboard();
    } else if (tabName === 'match') {
        showMatchPrepScreen();
    } else if (tabName === 'list') {
        renderVocabList();
    }
}

function updateFlashcard() {
    stopWordAudio();
    const pool = getEffectiveWords();
    if (pool.length === 0) {
        document.getElementById('flashcardProgress').innerText = '0 / 0';
        ['fcPos', 'fcPhonetic', 'fcMeaning', 'fcExampleEn', 'fcExampleKo'].forEach(id => document.getElementById(id).innerText = '');
        document.getElementById('fcWord').innerText = '폴더가 비어 있습니다';
        return;
    }

    if (flashcardIndex >= pool.length) flashcardIndex = 0;
    if (flashcardIndex < 0) flashcardIndex = pool.length - 1;

    const item = pool[flashcardIndex];
    const card = document.getElementById('flashcard');
    if (card) card.classList.remove('flipped');

    document.getElementById('flashcardProgress').innerText = `${flashcardIndex + 1} / ${pool.length}`;
    document.getElementById('fcPos').innerText = item.pos || '단어';
    document.getElementById('fcWord').innerText = item.word;
    document.getElementById('fcPhonetic').innerText = item.phonetic || '';
    document.getElementById('fcMeaning').innerText = item.meaning;
    document.getElementById('fcExampleEn').innerText = item.exampleEn || '';
    document.getElementById('fcExampleKo').innerText = item.exampleKo || '';

    // Update Mastered Buttons (Front and Back)
    const btnM = document.getElementById('btnMastered');
    const btnMB = document.getElementById('btnMasteredBack');
    if (item.mastered) {
        btnM.className = "w-full py-2.5 px-4 text-xs sm:text-sm font-bold rounded-2xl bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-sm";
        btnM.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5 text-sm"></i>암기 완료됨`;
        btnMB.className = "w-full py-2.5 px-4 text-xs sm:text-sm font-bold rounded-2xl bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-sm";
        btnMB.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5 text-sm"></i>암기 완료됨`;
    } else {
        btnM.className = "w-full py-2.5 px-4 text-xs sm:text-sm font-bold rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/90 dark:bg-slate-700/90 hover:bg-emerald-50 dark:hover:bg-slate-700 transition text-slate-700 dark:text-slate-200 shadow-sm";
        btnM.innerHTML = `<i class="fa-regular fa-circle-check mr-1.5 text-emerald-500 text-sm"></i>암기 완료`;
        btnMB.className = "w-full py-2.5 px-4 text-xs sm:text-sm font-bold rounded-2xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition shadow-sm";
        btnMB.innerHTML = `<i class="fa-regular fa-circle-check mr-1.5 text-emerald-300 text-sm"></i>암기 완료`;
    }

    // Update Star Buttons (Front and Back)
    const btnS = document.getElementById('btnStar');
    const btnSB = document.getElementById('btnStarBack');
    if (item.starred) {
        btnS.innerHTML = `<i class="fa-solid fa-star mr-1 text-amber-500"></i>보관됨`;
        btnS.classList.add('border-amber-300', 'bg-amber-50');
        btnSB.innerHTML = `<i class="fa-solid fa-star mr-1 text-amber-300"></i>보관됨`;
    } else {
        btnS.innerHTML = `<i class="fa-regular fa-star mr-1 text-amber-500"></i>별표 보관`;
        btnS.classList.remove('border-amber-300', 'bg-amber-50');
        btnSB.innerHTML = `<i class="fa-regular fa-star mr-1 text-amber-300"></i>별표 보관`;
    }
}

function flipFlashcard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

let flashcardNavigationTimer = null;
let flashcardNavigationPending = false;

function navigateFlashcard(step) {
    if (flashcardNavigationPending) return;
    const card = document.getElementById('flashcard');
    clearTimeout(flashcardNavigationTimer);
    stopWordAudio();
    const move = () => {
        flashcardIndex += step;
        updateFlashcard();
    };
    // 뜻 면이 보이는 동안에는 먼저 기존 카드를 완전히 닫은 뒤 다음 내용을 넣는다.
    // 이렇게 해야 회전 중 다음 단어의 뜻이 미리 비치지 않는다.
    if (card && card.classList.contains('flipped')) {
        flashcardNavigationPending = true;
        card.classList.remove('flipped');
        flashcardNavigationTimer = setTimeout(() => {
            flashcardNavigationPending = false;
            move();
        }, 520);
    } else {
        move();
    }
}

function prevFlashcard() {
    navigateFlashcard(-1);
}

function nextFlashcard() {
    navigateFlashcard(1);
}

function shuffleFlashcards() {
    const pool = getEffectiveWords();
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const shuffledIds = new Set(pool.map(item => item.id));
    let next = 0;
    words = words.map(item => shuffledIds.has(item.id) ? pool[next++] : item);
    flashcardIndex = 0;
    updateFlashcard();
}

function toggleStarCurrent(e) {
    e.stopPropagation();
    const pool = getEffectiveWords();
    if (pool.length === 0) return;
    pool[flashcardIndex].starred = !pool[flashcardIndex].starred;
    saveWordsToStorage();
    updateFlashcard();
}

function toggleMasteredCurrent(e) {
    e.stopPropagation();
    const pool = getEffectiveWords();
    if (pool.length === 0) return;
    pool[flashcardIndex].mastered = !pool[flashcardIndex].mastered;
    saveWordsToStorage();
    updateFlashcard();
}

function speakWord(e) {
    if (e) e.stopPropagation();
    const pool = getEffectiveWords();
    if (pool.length === 0) return;
    speakText(pool[flashcardIndex].word);
}

// Prefer a natural English voice instead of the device's default voice.
let englishSpeechRequest = 0;
let englishSpeechTimer = null;
let pendingEnglishSpeech = null;
let activeEnglishUtterance = null;

function rankEnglishVoice(voice) {
    const language = String(voice.lang || '').replace(/_/g, '-').toLowerCase();
    if (!/^en(?:-|$)/.test(language)) return -1;
    const name = String(voice.name || '');
    let score = language === 'en-us' ? 40 : 10;
    if (/natural|neural|online/i.test(name)) score += 100;
    else if (/premium|enhanced/i.test(name)) score += 80;
    else if (/google/i.test(name)) score += 60;
    else if (/samantha|ava|allison|susan|alex|daniel/i.test(name)) score += 30;
    return score;
}

function selectEnglishVoice(voices) {
    return voices
        .map((voice, index) => ({ voice, index, score: rankEnglishVoice(voice) }))
        .filter(entry => entry.score >= 0)
        .sort((a, b) => b.score - a.score || a.index - b.index)[0]?.voice || null;
}

function cleanEnglishPronunciation(text) {
    return String(text ?? '')
        .replace(/\([^)]*[\u3131-\uD79D][^)]*\)/g, ' ')
        .replace(/[*~]/g, ' ')
        .replace(/[()]\s*$/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function playPendingEnglishSpeech() {
    if (!pendingEnglishSpeech) return;
    const request = pendingEnglishSpeech;
    pendingEnglishSpeech = null;
    clearTimeout(englishSpeechTimer);
    englishSpeechTimer = null;
    if (request.id !== englishSpeechRequest) return;
    const synth = window.speechSynthesis;
    const voice = selectEnglishVoice(synth.getVoices());
    const utterance = new SpeechSynthesisUtterance(request.text);
    if (voice) utterance.voice = voice;
    utterance.lang = voice ? voice.lang.replace(/_/g, '-') : 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;
    // Retain the utterance while playing, including on mobile browsers.
    activeEnglishUtterance = utterance;
    const release = () => {
        if (activeEnglishUtterance === utterance) activeEnglishUtterance = null;
    };
    utterance.onend = release;
    utterance.onerror = release;
    synth.resume();
    synth.speak(utterance);
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener('voiceschanged', () => {
        if (pendingEnglishSpeech && window.speechSynthesis.getVoices().length) {
            playPendingEnglishSpeech();
        }
    });
}

function speakTextFallback(text) {
    if (!('speechSynthesis' in window)) return;
    const id = ++englishSpeechRequest;
    clearTimeout(englishSpeechTimer);
    pendingEnglishSpeech = null;
    window.speechSynthesis.cancel();
    activeEnglishUtterance = null;
    const spokenText = cleanEnglishPronunciation(text);
    if (!spokenText) return;
    pendingEnglishSpeech = { id, text: spokenText };
    if (window.speechSynthesis.getVoices().length) {
        playPendingEnglishSpeech();
    } else {
        // Some browsers load voices asynchronously. Never queue stale clicks.
        englishSpeechTimer = setTimeout(playPendingEnglishSpeech, 500);
    }
}

// Original dictionary recordings preserve the speaker's stress and intonation.
let dictionaryAudio = null;
let dictionaryPlaybackRequest = 0;
let dictionaryPlaybackTimer = null;

function stopWordAudio() {
    ++dictionaryPlaybackRequest;
    ++englishSpeechRequest;
    clearTimeout(dictionaryPlaybackTimer);
    clearTimeout(englishSpeechTimer);
    pendingEnglishSpeech = null;
    activeEnglishUtterance = null;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (dictionaryAudio) {
        dictionaryAudio.onended = dictionaryAudio.onerror = dictionaryAudio.onplaying = null;
        dictionaryAudio.pause();
        dictionaryAudio = null;
    }
}

function showPronunciationSource(label, entry) {
    let panel = document.getElementById('pronunciationSource');
    if (!panel) {
        panel = document.createElement('div');
        panel.id = 'pronunciationSource';
        panel.setAttribute('role', 'status');
        panel.className = 'fixed bottom-12 left-3 z-50 max-w-[85vw] rounded-xl bg-white border border-blue-100 px-3 py-2 text-xs text-slate-700 shadow-sm';
        document.body.appendChild(panel);
    }
    panel.replaceChildren(document.createTextNode(label + ' '));
    if (entry) {
        const source = document.createElement('a');
        source.href = entry.source;
        source.target = '_blank';
        source.rel = 'noopener noreferrer';
        source.className = 'underline text-blue-700';
        source.textContent = (entry.author || 'Wikimedia Commons') + ' · ' + entry.license;
        panel.appendChild(source);
    }
}

function speakText(text) {
    const request = ++dictionaryPlaybackRequest;
    clearTimeout(dictionaryPlaybackTimer);
    clearTimeout(englishSpeechTimer);
    pendingEnglishSpeech = null;
    ++englishSpeechRequest;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (dictionaryAudio) {
        dictionaryAudio.onended = dictionaryAudio.onerror = dictionaryAudio.onplaying = null;
        dictionaryAudio.pause();
        dictionaryAudio = null;
    }
    const spokenText = cleanEnglishPronunciation(text);
    if (!spokenText) return;
    const recordings = window.dictionaryPronunciations || {};
    const key = spokenText.toLowerCase();
    const entry = Object.prototype.hasOwnProperty.call(recordings, key) ? recordings[key] : null;
    let fallbackStarted = false;
    const fallback = () => {
        if (request !== dictionaryPlaybackRequest || fallbackStarted) return;
        fallbackStarted = true;
        clearTimeout(dictionaryPlaybackTimer);
        if (dictionaryAudio) {
            dictionaryAudio.onerror = dictionaryAudio.onplaying = null;
            dictionaryAudio.pause();
            dictionaryAudio = null;
        }
        showPronunciationSource('영어 합성 음성');
        speakTextFallback(spokenText);
    };
    if (!entry) { fallback(); return; }
    const audio = new Audio(entry.url);
    dictionaryAudio = audio;
    audio.playbackRate = 1;
    audio.onplaying = () => {
        if (request !== dictionaryPlaybackRequest) return;
        clearTimeout(dictionaryPlaybackTimer);
        showPronunciationSource(entry.dialect + ' 사전 녹음', entry);
    };
    audio.onended = () => {
        if (request === dictionaryPlaybackRequest) {
            clearTimeout(dictionaryPlaybackTimer);
            dictionaryAudio = null;
        }
    };
    audio.onerror = fallback;
    showPronunciationSource('사전 녹음 불러오는 중', entry);
    dictionaryPlaybackTimer = setTimeout(fallback, 8000);
    // Start synchronously inside the button gesture, including on mobile Safari.
    const playback = audio.play();
    if (playback) playback.catch(fallback);
}


function speakWordById(id) {
    const item = words.find(w => w.id === id);
    if (item) {
        speakText(item.word);
    }
}

function speakSpellingWord() {
    const pool = getEffectiveWords();
    if (pool.length === 0) return;
    speakText(pool[spellingIndex].word);
}

function updateSpellingUI() {
    const pool = getEffectiveWords();
    if (pool.length === 0) {
        document.getElementById('spProgress').innerText = '0 / 0';
        document.getElementById('spWordTarget').innerText = '폴더가 비어 있습니다';
        ['spPos', 'spPhonetic', 'spMeaning', 'spFeedback'].forEach(id => document.getElementById(id).innerText = '');
        document.getElementById('spInput').value = '';
        document.getElementById('spInput').disabled = true;
        return;
    }

    if (spellingIndex >= pool.length) spellingIndex = 0;
    if (spellingIndex < 0) spellingIndex = pool.length - 1;

    const item = pool[spellingIndex];
    document.getElementById('spPos').innerText = '';
    document.getElementById('spPos').classList.add('hidden');
    document.getElementById('spProgress').innerText = `${spellingIndex + 1} / ${pool.length}`;
    document.getElementById('spWordTarget').innerText = item.word;
    document.getElementById('spPhonetic').innerText = item.phonetic || '';
    document.getElementById('spMeaning').innerText = item.meaning;

    const input = document.getElementById('spInput');
    input.value = '';
    input.disabled = false;
    input.focus();

    const fb = document.getElementById('spFeedback');
    fb.innerText = '';
    fb.className = 'text-center text-xs font-extrabold min-h-[20px]';

    const btn = document.getElementById('spSubmitBtn');
    btn.innerText = '확인 (Enter)';
    btn.className = 'w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-md shadow-blue-500/20 text-sm';
    spellingAnswered = false;
}

function handleSpellingSubmit(e) {
    if (e) e.preventDefault();
    const pool = getEffectiveWords();
    if (pool.length === 0) return;

    if (!spellingAnswered) {
        // First Enter: Validate answer
        const inputVal = document.getElementById('spInput').value;
        const targetVal = pool[spellingIndex].word;
        const fb = document.getElementById('spFeedback');
        const btn = document.getElementById('spSubmitBtn');

        if (normalize(inputVal) === normalize(targetVal)) {
            fb.innerText = "⭕ 정답입니다! 아주 잘하셨어요!";
            fb.className = "text-center text-xs font-extrabold text-emerald-500 min-h-[20px]";
        } else {
            if (!(window.spellingWrongWordIds instanceof Set)) window.spellingWrongWordIds = new Set();
            window.spellingWrongWordIds.add(pool[spellingIndex].id);
            if (typeof queueProgressSave === 'function') queueProgressSave();
            fb.innerText = `❌ 오답입니다. 정답: "${targetVal}"`;
            fb.className = "text-center text-xs font-extrabold text-rose-500 min-h-[20px]";
        }

        spellingAnswered = true;
        btn.innerText = "다음 단어 (Enter ↵)";
        btn.className = "w-full py-3 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-2xl transition shadow-md text-sm";
    } else {
        // Second Enter: Move to next word
        spellingIndex++;
        updateSpellingUI();
    }
}

function prevSpellingWord() {
    spellingIndex--;
    updateSpellingUI();
}

function nextSpellingWord() {
    spellingIndex++;
    updateSpellingUI();
}

function randomSpellingWord() {
    const pool = getEffectiveWords();
    spellingIndex = Math.floor(Math.random() * pool.length);
    updateSpellingUI();
}

function showQuizPrepScreen() {
    clearQuizHint();
    document.getElementById('quizPrepContainer').classList.remove('hidden');
    document.getElementById('quizActiveContainer').classList.add('hidden');
    document.getElementById('quizBatchContainer').classList.add('hidden');
    document.getElementById('quizResultContainer').classList.add('hidden');

    const pool = getEffectiveWords();
    document.getElementById('prepTotalWordsCount').innerText = `${pool.length}개`;
    document.getElementById('quizPrepNickname').innerText = currentUser.nickname;
    document.getElementById('quizPrepTotalScore').innerText = `${currentUser.totalScore}점`;
    document.getElementById('quizPrepCompletedCount').innerText = currentUser.completedQuizzes;
}

function toggleEditNickname() {
    const editArea = document.getElementById('nicknameEditArea');
    const input = document.getElementById('inputNickname');
    
    if (editArea.classList.contains('hidden')) {
        input.value = currentUser.nickname || "학습자";
        editArea.classList.remove('hidden');
        input.focus();
    } else {
        editArea.classList.add('hidden');
    }
}

function saveNickname() {
    const input = document.getElementById('inputNickname');
    const newName = input.value.trim();
    if (newName) {
        currentUser.nickname = newName;
        saveUserScore();
        showQuizPrepScreen();
        renderLeaderboard();
        saveQuizRanking();
        toggleEditNickname();
    }
}

function setPrepQuizMode(mode) {
    quizMode = mode;
    const btnChoice = document.getElementById('prepModeChoice');
    const btnTyping = document.getElementById('prepModeTyping');

    if (mode === 'choice') {
        btnChoice.className = "p-3.5 rounded-2xl border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex flex-col items-center text-center space-y-1.5 transition";
        btnTyping.className = "p-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex flex-col items-center text-center space-y-1.5 transition hover:border-slate-300";
    } else {
        btnTyping.className = "p-3.5 rounded-2xl border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex flex-col items-center text-center space-y-1.5 transition";
        btnChoice.className = "p-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex flex-col items-center text-center space-y-1.5 transition hover:border-slate-300";
    }
}

function startNewQuiz() {
    const pool = getEffectiveWords();
    if (pool.length === 0) return;

    quizPool = [...pool];
    // Shuffle
    for (let i = quizPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizPool[i], quizPool[j]] = [quizPool[j], quizPool[i]];
    }

    quizIndex = 0;
    quizScore = 0;
    quizBatchCorrect = 0;

    document.getElementById('quizPrepContainer').classList.add('hidden');
    document.getElementById('quizBatchContainer').classList.add('hidden');
    document.getElementById('quizResultContainer').classList.add('hidden');
    document.getElementById('quizActiveContainer').classList.remove('hidden');

    renderQuizQuestion();
}

let quizHintTimer = null;

function clearQuizHint() {
    clearTimeout(quizHintTimer);
    quizHintTimer = null;
    const answer = document.getElementById('quizHintAnswer');
    if (answer) {
        answer.textContent = '';
        answer.classList.add('hidden');
    }
    const button = document.getElementById('quizHintButton');
    if (button) button.disabled = false;
}

function showQuizHint() {
    if (quizMode !== 'typing' || quizAnswered || !quizPool[quizIndex]) return;
    clearQuizHint();
    const answer = document.getElementById('quizHintAnswer');
    answer.textContent = cleanEnglishPronunciation(quizPool[quizIndex].word);
    answer.classList.remove('hidden');
    document.getElementById('quizHintButton').disabled = true;
    quizHintTimer = setTimeout(clearQuizHint, 3000);
}

function getQuizFirstLetter(word) {
    return cleanEnglishPronunciation(word).match(/[a-z]/i)?.[0] || '';
}


function renderQuizQuestion() {
    clearQuizHint();
    if (quizIndex >= quizPool.length) {
        showQuizResult();
        return;
    }

    const current = quizPool[quizIndex];
    quizAnswered = false;

    document.getElementById('quizScore').innerText = quizScore;
    document.getElementById('quizCumulativeDisplay').innerText = currentUser.totalScore;
    document.getElementById('quizProgress').innerText = `${quizIndex + 1} / ${quizPool.length}`;

    const badge = document.getElementById('quizModeBadge');
    const qText = document.getElementById('quizQuestionText');
    const subHint = document.getElementById('quizSubHint');
    const choiceContainer = document.getElementById('quizChoiceContainer');
    const typingContainer = document.getElementById('quizTypingContainer');
    const feedbackArea = document.getElementById('quizFeedbackArea');

    feedbackArea.classList.add('hidden');

    if (quizMode === 'choice') {
        badge.innerText = '4지선다형';
        qText.innerText = current.word;
        subHint.classList.add('hidden');
        choiceContainer.classList.remove('hidden');
        typingContainer.classList.add('hidden');

        // Build 4 choices
        const choices = [current.meaning];
        const alternatives = [...new Set(getEffectiveWords().map(word => word.meaning))]
            .filter(meaning => meaning !== current.meaning);
        choices.push(...shuffleMatchItems(alternatives).slice(0, 3));
        // Shuffle choices
        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [choices[i], choices[j]] = [choices[j], choices[i]];
        }

        choiceContainer.innerHTML = choices.map((choiceText, idx) => `
            <button onclick="handleQuizChoiceSelect(${idx})" class="quiz-choice-btn w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-slate-700/50 font-bold text-slate-800 dark:text-slate-100 text-sm text-left transition flex items-center justify-between">
                <span>${idx + 1}. ${escapeHtml(choiceText)}</span>
                <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
            </button>
        `).join('');

        // Store current generated choices in window memory for index reference
        window.currentQuizChoices = choices;

    } else {
        badge.innerText = '스펠링 쓰기';
        qText.innerText = current.meaning;
        subHint.innerText = `첫 글자: ${getQuizFirstLetter(current.word)}`;
        subHint.classList.remove('hidden');
        choiceContainer.classList.add('hidden');
        typingContainer.classList.remove('hidden');

        const input = document.getElementById('quizTypingInput');
        input.value = getQuizFirstLetter(current.word);
        input.disabled = false;
        input.focus();

        const btn = document.getElementById('quizTypingBtn');
        btn.innerText = '정답 제출 (Enter)';
        btn.className = 'w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-md shadow-blue-500/20 text-sm';
    }
}

function handleQuizChoiceSelect(choiceIdx) {
    if (quizAnswered) return;
    quizAnswered = true;

    const current = quizPool[quizIndex];
    const selectedText = window.currentQuizChoices[choiceIdx];
    const isCorrect = (selectedText === current.meaning);

    const feedbackArea = document.getElementById('quizFeedbackArea');
    const feedbackText = document.getElementById('quizFeedbackText');

    if (isCorrect) {
        quizScore += 10;
        quizBatchCorrect++;
        currentUser.totalScore += 10;
        saveUserScore();
        feedbackText.innerText = "⭕ 정답입니다! (+10점)";
        feedbackText.className = "text-sm font-extrabold text-emerald-500";
    } else {
        if (!(window.quizWrongWordIds instanceof Set)) window.quizWrongWordIds = new Set();
        window.quizWrongWordIds.add(current.id);
        if (typeof queueProgressSave === 'function') queueProgressSave();
        feedbackText.innerText = `❌ 오답입니다. 정답: "${current.meaning}"`;
        feedbackText.className = "text-sm font-extrabold text-rose-500";
    }

    document.querySelectorAll('.quiz-choice-btn').forEach(btn => btn.disabled = true);
    feedbackArea.classList.remove('hidden');
    document.getElementById('quizScore').innerText = quizScore;
    document.getElementById('quizCumulativeDisplay').innerText = currentUser.totalScore;
}

function handleQuizTypingAction() {
    clearQuizHint();
    const current = quizPool[quizIndex];
    const input = document.getElementById('quizTypingInput');
    const feedbackArea = document.getElementById('quizFeedbackArea');
    const feedbackText = document.getElementById('quizFeedbackText');

    if (!quizAnswered) {
        quizAnswered = true;
        const isCorrect = (normalize(input.value) === normalize(current.word));

        if (isCorrect) {
            quizScore += 10;
            quizBatchCorrect++;
            currentUser.totalScore += 10;
            saveUserScore();
            feedbackText.innerText = "⭕ 정답입니다! (+10점)";
            feedbackText.className = "text-sm font-extrabold text-emerald-500";
        } else {
            if (!(window.quizWrongWordIds instanceof Set)) window.quizWrongWordIds = new Set();
            window.quizWrongWordIds.add(current.id);
            if (typeof queueProgressSave === 'function') queueProgressSave();
            feedbackText.innerText = `❌ 오답입니다. 정답: "${current.word}"`;
            feedbackText.className = "text-sm font-extrabold text-rose-500";
        }

        input.disabled = true;
        feedbackArea.classList.remove('hidden');
        document.getElementById('quizScore').innerText = quizScore;
        document.getElementById('quizCumulativeDisplay').innerText = currentUser.totalScore;
    } else {
        nextQuizQuestion();
    }
}

function nextQuizQuestion() {
    clearQuizHint();
    quizIndex++;
    if (quizIndex > 0 && quizIndex % quizBatchSize === 0 && quizIndex < quizPool.length) {
        showBatchIntermission();
    } else {
        renderQuizQuestion();
    }
}

function showBatchIntermission() {
    document.getElementById('quizActiveContainer').classList.add('hidden');
    document.getElementById('quizBatchContainer').classList.remove('hidden');

    document.getElementById('batchTitle').innerText = `${quizIndex}문항 학습 중간 점검`;
    document.getElementById('batchScoreText').innerText = `${quizBatchCorrect} / ${quizBatchSize} 문제 맞힘`;
    document.getElementById('batchProgressText').innerText = `${quizIndex} / ${quizPool.length} 단어`;
    document.getElementById('batchBtnText').innerText = `다음 ${Math.min(quizBatchSize, quizPool.length - quizIndex)}문제 도전하기`;

    quizBatchCorrect = 0;
}

function exitQuizAtIntermission() {
    // Correct answers already contribute to the cumulative score.
    saveUserScore();
    showQuizPrepScreen();
}

function continueNextBatch() {
    document.getElementById('quizBatchContainer').classList.add('hidden');
    document.getElementById('quizActiveContainer').classList.remove('hidden');
    renderQuizQuestion();
}

function showQuizResult() {
    clearQuizHint();
    currentUser.completedQuizzes++;
    saveUserScore();

    document.getElementById('quizActiveContainer').classList.add('hidden');
    document.getElementById('quizBatchContainer').classList.add('hidden');
    document.getElementById('quizResultContainer').classList.remove('hidden');

    document.getElementById('quizFinalScore').innerText = `+${quizScore}점`;
    document.getElementById('quizNewTotalScore').innerText = `${currentUser.totalScore}점`;
    document.getElementById('quizAccuracyText').innerText = `전체 ${quizPool.length}문항 완료 (총 ${quizScore / 10}문제 정답)`;
}

function loadUserScore() {
    currentUser = { deviceId: '', nickname: '학습자', totalScore: 0, completedQuizzes: 0 };
}

function saveUserScore() {
    saveQuizRanking();
    if (typeof queueProgressSave === 'function') queueProgressSave();
}

function loadLeaderboard() {
    return [];
}

function saveLeaderboard() {
    let board = loadLeaderboard();
    const idx = board.findIndex(u => u.deviceId === currentUser.deviceId);
    if (idx >= 0) {
        board[idx].nickname = currentUser.nickname;
        board[idx].score = Math.max(board[idx].score, currentUser.totalScore);
        board[idx].count = currentUser.completedQuizzes;
    } else {
        board.push({
            deviceId: currentUser.deviceId,
            nickname: currentUser.nickname,
            score: currentUser.totalScore,
            count: currentUser.completedQuizzes
        });
    }
    board.sort((a, b) => b.score - a.score);
    try {
        localStorage.setItem('ebs_voca_leaderboard_r20260914b', JSON.stringify(board));
    } catch (e) {}
}

function buildCombinedLeaderboard(quizBoard) {
    return quizBoard.map(item => ({ ...item, score: Number(item.score) || 0 })).filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

function updateCombinedRankingStatus() {
    const status = document.getElementById('quizRankingStatus');
    if (status) status.innerText = combinedRankingError ? '공용 랭킹 연결 실패'
        : quizRankingReady ? '전체 사용자 실시간 합산 랭킹' : '전체 사용자 연결 중...';
    renderLeaderboard();
}

function renderLeaderboard() {
    const allRanks = buildCombinedLeaderboard(onlineQuizBoard);
    const board = allRanks.slice(0, 50);
    const tbody = document.getElementById('leaderboardBody');
    
    document.getElementById('rankingMyNickname').innerText = `내 닉네임: ${currentUser.nickname}`;
    const savedMine = rankingUser && allRanks.find(item => item.id === rankingUser.uid);
    document.getElementById('rankingMyScore').innerText = `${Math.max(getCombinedScore(), savedMine ? savedMine.score : 0)}점`;

    const myRank = document.getElementById('rankingMyRank');
    const myIndex = rankingUser ? allRanks.findIndex(item => item.id === rankingUser.uid) : -1;
    myRank.innerText = combinedRankingError ? '확인 불가'
        : !quizRankingReady || !rankingUser ? '확인 중...'
        : myIndex >= 0 ? `${myIndex + 1}위` : '미등록';

    if (!quizRankingReady || combinedRankingError) {
        tbody.innerHTML = '<tr><td colspan="4" class="p-6 text-center text-slate-400">' +
            (combinedRankingError ? '공용 랭킹 연결 실패. 새로고침해 주세요.' : '공용 합산 랭킹을 불러오는 중입니다.') + '</td></tr>';
        return;
    }

    if (board.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="p-6 text-center text-slate-400">등록된 랭킹 기록이 없습니다.</td></tr>`;
        return;
    }

    tbody.innerHTML = board.map((item, i) => {
        let badge = `<span class="font-bold text-slate-500">${i + 1}</span>`;
        if (i === 0) badge = `<i class="fa-solid fa-crown text-amber-500 text-base"></i>`;
        if (i === 1) badge = `<i class="fa-solid fa-medal text-slate-400 text-base"></i>`;
        if (i === 2) badge = `<i class="fa-solid fa-medal text-amber-700 text-base"></i>`;

        const isMe = rankingUser ? item.id === rankingUser.uid : item.nickname === currentUser.nickname;
        return `
            <tr class="${isMe ? 'bg-blue-50/80 dark:bg-blue-900/30 font-bold' : ''} hover:bg-slate-50 dark:hover:bg-slate-700/30 transition">
                <td class="p-3 text-center">${badge}</td>
                <td class="p-3 text-slate-900 dark:text-white">${escapeHtml(item.nickname)} ${isMe ? '<span class="text-[10px] text-blue-600 bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-full ml-1">나</span>' : ''}</td>
                <td class="p-3 text-center text-slate-500">${item.count || 0}회</td>
                <td class="p-3 text-right font-black text-blue-600 dark:text-blue-400">${item.score}점</td>
            </tr>
        `;
    }).join('');
}

function loadMatchScore() {
    matchCumulativeScore = 0;
    matchBestScore = 0;
    matchLastScore = null;
    matchPlayCount = 0;
}

function saveMatchScore() {
    if (typeof queueProgressSave === 'function') queueProgressSave();
}

function preserveMatchSessionScore() {
    if (!matchGameActive) return;
    matchGameActive = false;
    matchSession++;
    if (matchTimer !== null) clearInterval(matchTimer);
    matchTimer = null;
    matchLastScore = matchScore;
    matchBestScore = Math.max(matchBestScore, matchScore);
    matchCumulativeScore += matchScore;
    matchPlayCount++;
    saveMatchScore();
    saveQuizRanking();
}

window.addEventListener('pagehide', preserveMatchSessionScore);

function showMatchPrepScreen() {
    preserveMatchSessionScore();
    matchSession++;
    matchResolving = false;
    selectedMatchCards = [];
    if (matchTimer) {
        clearInterval(matchTimer);
        matchTimer = null;
    }
    document.getElementById('matchPrepContainer').classList.remove('hidden');
    document.getElementById('matchActiveContainer').classList.add('hidden');
    document.getElementById('matchCumulativeScore').innerText = `${matchBestScore}점`;
    document.getElementById('matchLastScore').innerText = matchLastScore === null
        ? '아직 완료한 게임이 없습니다.'
        : `최근 게임 점수: ${matchLastScore}점`;
}

function startMatchGame() {
    if (getEffectiveWords().length < 8) { alert('짝맞추기는 선택한 폴더에 단어가 8개 이상 있어야 합니다.'); return; }
    document.getElementById('matchPrepContainer').classList.add('hidden');
    document.getElementById('matchActiveContainer').classList.remove('hidden');
    initMatchGame();
}

function finishMatchGame(message) {
    if (!matchGameActive) return;
    preserveMatchSessionScore();
    alert(message);
    showMatchPrepScreen();
}

let rankingSignInPromise = null;

function getPersistentRankingUser() {
    if (rankingSignInPromise) return rankingSignInPromise;
    rankingSignInPromise = (async () => {
        const auth = firebase.auth();
        if (!auth.currentUser) throw new Error('school-login-required');
        return auth.currentUser;
    })().catch(error => {
        rankingSignInPromise = null;
        throw error;
    });
    return rankingSignInPromise;
}

async function initFirebaseRanking() {
    const status = document.getElementById('quizRankingStatus');
    try {
        if (!window.firebase) throw new Error('Firebase SDK load failed');
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        rankingDb = firebase.firestore();
        rankingUser = await getPersistentRankingUser();
        status.innerText = '전체 사용자 연결 중...';
        subscribeQuizRanking();
        saveQuizRanking();
    } catch (error) {
        combinedRankingError = true;
        updateCombinedRankingStatus();
        console.error('Firebase ranking initialization error:', error);
        status.innerText = '연결 재시도 필요';
        const quizStatus = document.getElementById('quizRankingStatus');
        if (quizStatus) quizStatus.innerText = '공용 랭킹 연결 실패';
    }
}

function subscribeQuizRanking() {
    if (!rankingDb) return;
    if (stopQuizRankingListener) stopQuizRankingListener();
    stopQuizRankingListener = rankingDb.collection('quizRankings_r20260914b')
        .onSnapshot(snapshot => {
            quizRankingReady = true;
            combinedRankingError = false;
            onlineQuizBoard = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    nickname: data.nickname,
                    score: Number(data.totalScore) || 0,
                    count: Number(data.completedQuizzes) || 0
                };
            });
            updateCombinedRankingStatus();
        }, error => {
            combinedRankingError = true;
            updateCombinedRankingStatus();
            console.error('Quiz ranking read error:', error);
            const status = document.getElementById('quizRankingStatus');
            if (status) status.innerText = '공용 랭킹 연결 실패';
        });
}

function getCombinedScore() {
    return Math.max(0, Math.trunc(Number(currentUser.totalScore) || 0))
        + Math.max(0, Math.trunc(Number(matchBestScore) || 0));
}

async function saveQuizRanking() {
    if (!rankingDb || !rankingUser) return;
    const nickname = (currentUser.nickname || '학습자').trim().slice(0, 12);
    const candidate = getCombinedScore();
    const completed = Math.max(0, Math.trunc(currentUser.completedQuizzes || 0));
    if (candidate === 0) return;
    try {
        const ref = rankingDb.collection('quizRankings_r20260914b').doc(rankingUser.uid);
        // Keep the existing allowed schema. The server total includes the match best once.
        await rankingDb.runTransaction(async transaction => {
            const snapshot = await transaction.get(ref);
            const previous = snapshot.exists ? snapshot.data() : {};
            transaction.set(ref, {
                nickname,
                totalScore: Math.max(candidate, Number(previous.totalScore) || 0),
                completedQuizzes: Math.max(completed, Number(previous.completedQuizzes) || 0),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        });
        combinedRankingError = false;
        updateCombinedRankingStatus();
    } catch (error) {
        console.error('Combined ranking save error:', error);
        const status = document.getElementById('quizRankingStatus');
        if (status) status.innerText = '기기에 점수 저장됨 · 공용 랭킹 동기화 재시도 필요';
    }
}

window.addEventListener('online', () => saveQuizRanking());


function shuffleMatchItems(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function randomizeMatchPositions() {
    // Keep the English/meaning columns, but independently randomize every position.
    const english = shuffleMatchItems(matchCards.filter(card => card.type === 'en'));
    const korean = shuffleMatchItems(matchCards.filter(card => card.type === 'ko'));
    matchCards = matchCards.map(card => card.type === 'en' ? english.pop() : korean.pop());
}

function initMatchGame() {
    matchSession++;
    const pool = getEffectiveWords();
    if (pool.length < 8) return;

    // 전체 단어를 무작위 순서로 준비하고 처음 8개를 화면에 표시
    matchWordQueue = shuffleMatchItems(pool);
    const shuffled = matchWordQueue.slice(0, 8);
    matchNextWordIndex = 8;
    matchCompletedPairs = 0;
    
    // Build separate 4 English items and 4 Korean items
    const enCards = shuffled.map(w => ({ id: w.id, type: 'en', text: w.word, wordId: w.id }));
    const koCards = shuffled.map(w => ({ id: w.id, type: 'ko', text: w.meaning, wordId: w.id }));

    // Positions are randomized independently after building the grid.

    // Col 1 & 2: English cards (indices 0..3 and 4..7)
    // Col 3 & 4: Korean cards (indices 0..3 and 4..7)
    matchCards = [];
    for (let i = 0; i < 8; i++) {
        if (i < 4) {
            matchCards.push(enCards[i]); // col 1
            matchCards.push(enCards[i + 4]); // col 2
            matchCards.push(koCards[i]); // col 3
            matchCards.push(koCards[i + 4]); // col 4
        }
    }

    randomizeMatchPositions();
    selectedMatchCards = [];
    matchResolving = false;
    matchScore = 0;
    document.getElementById('matchScore').innerText = matchScore;
    document.getElementById('matchFeedback').innerText = '';

    renderMatchGrid();

    // Timer setup
    if (matchTimer) clearInterval(matchTimer);
    const duration = Number(document.getElementById('matchDuration').value);
    matchTimeRemaining = [60, 180, 300].includes(duration) ? duration : 300;
    matchGameActive = true;
    updateMatchTimerDisplay();
    matchTimer = setInterval(() => {
        matchTimeRemaining--;
        updateMatchTimerDisplay();
        if (matchTimeRemaining <= 0) {
            finishMatchGame(`시간이 종료되었습니다! 이번 게임 점수: ${matchScore}점`);
        }
    }, 1000);
}

function updateMatchTimerDisplay() {
    const m = String(Math.floor(matchTimeRemaining / 60)).padStart(2, '0');
    const s = String(matchTimeRemaining % 60).padStart(2, '0');
    document.getElementById('matchTimer').innerText = `${m}:${s}`;
}

function renderMatchGrid() {
    const grid = document.getElementById('matchGrid');
    grid.innerHTML = matchCards.map((card, idx) => `
        <button onclick="handleMatchCardClick(this, ${idx})" class="match-card p-3 min-h-[70px] rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500 font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-center justify-center text-center shadow-sm transition">
            ${escapeHtml(card.text)}
        </button>
    `).join('');
}

function handleMatchCardClick(btnEl, cardIdx) {
    const session = matchSession;
    const card = matchCards[cardIdx];
    if (!matchGameActive || !card || btnEl.disabled || matchResolving) return;

    // Prevent selecting two cards of same type (e.g. en & en)
    if (selectedMatchCards.length === 1 && selectedMatchCards[0].card.type === card.type) {
        selectedMatchCards[0].btn.classList.remove('ring-2', 'ring-blue-600', 'bg-blue-50');
        selectedMatchCards = [];
    }

    btnEl.classList.add('ring-2', 'ring-blue-600', 'bg-blue-50');
    selectedMatchCards.push({ btn: btnEl, card: card, index: cardIdx });

    if (selectedMatchCards.length === 2) {
        matchResolving = true;
        const [first, second] = selectedMatchCards;

        if (first.card.wordId === second.card.wordId) {
            // Match Correct
            matchScore += 20;
            matchCompletedPairs++;
            document.getElementById('matchScore').innerText = matchScore;
            document.getElementById('matchFeedback').innerText = "⭕ 정답! (+20점)";
            document.getElementById('matchFeedback').className = "w-full max-w-2xl text-center font-extrabold text-sm min-h-[28px] text-emerald-500";

            first.btn.disabled = true;
            second.btn.disabled = true;
            first.btn.classList.add('bg-emerald-100', 'dark:bg-emerald-900/40', 'border-emerald-500');
            second.btn.classList.add('bg-emerald-100', 'dark:bg-emerald-900/40', 'border-emerald-500');
            selectedMatchCards = [];

            // 맞힌 두 자리를 아직 나오지 않은 새로운 단어와 뜻으로 교체
            setTimeout(() => {
                if (session !== matchSession) return;
                if (matchGameActive && matchTimeRemaining > 0) {
                    // 준비한 단어를 모두 맞혀도 게임을 끝내지 않고 남은 시간 동안 새 순환을 시작한다.
                    if (matchNextWordIndex >= matchWordQueue.length) {
                        const activeWordIds = new Set(matchCards
                            .filter((_, index) => index !== first.index && index !== second.index)
                            .map(card => card.wordId));
                        const nextCycle = getEffectiveWords().filter(item => !activeWordIds.has(item.id));
                        matchWordQueue = shuffleMatchItems(nextCycle.length ? nextCycle : getEffectiveWords());
                        matchNextWordIndex = 0;
                    }
                    const nextWord = matchWordQueue[matchNextWordIndex++];
                    matchCards[first.index] = {
                        id: nextWord.id,
                        type: first.card.type,
                        text: first.card.type === 'en' ? nextWord.word : nextWord.meaning,
                        wordId: nextWord.id
                    };
                    matchCards[second.index] = {
                        id: nextWord.id,
                        type: second.card.type,
                        text: second.card.type === 'en' ? nextWord.word : nextWord.meaning,
                        wordId: nextWord.id
                    };
                    randomizeMatchPositions();
                    selectedMatchCards = [];
                    matchResolving = false;
                    renderMatchGrid();
                }
            }, 350);
        } else {
            // Match Wrong
            matchScore = Math.max(0, matchScore - 10);
            document.getElementById('matchScore').innerText = matchScore;
            document.getElementById('matchFeedback').innerText = "❌ 틀렸습니다! (-10점)";
            document.getElementById('matchFeedback').className = "w-full max-w-2xl text-center font-extrabold text-sm min-h-[28px] text-rose-500";

            first.btn.classList.add('ring-rose-500', 'bg-rose-50');
            second.btn.classList.add('ring-rose-500', 'bg-rose-50');

            setTimeout(() => {
                if (session !== matchSession) return;
                first.btn.classList.remove('ring-2', 'ring-blue-600', 'ring-rose-500', 'bg-blue-50', 'bg-rose-50');
                second.btn.classList.remove('ring-2', 'ring-blue-600', 'ring-rose-500', 'bg-blue-50', 'bg-rose-50');
                selectedMatchCards = [];
                matchResolving = false;
            }, 800);
        }
    }
}

function renderVocabList() {
    renderCustomFolderOptions();
    const search = document.getElementById('listSearchInput').value.toLowerCase().trim();
    const filter = listStatusFilter;
    const tbody = document.getElementById('vocabTableBody');

    let filtered = getFolderWords().filter(item => {
        const matchesSearch = item.word.toLowerCase().includes(search) || item.meaning.includes(search);
        if (!matchesSearch) return false;

        if (filter === 'starred') return item.starred;
        if (filter === 'mastered') return item.mastered;
        if (filter === 'review') return !item.mastered;
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="p-8 text-center text-slate-400">조건에 맞는 단어가 없습니다. 단어 추가 버튼으로 이 폴더에 단어를 넣을 수 있습니다.</td></tr>`;
        updateStudySelectionControls([]);
        return;
    }

    tbody.innerHTML = filtered.map(item => `
        <tr class="${item.mastered ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''} hover:bg-slate-50 dark:hover:bg-slate-700/30 transition">
            <td class="p-3 text-center">
                <input type="checkbox" aria-label="${escapeHtml(item.word)} 학습 선택" ${selectedStudyWordIds.has(item.id) ? 'checked' : ''} onchange="toggleStudyWordSelection(${item.id}, this.checked)" class="w-4 h-4 accent-blue-600 cursor-pointer">
            </td>
            <td class="p-3 text-center">
                <button onclick="toggleStarInList(${item.id})" class="text-sm transition hover:scale-125">
                    <i class="${item.starred ? 'fa-solid fa-star text-amber-500' : 'fa-regular fa-star text-slate-300 dark:text-slate-600'}"></i>
                </button>
            </td>
            <td class="p-3 text-center">
                <button onclick="toggleMasteredInList(${item.id})" class="text-sm transition hover:scale-125">
                    <i class="${item.mastered ? 'fa-solid fa-circle-check text-emerald-500' : 'fa-regular fa-circle text-slate-300 dark:text-slate-600'}"></i>
                </button>
            </td>
            <td class="p-3 font-bold text-slate-900 dark:text-white">${escapeHtml(item.word)}<span class="mobile-word-pos">${escapeHtml(item.pos || '')}</span></td>
            <td class="p-3 text-slate-400 font-mono text-[11px]">${escapeHtml(item.pos || '')}</td>
            <td class="p-3 font-semibold text-slate-700 dark:text-slate-200">${escapeHtml(item.meaning)}</td>
            <td class="p-3 text-center">
                <button onclick="speakWordById(${item.id})" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition inline-flex items-center justify-center">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                </button>
            </td>
            <td class="p-3 text-center">
                <button onclick="deleteWord(${item.id})" class="text-slate-300 hover:text-red-500 transition px-1 py-1" title="삭제">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    `).join('');
    updateStudySelectionControls(filtered);
}

function updateStudySelectionControls(visibleWords = null) {
    const selectedCount = getFolderWords().filter(item => selectedStudyWordIds.has(item.id)).length;
    const count = document.getElementById('selectedStudyCount');
    if (count) count.innerText = `선택 ${selectedCount}개`;
    const startButton = document.getElementById('startSelectedStudyButton');
    if (startButton) startButton.disabled = selectedCount === 0;
    const selectAll = document.getElementById('selectAllVisibleWords');
    if (selectAll && visibleWords) {
        const checkedCount = visibleWords.filter(item => selectedStudyWordIds.has(item.id)).length;
        selectAll.checked = visibleWords.length > 0 && checkedCount === visibleWords.length;
        selectAll.indeterminate = checkedCount > 0 && checkedCount < visibleWords.length;
    }
}

function toggleStudyWordSelection(id, checked) {
    if (checked) selectedStudyWordIds.add(id);
    else selectedStudyWordIds.delete(id);
    if (selectedOnlyMode && !selectedStudyWordIds.has(id)) {
        selectedOnlyMode = selectedStudyWordIds.size > 0;
        flashcardIndex = 0;
        spellingIndex = 0;
    }
    updateStudySelectionControls();
    updateStudySelectionLabel();
}

function toggleSelectVisibleWords(checked) {
    const search = document.getElementById('listSearchInput').value.toLowerCase().trim();
    const visible = getFolderWords().filter(item => {
        const matchesSearch = item.word.toLowerCase().includes(search) || item.meaning.includes(search);
        if (!matchesSearch) return false;
        if (listStatusFilter === 'starred') return item.starred;
        if (listStatusFilter === 'mastered') return item.mastered;
        if (listStatusFilter === 'review') return !item.mastered;
        return true;
    });
    visible.forEach(item => checked ? selectedStudyWordIds.add(item.id) : selectedStudyWordIds.delete(item.id));
    renderVocabList();
}

function clearStudyWordSelection() {
    selectedStudyWordIds.clear();
    selectedOnlyMode = false;
    flashcardIndex = 0;
    spellingIndex = 0;
    updateStudySelectionLabel();
    renderVocabList();
    if (typeof queueProgressSave === 'function') queueProgressSave();
}

function startSelectedWordStudy() {
    const validIds = new Set(getFolderWords().map(item => item.id));
    selectedStudyWordIds = new Set([...selectedStudyWordIds].filter(id => validIds.has(id)));
    if (selectedStudyWordIds.size === 0) {
        alert('학습할 단어를 먼저 선택해 주세요.');
        return;
    }
    selectedOnlyMode = true;
    flashcardIndex = 0;
    spellingIndex = 0;
    updateStudySelectionLabel();
    if (typeof queueProgressSave === 'function') queueProgressSave();
    switchTab('flashcard');
}

function useAllFolderWords() {
    selectedOnlyMode = false;
    flashcardIndex = 0;
    spellingIndex = 0;
    updateStudySelectionLabel();
    if (typeof queueProgressSave === 'function') queueProgressSave();
    switchTab('flashcard');
}

function toggleStarInList(id) {
    const item = words.find(w => w.id === id);
    if (item) {
        item.starred = !item.starred;
        saveWordsToStorage();
        renderVocabList();
    }
}

function toggleMasteredInList(id) {
    const item = words.find(w => w.id === id);
    if (item) {
        item.mastered = !item.mastered;
        saveWordsToStorage();
        renderVocabList();
    }
}

function deleteWord(id) {
    if (confirm("이 단어를 목록에서 삭제하시겠습니까?")) {
        words = words.filter(w => w.id !== id);
        selectedStudyWordIds.delete(id);
        saveWordsToStorage();
        renderVocabList();
    }
}

function openAddWordModal() {
    if (selectedFolderIds.size > 1) {
        alert('단어를 추가할 폴더 하나를 먼저 선택해 주세요.');
        return;
    }
    document.getElementById('addWordModal').classList.remove('hidden');
}

function closeAddWordModal() {
    document.getElementById('addWordModal').classList.add('hidden');
}

function submitAddWord(e) {
    e.preventDefault();
    const w = document.getElementById('newWord').value.trim();
    const m = document.getElementById('newMeaning').value.trim();
    const p = document.getElementById('newPos').value.trim();
    const ph = document.getElementById('newPhonetic').value.trim();
    const exE = document.getElementById('newExampleEn').value.trim();
    const exK = document.getElementById('newExampleKo').value.trim();

    if (!w || !m || selectedFolder === null) return;

    const newItem = {
        id: Date.now(),
        folderId: selectedFolder === 'all' ? 4 : selectedFolder,
        folderScheme: 'hwp',
        word: w,
        pos: p || 'n.',
        phonetic: ph || '',
        meaning: m,
        exampleEn: exE || '',
        exampleKo: exK || '',
        mastered: false,
        starred: false
    };

    words.unshift(newItem);
    saveWordsToStorage();
    closeAddWordModal();
    renderVocabList();

    // Reset Form fields
    document.getElementById('newWord').value = '';
    document.getElementById('newMeaning').value = '';
    document.getElementById('newPos').value = '';
    document.getElementById('newPhonetic').value = '';
    document.getElementById('newExampleEn').value = '';
    document.getElementById('newExampleKo').value = '';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const activeTab = document.querySelector('.tab-btn.bg-white')?.id || '';
        
        if (activeTab === 'tab-quiz') {
            const activeContainer = document.getElementById('quizActiveContainer');
            if (!activeContainer.classList.contains('hidden')) {
                if (quizAnswered) {
                    e.preventDefault();
                    nextQuizQuestion();
                } else if (quizMode === 'typing') {
                    const input = document.getElementById('quizTypingInput');
                    if (document.activeElement === input) {
                        e.preventDefault();
                        handleQuizTypingAction();
                    }
                }
            }
        }
    }
});

window.onload = async function() {
    loadCustomFolders();
    words = loadWordsFromStorage();
    renderCustomFolderOptions();
    loadUserScore();
    loadMatchScore();
    selectWordFolder('all');
    document.getElementById('introNickname').value = currentUser.nickname === '학습자' ? '' : (currentUser.nickname || '');
    if (typeof initializeSchoolAccess === 'function') await initializeSchoolAccess();
};

function startFromIntro(event) {
    event.preventDefault();
    const input = document.getElementById('introNickname');
    const nickname = input.value.trim();
    if (!nickname) {
        input.setCustomValidity('닉네임을 입력해 주세요.');
        input.reportValidity();
        return;
    }
    input.setCustomValidity('');
    currentUser.nickname = nickname;
    saveUserScore();
    saveQuizRanking();
    document.getElementById('introScreen').hidden = true;
    document.getElementById('app').hidden = false;
    switchTab('list');
    document.getElementById('tab-list').focus();
}
