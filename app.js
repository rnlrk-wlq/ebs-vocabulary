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

// EBS 수능특강 라이트 단어 데이터베이스
// 첨부된 원본 단어 목록 257줄을 순서와 중복을 포함해 그대로 보존합니다.
const rawWordData = `disproportionately 불균형적으로
subsidy 보조금
bear the brunt of ~의 가장 큰 타격을 받다
infinite 무한한
distinguish 구분하다
warrant 보장하다
empathy 공감
enlightenment 깨우침
obstacle 장애물
perception 인식
longevity 장수 
acquire 습득하다
inject 주입하다
wipe out ~을 완전히 없애다
appreciate 이해하다, 인식하다
infection 감염
significance 중요성
antibiotic 항생제
journalism 언론 보도
spine 척추
resist 저항하다
revive 소생시키다
ground (주로 복수로) 이유, 입장, 근거
markedly 현저하게
perspective 관점
chronic 만성적인
furnish 제공하다
neurological 신경계의
alternative 대안
symptom 증상
behaviourism 행동주의
reset the clock 시간을 되돌리다
plausibility 타당성, 그럴듯함
acute 급성의
pellet 작은 알갱이
decompress 압박을 줄이다
cardiovascular 심혈관의
evade 피하다
economist 경제학자
burden 부담
vice versa 그 반대도 마찬가지이다
legally 법적으로
price-sensitive 가격에 민감한
shrink 줄어들다
nostril 콧구멍
detect 감지하다
microbe 미생물
a swarm of 일군의
neutralize 무력화시키다
breakthrough 획기적인 발견
respiratory 호흡(기)의
antiviral 항바이러스성의
trainee 훈련생
attraction 매력
characteristic 특성
assign 배정하다
surname 성(姓)
likelihood 가능성
engage in ~을 하다, ~에 관여하다
annoy 짜증 나게 하다
laboratory 실험실
proximity 근접
artificial 인위적인, 인공의
behave 행동하다
sweaty 땀이 나는
habitat 서식지
flushed 얼굴이 달아오른
dusk 해 질 녘, 황혼
sympathetic nervous system 교감신경계
prey 먹이
distress 디스트레스, 고통
distribution 분포
induce 유발하다
predator 포식자
physiological 생리(학)적인
disturbance 교란, 방해
oxytocin 옥시토신(뇌하수체 후엽 호르몬의 일종)
identify 파악하다, 확인하다
meditation 명상
crucial 매우 중요한
channel (다른 방향으로) 전환하다
roost 보금자리, (닭·새가 올라앉는) 홰
euphoria 행복감
forage 먹이를 찾아다니다
cardiovascular 심혈관의
intuitive 직관적인
immune 면역의
document (글로) 입증하다
investor 투자자
diabetic 당뇨병 환자
associated 관련된
microbiome 마이크로바이옴(인체 내 미생물 생태계)
effectively 사실상, 실제로
trivial-sounding 사소해 보이는
dentistry 치과 진료
prescribe 처방하다
antibiotic 항생제
component 요인
gut 장, 소화관
microbial 미생물의
nutrient 영양분, 영양소
spectrum 범위, 스펙트럼
microbe 미생물
gut flora 장내 미생물군
digest 소화하다
in silos 따로따로, 별개로
absorb 흡수하다
knock-on 연쇄적인
crucial 아주 중요한, 중대한
immune 면역의
get in the way 방해되다
distinguish 구별하다
perceive 인식하다
invade 침입하다
correspond to ~과 일치하다
cognitively 인지적으로
proportion 균형 잡히게 하다, 적당한 비율로 조절하다
deficient 부족한
stereotype 고정관념
at the mercy of ~에 휘둘리는
layperson 비전문가
ruminant 반추동물(되새김하는 동물)
pathogenic 병원성의, 발병시키는
ostrich 타조
bury 묻다
blood sugar 혈당
strategically 전략적으로
consumption 소비
bank balance은행 예금 잔액
polarization 양극화
discrimination 차별
bias 편향; 편향되게 하다
loop (정보, 자원 등의) 순환
recognize 인식하다
conventional wisdom 일반 통념
emerge 생겨나다
bigotry 편협(한 행위)
concrete 구체적인, 실질적인
flock together 떼 지어 모이다
analyse 분석하다
digital footprint 디지털 발자국(온라인 활동으로 남은 기록)
essentially 본질적으로, 근본적으로
a sense of belonging 소속감
consequence 결과
in-group biases 내집단 편향(자기 소속 집단을 우선시하는 태도)
reinforce 강화하다
exclusive 배타적인
marginalize 주변화시키다
*clique 파벌
specification 사양, (자세한) 설명서
account for ~의 이유가 되다
bias 편견; 편향되게 하다
embed 내재화하다, 깊이 새기다
virtually 사실상, 거의
conceive (~이라고) 생각하다
*ergonomic 인체 공학의
collaborative 협력적인
democratically 민주적으로
set out on ~에 나서다[착수하다]
property 부동산, 토지
compelling 설득력 있는
majority support 대다수 지지
colony 군체, 집단
opinionated 자기주장이 강한
educated 정보에 근거한
relate 들려주다, 말하다
adopt 채택하다
account 이야기
subsequent 그 후의
interpretive dance 의미를 담은 춤
asset 자산, 재산
entourage수행단
accumulation 축적
decree 명령
budget 예산을 세우다
scout 정찰병
balance 잔액을 맞추다
checkbook 수표장
assume 여기다, 생각하다
characterize (사람·사물을) ~으로 여기다
neutral 중립적인
compound interest 복리
controversial 논란의 여지가 있는
have to do with ~과 관련이 있다
dimension 치수
implicitly 암묵적으로, 잠재적으로
accommodation 조절, 적응
existing 기존의
in response to ~에 따라, ~에 반응하여
drape (옷·천 등을 느슨하게) 걸치다[씌우다]
modify 수정하다
variation 차이, 변화
fit into ~에 들어맞다
assimilation 동화
schema 스키마(정보를 통합하고 조직화하는 인지적 개념 또는 틀)
discard 폐기하다
chronic 만성의
habitat 서식지
trauma 트라우마, 마음의 상처
deposit (알을) 낳다, 두다
faulty 잘못된
offspring (동물의) 새끼
metaphorical 비유적인
artificial 인공의
be equipped with ~을 갖추다
predator 포식자
nervous system 신경계
virtually 거의
sense 감지하다
hatchling 갓 부화한 동물
stove 난로
embryo 배아
pull away ~을 떼다
permeable 투과성이 있는
short-lived 단기간의
acute 급성의
envision 상상하다
indicate 지적하다
sensitize 민감하게 하다
reaction 반응
stimulation 자극
deviance 일탈
arthritic 관절염이 있는
repetitive 반복적인
saint 성자
scarce 부족한
perception 인식
devote 들이다, 바치다
far-reaching 장래에까지 미치는
nonreproductive 번식 외의
prestige 명망, 명성
thrive 잘 살아가다
roughneck 망나니
have no choice but to do ~하지 않을 수 없다
deviate 일탈하다, 벗어나다
do chores 허드렛일을 하다
delinquent 비행 청소년; 비행의
ritual 의식
for kicks 재미로
gratuitous 불필요한
qualifier 수식어
nest (둥지를 틀어) 산란 활동을 하다
lay eggs 알을 낳다
shell 껍질
illuminate (불을) 비추다
inferior 열등한, 열악한
consistent 일관된, 한결같은
evolutionary biologist 진화 생물학자
perspective 관점
maladaptive 부적응의
optimal 최적의
uninhibited 억제되지 않은
predation 포식
adjust 조정하다
incur 초래하다
elevated 높은
plasticity 가소성`;

const defaultWords = rawWordData
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map((line, index) => {
        const koreanStart = line.search(/[가-힣]/);
        const word = (koreanStart >= 0 ? line.slice(0, koreanStart) : line).trim();
        const meaning = (koreanStart >= 0 ? line.slice(koreanStart) : '').trim();

        const examples = makeExample(word, meaning, index);
        return {
            id: 201 + index,
            word,
            pos: '',
            phonetic: '',
            meaning,
            exampleEn: examples.en,
            exampleKo: examples.ko,
            mastered: false,
            starred: false
        };
    });

function makeExample(word, meaning, index) {
    const templates = [
        { en: `The passage uses “${word}” as an important key expression.`, ko: `이 글은 ‘${word}(${meaning})’을 중요한 핵심 표현으로 사용한다.` },
        { en: `Students learned how “${word}” is used in context.`, ko: `학생들은 문맥에서 ‘${word}(${meaning})’이 어떻게 사용되는지 배웠다.` },
        { en: `The teacher explained “${word}” with a clear example.`, ko: `교사는 ‘${word}(${meaning})’을 명확한 예로 설명했다.` },
        { en: `Remember “${word}” when you read a similar sentence.`, ko: `비슷한 문장을 읽을 때 ‘${word}(${meaning})’을 기억하자.` }
    ];
    return templates[index % templates.length];
}

const studyFolders = {
    "4": "04. 함축적 의미 파악",
    "5": "05. 주제 · 제목 파악",
    "8": "08. 어법 정확성 파악",
    "9": "09. 어휘 적절성 파악",
    "12": "12. 문단 내 글의 순서 파악하기",
    "13": "13. 주어진 문장의 적합한 위치 찾기",
    "14": "14. 문단 요약하기"
};
const documentWordOrder = [209,211,212,214,216,218,220,222,224,226,228,230,232,234,236,237,238,239,240,241,242,243,244,201,202,203,204,205,206,207,208,210,213,215,217,219,221,223,225,227,229,231,233,235,261,263,264,266,268,270,272,274,276,278,280,282,284,286,287,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,262,265,267,269,271,273,275,277,279,281,283,285,299,301,303,305,307,309,310,312,314,316,318,320,322,323,324,325,326,327,328,329,288,289,290,291,292,293,294,295,296,297,298,300,302,304,306,308,311,313,315,317,319,321,338,339,340,341,342,343,344,345,346,347,348,349,330,331,332,333,334,335,336,337,357,358,359,360,361,362,363,364,365,366,368,370,372,374,376,379,381,383,384,385,386,350,351,352,353,354,355,356,367,369,371,373,375,377,378,380,382,387,388,389,390,391,392,393,394,395,396,397,399,401,403,405,407,409,411,413,415,416,417,419,421,423,426,428,430,432,434,436,438,439,440,441,442,443,444,445,446,398,400,402,404,406,408,410,412,414,418,420,422,424,425,427,429,431,433,435,437,447,448,449,450,451,452,453,454,455,456,457];
const documentWordFolders = {"201":4,"202":4,"203":4,"204":4,"205":4,"206":4,"207":4,"208":4,"209":4,"210":4,"211":4,"212":4,"213":4,"214":4,"215":4,"216":4,"217":4,"218":4,"219":4,"220":4,"221":4,"222":4,"223":4,"224":4,"225":4,"226":4,"227":4,"228":4,"229":4,"230":4,"231":4,"232":4,"233":4,"234":4,"235":4,"236":4,"237":4,"238":4,"239":4,"240":4,"241":4,"242":4,"243":4,"244":4,"245":5,"246":5,"247":5,"248":5,"249":5,"250":5,"251":5,"252":5,"253":5,"254":5,"255":5,"256":5,"257":5,"258":5,"259":5,"260":5,"261":5,"262":5,"263":5,"264":5,"265":5,"266":5,"267":5,"268":5,"269":5,"270":5,"271":5,"272":5,"273":5,"274":5,"275":5,"276":5,"277":5,"278":5,"279":5,"280":5,"281":5,"282":5,"283":5,"284":5,"285":5,"286":5,"287":5,"288":8,"289":8,"290":8,"291":8,"292":8,"293":8,"294":8,"295":8,"296":8,"297":8,"298":8,"299":8,"300":8,"301":8,"302":8,"303":8,"304":8,"305":8,"306":8,"307":8,"308":8,"309":8,"310":8,"311":8,"312":8,"313":8,"314":8,"315":8,"316":8,"317":8,"318":8,"319":8,"320":8,"321":8,"322":8,"323":8,"324":8,"325":8,"326":8,"327":8,"328":8,"329":8,"330":9,"331":9,"332":9,"333":9,"334":9,"335":9,"336":9,"337":9,"338":9,"339":9,"340":9,"341":9,"342":9,"343":9,"344":9,"345":9,"346":9,"347":9,"348":9,"349":9,"350":12,"351":12,"352":12,"353":12,"354":12,"355":12,"356":12,"357":12,"358":12,"359":12,"360":12,"361":12,"362":12,"363":12,"364":12,"365":12,"366":12,"367":12,"368":12,"369":12,"370":12,"371":12,"372":12,"373":12,"374":12,"375":12,"376":12,"377":12,"378":12,"379":12,"380":12,"381":12,"382":12,"383":12,"384":12,"385":12,"386":12,"387":12,"388":12,"389":12,"390":12,"391":12,"392":12,"393":12,"394":12,"395":12,"396":12,"397":13,"398":13,"399":13,"400":13,"401":13,"402":13,"403":13,"404":13,"405":13,"406":13,"407":13,"408":13,"409":13,"410":13,"411":13,"412":13,"413":13,"414":13,"415":13,"416":13,"417":13,"418":13,"419":13,"420":13,"421":13,"422":13,"423":13,"424":13,"425":13,"426":13,"427":13,"428":13,"429":13,"430":13,"431":13,"432":13,"433":13,"434":13,"435":13,"436":13,"437":13,"438":13,"439":13,"440":13,"441":13,"442":13,"443":13,"444":13,"445":13,"446":13,"447":14,"448":14,"449":14,"450":14,"451":14,"452":14,"453":14,"454":14,"455":14,"456":14,"457":14};
function sortDocumentWords(items) {
    const positions = new Map(documentWordOrder.map((id, index) => [id, index]));
    return [...items].sort((a, b) => (positions.get(a.id) ?? Infinity) - (positions.get(b.id) ?? Infinity));
}
defaultWords.sort((a, b) => documentWordOrder.indexOf(a.id) - documentWordOrder.indexOf(b.id));

let words = [];
let selectedFolder = null;
let pendingFolderTab = 'flashcard';
let activeStudyTab = 'flashcard';
let matchSession = 0;

function wordFolder(item) {
    if (documentWordFolders[item.id]) return documentWordFolders[item.id];
    if (item.folderScheme === 'hwp' && studyFolders[item.folderId]) return item.folderId;
    return ({1: 4, 2: 5, 3: 8, 4: 9})[item.folderId] || 4;
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
    if (selectedFolder !== folder) {
        const quizActive = !document.getElementById('quizActiveContainer').classList.contains('hidden');
        const matchActive = matchTimer !== null;
        if (selectedFolder !== null && (quizActive || matchActive) &&
            !confirm('폴더를 바꾸면 진행 중인 학습이 종료됩니다. 폴더를 변경할까요?')) return;
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
        selectedFolder = folder;
        showQuizPrepScreen();
        showMatchPrepScreen();
    }
    document.getElementById('studyMain').classList.remove('hidden');
    document.getElementById('selectedFolderLabel').innerText = folder === 'all' ? '전체 단어' : studyFolders[folder];
    switchTab(pendingFolderTab);
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
let matchWordQueue = [];
let matchNextWordIndex = 0;
let matchCompletedPairs = 0;
let matchCumulativeScore = 0;
let matchLastScore = null;
let matchPlayCount = 0;
let rankingDb = null;
let rankingUser = null;
let stopRankingListener = null;
let stopQuizRankingListener = null;
let onlineQuizBoard = [];
let quizRankingReady = false;
let onlineMatchBoard = [];
let matchRankingReady = false;
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
    try {
        const stored = localStorage.getItem('ebs_voca_words_2026_full_257');
        if (stored) {
            const savedWords = JSON.parse(stored);
            return sortDocumentWords(savedWords.map((item, index) => {
                const examples = makeExample(item.word, item.meaning, index);
                return { ...item, folderId: wordFolder(item), folderScheme: 'hwp', exampleEn: item.exampleEn || examples.en, exampleKo: item.exampleKo || examples.ko };
            }));
        }
    } catch (e) {
        console.error("Storage load error:", e);
    }
    return JSON.parse(JSON.stringify(defaultWords));
}

function saveWordsToStorage() {
    try {
        localStorage.setItem('ebs_voca_words_2026_full_257', JSON.stringify(words));
    } catch (e) {
        console.error("Storage save error:", e);
    }
}

function resetWordsToDefault() {
    if (selectedFolder === null) return;
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

function getEffectiveWords() {
    return selectedFolder === null ? [] : selectedFolder === 'all' ? [...words] : words.filter(item => wordFolder(item) === selectedFolder);
}

function switchTab(tabName) {
    if (selectedFolder === null) {
        pendingFolderTab = tabName;
        selectWordFolder('all');
        return;
    }
    activeStudyTab = tabName;
    pendingFolderTab = tabName;
    if (tabName !== 'match') {
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

function prevFlashcard() {
    flashcardIndex--;
    updateFlashcard();
}

function nextFlashcard() {
    flashcardIndex++;
    updateFlashcard();
}

function shuffleFlashcards() {
    const pool = getEffectiveWords();
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    let next = 0;
    words = words.map(item => selectedFolder === 'all' || wordFolder(item) === selectedFolder ? pool[next++] : item);
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

function speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
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
    document.getElementById('spPos').innerText = item.pos || '품사';
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
        saveMatchRanking();
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

function renderQuizQuestion() {
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
        subHint.innerText = `품사: ${current.pos || '알 수 없음'}`;
        subHint.classList.remove('hidden');
        choiceContainer.classList.add('hidden');
        typingContainer.classList.remove('hidden');

        const input = document.getElementById('quizTypingInput');
        input.value = '';
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
        feedbackText.innerText = `❌ 오답입니다. 정답: "${current.meaning}"`;
        feedbackText.className = "text-sm font-extrabold text-rose-500";
    }

    document.querySelectorAll('.quiz-choice-btn').forEach(btn => btn.disabled = true);
    feedbackArea.classList.remove('hidden');
    document.getElementById('quizScore').innerText = quizScore;
    document.getElementById('quizCumulativeDisplay').innerText = currentUser.totalScore;
}

function handleQuizTypingAction() {
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

function continueNextBatch() {
    document.getElementById('quizBatchContainer').classList.add('hidden');
    document.getElementById('quizActiveContainer').classList.remove('hidden');
    renderQuizQuestion();
}

function showQuizResult() {
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
    try {
        const stored = localStorage.getItem('ebs_voca_user_score');
        if (stored) {
            currentUser = JSON.parse(stored);
        }
        if (!currentUser.deviceId) {
            currentUser.deviceId = (window.crypto && crypto.randomUUID)
                ? crypto.randomUUID()
                : `device-${Date.now()}-${Math.random().toString(36).slice(2)}`;
            localStorage.setItem('ebs_voca_user_score', JSON.stringify(currentUser));
        }
    } catch (e) {
        console.error("Score load error:", e);
    }
}

function saveUserScore() {
    try {
        localStorage.setItem('ebs_voca_user_score', JSON.stringify(currentUser));
        saveLeaderboard();
        saveQuizRanking();
    } catch (e) {
        console.error("Score save error:", e);
    }
}

function loadLeaderboard() {
    try {
        const stored = localStorage.getItem('ebs_voca_leaderboard');
        if (stored) {
            const defaultNicknames = ["수능만점자", "영어1등급", "열공선배"];
            const board = JSON.parse(stored).filter(item => !defaultNicknames.includes(item.nickname));
            const mine = board.find(item => item.deviceId === currentUser.deviceId)
                || board.find(item => item.nickname === currentUser.nickname);
            const migrated = board.filter(item => item.deviceId && item.deviceId !== currentUser.deviceId);
            if (mine) {
                migrated.push({
                    deviceId: currentUser.deviceId,
                    nickname: currentUser.nickname,
                    score: Math.max(Number(mine.score) || 0, currentUser.totalScore || 0),
                    count: Math.max(Number(mine.count) || 0, currentUser.completedQuizzes || 0)
                });
            }
            migrated.sort((a, b) => b.score - a.score);
            localStorage.setItem('ebs_voca_leaderboard', JSON.stringify(migrated));
            return migrated;
        }
    } catch (e) {}
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
        localStorage.setItem('ebs_voca_leaderboard', JSON.stringify(board));
    } catch (e) {}
}

function buildCombinedLeaderboard(quizBoard, matchBoard) {
    const users = new Map();
    quizBoard.forEach(item => users.set(item.id, { ...item, score: Number(item.score) || 0 }));
    matchBoard.forEach(item => {
        const user = users.get(item.id) || { id: item.id, nickname: item.nickname || '학습자', score: 0, count: 0 };
        user.score += Number(item.bestScore) || 0;
        users.set(item.id, user);
    });
    return [...users.values()].sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

function updateCombinedRankingStatus() {
    const status = document.getElementById('quizRankingStatus');
    if (status) status.innerText = combinedRankingError ? '공용 랭킹 연결 실패'
        : quizRankingReady && matchRankingReady ? '전체 사용자 실시간 합산 랭킹' : '전체 사용자 연결 중...';
    renderLeaderboard();
}

function renderLeaderboard() {
    const board = buildCombinedLeaderboard(onlineQuizBoard, onlineMatchBoard).slice(0, 50);
    const tbody = document.getElementById('leaderboardBody');
    
    document.getElementById('rankingMyNickname').innerText = `내 닉네임: ${currentUser.nickname}`;
    document.getElementById('rankingMyScore').innerText = `${(Number(currentUser.totalScore) || 0) + matchCumulativeScore}점`;

    if (!quizRankingReady || !matchRankingReady || combinedRankingError) {
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
    try {
        matchCumulativeScore = Number(localStorage.getItem('ebs_voca_match_total')) || 0;
        const storedLastScore = localStorage.getItem('ebs_voca_match_last');
        matchLastScore = storedLastScore === null ? null : Number(storedLastScore);
        matchPlayCount = Number(localStorage.getItem('ebs_voca_match_plays')) || 0;
    } catch (e) {
        matchCumulativeScore = 0;
        matchLastScore = null;
        matchPlayCount = 0;
    }
}

function saveMatchScore() {
    try {
        localStorage.setItem('ebs_voca_match_total', String(matchCumulativeScore));
        localStorage.setItem('ebs_voca_match_last', String(matchLastScore));
        localStorage.setItem('ebs_voca_match_plays', String(matchPlayCount));
    } catch (e) {
        console.error("Match score save error:", e);
    }
}

function showMatchPrepScreen() {
    matchSession++;
    matchResolving = false;
    selectedMatchCards = [];
    if (matchTimer) {
        clearInterval(matchTimer);
        matchTimer = null;
    }
    document.getElementById('matchPrepContainer').classList.remove('hidden');
    document.getElementById('matchActiveContainer').classList.add('hidden');
    document.getElementById('matchCumulativeScore').innerText = `${matchCumulativeScore}점`;
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
    if (matchTimer) {
        clearInterval(matchTimer);
        matchTimer = null;
    }
    matchLastScore = matchScore;
    matchCumulativeScore += matchScore;
    matchPlayCount++;
    saveMatchScore();
    saveMatchRanking();
    alert(message);
    showMatchPrepScreen();
}

let rankingSignInPromise = null;

function getPersistentRankingUser() {
    if (rankingSignInPromise) return rankingSignInPromise;
    rankingSignInPromise = (async () => {
        const auth = firebase.auth();
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        // Wait for Firebase to restore the saved browser session before creating an ID.
        const restoredUser = await new Promise((resolve, reject) => {
            let unsubscribe;
            const finish = (callback, value) => {
                Promise.resolve().then(() => {
                    if (unsubscribe) unsubscribe();
                    callback(value);
                });
            };
            unsubscribe = auth.onAuthStateChanged(
                user => finish(resolve, user),
                error => finish(reject, error)
            );
        });
        if (restoredUser) return restoredUser;
        if (auth.currentUser) return auth.currentUser;
        return (await auth.signInAnonymously()).user;
    })().catch(error => {
        rankingSignInPromise = null;
        throw error;
    });
    return rankingSignInPromise;
}

async function initFirebaseRanking() {
    const status = document.getElementById('matchRankingStatus');
    try {
        if (!window.firebase) throw new Error('Firebase SDK load failed');
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        rankingDb = firebase.firestore();
        rankingUser = await getPersistentRankingUser();
        status.innerText = '전체 사용자 실시간';
        subscribeMatchRanking();
        subscribeQuizRanking();
        saveQuizRanking();
        saveMatchRanking();
    } catch (error) {
        combinedRankingError = true;
        updateCombinedRankingStatus();
        console.error('Firebase ranking initialization error:', error);
        status.innerText = '연결 재시도 필요';
        const quizStatus = document.getElementById('quizRankingStatus');
        if (quizStatus) quizStatus.innerText = '공용 랭킹 연결 실패';
        renderMatchRankingEmptyState('공용 랭킹에 연결하지 못했습니다. 잠시 후 새로고침해 주세요.');
    }
}

function subscribeQuizRanking() {
    if (!rankingDb) return;
    if (stopQuizRankingListener) stopQuizRankingListener();
    stopQuizRankingListener = rankingDb.collection('quizRankings')
        .onSnapshot(snapshot => {
            quizRankingReady = true;
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

async function saveQuizRanking() {
    if (!rankingDb || !rankingUser) return;
    const nickname = (currentUser.nickname || '학습자').trim().slice(0, 12);
    try {
        await rankingDb.collection('quizRankings').doc(rankingUser.uid).set({
            nickname,
            totalScore: Math.max(0, Math.trunc(currentUser.totalScore || 0)),
            completedQuizzes: Math.max(0, Math.trunc(currentUser.completedQuizzes || 0)),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error('Quiz ranking save error:', error);
        const status = document.getElementById('quizRankingStatus');
        if (status) status.innerText = '공용 랭킹 저장 실패';
    }
}

function subscribeMatchRanking() {
    if (!rankingDb) return;
    if (stopRankingListener) stopRankingListener();
    stopRankingListener = rankingDb.collection('matchingRankings')
        .onSnapshot(snapshot => {
            matchRankingReady = true;
            onlineMatchBoard = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            renderMatchRanking([...onlineMatchBoard].sort((a, b) => (Number(b.bestScore) || 0) - (Number(a.bestScore) || 0)).slice(0, 20));
            updateCombinedRankingStatus();
        }, error => {
            combinedRankingError = true;
            updateCombinedRankingStatus();
            console.error('Ranking read error:', error);
            renderMatchRankingEmptyState('랭킹을 불러오지 못했습니다.');
        });
}

async function saveMatchRanking() {
    if (!rankingDb || !rankingUser || matchPlayCount < 1) return;
    const nickname = (currentUser.nickname || '학습자').trim().slice(0, 12);
    try {
        await rankingDb.collection('matchingRankings').doc(rankingUser.uid).set({
            nickname,
            bestScore: Math.max(0, Math.trunc(matchCumulativeScore)),
            plays: Math.max(0, Math.trunc(matchPlayCount)),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error('Ranking save error:', error);
        const status = document.getElementById('matchRankingStatus');
        if (status) status.innerText = '점수 저장 실패';
    }
}

function renderMatchRanking(board) {
    const tbody = document.getElementById('matchRankingBody');
    if (!tbody) return;
    if (!board.length) return renderMatchRankingEmptyState('첫 번째 기록의 주인공이 되어보세요!');
    tbody.innerHTML = board.map((item, index) => {
        const rank = index < 3 ? ['🥇', '🥈', '🥉'][index] : index + 1;
        const isMe = rankingUser && item.id === rankingUser.uid;
        return `<tr class="border-t border-slate-100 dark:border-slate-700 ${isMe ? 'bg-emerald-50 dark:bg-emerald-900/20 font-bold' : ''}">
            <td class="p-2 text-center">${rank}</td><td class="p-2">${escapeHtml(item.nickname || '학습자')}${isMe ? ' <span class="text-[9px] text-emerald-600">나</span>' : ''}</td>
            <td class="p-2 text-center text-slate-500">${Number(item.plays) || 0}회</td><td class="p-2 text-right font-black text-emerald-500">${Number(item.bestScore) || 0}점</td></tr>`;
    }).join('');
}

function renderMatchRankingEmptyState(message = '등록된 짝맞추기 랭킹이 없습니다.') {
    const tbody = document.getElementById('matchRankingBody');
    if (tbody) tbody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-slate-400">${escapeHtml(message)}</td></tr>`;
}

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
    matchTimeRemaining = 300;
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
    if (!card || btnEl.disabled || matchResolving) return;

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
                if (matchNextWordIndex < matchWordQueue.length) {
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
                } else {
                    matchResolving = false;
                    finishMatchGame(`🎉 전체 ${matchCompletedPairs}쌍을 모두 맞혔습니다! 최종 점수: ${matchScore}점`);
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
    const search = document.getElementById('listSearchInput').value.toLowerCase().trim();
    const filter = listStatusFilter;
    const tbody = document.getElementById('vocabTableBody');

    let filtered = getEffectiveWords().filter(item => {
        const matchesSearch = item.word.toLowerCase().includes(search) || item.meaning.includes(search);
        if (!matchesSearch) return false;

        if (filter === 'starred') return item.starred;
        if (filter === 'mastered') return item.mastered;
        if (filter === 'review') return !item.mastered;
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="p-8 text-center text-slate-400">조건에 맞는 단어가 없습니다.</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(item => `
        <tr class="${item.mastered ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''} hover:bg-slate-50 dark:hover:bg-slate-700/30 transition">
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
            <td class="p-3 font-bold text-slate-900 dark:text-white">${escapeHtml(item.word)}</td>
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
        saveWordsToStorage();
        renderVocabList();
    }
}

function openAddWordModal() {
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

window.onload = function() {
    words = loadWordsFromStorage();
    loadUserScore();
    loadMatchScore();
    selectWordFolder('all');
    initFirebaseRanking();
};
