const STORAGE_KEY = 'baga-platonus-v1';

const translations = {
  kk: {
    brandSub: 'Platonus калькуляторы', eyebrow: 'Студентке арналған ақылды құрал', title: 'Бағаңды алдын ала біл.',
    intro: 'Апталық бағаларды енгіз немесе Platonus скриншотын жүкте. Қалғанын біз есептейміз.', semester: '15 апта', savedLocal: 'Құрылғыда сақталады',
    aiTitle: 'Скриншоттан автоматты толтыру', aiText: 'Журнал скриншотын жүктеңіз — бағалар құрылғыңызда танылады.', uploadButton: 'ЖИ арқылы толтыру',
    courseLabel: 'Пән', clear: 'Тазарту', period1: '1-межелік кезең', period2: '2-межелік кезең', weeks: 'апта', addActivity: 'Сабақ түрін қосу',
    rkHint: 'Қойылмаса, автоматты болжам қолданылады.', boundaryGrades: 'Межелік бақылаулар', selectWeek: 'Алдымен аптаны таңдаңыз', selectHint: 'Сосын бағаны немесе белгіні басыңыз', examLabel: 'Емтихан бағасы', examQuestion: 'Емтиханнан қанша алуды жоспарлайсыз?',
    formulaSettings: 'Формула баптаулары', profileTitle: 'Жетісу университеті профилі', profileText: 'Рейтингте ТК — 60%, межелік бақылау — 40%. Қорытындыда рұқсат рейтингі — 60%, емтихан — 40%.',
    currentWeight: 'ТК салмағы', rkWeight: 'РК салмағы', admissionWeight: 'Рұқсат рейтингі', examWeight: 'Емтихан',
    settingsFoot: 'Ескерту: Platonus формуласы ЖОО мен силлабусқа қарай өзгеруі мүмкін. Күмән болса, эдвайзерден нақтылаңыз.',
    liveResult: 'Нәтиже • LIVE', autoSaved: 'сақталды', finalGrade: 'Қорытынды баға', firstPeriod: 'Бірінші кезең', secondPeriod: 'Екінші кезең',
    currentTotal1: 'ТК1 жалпы', currentTotal2: 'ТК2 жалпы', boundary1: 'Межелік бақылау 1', boundary2: 'Межелік бақылау 2', rating1: 'Рейтинг 1', rating2: 'Рейтинг 2',
    admission: 'Рұқсат рейтингі', goalTitle: 'Мақсат: B+ (85)', goalEmpty: 'Бағаларды толтырған соң, қажетті емтихан балы шығады.', calculate: 'Нәтижені есептеу', rounding: 'Нәтиже жақын бүтін санға дөңгелектенеді.',
    week: 'апта', quickMarks: 'Жылдам белгілер', npDesc: 'есептелмейді', nbDesc: '0 балл', minusDesc: '0 балл', plusDesc: '100 балл', delete: 'Өшіру', save: 'Сақтау',
    uploadTitle: 'Platonus скриншоты', uploadStep1: 'Журнал толық көрінетін скриншотты таңдаңыз.', uploadStep2: 'ЖИ тапқан бағаларды тексеріп, қолданыңыз.', chooseImage: 'Суретті таңдаңыз', exampleLabel: 'Үлгі', openExample: 'Үлкейтіп көру', privacy: 'Скриншот серверге жіберілмейді — браузерде өңделеді.', cancel: 'Бас тарту', scan: 'Бағаларды тану',
    guide: 'Қысқа нұсқаулық', howWorks: 'Қалай жұмыс істейді?', guide1Title: 'Бағаларды енгізіңіз', guide1Text: 'Аптаны басып, 0–100 балл немесе белгіні таңдаңыз: ж / н / a — 0 балл; е.а. / н.п. / n.c. — есептелмейді.',
    guide2Title: 'РК мен емтиханды көрсетіңіз', guide2Text: 'РК әлі шықпаса, бос қалдырыңыз. Калькулятор болжам жасайды.', guide3Title: 'Нәтижені қараңыз', guide3Text: 'Рейтинг, қорытынды баға, әріптік баға және GPA бірден жаңарады.',
    npLegend: 'есептелмейді, орташаның бөлгішіне кірмейді', nbLegend: '0 балл ретінде есептеледі', pmLegend: '0 / 100 балл ретінде есептеледі', understood: 'Түсінікті, бастайық',
    lecture: 'Лекция', practice: 'Практика', srsp: 'СРСП', laboratory: 'Зертханалық', avg: 'Орташа', entered: 'баға енгізілді', remove: 'Жою',
    rk1: 'Межелік бақылау 1', rk2: 'Межелік бақылау 2', forecast: 'болжам', ready: 'Есептеуге дайын', enterGrades: 'Апталық бағаларды енгізіңіз.',
    admitted: 'Емтиханға жіберіледі', admissionGood: 'Рұқсат рейтингі 50 балдан жоғары.', notAdmitted: 'Рұқсат рейтингі жеткіліксіз', admissionLow: 'Емтиханға рұқсат алу үшін кемінде 50 балл қажет.',
    needExam: 'B+ алу үшін емтиханнан кемінде {score} балл қажет.', goalReached: 'B+ нәтижесі емтихансыз-ақ қолжетімді.', goalImpossible: 'B+ үшін қазіргі бағалармен 100-ден жоғары балл керек.',
    saved: 'Баға сақталды', cleared: 'Барлық бағалар тазартылды', addPrompt: 'Сабақ түрінің атауын енгізіңіз:', scanReady: 'Суретті оқуға дайын', scanning: 'Бағалар танылып жатыр…', scanDone: '{count} баға табылды. Тексеріп шығыңыз.', scanNone: 'Бағалар анық табылмады. Басқа, анығырақ скриншот қолданып көріңіз.', scanError: 'Суретті тану іске қосылмады. Бағаларды қолмен енгізуге болады.', selectFile: 'Алдымен суретті таңдаңыз.', formulaTip: 'Бұл өріске Platonus-тағы межелік бақылау бағасын жазыңыз. Әлі қойылмаса, бос қалдырыңыз.', courseTip: 'Пән атауын еркін өзгерте аласыз. Ол осы құрылғыда сақталады.', examTip: 'Бұл — сценарий: емтихан бағасын өзгерткенде қорытынды нәтиже бірден жаңарады.'
  },
  ru: {
    brandSub: 'Калькулятор Platonus', eyebrow: 'Умный инструмент для студента', title: 'Узнай оценку заранее.',
    intro: 'Введите оценки по неделям или загрузите скриншот Platonus. Остальное мы посчитаем.', semester: '15 недель', savedLocal: 'Хранится на устройстве',
    aiTitle: 'Автозаполнение по скриншоту', aiText: 'Загрузите скриншот журнала — оценки распознаются на вашем устройстве.', uploadButton: 'Заполнить с помощью ИИ',
    courseLabel: 'Дисциплина', clear: 'Очистить', period1: '1-й рубежный период', period2: '2-й рубежный период', weeks: 'недели', addActivity: 'Добавить вид занятия',
    rkHint: 'Если оценки нет, используется автоматический прогноз.', boundaryGrades: 'Рубежные контроли', selectWeek: 'Сначала выберите неделю', selectHint: 'Затем нажмите оценку или отметку', examLabel: 'Оценка за экзамен', examQuestion: 'Сколько вы планируете получить на экзамене?',
    formulaSettings: 'Настройки формулы', profileTitle: 'Профиль Жетысуского университета', profileText: 'В рейтинге ТК — 60%, рубежный контроль — 40%. В итоговой: рейтинг допуска — 60%, экзамен — 40%.',
    currentWeight: 'Вес ТК', rkWeight: 'Вес РК', admissionWeight: 'Рейтинг допуска', examWeight: 'Экзамен',
    settingsFoot: 'Важно: формула Platonus может отличаться в зависимости от вуза и силлабуса. При сомнениях уточните у эдвайзера.',
    liveResult: 'Результат • LIVE', autoSaved: 'сохранено', finalGrade: 'Итоговая оценка', firstPeriod: 'Первый период', secondPeriod: 'Второй период',
    currentTotal1: 'ТК1 общий', currentTotal2: 'ТК2 общий', boundary1: 'Рубежный контроль 1', boundary2: 'Рубежный контроль 2', rating1: 'Рейтинг 1', rating2: 'Рейтинг 2',
    admission: 'Рейтинг допуска', goalTitle: 'Цель: B+ (85)', goalEmpty: 'После заполнения оценок покажем нужный балл за экзамен.', calculate: 'Рассчитать результат', rounding: 'Результат округляется до ближайшего целого.',
    week: 'неделя', quickMarks: 'Быстрые отметки', npDesc: 'не предусмотрено', nbDesc: '0 баллов', minusDesc: '0 баллов', plusDesc: '100 баллов', delete: 'Удалить', save: 'Сохранить',
    uploadTitle: 'Скриншот Platonus', uploadStep1: 'Выберите скриншот, где полностью виден журнал.', uploadStep2: 'Проверьте распознанные ИИ оценки и примените их.', chooseImage: 'Выберите изображение', exampleLabel: 'Пример', openExample: 'Увеличить', privacy: 'Скриншот не отправляется на сервер — обработка идёт в браузере.', cancel: 'Отмена', scan: 'Распознать оценки',
    guide: 'Краткая инструкция', howWorks: 'Как это работает?', guide1Title: 'Введите оценки', guide1Text: 'Нажмите на неделю и выберите балл 0–100 или отметку: ж / н / a — 0 баллов; е.а. / н.п. / n.c. — не учитывается.',
    guide2Title: 'Укажите РК и экзамен', guide2Text: 'Если РК ещё нет, оставьте поле пустым. Калькулятор сделает прогноз.', guide3Title: 'Смотрите результат', guide3Text: 'Рейтинги, итоговая оценка, буква и GPA обновляются сразу.',
    npLegend: 'не учитывается и не входит в делитель среднего', nbLegend: 'считается как 0 баллов', pmLegend: 'считаются как 0 / 100 баллов', understood: 'Понятно, начнём',
    lecture: 'Лекция', practice: 'Практика', srsp: 'СРСП', laboratory: 'Лабораторная', avg: 'Среднее', entered: 'оценок введено', remove: 'Удалить',
    rk1: 'Рубежный контроль 1', rk2: 'Рубежный контроль 2', forecast: 'прогноз', ready: 'Готово к расчёту', enterGrades: 'Введите оценки по неделям.',
    admitted: 'Допуск к экзамену есть', admissionGood: 'Рейтинг допуска выше 50 баллов.', notAdmitted: 'Рейтинга недостаточно', admissionLow: 'Для допуска к экзамену нужно не менее 50 баллов.',
    needExam: 'Для B+ нужно получить на экзамене минимум {score} баллов.', goalReached: 'B+ уже достижим даже без баллов за экзамен.', goalImpossible: 'Для B+ при текущих оценках потребуется больше 100 баллов.',
    saved: 'Оценка сохранена', cleared: 'Все оценки очищены', addPrompt: 'Введите название вида занятия:', scanReady: 'Готово к распознаванию', scanning: 'Распознаём оценки…', scanDone: 'Найдено оценок: {count}. Проверьте их.', scanNone: 'Не удалось уверенно найти оценки. Попробуйте более чёткий скриншот.', scanError: 'Распознавание не запустилось. Оценки можно ввести вручную.', selectFile: 'Сначала выберите изображение.', formulaTip: 'Введите оценку рубежного контроля из Platonus. Если её ещё нет, оставьте поле пустым.', courseTip: 'Название дисциплины можно изменить. Оно сохранится на этом устройстве.', examTip: 'Это сценарий: меняйте балл экзамена и сразу смотрите итог.'
  }
};

const defaultActivities = [
  { id: 'lecture', nameKey: 'lecture', icon: '◉', scores: Array(15).fill(null) },
  { id: 'practice', nameKey: 'practice', icon: '✦', scores: Array(15).fill(null) },
  { id: 'srsp', nameKey: 'srsp', icon: '◇', scores: Array(15).fill(null) }
];

const state = {
  lang: 'kk', period: 1, course: '', exam: 85,
  rk: [null, null], weights: { current: 50, rk: 50, admission: 60, exam: 40 },
  activityWeights: { lecture: 20, practice: 50, srsp: 30 },
  activities: structuredClone(defaultActivities), activeScore: null, uploadFile: null
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key, vars = {}) => Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, v), translations[state.lang][key] ?? key);
const clamp = (n, min = 0, max = 100) => Math.min(max, Math.max(min, Number(n)));
const round1 = n => Number.isFinite(n) ? Math.round(n * 10) / 10 : null;
const display = n => n == null || !Number.isFinite(n) ? '—' : round1(n).toLocaleString(state.lang === 'kk' ? 'kk-KZ' : 'ru-RU', { maximumFractionDigits: 1 });

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    Object.assign(state, saved, { activeScore: null, uploadFile: null });
    state.weights = { current: 50, rk: 50, admission: 60, exam: 40 };
    state.activityWeights = { lecture: 20, practice: 50, srsp: 30 };
    state.activities = saved.activities?.length ? saved.activities.map(a => ({ ...a, scores: [...a.scores, ...Array(15).fill(null)].slice(0, 15) })) : structuredClone(defaultActivities);
  } catch (_) {}
}

function saveState() {
  const clean = { lang: state.lang, period: state.period, course: state.course, exam: state.exam, rk: state.rk, weights: state.weights, activities: state.activities };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
}

function translatePage() {
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const spans = $$('#langSwitch span');
  spans[0].classList.toggle('active', state.lang === 'kk');
  spans[1].classList.toggle('active', state.lang === 'ru');
  renderActivities();
  updatePeriodUI();
  calculate();
}

function scoreToNumber(value) {
  if (typeof value === 'number') return clamp(value);
  const mark = String(value).trim().toLowerCase().replace(/\s+/g, '');
  if (['е.а.', 'н.п.', 'n.c.'].includes(mark)) return null;
  if (['ж', 'н', 'a', 'н.б.', 'н.я.'].includes(mark)) return 0;
  if (mark === '+') return 100;
  if (mark === '-') return 0;
  return null;
}

function periodValues(activity, period) {
  const slice = period === 1 ? activity.scores.slice(0, 7) : activity.scores.slice(7, 15);
  return slice.map(scoreToNumber).filter(v => v != null);
}

function average(values) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;
}

function currentTotal(period) {
  const available = state.activities.map(a => ({
    value: average(periodValues(a, period)),
    weight: state.activityWeights[a.id] ?? 0
  })).filter(item => item.value != null && item.weight > 0);
  const totalWeight = available.reduce((sum, item) => sum + item.weight, 0);
  return totalWeight ? available.reduce((sum, item) => sum + item.value * item.weight, 0) / totalWeight : null;
}

function renderActivities() {
  const list = $('#activityList');
  list.innerHTML = state.activities.map(activity => {
    const values1 = periodValues(activity, 1);
    const values2 = periodValues(activity, 2);
    const avg1 = average(values1), avg2 = average(values2);
    const name = activity.customName || t(activity.nameKey);
    const weekButtons = (start, end) => activity.scores.slice(start, end).map((value, offset) => {
      const week = start + offset + 1;
      const isMark = typeof value === 'string';
      const selected = state.activeScore?.activityId === activity.id && state.activeScore?.week === week;
      return `<button class="week-button ${value == null ? 'empty' : 'filled'} ${isMark ? 'mark' : ''} ${selected ? 'selected' : ''}" data-activity="${activity.id}" data-week="${week}" aria-pressed="${selected}"><small>${week}</small><b>${value == null ? '—' : value}</b></button>`;
    }).join('');
    return `<article class="activity-card panel">
      <div class="activity-head"><div class="activity-name-wrap"><span class="activity-icon">${activity.icon || '◇'}</span><span class="activity-name">${name}</span><span class="activity-weight">${state.activityWeights[activity.id] ?? 0}%</span></div><div class="dual-average"><span>ТК1 <b>${display(avg1)}</b></span><span>ТК2 <b>${display(avg2)}</b></span></div></div>
      <div class="week-line first-line">${weekButtons(0, 7)}</div>
      <div class="week-line second-line">${weekButtons(7, 15)}</div>
    </article>`;
  }).join('');
  $$('.week-button', list).forEach(btn => btn.addEventListener('click', () => selectScore(btn.dataset.activity, Number(btn.dataset.week))));
}

function updatePeriodUI() {
  $('#rkInput1').value = state.rk[0] ?? '';
  $('#rkInput2').value = state.rk[1] ?? '';
}

function selectScore(activityId, week) {
  state.activeScore = { activityId, week };
  const activity = state.activities.find(a => a.id === activityId);
  const value = activity.scores[week - 1];
  $('#inlineScore').value = typeof value === 'number' ? value : '';
  $('#selectionTitle').textContent = `${activity.customName || t(activity.nameKey)} · ${week} ${t('week')}`;
  renderActivities();
  saveState();
}

function setActiveScore(value) {
  if (!state.activeScore) return toast(t('selectWeek'));
  const activity = state.activities.find(a => a.id === state.activeScore.activityId);
  activity.scores[state.activeScore.week - 1] = value;
  $('#inlineScore').value = typeof value === 'number' ? value : '';
  renderActivities(); calculate(); saveState(); toast(t('saved'));
}

function gradeInfo(score) {
  const n = Math.round(clamp(score));
  if (n >= 95) return ['A', 4.00];
  if (n >= 90) return ['A−', 3.67];
  if (n >= 85) return ['B+', 3.33];
  if (n >= 80) return ['B', 3.00];
  if (n >= 75) return ['B−', 2.67];
  if (n >= 70) return ['C+', 2.33];
  if (n >= 65) return ['C', 2.00];
  if (n >= 60) return ['C−', 1.67];
  if (n >= 55) return ['D+', 1.33];
  if (n >= 50) return ['D', 1.00];
  if (n >= 25) return ['FX', 0.50];
  return ['F', 0];
}

function calculate() {
  const tk1 = currentTotal(1), tk2 = currentTotal(2);
  const rk1Projected = state.rk[0] == null && tk1 != null;
  const rk2Projected = state.rk[1] == null && tk2 != null;
  const rk1 = state.rk[0] ?? tk1, rk2 = state.rk[1] ?? tk2;
  const cw = clamp(state.weights.current), rw = clamp(state.weights.rk);
  const normalizeRating = Math.max(1, cw + rw);
  const rating1 = tk1 != null && rk1 != null ? (tk1 * cw + rk1 * rw) / normalizeRating : null;
  const rating2 = tk2 != null && rk2 != null ? (tk2 * cw + rk2 * rw) / normalizeRating : null;
  const availableRatings = [rating1, rating2].filter(v => v != null);
  const admission = average(availableRatings);
  const aw = clamp(state.weights.admission), ew = clamp(state.weights.exam);
  const normalizeFinal = Math.max(1, aw + ew);
  const final = admission != null ? (admission * aw + clamp(state.exam) * ew) / normalizeFinal : null;
  const roundedFinal = final == null ? null : Math.round(final);
  const [letter, gpa] = final == null ? ['—', null] : gradeInfo(final);

  $('#tk1').textContent = display(tk1); $('#tk2').textContent = display(tk2);
  $('#rk1').textContent = display(rk1); $('#rk2').textContent = display(rk2);
  $('#rating1').textContent = display(rating1); $('#rating2').textContent = display(rating2);
  $('#rk1Projection').textContent = rk1Projected ? t('forecast') : '';
  $('#rk2Projection').textContent = rk2Projected ? t('forecast') : '';
  $('#admissionScore').textContent = display(admission);
  $('#finalScore').textContent = roundedFinal ?? '—';
  $('#letterGrade').textContent = letter;
  $('#gpaScore').textContent = gpa == null ? '—' : gpa.toFixed(2);
  $('#scoreRing').style.setProperty('--score', roundedFinal ?? 0);

  const banner = $('#statusBanner');
  if (admission == null) {
    banner.classList.remove('warning'); $('.status-icon', banner).textContent = '✓';
    $('#statusTitle').textContent = t('ready'); $('#statusText').textContent = t('enterGrades');
  } else if (admission >= 50) {
    banner.classList.remove('warning'); $('.status-icon', banner).textContent = '✓';
    $('#statusTitle').textContent = t('admitted'); $('#statusText').textContent = t('admissionGood');
  } else {
    banner.classList.add('warning'); $('.status-icon', banner).textContent = '!';
    $('#statusTitle').textContent = t('notAdmitted'); $('#statusText').textContent = t('admissionLow');
  }

  const needed = admission == null || ew === 0 ? null : (85 * normalizeFinal - admission * aw) / ew;
  if (needed == null) {
    $('#neededExam').textContent = '—'; $('#goalText').textContent = t('goalEmpty'); $('#goalMeter').style.width = '0%';
  } else if (needed <= 0) {
    $('#neededExam').textContent = '0'; $('#goalText').textContent = t('goalReached'); $('#goalMeter').style.width = '100%';
  } else if (needed > 100) {
    $('#neededExam').textContent = '>100'; $('#goalText').textContent = t('goalImpossible'); $('#goalMeter').style.width = '100%';
  } else {
    const needRound = Math.ceil(needed);
    $('#neededExam').textContent = needRound; $('#goalText').textContent = t('needExam', { score: needRound }); $('#goalMeter').style.width = `${needRound}%`;
  }
}

function toast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('show');
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2400);
}

function normalizeOCRScoreToken(raw) {
  const token = raw
    .toLowerCase()
    .replace(/^[^\p{L}\p{N}+-]+|[^\p{L}\p{N}.+-]+$/gu, '');
  if (/^[еe]\.?[аa]\.?$/iu.test(token)) return 'е.а.';
  if (/^[нhn]\.?[пpn]\.?$/iu.test(token)) return 'н.п.';
  if (/^[нn]\.?[сc]\.?$/iu.test(token)) return 'n.c.';
  if (/^[нhn]\.?[бb]\.?$/iu.test(token)) return 'н.б.';
  if (/^[нhn]\.?[я]\.?$/iu.test(token)) return 'н.я.';
  if (/^[нn]\.?$/iu.test(token)) return 'н';
  if (/^ж\.?$/iu.test(token)) return 'ж';
  if (/^[aа]\.?$/iu.test(token)) return 'a';
  if (/^[oо]$/iu.test(token)) return 0;
  if (/^\+$/u.test(token)) return '+';
  if (/^-$/u.test(token)) return '-';
  if (/^(?:100|[1-9]?\d)(?:\.\d+)?$/u.test(token)) return Number(token);
  return null;
}

function extractOCRScoreTokens(line) {
  const compactMarks = line
    .replace(/([еeнhn])\s*\.\s*([аaпбяpbnсc])\s*\.?/giu, '$1.$2.')
    .replace(/,/g, '.');
  return compactMarks.split(/\s+/).map(normalizeOCRScoreToken).filter(value => value != null);
}

function parseScoresFromOCR(text) {
  const clean = text.replace(/[|]/g, 'I').replace(/,/g, '.');
  const lines = clean.split(/\n+/).map(line => line.trim()).filter(Boolean);
  const headers = [];

  // Platonus course prefixes differ between universities (AT, PYaJ, etc.).
  // The stable part is the activity suffix at the end of the course code.
  lines.forEach((line, index) => {
    const match = line.match(/\d[\d-]*-\s*(SRSP|СРСП|L|Л|P|Р|П)\s*(?:[I|)\].,]*)$/iu);
    if (match) headers.push({ index, suffix: match[1].toUpperCase() });
  });

  let found = 0;
  const parsedByActivity = new Map();
  headers.forEach((header, headerIndex) => {
    const suffix = header.suffix;
    const id = suffix === 'L' || suffix === 'Л' ? 'lecture' : (suffix === 'SRSP' || suffix === 'СРСП') ? 'srsp' : 'practice';
    const activity = state.activities.find(a => a.id === id);
    if (!activity) return;
    const parsed = parsedByActivity.get(id) || { scores: Array(15).fill(null), count: 0 };
    parsedByActivity.set(id, parsed);
    const end = headers[headerIndex + 1]?.index ?? lines.length;
    const blockLines = lines.slice(header.index + 1, end);
    const scoreLines = blockLines.map(line => {
      const tokens = extractOCRScoreTokens(line);
      const hasGradeLabel = /оценка|ба[ғг]а|(?:^|\s)b[aа][grfғ][aа](?=\s|:)/iu.test(line);
      const hasTkAverage = /\b\d{1,3}\.\d{2}\s*$/u.test(line);
      return { line, tokens, hasTkAverage, isScore: hasGradeLabel || hasTkAverage };
    }).filter(item => item.isScore);

    scoreLines.slice(0, 2).forEach(({ tokens: rawTokens, hasTkAverage }, rowIndex) => {
      // Platonus appends the period TK average (for example 85.00 or 10.00)
      // after weekly grades. It is a result, not the next week's score.
      let tokens = hasTkAverage ? rawTokens.slice(0, -1) : rawTokens;
      const limit = rowIndex === 0 ? 7 : 8;
      if (tokens.length > limit) tokens = tokens.slice(0, limit);
      tokens.forEach((token, i) => {
        if (typeof token === 'number' && (token < 0 || token > 100)) return;
        parsed.scores[(rowIndex === 0 ? 0 : 7) + i] = token;
        parsed.count++;
        found++;
      });
    });
  });
  parsedByActivity.forEach((parsed, id) => {
    if (!parsed.count) return;
    const activity = state.activities.find(a => a.id === id);
    if (activity) activity.scores = parsed.scores;
  });
  return found;
}

async function scanImage() {
  if (!state.uploadFile) return toast(t('selectFile'));
  const btn = $('#scanButton'); btn.disabled = true;
  $('#scanStatus').textContent = t('scanning');
  try {
    const tesseractModule = await import('https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.esm.min.js');
    const { createWorker } = tesseractModule.default;
    const worker = await createWorker('rus+eng', 1, { logger: m => {
      if (m.progress != null) {
        const pct = Math.round(m.progress * 100); $('#scanPercent').textContent = `${pct}%`; $('#progressBar').style.width = `${pct}%`;
      }
    }});
    const result = await worker.recognize(state.uploadFile);
    await worker.terminate();
    const found = parseScoresFromOCR(result.data.text);
    if (found) {
      renderActivities(); calculate(); saveState();
      $('#scanStatus').textContent = t('scanDone', { count: found });
      setTimeout(() => $('#uploadDialog').close(), 1200);
      toast(t('scanDone', { count: found }));
    } else {
      $('#scanStatus').textContent = t('scanNone');
    }
  } catch (error) {
    console.error(error); $('#scanStatus').textContent = t('scanError'); toast(t('scanError'));
  } finally { btn.disabled = false; }
}

function bindEvents() {
  $('#langSwitch').addEventListener('click', () => { state.lang = state.lang === 'kk' ? 'ru' : 'kk'; translatePage(); saveState(); });
  $('#rkInput1').addEventListener('input', e => { const v = e.target.value; state.rk[0] = v === '' ? null : clamp(v); calculate(); saveState(); });
  $('#rkInput2').addEventListener('input', e => { const v = e.target.value; state.rk[1] = v === '' ? null : clamp(v); calculate(); saveState(); });
  $('#examRange').addEventListener('input', e => { state.exam = clamp(e.target.value); $('#examInput').value = state.exam; calculate(); saveState(); });
  $('#examInput').addEventListener('input', e => { state.exam = clamp(e.target.value); $('#examRange').value = state.exam; calculate(); saveState(); });
  ['current', 'rk', 'admission', 'exam'].forEach(key => $(`#${key}Weight`).addEventListener('input', e => { state.weights[key] = clamp(e.target.value); calculate(); saveState(); }));
  $('#openUpload').addEventListener('click', () => $('#uploadDialog').showModal());
  $$('[data-close]').forEach(btn => btn.addEventListener('click', () => $(`#${btn.dataset.close}Dialog`).close()));
  $$('.mini-help').forEach(btn => btn.addEventListener('click', () => toast(t(`${btn.dataset.tip}Tip`))));
  $$('[data-quick-mark]').forEach(btn => btn.addEventListener('click', () => setActiveScore(btn.dataset.quickMark)));
  $('#inlineScore').addEventListener('input', e => {
    if (!state.activeScore || e.target.value === '') return;
    setActiveScore(clamp(e.target.value));
  });
  $('#clearCell').addEventListener('click', () => setActiveScore(null));
  $('#calculateButton').addEventListener('click', () => { calculate(); $('.result-card').scrollIntoView({ behavior: 'smooth', block: 'center' }); });
  const fileInput = $('#fileInput'), dropzone = $('#dropzone');
  const handleFile = file => {
    if (!file?.type.startsWith('image/')) return;
    state.uploadFile = file; $('#uploadPreview').src = URL.createObjectURL(file); dropzone.classList.add('has-image'); $('#scanButton').disabled = false;
    $('#scanStatus').textContent = t('scanReady'); $('#scanPercent').textContent = '0%'; $('#progressBar').style.width = '0%';
  };
  fileInput.addEventListener('change', e => handleFile(e.target.files[0]));
  ['dragenter', 'dragover'].forEach(event => dropzone.addEventListener(event, e => { e.preventDefault(); dropzone.classList.add('dragging'); }));
  ['dragleave', 'drop'].forEach(event => dropzone.addEventListener(event, e => { e.preventDefault(); dropzone.classList.remove('dragging'); }));
  dropzone.addEventListener('drop', e => handleFile(e.dataTransfer.files[0]));
  $('#scanButton').addEventListener('click', scanImage);
  $$('.modal').forEach(dialog => dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); }));
}

loadState();
$('#examRange').value = state.exam;
$('#examInput').value = state.exam;
Object.entries(state.weights).forEach(([key, value]) => $(`#${key}Weight`).value = value);
bindEvents();
translatePage();
