const SCHOOL_NAME = '마산무학여자고등학교';
const SCHOOL_AUTH_DOMAINS = ['muhak-g-h.gne.go.kr'];
const TEACHER_EMAILS = [
    'englishmath@muhak-g-h.gne.go.kr',
    'mildwone@muhak-g-h.gne.go.kr'
];
const PROFILE_COLLECTION = 'schoolUsers';
const PROGRESS_COLLECTION = 'learningProgress';
const PROGRESS_SCHEMA_VERSION = 1;

let schoolAuth = null;
let schoolDb = null;
let schoolUser = null;
let schoolProfile = null;
let stopProfileListener = null;
let stopTeacherUsersListener = null;
let teacherUsers = [];
let progressSaveTimer = null;
let progressWriteInFlight = null;
let progressRevision = 0;
let progressLoaded = false;
let authConnectionTimer = null;

function showAccessPanel(id) {
    ['authConnecting', 'authLogin', 'registrationForm', 'approvalWaiting', 'accessBlocked']
        .forEach(panelId => document.getElementById(panelId)?.classList.toggle('hidden', panelId !== id));
}

function showAuthError(message) {
    const el = document.getElementById('authLoginError');
    if (!el) return;
    el.textContent = message;
    el.classList.remove('hidden');
}

function isAllowedSchoolEmail(user) {
    const email = String(user?.email || '').toLowerCase();
    const domain = email.split('@')[1] || '';
    return Boolean(user?.emailVerified && SCHOOL_AUTH_DOMAINS.includes(domain));
}

function isTeacherEmail(email) {
    return TEACHER_EMAILS.includes(String(email || '').toLowerCase());
}

function firebaseErrorMessage(error) {
    const code = error?.code || '';
    if (code.includes('popup-closed')) return '로그인 창이 닫혔습니다. 다시 시도해 주세요.';
    if (code.includes('popup-blocked')) return '로그인 창을 열 수 없습니다. 잠시 후 다시 시도해 주세요.';
    if (code.includes('operation-not-supported')) return '현재 실행 환경에서는 팝업 로그인을 사용할 수 없습니다. 다시 시도해 주세요.';
    if (code.includes('network')) return '네트워크 연결을 확인한 뒤 다시 시도해 주세요.';
    if (code.includes('permission-denied')) return '접근 권한이 없습니다. 승인 상태를 확인해 주세요.';
    return '연결 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';
}

function isInstalledOrMobileApp() {
    return window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function initializeSchoolAccess() {
    document.getElementById('accessGate').hidden = false;
    document.getElementById('introScreen').hidden = true;
    document.getElementById('app').hidden = true;
    showAccessPanel('authConnecting');
    try {
        if (!window.firebase) throw new Error('Firebase SDK load failed');
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        schoolAuth = firebase.auth();
        schoolDb = firebase.firestore();
        authConnectionTimer = setTimeout(() => {
            if (!schoolUser) {
                showAccessPanel('authLogin');
                showAuthError('로그인 상태 확인이 지연되고 있습니다. 다시 로그인해 주세요.');
            }
        }, 10000);
        schoolAuth.onAuthStateChanged(handleSchoolAuthState, error => {
            clearTimeout(authConnectionTimer);
            showAccessPanel('authLogin');
            showAuthError(firebaseErrorMessage(error));
        });
        schoolAuth.getRedirectResult().catch(error => {
            clearTimeout(authConnectionTimer);
            showAccessPanel('authLogin');
            showAuthError(firebaseErrorMessage(error));
        });
    } catch (error) {
        clearTimeout(authConnectionTimer);
        showAccessPanel('authLogin');
        showAuthError(firebaseErrorMessage(error));
    }
}

async function signInWithSchoolGoogle(event) {
    const button = event?.currentTarget;
    if (button) button.disabled = true;
    document.getElementById('authLoginError')?.classList.add('hidden');
    try {
        const persistence = document.getElementById('personalDeviceLogin')?.checked
            ? firebase.auth.Auth.Persistence.LOCAL
            : firebase.auth.Auth.Persistence.SESSION;
        await schoolAuth.setPersistence(persistence);
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        if (isInstalledOrMobileApp()) {
            await schoolAuth.signInWithRedirect(provider);
            return;
        }
        let result;
        try {
            result = await schoolAuth.signInWithPopup(provider);
        } catch (error) {
            const code = String(error?.code || '');
            if (code.includes('popup-blocked') || code.includes('operation-not-supported')) {
                await schoolAuth.signInWithRedirect(provider);
                return;
            }
            throw error;
        }
        if (!isAllowedSchoolEmail(result.user)) {
            await schoolAuth.signOut();
            showAccessPanel('authLogin');
            showAuthError('마산무학여고 학교 Google 계정으로 다시 로그인해 주세요.');
        }
    } catch (error) {
        showAccessPanel('authLogin');
        showAuthError(firebaseErrorMessage(error));
    } finally {
        if (button) button.disabled = false;
    }
}

async function handleSchoolAuthState(user) {
    clearTimeout(authConnectionTimer);
    schoolUser = user;
    progressLoaded = false;
    schoolProfile = null;
    if (stopProfileListener) stopProfileListener();
    stopProfileListener = null;
    if (!user) {
        clearPrivateSessionState();
        showAccessPanel('authLogin');
        return;
    }
    if (!isAllowedSchoolEmail(user)) {
        await schoolAuth.signOut();
        showAccessPanel('authLogin');
        showAuthError('허용된 학교 Google 계정이 아닙니다. 학교 계정으로 다시 로그인해 주세요.');
        return;
    }
    showAccessPanel('authConnecting');
    stopProfileListener = schoolDb.collection(PROFILE_COLLECTION).doc(user.uid).onSnapshot(
        snapshot => handleProfileSnapshot(snapshot),
        error => {
            showAccessPanel('accessBlocked');
            document.getElementById('blockedTitle').textContent = '승인 상태 연결 오류';
            document.getElementById('blockedMessage').textContent = firebaseErrorMessage(error);
        }
    );
}

async function handleProfileSnapshot(snapshot) {
    if (!snapshot.exists) {
        if (isTeacherEmail(schoolUser.email)) {
            const teacherProfile = {
                school: SCHOOL_NAME, email: schoolUser.email, name: schoolUser.displayName || '관리 교사',
                grade: 0, classNo: 0, studentNo: 0, role: 'teacher', status: 'approved',
                assignedClasses: ['*'], createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            await snapshot.ref.set(teacherProfile);
            return;
        }
        showRegistrationForm();
        return;
    }
    schoolProfile = { uid: snapshot.id, ...snapshot.data() };
    if (schoolProfile.email !== schoolUser.email) {
        showAccessPanel('accessBlocked');
        document.getElementById('blockedTitle').textContent = '계정 정보 확인 필요';
        document.getElementById('blockedMessage').textContent = '인증 계정과 신청 정보가 일치하지 않습니다. 선생님께 문의해 주세요.';
        return;
    }
    if (schoolProfile.status === 'approved') {
        try {
            await enterApprovedLearning();
        } catch (error) {
            lockLearningAccess();
            showAccessPanel('accessBlocked');
            document.getElementById('blockedTitle').textContent = '학습 자료 연결 오류';
            document.getElementById('blockedMessage').textContent = '학습 자료를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';
        }
    } else if (schoolProfile.status === 'pending') {
        showPendingProfile();
    } else {
        showBlockedProfile();
    }
}

function showRegistrationForm(profile = null) {
    showAccessPanel('registrationForm');
    document.getElementById('verifiedStudentEmail').value = schoolUser?.email || '';
    if (profile) {
        document.getElementById('studentGrade').value = String(profile.grade || '');
        document.getElementById('studentClass').value = String(profile.classNo || '');
        document.getElementById('studentNumber').value = String(profile.studentNo || '');
        document.getElementById('studentName').value = profile.name || '';
    } else {
        const nameInput = document.getElementById('studentName');
        if (!nameInput.value) nameInput.value = suggestedStudentName(schoolUser?.displayName);
    }
}

function suggestedStudentName(displayName) {
    const korean = String(displayName || '').match(/[가-힣]{2,5}/);
    return korean ? korean[0] : '';
}

async function submitSchoolRegistration(event) {
    event.preventDefault();
    const errorEl = document.getElementById('registrationError');
    errorEl.classList.add('hidden');
    const profile = {
        school: SCHOOL_NAME,
        email: schoolUser.email,
        name: document.getElementById('studentName').value.trim(),
        grade: Number(document.getElementById('studentGrade').value),
        classNo: Number(document.getElementById('studentClass').value),
        studentNo: Number(document.getElementById('studentNumber').value),
        role: 'student', status: 'approved', rejectionReason: '',
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    if (!profile.name || !profile.grade || !profile.classNo || profile.studentNo < 1 || profile.studentNo > 50) {
        errorEl.textContent = '학년·반·번호·이름을 정확히 입력해 주세요.';
        errorEl.classList.remove('hidden');
        return;
    }
    try {
        const ref = schoolDb.collection(PROFILE_COLLECTION).doc(schoolUser.uid);
        const existing = await ref.get();
        if (!existing.exists) profile.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        await ref.set(profile, { merge: true });
        showPendingProfile(profile);
    } catch (error) {
        errorEl.textContent = firebaseErrorMessage(error);
        errorEl.classList.remove('hidden');
    }
}

function showPendingProfile(profile = schoolProfile) {
    if (!profile) return;
    lockLearningAccess();
    showAccessPanel('approvalWaiting');
    document.getElementById('pendingProfileSummary').textContent = `${profile.grade}학년 ${profile.classNo}반 ${profile.studentNo}번 · ${profile.name}`;
    document.getElementById('approvalStatusText').textContent = '승인 대기 · 자동 확인 중';
}

function showBlockedProfile() {
    lockLearningAccess();
    showAccessPanel('accessBlocked');
    const suspended = schoolProfile.status === 'suspended';
    document.getElementById('blockedTitle').textContent = suspended ? '현재 이용이 정지되었습니다.' : '가입 신청이 반려되었습니다.';
    document.getElementById('blockedMessage').textContent = suspended
        ? '학습 기록은 보존됩니다. 선생님께 정지 해제를 요청해 주세요.'
        : (schoolProfile.rejectionReason || '신청 정보를 확인한 뒤 수정하여 다시 신청해 주세요.');
}

async function refreshApprovalStatus() {
    const status = document.getElementById('approvalStatusText');
    status.textContent = '확인 중...';
    try {
        const snapshot = await schoolDb.collection(PROFILE_COLLECTION).doc(schoolUser.uid).get({ source: 'server' });
        await handleProfileSnapshot(snapshot);
        if (schoolProfile?.status === 'pending') status.textContent = '승인 대기 · 최신 상태 확인 완료';
    } catch (error) {
        status.textContent = '연결 오류 · 잠시 후 다시 시도해 주세요.';
    }
}

function editPendingRegistration() {
    showRegistrationForm(schoolProfile);
}

async function enterApprovedLearning() {
    showSaveStatus('단어장 불러오는 중...', 'working');
    await loadProtectedVocabulary();
    currentUser = {
        deviceId: schoolUser.uid,
        nickname: schoolProfile.name || schoolUser.displayName || '학습자',
        totalScore: 0,
        completedQuizzes: 0
    };
    matchCumulativeScore = 0;
    matchBestScore = 0;
    matchLastScore = null;
    matchPlayCount = 0;
    showSaveStatus('진도 불러오는 중...', 'working');
    await loadCloudProgress();
    currentUser.nickname = schoolProfile.name || schoolUser.displayName || '학습자';
    document.getElementById('signedInStudentName').textContent = currentUser.nickname;
    document.getElementById('signedInStudentEmail').textContent = schoolUser.email;
    document.getElementById('teacherRoomButton').classList.toggle('hidden', schoolProfile.role !== 'teacher');
    document.getElementById('profileEditRequestButton').classList.toggle('hidden', schoolProfile.role === 'teacher');
    document.getElementById('accessGate').hidden = true;
    document.getElementById('introScreen').hidden = true;
    document.getElementById('teacherRoom').hidden = true;
    document.getElementById('app').hidden = false;
    switchTab(activeStudyTab || 'list');
    initFirebaseRanking();
    showSaveStatus('진도 불러오기 완료', 'success');
}

async function loadProtectedVocabulary() {
    const snapshot = await schoolDb.collection('schoolVocabulary').doc('current').get({ source: 'server' });
    if (!snapshot.exists) throw new Error('protected-vocabulary-missing');
    const stored = snapshot.data();
    const data = typeof stored.payloadJson === 'string' ? JSON.parse(stored.payloadJson) : stored;
    if (!Array.isArray(data.words) || !data.words.length || !data.folders || !Array.isArray(data.wordOrder)) {
        throw new Error('protected-vocabulary-invalid');
    }
    defaultWords = data.words.map(item => ({ ...item, mastered: false, starred: false }));
    Object.keys(studyFolders).forEach(key => delete studyFolders[key]);
    Object.assign(studyFolders, data.folders);
    documentWordOrder.splice(0, documentWordOrder.length, ...data.wordOrder);
    Object.keys(documentWordFolders).forEach(key => delete documentWordFolders[key]);
    Object.assign(documentWordFolders, data.wordFolders || {});
    window.dictionaryPronunciations = data.pronunciations || {};
    words = loadWordsFromStorage();
    renderCustomFolderOptions();
    selectWordFolder('all');
}

function progressDocumentRef() {
    return schoolDb.collection(PROFILE_COLLECTION).doc(schoolUser.uid).collection(PROGRESS_COLLECTION).doc('current');
}

function buildProgressPayload() {
    const wordStates = {};
    words.forEach(word => {
        if (word.mastered || word.starred) wordStates[String(word.id)] = { mastered: Boolean(word.mastered), starred: Boolean(word.starred) };
    });
    const defaultById = new Map(defaultWords.map(word => [String(word.id), word]));
    const customWords = words.filter(word => !defaultById.has(String(word.id)));
    const wordOverrides = {};
    const editableFields = ['word','meaning','pos','phonetic','exampleEn','exampleKo','folderId','folderScheme','synonyms','antonyms','sourceExpression'];
    words.forEach(word => {
        const original = defaultById.get(String(word.id));
        if (!original) return;
        const changed = {};
        editableFields.forEach(field => { if ((word[field] ?? '') !== (original[field] ?? '')) changed[field] = word[field] ?? ''; });
        if (Object.keys(changed).length) wordOverrides[String(word.id)] = changed;
    });
    const presentIds = new Set(words.map(word => String(word.id)));
    const deletedWordIds = defaultWords.filter(word => !presentIds.has(String(word.id))).map(word => word.id);
    return {
        schemaVersion: PROGRESS_SCHEMA_VERSION,
        revision: ++progressRevision,
        selectedFolder: selectedFolder === 'all' ? 'all' : Number(selectedFolder),
        selectedFolderIds: [...selectedFolderIds], selectedWordIds: [...selectedStudyWordIds],
        selectedOnlyMode: Boolean(selectedOnlyMode), activeStudyTab,
        flashcardIndex, spellingIndex, quizWrongWordIds: [...(window.quizWrongWordIds || [])],
        spellingWrongWordIds: [...(window.spellingWrongWordIds || [])], wordStates,
        customFolders: customFolders.map(folder => ({ id: folder.id, name: folder.name })),
        customWords, wordOverrides, deletedWordIds,
        totalScore: Number(currentUser.totalScore) || 0,
        completedQuizzes: Number(currentUser.completedQuizzes) || 0,
        matchBestScore: Number(matchBestScore) || 0,
        matchPlayCount: Number(matchPlayCount) || 0,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAtClient: Date.now()
    };
}

async function loadCloudProgress() {
    if (!schoolUser || !schoolProfile || schoolProfile.status !== 'approved') return;
    try {
        const snapshot = await progressDocumentRef().get({ source: 'server' });
        if (!snapshot.exists) { progressLoaded = true; return; }
        const data = snapshot.data();
        progressRevision = Number(data.revision) || 0;
        customFolders = Array.isArray(data.customFolders) ? data.customFolders.filter(folder =>
            Number.isSafeInteger(folder?.id) && folder.id >= 1000 && typeof folder.name === 'string'
        ).map(folder => ({ id: folder.id, name: folder.name.slice(0, 30) })) : [];
        customFolders.forEach(folder => { studyFolders[folder.id] = folder.name; });
        const deletedIds = new Set(Array.isArray(data.deletedWordIds) ? data.deletedWordIds.map(String) : []);
        const overrides = data.wordOverrides || {};
        words = defaultWords.filter(word => !deletedIds.has(String(word.id))).map(word => ({ ...word, ...(overrides[String(word.id)] || {}) }));
        if (Array.isArray(data.customWords)) words.push(...data.customWords.map(word => ({ ...word })));
        const states = data.wordStates || {};
        words.forEach(word => {
            const state = states[String(word.id)];
            if (state) { word.mastered = Boolean(state.mastered); word.starred = Boolean(state.starred); }
        });
        selectedFolder = data.selectedFolder === 'all' ? 'all' : Number(data.selectedFolder || 0) || 'all';
        selectedFolderIds = new Set(Array.isArray(data.selectedFolderIds) ? data.selectedFolderIds.map(Number) : []);
        selectedStudyWordIds = new Set(Array.isArray(data.selectedWordIds) ? data.selectedWordIds.map(Number) : []);
        selectedOnlyMode = Boolean(data.selectedOnlyMode);
        activeStudyTab = ['list','flashcard','spelling-practice','quiz','match','ranking'].includes(data.activeStudyTab) ? data.activeStudyTab : 'list';
        flashcardIndex = Math.max(0, Number(data.flashcardIndex) || 0);
        spellingIndex = Math.max(0, Number(data.spellingIndex) || 0);
        window.quizWrongWordIds = new Set(data.quizWrongWordIds || []);
        window.spellingWrongWordIds = new Set(data.spellingWrongWordIds || []);
        currentUser.totalScore = Math.max(0, Number(data.totalScore) || 0);
        currentUser.completedQuizzes = Math.max(0, Number(data.completedQuizzes) || 0);
        matchBestScore = Math.max(0, Number(data.matchBestScore) || 0);
        matchPlayCount = Math.max(0, Number(data.matchPlayCount) || 0);
        progressLoaded = true;
        renderCustomFolderOptions(); renderVocabList(); updateFlashcard(); updateSpellingUI();
    } catch (error) {
        progressLoaded = true;
        showSaveStatus('진도 불러오기 실패 · 재시도해 주세요.', 'error');
    }
}

function queueProgressSave() {
    if (!progressLoaded || !schoolUser || schoolProfile?.status !== 'approved') return;
    clearTimeout(progressSaveTimer);
    showSaveStatus('저장 중...', 'working');
    progressSaveTimer = setTimeout(saveCloudProgress, 700);
}

async function saveCloudProgress() {
    if (!schoolUser || schoolProfile?.status !== 'approved') return false;
    const payload = buildProgressPayload();
    const write = schoolDb.runTransaction(async transaction => {
        const ref = progressDocumentRef();
        const current = await transaction.get(ref);
        const currentData = current.exists ? current.data() : {};
        if ((Number(currentData.revision) || 0) > payload.revision) {
            throw Object.assign(new Error('stale-progress'), { code: 'stale-progress' });
        }
        transaction.set(ref, payload, { merge: true });
    });
    progressWriteInFlight = write;
    try {
        await write;
        showSaveStatus('저장 완료', 'success');
        return true;
    } catch (error) {
        showSaveStatus(error.code === 'stale-progress' ? '다른 기기의 최신 진도가 있습니다. 새로고침해 주세요.' : '저장 실패 · 자동 재시도 예정', 'error');
        return false;
    } finally {
        if (progressWriteInFlight === write) progressWriteInFlight = null;
    }
}

function showSaveStatus(text, type) {
    const el = document.getElementById('cloudSaveStatus');
    if (!el) return;
    el.textContent = text;
    el.classList.remove('hidden', 'bg-red-600', 'bg-emerald-600', 'bg-slate-900');
    el.classList.add(type === 'error' ? 'bg-red-600' : type === 'success' ? 'bg-emerald-600' : 'bg-slate-900');
    if (type === 'success') setTimeout(() => el.classList.add('hidden'), 1800);
}

async function finishStudyAndSignOut() {
    if (progressSaveTimer) { clearTimeout(progressSaveTimer); progressSaveTimer = null; }
    if (schoolProfile?.status === 'approved') await saveCloudProgress();
    if (progressWriteInFlight) await progressWriteInFlight.catch(() => {});
    await schoolSignOut();
}

async function schoolSignOut() {
    try { await schoolAuth.signOut(); } finally { clearPrivateSessionState(); }
}

function clearPrivateSessionState() {
    if (stopTeacherUsersListener) stopTeacherUsersListener();
    stopTeacherUsersListener = null;
    teacherUsers = [];
    selectedStudyWordIds.clear(); selectedFolderIds.clear(); selectedOnlyMode = false;
    window.quizWrongWordIds = new Set(); window.spellingWrongWordIds = new Set();
    document.getElementById('app').hidden = true;
    document.getElementById('teacherRoom').hidden = true;
    document.getElementById('accessGate').hidden = false;
    clearProtectedVocabularyFromMemory();
}

function lockLearningAccess() {
    document.getElementById('app').hidden = true;
    document.getElementById('teacherRoom').hidden = true;
    document.getElementById('accessGate').hidden = false;
    clearProtectedVocabularyFromMemory();
}

function clearProtectedVocabularyFromMemory() {
    defaultWords = [];
    words = [];
    Object.keys(studyFolders).forEach(key => delete studyFolders[key]);
    documentWordOrder.splice(0, documentWordOrder.length);
    Object.keys(documentWordFolders).forEach(key => delete documentWordFolders[key]);
    window.dictionaryPronunciations = {};
    progressLoaded = false;
}

function openTeacherRoom() {
    if (schoolProfile?.role !== 'teacher' || !isTeacherEmail(schoolUser?.email)) return;
    document.getElementById('app').hidden = true;
    document.getElementById('teacherRoom').hidden = false;
    document.getElementById('teacherRoomStatus').textContent = '회원 목록 불러오는 중...';
    if (stopTeacherUsersListener) stopTeacherUsersListener();
    stopTeacherUsersListener = schoolDb.collection(PROFILE_COLLECTION).orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        teacherUsers = snapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() })).filter(user => user.role !== 'teacher');
        document.getElementById('teacherRoomStatus').textContent = `학생 ${teacherUsers.length}명 · 실시간 업데이트`;
        renderTeacherUsers();
    }, error => { document.getElementById('teacherRoomStatus').textContent = firebaseErrorMessage(error); });
}

function closeTeacherRoom() {
    document.getElementById('teacherRoom').hidden = true;
    document.getElementById('app').hidden = false;
}

function renderTeacherUsers() {
    const search = document.getElementById('teacherSearch')?.value.trim().toLowerCase() || '';
    const grade = document.getElementById('teacherGradeFilter')?.value || '';
    const classNo = document.getElementById('teacherClassFilter')?.value || '';
    const status = document.getElementById('teacherStatusFilter')?.value || '';
    const rows = teacherUsers.filter(user => (!search || String(user.name).toLowerCase().includes(search)) && (!grade || String(user.grade) === grade) && (!classNo || String(user.classNo) === classNo) && (!status || user.status === status));
    document.getElementById('teacherUsersBody').innerHTML = rows.length ? rows.map(user => `<tr class="border-t dark:border-slate-700"><td class="p-3 font-bold">${escapeHtml(user.name || '')}<div class="font-normal text-slate-400">${escapeHtml(user.email || '')}</div></td><td class="p-3 text-center">${user.grade}학년 ${user.classNo}반 ${user.studentNo}번</td><td class="p-3 text-center">${statusLabel(user.status)}</td><td class="p-3 text-center">${user.editRequest ? '<span class="text-amber-600 font-bold">수정 요청</span>' : '-'}</td><td class="p-3"><div class="flex flex-wrap justify-center gap-1">${teacherActionButtons(user)}</div></td></tr>`).join('') : '<tr><td colspan="5" class="p-8 text-center text-slate-400">조건에 맞는 학생이 없습니다.</td></tr>';
}

function statusLabel(status) {
    return ({ pending:'승인 대기', approved:'승인 완료', rejected:'반려', suspended:'이용 정지' })[status] || status;
}

function teacherActionButtons(user) {
    const buttons = [];
    if (user.editRequest) buttons.push(`<button onclick="applyStudentEditRequest('${user.uid}')" class="px-2 py-1 rounded-lg bg-indigo-600 text-white">수정 승인</button>`);
    if (user.status !== 'approved') buttons.push(`<button onclick="setStudentStatus('${user.uid}','approved')" class="px-2 py-1 rounded-lg bg-emerald-600 text-white">승인</button>`);
    if (user.status === 'pending') buttons.push(`<button onclick="setStudentStatus('${user.uid}','rejected')" class="px-2 py-1 rounded-lg bg-amber-500 text-white">반려</button>`);
    if (user.status === 'approved') buttons.push(`<button onclick="setStudentStatus('${user.uid}','suspended')" class="px-2 py-1 rounded-lg bg-red-600 text-white">정지</button>`);
    if (user.status === 'suspended') buttons.push(`<button onclick="setStudentStatus('${user.uid}','approved')" class="px-2 py-1 rounded-lg bg-blue-600 text-white">정지 해제</button>`);
    return buttons.join('');
}

async function requestProfileEdit() {
    if (schoolProfile?.role !== 'student' || schoolProfile.status !== 'approved') return;
    const name = prompt('수정할 이름을 입력해 주세요.', schoolProfile.name)?.trim();
    if (!name) return;
    const grade = Number(prompt('수정할 학년(1~3)을 입력해 주세요.', String(schoolProfile.grade)));
    const classNo = Number(prompt('수정할 반(1~8)을 입력해 주세요.', String(schoolProfile.classNo)));
    const studentNo = Number(prompt('수정할 번호(1~50)를 입력해 주세요.', String(schoolProfile.studentNo)));
    if (name.length < 2 || name.length > 20 || grade < 1 || grade > 3 || classNo < 1 || classNo > 8 || studentNo < 1 || studentNo > 50) {
        alert('학년·반·번호·이름을 정확히 입력해 주세요.');
        return;
    }
    await schoolDb.collection(PROFILE_COLLECTION).doc(schoolUser.uid).update({
        editRequest: { name, grade, classNo, studentNo, requestedAt: firebase.firestore.Timestamp.now() },
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    alert('정보 수정 요청을 선생님께 보냈습니다. 승인 전까지 현재 정보로 이용합니다.');
}

async function applyStudentEditRequest(uid) {
    if (schoolProfile?.role !== 'teacher' || !isTeacherEmail(schoolUser?.email)) return;
    const ref = schoolDb.collection(PROFILE_COLLECTION).doc(uid);
    await schoolDb.runTransaction(async transaction => {
        const snapshot = await transaction.get(ref);
        if (!snapshot.exists) return;
        const request = snapshot.data().editRequest;
        if (!request) return;
        transaction.update(ref, {
            name: request.name, grade: request.grade, classNo: request.classNo, studentNo: request.studentNo,
            editRequest: firebase.firestore.FieldValue.delete(),
            reviewedBy: schoolUser.uid,
            reviewedAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    });
}

async function setStudentStatus(uid, status) {
    if (!['approved','rejected','suspended'].includes(status) || schoolProfile?.role !== 'teacher') return;
    let rejectionReason = '';
    if (status === 'rejected') rejectionReason = prompt('반려 사유를 입력해 주세요.')?.trim() || '신청 정보를 확인해 주세요.';
    await schoolDb.collection(PROFILE_COLLECTION).doc(uid).update({ status, rejectionReason, reviewedBy: schoolUser.uid, reviewedAt: firebase.firestore.FieldValue.serverTimestamp(), updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
}

async function resetPublicRanking() {
    if (schoolProfile?.role !== 'teacher' || !isTeacherEmail(schoolUser?.email)) return;
    const phrase = prompt('공용 랭킹의 닉네임·완료 횟수·점수를 모두 삭제합니다.\n학생 개인 진도는 삭제되지 않습니다.\n계속하려면 "랭킹 초기화"를 입력해 주세요.');
    if (phrase !== '랭킹 초기화') return;
    const button = document.getElementById('resetRankingButton');
    const status = document.getElementById('rankingAdminStatus');
    button.disabled = true;
    status.textContent = '랭킹 초기화 중...';
    try {
        let removed = 0;
        while (true) {
            const snapshot = await schoolDb.collection('quizRankings_r20260914b').limit(400).get();
            if (snapshot.empty) break;
            const batch = schoolDb.batch();
            snapshot.docs.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
            removed += snapshot.size;
        }
        status.textContent = `랭킹 ${removed}건 초기화 완료 · 개인 학습 진도 유지`;
    } catch (error) {
        status.textContent = `초기화 실패 · ${firebaseErrorMessage(error)}`;
    } finally {
        button.disabled = false;
    }
}

window.addEventListener('online', () => { if (schoolProfile?.status === 'approved') queueProgressSave(); });
