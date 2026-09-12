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

const funWordExamples = {
  "disproportionately": {
    "en": "The tiny cat took up a disproportionately large part of the sofa.",
    "ko": "작은 고양이가 소파의 불균형적으로 큰 부분을 차지했다."
  },
  "subsidy": {
    "en": "The school gave our garden a subsidy, but the rabbits ate the results.",
    "ko": "학교가 우리 정원에 보조금을 줬지만, 토끼들이 그 성과를 먹어 버렸다."
  },
  "bear the brunt of": {
    "en": "My umbrella had to bear the brunt of the storm while my hat flew away.",
    "ko": "모자가 날아가는 동안 내 우산이 폭풍의 가장 큰 타격을 감당해야 했다."
  },
  "infinite": {
    "en": "My dog seems to have an infinite appetite for snacks.",
    "ko": "우리 개의 간식 식욕은 무한한 것 같다."
  },
  "distinguish": {
    "en": "I can distinguish the twins only when one steals my fries.",
    "ko": "나는 쌍둥이 중 한 명이 내 감자튀김을 훔칠 때만 둘을 구분할 수 있다."
  },
  "warrant": {
    "en": "The maker would not warrant that the robot could dance without falling.",
    "ko": "제작자는 로봇이 넘어지지 않고 춤출 수 있다고 보장하려 하지 않았다."
  },
  "empathy": {
    "en": "I felt empathy for the robot when it failed its math test.",
    "ko": "로봇이 수학 시험에 떨어지자 나는 공감을 느꼈다."
  },
  "enlightenment": {
    "en": "Enlightenment came when I realized the missing glasses were on my head.",
    "ko": "없어진 안경이 머리 위에 있다는 걸 알고 깨우침을 얻었다."
  },
  "obstacle": {
    "en": "A sleeping cat was the biggest obstacle to making my bed.",
    "ko": "잠자는 고양이가 침대 정리의 가장 큰 장애물이었다."
  },
  "perception": {
    "en": "The tiny crown changed my perception of the hamster.",
    "ko": "작은 왕관이 그 햄스터에 대한 내 인식을 바꿨다."
  },
  "longevity": {
    "en": "The turtle's longevity gave it time to outlive three sofas.",
    "ko": "거북이는 장수한 덕분에 소파 세 개보다 오래 살았다."
  },
  "acquire": {
    "en": "I hoped to acquire cooking skills, but I only learned to order pizza.",
    "ko": "요리 기술을 습득하고 싶었지만 피자 주문하는 법만 배웠다."
  },
  "inject": {
    "en": "The cartoon doctor tried to inject a balloon, with predictable results.",
    "ko": "만화 속 의사가 풍선에 주사액을 주입하려 했고, 결과는 뻔했다."
  },
  "wipe out": {
    "en": "One hungry teenager can wipe out a week's supply of cookies.",
    "ko": "배고픈 십 대 한 명이면 일주일 치 쿠키를 싹 없앨 수 있다."
  },
  "appreciate": {
    "en": "I began to appreciate silence after sharing a room with a parrot.",
    "ko": "앵무새와 방을 함께 쓰고 나서야 조용함의 가치를 이해하게 됐다."
  },
  "infection": {
    "en": "In the cartoon, a computer caught an infection and started sneezing emojis.",
    "ko": "만화에서 컴퓨터가 감염되어 이모지를 재채기하기 시작했다."
  },
  "significance": {
    "en": "Only the dog understood the significance of the fridge opening.",
    "ko": "냉장고 문이 열리는 일의 중요성은 개만 알고 있었다."
  },
  "antibiotic": {
    "en": "The cartoon antibiotic wore a cape and chased the villainous bacteria.",
    "ko": "만화 속 항생제는 망토를 두르고 악당 세균을 쫓았다."
  },
  "journalism": {
    "en": "Her career in journalism began with a report on the stolen lunch.",
    "ko": "그녀의 언론 보도 경력은 사라진 점심에 관한 기사로 시작됐다."
  },
  "spine": {
    "en": "The skeleton hurt its spine while trying to do the worm dance.",
    "ko": "해골은 꿈틀거리는 춤을 추려다가 척추를 다쳤다."
  },
  "resist": {
    "en": "I can resist almost anything except warm cookies.",
    "ko": "나는 따뜻한 쿠키만 빼면 거의 모든 유혹에 저항할 수 있다."
  },
  "revive": {
    "en": "In the fairy tale, a kiss could revive a prince, but coffee worked faster.",
    "ko": "동화에서는 입맞춤이 왕자를 소생시킬 수 있었지만 커피가 더 빨랐다."
  },
  "ground": {
    "en": "There were no grounds for blaming the cat, except the fish in its mouth.",
    "ko": "입에 문 생선 말고는 고양이를 탓할 근거가 없었다."
  },
  "markedly": {
    "en": "My dancing improved markedly when everyone closed their eyes.",
    "ko": "모두가 눈을 감자 내 춤 실력이 현저하게 좋아졌다."
  },
  "perspective": {
    "en": "From a snail's perspective, a short walk is an epic journey.",
    "ko": "달팽이의 관점에서는 짧은 산책도 대장정이다."
  },
  "chronic": {
    "en": "The wizard had a chronic habit of losing his wand.",
    "ko": "마법사에게는 지팡이를 잃어버리는 만성적인 습관이 있었다."
  },
  "furnish": {
    "en": "The hotel could furnish everything except an excuse for my snoring.",
    "ko": "호텔은 내 코골이에 대한 변명만 빼고 모든 것을 제공할 수 있었다."
  },
  "neurological": {
    "en": "The neurological diagram looked like a subway map drawn by a squirrel.",
    "ko": "그 신경계 도표는 다람쥐가 그린 지하철 노선도처럼 보였다."
  },
  "alternative": {
    "en": "When the elevator broke, the superhero suggested flying as an alternative.",
    "ko": "엘리베이터가 고장 나자 슈퍼히어로는 날아가기를 대안으로 제안했다."
  },
  "symptom": {
    "en": "The robot's first symptom was an uncontrollable urge to sing.",
    "ko": "로봇의 첫 증상은 노래하고 싶은 충동을 억제하지 못하는 것이었다."
  },
  "behaviourism": {
    "en": "My cat taught me behaviourism: every meow made me open a snack bag.",
    "ko": "고양이가 내게 행동주의를 가르쳤다. 울 때마다 내가 간식 봉지를 열었기 때문이다."
  },
  "reset the clock": {
    "en": "I wanted to reset the clock to before I sent that embarrassing message.",
    "ko": "나는 그 창피한 메시지를 보내기 전으로 시간을 되돌리고 싶었다."
  },
  "plausibility": {
    "en": "The excuse lost plausibility when he claimed a penguin ate his homework.",
    "ko": "펭귄이 숙제를 먹었다고 하자 그의 변명은 그럴듯함을 잃었다."
  },
  "acute": {
    "en": "The cartoon dragon developed an acute stomachache after eating a castle.",
    "ko": "만화 속 용은 성을 먹고 급성 복통이 생겼다."
  },
  "pellet": {
    "en": "The hamster guarded one food pellet as if it were a diamond.",
    "ko": "햄스터는 먹이 알갱이 하나를 다이아몬드처럼 지켰다."
  },
  "decompress": {
    "en": "After the exam, I needed to decompress by watching silly cat videos.",
    "ko": "시험 후 나는 우스운 고양이 영상을 보며 긴장을 풀어야 했다."
  },
  "cardiovascular": {
    "en": "The cardiovascular diagram made the heart look like a very busy traffic officer.",
    "ko": "심혈관 도표 속 심장은 아주 바쁜 교통경찰처럼 보였다."
  },
  "evade": {
    "en": "The cat tried to evade bath time by hiding in a shoe box.",
    "ko": "고양이는 신발 상자에 숨어 목욕 시간을 피하려 했다."
  },
  "economist": {
    "en": "The economist explained inflation using the rising price of his favorite doughnut.",
    "ko": "경제학자는 좋아하는 도넛의 가격 상승으로 인플레이션을 설명했다."
  },
  "burden": {
    "en": "Carrying all the picnic food was a burden until the dog ate half.",
    "ko": "소풍 음식을 전부 나르는 건 부담이었지만 개가 절반을 먹어 버렸다."
  },
  "vice versa": {
    "en": "I train my dog, and vice versa: he has taught me to share snacks.",
    "ko": "나는 개를 훈련하고 그 반대도 마찬가지다. 개는 내게 간식을 나누는 법을 가르쳤다."
  },
  "legally": {
    "en": "The parrot could not legally sign the contract, despite saying yes.",
    "ko": "앵무새는 좋다고 말했지만 법적으로 계약서에 서명할 수 없었다."
  },
  "price-sensitive": {
    "en": "My price-sensitive brother walked three blocks to save ten cents on gum.",
    "ko": "가격에 민감한 오빠는 껌값 10센트를 아끼려고 세 블록을 걸었다."
  },
  "shrink": {
    "en": "My sweater began to shrink until even the teddy bear complained.",
    "ko": "스웨터가 줄어들기 시작하더니 곰 인형마저 불평할 정도가 됐다."
  },
  "nostril": {
    "en": "The dragon had a tiny marshmallow stuck in one nostril.",
    "ko": "용은 한쪽 콧구멍에 작은 마시멜로가 끼어 있었다."
  },
  "detect": {
    "en": "My dog can detect a cheese wrapper from three rooms away.",
    "ko": "우리 개는 방 세 개 너머에서도 치즈 포장지 소리를 감지할 수 있다."
  },
  "microbe": {
    "en": "In my comic, a microbe demanded a bigger apartment under the microscope.",
    "ko": "내 만화 속 미생물은 현미경 아래에서 더 큰 아파트를 요구했다."
  },
  "a swarm of": {
    "en": "A swarm of fans followed the famous hamster to its wheel.",
    "ko": "팬 무리가 유명한 햄스터를 따라 쳇바퀴까지 갔다."
  },
  "neutralize": {
    "en": "The superhero used a giant eraser to neutralize the villain's evil drawing.",
    "ko": "슈퍼히어로는 거대한 지우개로 악당의 사악한 그림을 무력화했다."
  },
  "breakthrough": {
    "en": "Inventing silent chip bags was the scientist's greatest breakthrough.",
    "ko": "소리 안 나는 과자 봉지를 발명한 것이 그 과학자의 가장 획기적인 성과였다."
  },
  "respiratory": {
    "en": "The dragon's respiratory system was the topic of a very smoky lecture.",
    "ko": "용의 호흡계는 연기가 자욱한 강의의 주제였다."
  },
  "antiviral": {
    "en": "The cartoon antiviral medicine arrived wearing a tiny superhero mask.",
    "ko": "만화 속 항바이러스 약이 작은 슈퍼히어로 가면을 쓰고 등장했다."
  },
  "trainee": {
    "en": "The trainee magician accidentally turned his boss into a teapot.",
    "ko": "견습 마술사는 실수로 상사를 찻주전자로 바꿨다."
  },
  "attraction": {
    "en": "The main attraction at the party was a dog wearing a bow tie.",
    "ko": "파티에서 가장 매력적인 볼거리는 나비넥타이를 맨 개였다."
  },
  "characteristic": {
    "en": "A key characteristic of my cat is its complete disregard for my plans.",
    "ko": "우리 고양이의 주요 특성은 내 계획을 완전히 무시한다는 것이다."
  },
  "assign": {
    "en": "The teacher decided to assign the loudest student the role of a silent tree.",
    "ko": "선생님은 가장 시끄러운 학생에게 말 없는 나무 역할을 배정했다."
  },
  "surname": {
    "en": "The alien chose the surname Pizza because everyone smiled when they heard it.",
    "ko": "외계인은 사람들이 듣기만 해도 웃어서 성을 피자로 정했다."
  },
  "likelihood": {
    "en": "The likelihood of finding leftovers dropped sharply when my brother arrived.",
    "ko": "오빠가 도착하자 남은 음식을 발견할 가능성이 급격히 줄었다."
  },
  "engage in": {
    "en": "The ducks engage in serious debates about who owns the pond.",
    "ko": "오리들은 연못의 주인이 누구인지 진지한 토론을 한다."
  },
  "annoy": {
    "en": "The robot learned to annoy me by saying low battery every ten seconds.",
    "ko": "로봇은 10초마다 배터리 부족을 외쳐 나를 짜증 나게 하는 법을 배웠다."
  },
  "laboratory": {
    "en": "The laboratory had one rule: do not feed the invisible hamster.",
    "ko": "실험실에는 규칙이 하나 있었다. 투명 햄스터에게 먹이를 주지 말 것."
  },
  "proximity": {
    "en": "My proximity to the snack table made me a very popular guest.",
    "ko": "간식 탁자와 가까이 있어서 나는 손님들에게 아주 인기가 많았다."
  },
  "artificial": {
    "en": "The artificial plant died in the movie, which worried the gardener.",
    "ko": "영화에서 인공 식물이 죽자 정원사는 걱정했다."
  },
  "behave": {
    "en": "Please behave like a guest, not a raccoon at a buffet.",
    "ko": "뷔페에 온 너구리처럼 굴지 말고 손님답게 행동해 줘."
  },
  "sweaty": {
    "en": "I was so sweaty after dancing that my glasses tried to slide away.",
    "ko": "춤을 추고 땀이 너무 나서 안경이 미끄러져 도망가려 했다."
  },
  "habitat": {
    "en": "The sofa has become my brother's natural habitat.",
    "ko": "소파는 남동생의 자연 서식지가 됐다."
  },
  "flushed": {
    "en": "My face was flushed after I waved at someone who was waving at a bus.",
    "ko": "버스에 손을 흔드는 사람에게 손을 흔들고 나서 내 얼굴이 달아올랐다."
  },
  "dusk": {
    "en": "At dusk, the vampire checked whether the pizza shop was still open.",
    "ko": "해 질 녘에 뱀파이어는 피자 가게가 아직 열려 있는지 확인했다."
  },
  "sympathetic nervous system": {
    "en": "My sympathetic nervous system sprang into action when the teacher said surprise quiz.",
    "ko": "선생님이 깜짝 시험이라고 말하자 내 교감신경계가 즉시 반응했다."
  },
  "prey": {
    "en": "In the cartoon, the lion's prey escaped on a skateboard.",
    "ko": "만화에서 사자의 먹잇감이 스케이트보드를 타고 도망쳤다."
  },
  "distress": {
    "en": "The missing TV remote caused great distress in the royal palace.",
    "ko": "사라진 TV 리모컨이 왕궁에 큰 고통을 안겼다."
  },
  "distribution": {
    "en": "The distribution of pizza slices was suspicious: the chef had six.",
    "ko": "피자 조각의 분포가 수상했다. 요리사가 여섯 조각을 갖고 있었다."
  },
  "induce": {
    "en": "The boring lecture could induce sleep even in a robot.",
    "ko": "지루한 강의는 로봇에게조차 졸음을 유발할 수 있었다."
  },
  "predator": {
    "en": "The tiny predator stalked a sock much larger than itself.",
    "ko": "작은 포식자가 자기보다 훨씬 큰 양말을 살금살금 노렸다."
  },
  "physiological": {
    "en": "My physiological response to the alarm was to hide under the blanket.",
    "ko": "알람에 대한 내 생리적 반응은 이불 아래로 숨는 것이었다."
  },
  "disturbance": {
    "en": "A tap-dancing pigeon caused a disturbance during the outdoor wedding.",
    "ko": "탭댄스를 추는 비둘기가 야외 결혼식을 방해했다."
  },
  "oxytocin": {
    "en": "The professor named her cuddly toy molecule Oxytocin.",
    "ko": "교수님은 포근한 분자 인형의 이름을 옥시토신이라고 지었다."
  },
  "identify": {
    "en": "We could identify the cookie thief by the crumbs on his crown.",
    "ko": "왕관에 붙은 부스러기로 쿠키 도둑을 알아낼 수 있었다."
  },
  "meditation": {
    "en": "My meditation ended when the cat sat on my head.",
    "ko": "고양이가 머리 위에 앉자 내 명상이 끝났다."
  },
  "crucial": {
    "en": "Remembering your pants is crucial when leaving for school.",
    "ko": "학교에 갈 때 바지를 챙기는 것은 매우 중요하다."
  },
  "channel": {
    "en": "I tried to channel my anger into exercise, but I baked a cake instead.",
    "ko": "화를 운동 쪽으로 돌리려 했지만 대신 케이크를 구웠다."
  },
  "roost": {
    "en": "The chicken chose the royal throne as its roost.",
    "ko": "닭은 왕의 왕좌를 자기 홰로 골랐다."
  },
  "euphoria": {
    "en": "Finding an extra fry at the bottom of the bag filled me with euphoria.",
    "ko": "봉지 바닥에서 감자튀김 하나를 더 발견하자 행복감이 밀려왔다."
  },
  "forage": {
    "en": "At midnight, my brother would forage in the fridge like a hungry bear.",
    "ko": "자정이면 오빠는 배고픈 곰처럼 냉장고에서 먹이를 찾아다녔다."
  },
  "intuitive": {
    "en": "The app was so intuitive that even my cat ordered a fish.",
    "ko": "앱이 너무 직관적이라 고양이마저 생선 한 마리를 주문했다."
  },
  "immune": {
    "en": "In the comic, the immune cells held a meeting about the invading germs.",
    "ko": "만화 속 면역 세포들이 침입한 세균에 관한 회의를 열었다."
  },
  "document": {
    "en": "We used photos to document the cat's theft of an entire sandwich.",
    "ko": "우리는 사진으로 고양이가 샌드위치 하나를 통째로 훔친 일을 입증했다."
  },
  "investor": {
    "en": "The investor wanted to know if my lemonade stand accepted penguin customers.",
    "ko": "투자자는 내 레모네이드 가판대가 펭귄 손님도 받는지 궁금해했다."
  },
  "diabetic": {
    "en": "The diabetic in our book club always solved the mystery before page ten.",
    "ko": "우리 독서 모임의 당뇨병 환자는 늘 10쪽 전에 추리의 답을 알아냈다."
  },
  "associated": {
    "en": "The sound of my alarm is associated with heroic battles against sleep.",
    "ko": "내 알람 소리는 잠과의 영웅적인 전투와 관련되어 있다."
  },
  "microbiome": {
    "en": "In my drawing, the microbiome looked like a crowded city with tiny buses.",
    "ko": "내 그림에서 마이크로바이옴은 작은 버스가 다니는 붐비는 도시처럼 보였다."
  },
  "effectively": {
    "en": "After the cat took my chair, I was effectively working for it.",
    "ko": "고양이가 내 의자를 차지한 뒤 나는 사실상 고양이를 위해 일하고 있었다."
  },
  "trivial-sounding": {
    "en": "The trivial-sounding question about socks started a three-hour debate.",
    "ko": "양말에 관한 사소해 보이는 질문이 세 시간짜리 토론을 시작했다."
  },
  "dentistry": {
    "en": "The dragon feared dentistry because it had three hundred teeth.",
    "ko": "용은 이가 300개나 있어서 치과 진료를 두려워했다."
  },
  "prescribe": {
    "en": "The doctor refused to prescribe ice cream for my boring homework.",
    "ko": "의사는 지루한 숙제를 해결할 약으로 아이스크림을 처방해 주기를 거절했다."
  },
  "component": {
    "en": "The missing component of my robot was apparently a sense of humor.",
    "ko": "내 로봇에서 빠진 요소는 아무래도 유머 감각이었다."
  },
  "gut": {
    "en": "In the cartoon, the gut sent the brain a strongly worded complaint.",
    "ko": "만화에서 장이 뇌에게 강한 어조의 항의문을 보냈다."
  },
  "microbial": {
    "en": "The microbial city in our science cartoon had a microscopic traffic jam.",
    "ko": "과학 만화 속 미생물 도시에 미세한 교통 체증이 생겼다."
  },
  "nutrient": {
    "en": "The alien asked whether glitter counted as a nutrient.",
    "ko": "외계인은 반짝이 가루도 영양소에 해당하는지 물었다."
  },
  "spectrum": {
    "en": "The parrot's complaints covered a wide spectrum of household problems.",
    "ko": "앵무새의 불평은 광범위한 집안 문제를 다뤘다."
  },
  "gut flora": {
    "en": "The diagram showed gut flora as tiny gardeners tending an imaginary garden.",
    "ko": "도표는 장내 미생물군을 상상 속 정원을 가꾸는 작은 정원사들로 표현했다."
  },
  "digest": {
    "en": "The cartoon goat could digest anything except the terrible ending of the movie.",
    "ko": "만화 속 염소는 무엇이든 소화했지만 영화의 형편없는 결말만은 받아들이지 못했다."
  },
  "in silos": {
    "en": "The chefs worked in silos, so dinner consisted of five different soups.",
    "ko": "요리사들이 따로따로 일해서 저녁은 서로 다른 수프 다섯 가지가 됐다."
  },
  "absorb": {
    "en": "My sponge can absorb water, but apparently not my cooking mistakes.",
    "ko": "내 스펀지는 물은 흡수하지만 요리 실수까지 흡수하지는 못하는 모양이다."
  },
  "knock-on": {
    "en": "The cat's jump had a knock-on effect: one cup fell, then three plates.",
    "ko": "고양이의 점프가 연쇄적인 영향을 일으켜 컵 하나, 그다음 접시 세 개가 떨어졌다."
  },
  "get in the way": {
    "en": "My enormous wizard hat tends to get in the way on the bus.",
    "ko": "내 거대한 마법사 모자는 버스에서 걸리적거리곤 한다."
  },
  "perceive": {
    "en": "The hamster seemed to perceive the vacuum cleaner as a terrible dragon.",
    "ko": "햄스터는 진공청소기를 무서운 용으로 인식하는 듯했다."
  },
  "invade": {
    "en": "The ducks decided to invade our picnic just as we opened the bread.",
    "ko": "우리가 빵을 열자마자 오리들이 소풍 자리에 침입하기로 했다."
  },
  "correspond to": {
    "en": "The footprints correspond to my slippers, but I still blame the ghost.",
    "ko": "발자국은 내 슬리퍼와 일치하지만 나는 여전히 유령을 탓한다."
  },
  "cognitively": {
    "en": "The puzzle was cognitively demanding, especially for a robot built to toast bread.",
    "ko": "그 퍼즐은 특히 빵 굽는 로봇에게 인지적으로 까다로웠다."
  },
  "proportion": {
    "en": "The artist tried to proportion the statue correctly, but its nose filled the room.",
    "ko": "예술가는 조각상의 비율을 맞추려 했지만 코가 방을 가득 채웠다."
  },
  "deficient": {
    "en": "My secret hiding place was deficient in one thing: secrecy.",
    "ko": "내 비밀 은신처에는 한 가지가 부족했다. 바로 비밀스러움이었다."
  },
  "stereotype": {
    "en": "The shy dragon hated the stereotype that all dragons enjoy burning castles.",
    "ko": "수줍은 용은 모든 용이 성을 불태우는 걸 좋아한다는 고정관념을 싫어했다."
  },
  "at the mercy of": {
    "en": "Without the remote, we were at the mercy of the cat sitting on it.",
    "ko": "리모컨이 없어서 우리는 그 위에 앉은 고양이에게 휘둘렸다."
  },
  "layperson": {
    "en": "Even a layperson could tell that the robot's head was on backward.",
    "ko": "비전문가라도 로봇 머리가 거꾸로 달렸다는 걸 알 수 있었다."
  },
  "ruminant": {
    "en": "The ruminant in the cartoon chewed thoughtfully through every meeting.",
    "ko": "만화 속 반추동물은 회의 내내 생각에 잠긴 채 되새김질했다."
  },
  "pathogenic": {
    "en": "The pathogenic bacteria played the villains in our school science comic.",
    "ko": "병원성 세균들이 학교 과학 만화에서 악역을 맡았다."
  },
  "ostrich": {
    "en": "The ostrich entered the hat shop and asked for something tall.",
    "ko": "타조가 모자 가게에 들어가서 키가 큰 모자를 부탁했다."
  },
  "bury": {
    "en": "My dog tried to bury its treasure in my laundry basket.",
    "ko": "우리 개는 내 빨래 바구니에 보물을 묻으려 했다."
  },
  "blood sugar": {
    "en": "The cartoon chart showed blood sugar as tiny sugar cubes riding a bus.",
    "ko": "만화 도표는 혈당을 버스를 탄 작은 각설탕들로 표현했다."
  },
  "strategically": {
    "en": "I sat strategically near the cake at the birthday party.",
    "ko": "나는 생일 파티에서 전략적으로 케이크 가까이에 앉았다."
  },
  "consumption": {
    "en": "Our household's cookie consumption doubled when Grandma visited.",
    "ko": "할머니가 오시자 우리 집 쿠키 소비량이 두 배가 됐다."
  },
  "bank balance": {
    "en": "My bank balance looked much less cheerful after I bought the giant teddy bear.",
    "ko": "거대한 곰 인형을 사고 나니 은행 잔액이 훨씬 덜 유쾌해 보였다."
  },
  "polarization": {
    "en": "The pizza debate caused polarization between pineapple lovers and everyone else.",
    "ko": "피자 토론은 파인애플 애호가와 나머지 사람들 사이에 양극화를 일으켰다."
  },
  "discrimination": {
    "en": "The robot protested discrimination when the cafe refused to serve machines.",
    "ko": "카페가 기계를 손님으로 받지 않자 로봇이 차별에 항의했다."
  },
  "bias": {
    "en": "My bias toward cats became obvious when I made one the judge.",
    "ko": "고양이를 심판으로 임명하자 고양이에 대한 내 편향이 분명해졌다."
  },
  "loop": {
    "en": "The robot got stuck in a loop of saying goodbye and waving again.",
    "ko": "로봇은 작별 인사를 하고 다시 손을 흔드는 순환에 갇혔다."
  },
  "recognize": {
    "en": "I did not recognize my teacher in a giant banana costume.",
    "ko": "거대한 바나나 의상을 입은 선생님을 나는 알아보지 못했다."
  },
  "conventional wisdom": {
    "en": "The flying pig challenged conventional wisdom about pigs.",
    "ko": "날아다니는 돼지는 돼지에 관한 일반 통념에 도전했다."
  },
  "emerge": {
    "en": "A new problem began to emerge when the invisible paint spilled.",
    "ko": "투명 페인트가 쏟아지자 새로운 문제가 생기기 시작했다."
  },
  "bigotry": {
    "en": "The story mocks bigotry through a king who dislikes everyone wearing stripes.",
    "ko": "그 이야기는 줄무늬 옷을 입은 사람을 모두 싫어하는 왕을 통해 편협함을 풍자한다."
  },
  "concrete": {
    "en": "I asked for a concrete plan, and my brother drew a detailed map to the cake.",
    "ko": "구체적인 계획을 부탁하자 남동생은 케이크로 가는 상세한 지도를 그렸다."
  },
  "flock together": {
    "en": "The ducks flock together whenever someone whispers bread.",
    "ko": "누군가 빵이라고 속삭이면 오리들이 떼 지어 모인다."
  },
  "analyse": {
    "en": "The detective had to analyse every crumb to solve the cookie mystery.",
    "ko": "탐정은 쿠키 사건을 풀려고 부스러기 하나하나를 분석해야 했다."
  },
  "digital footprint": {
    "en": "My digital footprint suggests that I am mostly interested in dancing potatoes.",
    "ko": "내 디지털 발자국을 보면 내 주요 관심사는 춤추는 감자인 것 같다."
  },
  "essentially": {
    "en": "My cat is essentially a tiny landlord who charges rent in fish.",
    "ko": "우리 고양이는 본질적으로 생선으로 월세를 받는 작은 집주인이다."
  },
  "a sense of belonging": {
    "en": "Wearing matching socks gave our odd little club a sense of belonging.",
    "ko": "같은 양말을 신자 우리 별난 작은 모임에 소속감이 생겼다."
  },
  "consequence": {
    "en": "The consequence of teaching my parrot sarcasm was immediate regret.",
    "ko": "앵무새에게 빈정거림을 가르친 결과는 즉각적인 후회였다."
  },
  "in-group biases": {
    "en": "Our in-group biases showed when we gave our own terrible cake first prize.",
    "ko": "우리의 형편없는 케이크에 1등을 주자 내집단 편향이 드러났다."
  },
  "reinforce": {
    "en": "The knight used extra pillows to reinforce his blanket fort.",
    "ko": "기사는 이불 요새를 강화하려고 베개를 더 사용했다."
  },
  "exclusive": {
    "en": "The cat formed an exclusive club that admitted only itself.",
    "ko": "고양이는 자기만 가입할 수 있는 배타적인 모임을 만들었다."
  },
  "marginalize": {
    "en": "The tall hats began to marginalize the tiny caps in the cartoon council.",
    "ko": "만화 속 의회에서 높은 모자들이 작은 모자들을 주변으로 밀어내기 시작했다."
  },
  "*clique": {
    "en": "The chess club had a clique that discussed only sandwiches.",
    "ko": "체스 동아리에는 샌드위치 이야기만 하는 파벌이 있었다."
  },
  "specification": {
    "en": "The robot met every specification except not dancing during meetings.",
    "ko": "그 로봇은 회의 중 춤추지 말라는 것 빼고 모든 사양을 충족했다."
  },
  "account for": {
    "en": "The muddy paw prints account for the strange pattern on my homework.",
    "ko": "진흙 묻은 발자국들이 숙제의 이상한 무늬가 생긴 이유다."
  },
  "embed": {
    "en": "The magician tried to embed a secret message in a pancake.",
    "ko": "마술사는 팬케이크 안에 비밀 메시지를 깊이 새기려 했다."
  },
  "virtually": {
    "en": "The fridge was virtually empty, except for one very confident carrot.",
    "ko": "아주 당당한 당근 하나만 빼면 냉장고는 거의 비어 있었다."
  },
  "conceive": {
    "en": "I could not conceive of a world where my cat paid rent.",
    "ko": "나는 고양이가 월세를 내는 세상을 생각할 수 없었다."
  },
  "*ergonomic": {
    "en": "The ergonomic chair was perfect for studying, so the cat claimed it.",
    "ko": "인체 공학적인 의자는 공부에 딱 좋았고, 그래서 고양이가 차지했다."
  },
  "collaborative": {
    "en": "Our collaborative cooking project produced one meal and twelve arguments.",
    "ko": "우리의 협력적인 요리 프로젝트는 식사 하나와 말다툼 열두 번을 만들어 냈다."
  },
  "democratically": {
    "en": "We democratically chose pizza, although the dog voted for a shoe.",
    "ko": "개는 신발에 투표했지만 우리는 민주적으로 피자를 골랐다."
  },
  "set out on": {
    "en": "We set out on a grand adventure to find the missing remote.",
    "ko": "우리는 사라진 리모컨을 찾는 거대한 모험에 나섰다."
  },
  "property": {
    "en": "The dragon bought property mainly for its excellent cave access.",
    "ko": "용은 주로 동굴에 접근하기 좋다는 이유로 부동산을 샀다."
  },
  "compelling": {
    "en": "The dog made a compelling case for a second dinner by looking adorable.",
    "ko": "개는 사랑스러운 표정으로 두 번째 저녁 식사를 위한 설득력 있는 주장을 펼쳤다."
  },
  "majority support": {
    "en": "The plan to cancel chores won majority support among the children.",
    "ko": "집안일을 취소하자는 계획은 아이들 대다수의 지지를 얻었다."
  },
  "colony": {
    "en": "The ant colony treated one dropped cookie as a national holiday.",
    "ko": "개미 군체는 떨어진 쿠키 하나를 국경일처럼 맞이했다."
  },
  "opinionated": {
    "en": "The opinionated parrot had strong views on every TV show.",
    "ko": "자기주장이 강한 앵무새는 모든 TV 프로그램에 확고한 의견이 있었다."
  },
  "educated": {
    "en": "My educated guess was that the dog with frosting on its nose ate the cake.",
    "ko": "정보에 근거한 내 추측은 코에 크림이 묻은 개가 케이크를 먹었다는 것이었다."
  },
  "relate": {
    "en": "Grandpa can relate a trip to the supermarket as if it were a spy thriller.",
    "ko": "할아버지는 슈퍼에 다녀온 일도 첩보 영화처럼 들려주실 수 있다."
  },
  "adopt": {
    "en": "The school decided to adopt a mascot that was not afraid of children.",
    "ko": "학교는 아이들을 무서워하지 않는 마스코트를 채택하기로 했다."
  },
  "account": {
    "en": "His account of the picnic included three dragons and no sandwiches.",
    "ko": "그의 소풍 이야기에는 용 세 마리가 나왔지만 샌드위치는 없었다."
  },
  "subsequent": {
    "en": "The first pancake hit the ceiling; subsequent attempts stayed in the pan.",
    "ko": "첫 팬케이크는 천장에 부딪혔고 그 후의 시도들은 팬 안에 머물렀다."
  },
  "interpretive dance": {
    "en": "He explained the missing homework through interpretive dance.",
    "ko": "그는 의미를 담은 춤으로 숙제가 사라진 일을 설명했다."
  },
  "asset": {
    "en": "A quiet blender was our greatest asset during midnight smoothie missions.",
    "ko": "조용한 믹서기는 한밤중 스무디 작전에서 우리의 가장 큰 자산이었다."
  },
  "entourage": {
    "en": "The famous duck arrived with an entourage of six ducklings.",
    "ko": "유명한 오리가 새끼 오리 여섯 마리의 수행단을 거느리고 도착했다."
  },
  "accumulation": {
    "en": "The accumulation of socks under my bed suggested a secret sock kingdom.",
    "ko": "침대 아래 쌓인 양말들은 비밀 양말 왕국의 존재를 암시했다."
  },
  "decree": {
    "en": "The queen issued a decree banning broccoli from her imaginary kingdom.",
    "ko": "여왕은 상상 속 왕국에서 브로콜리를 금지하는 명령을 내렸다."
  },
  "budget": {
    "en": "I tried to budget for the month, but the doughnut shop had other plans.",
    "ko": "나는 한 달 예산을 세우려 했지만 도넛 가게는 생각이 달랐다."
  },
  "scout": {
    "en": "The scout returned with news of a dangerous puddle and a friendly frog.",
    "ko": "정찰병은 위험한 물웅덩이와 친절한 개구리 소식을 갖고 돌아왔다."
  },
  "balance": {
    "en": "I tried to balance my checkbook, but the cat kept sitting on the receipts.",
    "ko": "수표장 잔액을 맞추려 했지만 고양이가 계속 영수증 위에 앉았다."
  },
  "checkbook": {
    "en": "The pirate kept a checkbook next to his treasure map.",
    "ko": "해적은 보물 지도 옆에 수표장을 보관했다."
  },
  "assume": {
    "en": "Never assume that a quiet puppy is an innocent puppy.",
    "ko": "조용한 강아지라고 아무 잘못도 없다고 생각하지 마라."
  },
  "characterize": {
    "en": "I would characterize our picnic as a buffet organized for ants.",
    "ko": "나는 우리 소풍을 개미를 위해 마련된 뷔페라고 표현하겠다."
  },
  "neutral": {
    "en": "The referee stayed neutral even when both teams offered him cookies.",
    "ko": "양쪽 팀이 쿠키를 제안해도 심판은 중립을 지켰다."
  },
  "compound interest": {
    "en": "The wizard wished his cookies would grow like money earning compound interest.",
    "ko": "마법사는 쿠키가 복리가 붙는 돈처럼 불어나기를 바랐다."
  },
  "controversial": {
    "en": "Putting ketchup on the royal cake was a controversial decision.",
    "ko": "왕실 케이크에 케첩을 뿌린 것은 논란의 여지가 있는 결정이었다."
  },
  "have to do with": {
    "en": "My sudden interest in gardening may have to do with the strawberry harvest.",
    "ko": "갑자기 정원 가꾸기에 관심이 생긴 건 딸기 수확과 관련이 있을지도 모른다."
  },
  "dimension": {
    "en": "One dimension of the giant sofa exceeded the width of our front door.",
    "ko": "거대한 소파의 한쪽 치수가 우리 집 현관문 너비를 넘었다."
  },
  "implicitly": {
    "en": "By handing me the empty bowl, my cat implicitly requested more food.",
    "ko": "고양이는 빈 그릇을 내게 건네며 암묵적으로 먹이를 더 요구했다."
  },
  "accommodation": {
    "en": "The story shows accommodation when a child revises her bird category after meeting a penguin.",
    "ko": "이 이야기는 아이가 펭귄을 만난 뒤 새의 범주를 수정하는 조절을 보여 준다."
  },
  "existing": {
    "en": "The dragon's tail did not fit through the existing doorway.",
    "ko": "용의 꼬리는 기존 출입구에 들어가지 않았다."
  },
  "in response to": {
    "en": "In response to my alarm, the cat buried its head under my pillow.",
    "ko": "알람에 반응하여 고양이는 베개 아래로 머리를 파묻었다."
  },
  "drape": {
    "en": "The wizard decided to drape a blanket over the dragon to stop its shivering.",
    "ko": "마법사는 떨고 있는 용 위에 이불을 느슨하게 덮어 주기로 했다."
  },
  "modify": {
    "en": "We had to modify the robot after it buttered the table instead of the toast.",
    "ko": "로봇이 토스트 대신 식탁에 버터를 발라서 우리는 로봇을 수정해야 했다."
  },
  "variation": {
    "en": "The only variation in his daily outfit was the color of his superhero cape.",
    "ko": "그의 매일 옷차림에서 유일한 변화는 슈퍼히어로 망토 색깔이었다."
  },
  "fit into": {
    "en": "The giant tried to fit into a phone booth and accidentally wore it.",
    "ko": "거인이 전화 부스 안에 들어가려다가 실수로 부스를 입어 버렸다."
  },
  "assimilation": {
    "en": "Calling a drone a strange bird was the child's attempt at assimilation.",
    "ko": "드론을 이상한 새라고 부른 것은 아이가 시도한 동화였다."
  },
  "schema": {
    "en": "My schema for pets did not include a dragon that needed a parking space.",
    "ko": "반려동물에 관한 내 스키마에는 주차 공간이 필요한 용이 들어 있지 않았다."
  },
  "discard": {
    "en": "The chef had to discard the pancake that looked like a bicycle tire.",
    "ko": "요리사는 자전거 타이어처럼 생긴 팬케이크를 버려야 했다."
  },
  "trauma": {
    "en": "The story treats the knight's trauma gently, even while his horse tells jokes.",
    "ko": "그 이야기는 말이 농담하는 동안에도 기사의 마음의 상처를 조심스럽게 다룬다."
  },
  "deposit": {
    "en": "The cartoon hen chose to deposit an egg in the king's favorite hat.",
    "ko": "만화 속 암탉은 왕이 아끼는 모자 안에 알을 낳기로 했다."
  },
  "faulty": {
    "en": "A faulty robot vacuum kept apologizing to the furniture.",
    "ko": "고장 난 로봇 청소기가 가구들에게 계속 사과했다."
  },
  "offspring": {
    "en": "The dragon's offspring sneezed and accidentally toasted breakfast.",
    "ko": "용의 새끼가 재채기하다 실수로 아침 식사를 구웠다."
  },
  "metaphorical": {
    "en": "When I called homework a mountain, I meant a metaphorical one.",
    "ko": "숙제를 산이라고 했을 때 나는 비유적인 산을 뜻했다."
  },
  "be equipped with": {
    "en": "Every spaceship should be equipped with a cup holder for alien tea.",
    "ko": "모든 우주선에는 외계인 차를 놓을 컵 홀더가 갖춰져 있어야 한다."
  },
  "nervous system": {
    "en": "In the cartoon, the nervous system sent an urgent message: move your foot off the toy brick.",
    "ko": "만화 속 신경계가 긴급 메시지를 보냈다. 장난감 블록에서 발을 떼라고."
  },
  "sense": {
    "en": "My dog can sense bath time before I even pick up a towel.",
    "ko": "우리 개는 내가 수건을 집기도 전에 목욕 시간을 감지할 수 있다."
  },
  "hatchling": {
    "en": "The hatchling followed a rubber duck, convinced it was the boss.",
    "ko": "갓 부화한 새끼는 고무 오리를 대장으로 믿고 따라갔다."
  },
  "stove": {
    "en": "The snowman admired the stove from a very respectful distance.",
    "ko": "눈사람은 충분한 거리를 두고 난로를 감상했다."
  },
  "embryo": {
    "en": "The museum's giant embryo model wore a tiny hat for the exhibition.",
    "ko": "박물관의 거대한 배아 모형은 전시를 위해 작은 모자를 쓰고 있었다."
  },
  "pull away": {
    "en": "I tried to pull away the blanket, but my cat had become an anchor.",
    "ko": "이불을 떼어 내려고 했지만 고양이가 닻이 되어 있었다."
  },
  "permeable": {
    "en": "The permeable bag let water through, ruining the mermaid's shopping trip.",
    "ko": "투과성이 있는 가방에서 물이 새어 인어의 쇼핑을 망쳤다."
  },
  "short-lived": {
    "en": "My victory was short-lived: the cat immediately stole the chair back.",
    "ko": "내 승리는 짧았다. 고양이가 즉시 의자를 다시 빼앗았다."
  },
  "envision": {
    "en": "I envision a future where socks return from the dryer in pairs.",
    "ko": "나는 양말이 건조기에서 짝을 맞춰 돌아오는 미래를 상상한다."
  },
  "indicate": {
    "en": "The crumbs indicate that our cookie thief has excellent taste.",
    "ko": "부스러기들은 우리 쿠키 도둑의 입맛이 훌륭하다는 것을 보여 준다."
  },
  "sensitize": {
    "en": "Weeks of living with a puppy can sensitize you to the sound of chewing.",
    "ko": "강아지와 몇 주를 살면 씹는 소리에 민감해질 수 있다."
  },
  "reaction": {
    "en": "My reaction to the talking fridge was to apologize for the expired yogurt.",
    "ko": "말하는 냉장고에 대한 내 반응은 유통기한이 지난 요구르트에 대해 사과하는 것이었다."
  },
  "stimulation": {
    "en": "The bored robot needed mental stimulation, so we gave it a book of riddles.",
    "ko": "지루해하던 로봇에게 정신적 자극이 필요해서 수수께끼 책을 줬다."
  },
  "deviance": {
    "en": "Wearing pajamas to the royal ball was considered deviance.",
    "ko": "왕실 무도회에 잠옷을 입고 가는 것은 일탈로 여겨졌다."
  },
  "arthritic": {
    "en": "The arthritic wizard used a floating chair to reach the cookie shelf.",
    "ko": "관절염이 있는 마법사는 공중에 뜨는 의자로 쿠키 선반에 다가갔다."
  },
  "repetitive": {
    "en": "The parrot's repetitive jokes made even the robot ask for silence.",
    "ko": "앵무새의 반복적인 농담에 로봇마저 조용히 해 달라고 부탁했다."
  },
  "saint": {
    "en": "You must be a saint to share your last dumpling with me.",
    "ko": "마지막 만두를 나와 나누다니 너는 성자임이 틀림없다."
  },
  "scarce": {
    "en": "Clean socks became scarce during the laundry machine's vacation.",
    "ko": "세탁기가 휴가를 떠난 동안 깨끗한 양말이 부족해졌다."
  },
  "devote": {
    "en": "The king decided to devote an entire afternoon to naming his goldfish.",
    "ko": "왕은 금붕어 이름을 짓는 데 오후 전체를 바치기로 했다."
  },
  "far-reaching": {
    "en": "Teaching the parrot the door code had far-reaching consequences.",
    "ko": "앵무새에게 현관 비밀번호를 가르친 일은 오래도록 영향을 미쳤다."
  },
  "nonreproductive": {
    "en": "The documentary focused on nonreproductive behavior, including a bird stealing a spoon.",
    "ko": "다큐멘터리는 새가 숟가락을 훔치는 행동 등 번식 외의 행동에 초점을 맞췄다."
  },
  "prestige": {
    "en": "Winning the village pancake contest brought the sleepy chef unexpected prestige.",
    "ko": "마을 팬케이크 대회 우승이 졸린 요리사에게 뜻밖의 명성을 안겨 줬다."
  },
  "thrive": {
    "en": "My imaginary cactus can thrive on compliments and terrible music.",
    "ko": "내 상상 속 선인장은 칭찬과 형편없는 음악만으로 잘 살아간다."
  },
  "roughneck": {
    "en": "The roughneck in the story secretly knitted sweaters for kittens.",
    "ko": "이야기 속 망나니는 몰래 아기 고양이용 스웨터를 떴다."
  },
  "have no choice but to do": {
    "en": "With the cat on my keyboard, I have no choice but to do my homework by hand.",
    "ko": "고양이가 키보드 위에 있어서 나는 숙제를 손으로 쓸 수밖에 없다."
  },
  "deviate": {
    "en": "Do not deviate from the recipe unless you want soup that bounces.",
    "ko": "통통 튀는 수프를 원하지 않는다면 요리법에서 벗어나지 마라."
  },
  "do chores": {
    "en": "The wizard taught his broom to do chores, but it demanded weekends off.",
    "ko": "마법사는 빗자루에게 집안일을 가르쳤지만 빗자루는 주말 휴무를 요구했다."
  },
  "delinquent": {
    "en": "The delinquent in the comic was caught replacing every school bell with a duck sound.",
    "ko": "만화 속 비행 청소년은 학교 종소리를 전부 오리 소리로 바꾸다가 잡혔다."
  },
  "ritual": {
    "en": "Checking the fridge twice is my nightly ritual, as if food might magically appear.",
    "ko": "음식이 마법처럼 생길까 봐 냉장고를 두 번 확인하는 건 내 밤 의식이다."
  },
  "for kicks": {
    "en": "The wizard turned his hat into a frog just for kicks.",
    "ko": "마법사는 순전히 재미로 자기 모자를 개구리로 바꿨다."
  },
  "gratuitous": {
    "en": "The movie included a gratuitous explosion every time someone opened a door.",
    "ko": "그 영화에서는 누군가 문을 열 때마다 불필요한 폭발이 나왔다."
  },
  "qualifier": {
    "en": "Adding the qualifier almost did not make almost edible soup sound better.",
    "ko": "거의라는 수식어를 붙여도 거의 먹을 만한 수프가 더 좋아 보이지는 않았다."
  },
  "nest": {
    "en": "The cartoon birds decided to nest in a retired knight's helmet.",
    "ko": "만화 속 새들은 은퇴한 기사의 투구에 둥지를 틀기로 했다."
  },
  "lay eggs": {
    "en": "The imaginary dragon can lay eggs that look exactly like bowling balls.",
    "ko": "상상 속 용은 볼링공과 똑같이 생긴 알을 낳을 수 있다."
  },
  "shell": {
    "en": "The turtle painted a racing stripe on its shell.",
    "ko": "거북이는 자기 등껍질에 경주용 줄무늬를 그렸다."
  },
  "illuminate": {
    "en": "The tiny flashlight could illuminate the cave but not explain the dancing bear.",
    "ko": "작은 손전등은 동굴을 비출 수 있었지만 춤추는 곰을 설명해 주지는 못했다."
  },
  "inferior": {
    "en": "The cat rejected the inferior cardboard box and chose the expensive one.",
    "ko": "고양이는 질이 떨어지는 종이 상자를 거부하고 비싼 것을 골랐다."
  },
  "consistent": {
    "en": "My dog is consistent: it wants breakfast even after breakfast.",
    "ko": "우리 개는 한결같다. 아침을 먹고도 아침을 원한다."
  },
  "evolutionary biologist": {
    "en": "The evolutionary biologist was amused by my theory that socks evolve into dust.",
    "ko": "진화 생물학자는 양말이 먼지로 진화한다는 내 이론을 재미있어했다."
  },
  "maladaptive": {
    "en": "Hiding from homework by doing extra homework was a maladaptive strategy.",
    "ko": "추가 숙제를 하며 원래 숙제를 피하는 건 부적응적인 전략이었다."
  },
  "optimal": {
    "en": "The cat found the optimal spot for a nap: directly on my homework.",
    "ko": "고양이는 낮잠에 최적인 장소를 찾았다. 바로 내 숙제 위였다."
  },
  "uninhibited": {
    "en": "The toddler's uninhibited dancing made the wedding guests cheer.",
    "ko": "어린아이의 거침없는 춤에 결혼식 하객들이 환호했다."
  },
  "predation": {
    "en": "The cartoon explained predation with a lion chasing a very sarcastic zebra.",
    "ko": "그 만화는 빈정거리는 얼룩말을 쫓는 사자로 포식을 설명했다."
  },
  "adjust": {
    "en": "The giant had to adjust his hat before entering the tiny bakery.",
    "ko": "거인은 작은 빵집에 들어가기 전에 모자를 조정해야 했다."
  },
  "incur": {
    "en": "The dragon worried that parking on the roof would incur extra charges.",
    "ko": "용은 지붕에 주차하면 추가 요금이 생길까 걱정했다."
  },
  "elevated": {
    "en": "From its elevated perch, the parrot supervised my terrible cooking.",
    "ko": "높은 횃대에서 앵무새가 내 형편없는 요리를 감독했다."
  },
  "plasticity": {
    "en": "The lecture explained brain plasticity; my doodle showed a brain learning to juggle.",
    "ko": "강의는 뇌의 가소성을 설명했고, 내 낙서에는 저글링을 배우는 뇌가 있었다."
  }
};

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
    const key = word.replace(/\s*[~(].*$/, '').trim();
    return funWordExamples[key] || makeLegacyExample(word, meaning, index);
}

function makeLegacyExample(word, meaning, index) {
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


const customFolderStorageKey = 'ebs_voca_custom_folders_v1';
let customFolders = [];

function loadCustomFolders() {
    try {
        const saved = JSON.parse(localStorage.getItem(customFolderStorageKey) || '[]');
        if (!Array.isArray(saved)) return;
        customFolders = saved.filter(folder =>
            folder && Number.isSafeInteger(folder.id) && folder.id >= 1000 &&
            typeof folder.name === 'string' && folder.name.trim().length > 0 &&
            folder.name.trim().length <= 30
        ).filter((folder, index, list) => list.findIndex(item => item.id === folder.id) === index)
            .map(folder => ({ id: folder.id, name: folder.name.trim() }));
        customFolders.forEach(folder => { studyFolders[folder.id] = folder.name; });
    } catch (error) {
        console.error('Custom folder load error:', error);
    }
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
    try {
        localStorage.setItem(customFolderStorageKey, JSON.stringify([...customFolders, folder]));
    } catch (error) {
        alert('폴더를 저장하지 못했습니다. 브라우저 저장 공간 설정을 확인해 주세요.');
        return;
    }
    closeCustomFolderModal();
    customFolders.push(folder);
    studyFolders[folder.id] = folder.name;
    renderCustomFolderOptions();
    document.getElementById('listFilter').value = 'folder:' + folder.id;
    handleListFilterChange();
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
let matchGameActive = false;
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
                const isLegacyExample = Array.from({ length: 4 }, (_, i) => makeLegacyExample(item.word, item.meaning, i))
                    .some(old => item.exampleEn === old.en && item.exampleKo === old.ko);
                return { ...item, folderId: wordFolder(item), folderScheme: 'hwp',
                    exampleEn: isLegacyExample ? examples.en : item.exampleEn || examples.en,
                    exampleKo: isLegacyExample ? examples.ko : item.exampleKo || examples.ko };
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

function preserveMatchSessionScore() {
    if (!matchGameActive) return;
    matchGameActive = false;
    matchSession++;
    if (matchTimer !== null) clearInterval(matchTimer);
    matchTimer = null;
    matchLastScore = matchScore;
    matchCumulativeScore += matchScore;
    matchPlayCount++;
    saveMatchScore();
    saveMatchRanking();
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
    renderCustomFolderOptions();
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
        tbody.innerHTML = `<tr><td colspan="7" class="p-8 text-center text-slate-400">조건에 맞는 단어가 없습니다. 단어 추가 버튼으로 이 폴더에 단어를 넣을 수 있습니다.</td></tr>`;
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
    loadCustomFolders();
    words = loadWordsFromStorage();
    renderCustomFolderOptions();
    loadUserScore();
    loadMatchScore();
    selectWordFolder('all');
    initFirebaseRanking();
};
