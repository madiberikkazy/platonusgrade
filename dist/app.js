const STORAGE_KEY = 'baga-platonus-v1';

const translations = {
  kk: {
    brandSub: 'Platonus калькуляторы', eyebrow: 'Студентке арналған ақылды құрал', title: 'Бағаңды алдын ала біл.',
    intro: 'Апталық бағаларды енгіз немесе Platonus скриншотын жүкте. Қалғанын біз есептейміз.', semester: '15 апта', savedLocal: 'Құрылғыда сақталады',
    aiTitle: 'Скриншоттан автоматты толтыру', aiText: 'Журнал скриншотын жүктеңіз — бағалар құрылғыңызда танылады.', uploadButton: 'Скриншот жүктеу',
    courseLabel: 'Пән', clear: 'Тазарту', period1: '1-межелік кезең', period2: '2-межелік кезең', weeks: 'апта', addActivity: 'Сабақ түрін қосу',
    rkHint: 'Баға әлі жоқ болса, бос қалдырыңыз — болжам автоматты есептеледі.', examLabel: 'Емтихан бағасы', examQuestion: 'Емтиханнан қанша алуды жоспарлайсыз?',
    formulaSettings: 'Формула баптаулары', profileTitle: 'Жетісу университеті профилі', profileText: 'Рейтингте ТК — 60%, межелік бақылау — 40%. Қорытындыда рұқсат рейтингі — 60%, емтихан — 40%.',
    currentWeight: 'ТК салмағы', rkWeight: 'РК салмағы', admissionWeight: 'Рұқсат рейтингі', examWeight: 'Емтихан',
    settingsFoot: 'Ескерту: Platonus формуласы ЖОО мен силлабусқа қарай өзгеруі мүмкін. Күмән болса, эдвайзерден нақтылаңыз.',
    liveResult: 'Нәтиже • LIVE', autoSaved: 'сақталды', finalGrade: 'Қорытынды баға', firstPeriod: 'Бірінші кезең', secondPeriod: 'Екінші кезең',
    currentTotal1: 'ТК1 жалпы', currentTotal2: 'ТК2 жалпы', boundary1: 'Межелік бақылау 1', boundary2: 'Межелік бақылау 2', rating1: 'Рейтинг 1', rating2: 'Рейтинг 2',
    admission: 'Рұқсат рейтингі', goalTitle: 'Мақсат: B+ (85)', goalEmpty: 'Бағаларды толтырған соң, қажетті емтихан балы шығады.', calculate: 'Нәтижені есептеу', rounding: 'Нәтиже жақын бүтін санға дөңгелектенеді.',
    week: 'апта', quickMarks: 'Жылдам белгілер', npDesc: 'қатыспады', nbDesc: 'бағаланбады', minusDesc: '0 балл', plusDesc: '100 балл', delete: 'Өшіру', save: 'Сақтау',
    uploadTitle: 'Platonus скриншоты', uploadStep1: 'Журнал толық көрінетін скриншотты таңдаңыз.', uploadStep2: 'ЖИ тапқан бағаларды тексеріп, қолданыңыз.', chooseImage: 'Суретті таңдаңыз', privacy: 'Скриншот серверге жіберілмейді — браузерде өңделеді.', cancel: 'Бас тарту', scan: 'Бағаларды тану',
    guide: 'Қысқа нұсқаулық', howWorks: 'Қалай жұмыс істейді?', guide1Title: 'Бағаларды енгізіңіз', guide1Text: 'Аптаны басып, 0–100 балл немесе н.п., н.б., −, + белгісін таңдаңыз.',
    guide2Title: 'РК мен емтиханды көрсетіңіз', guide2Text: 'РК әлі шықпаса, бос қалдырыңыз. Калькулятор болжам жасайды.', guide3Title: 'Нәтижені қараңыз', guide3Text: 'Рейтинг, қорытынды баға, әріптік баға және GPA бірден жаңарады.',
    npLegend: 'қатыспады, орташаға кірмейді', nbLegend: 'бағаланбады, орташаға кірмейді', pmLegend: '0 / 100 балл ретінде есептеледі', understood: 'Түсінікті, бастайық',
    lecture: 'Лекция', practice: 'Практика', srsp: 'СРСП', laboratory: 'Зертханалық', avg: 'Орташа', entered: 'баға енгізілді', remove: 'Жою',
    rk1: 'Межелік бақылау 1', rk2: 'Межелік бақылау 2', forecast: 'болжам', ready: 'Есептеуге дайын', enterGrades: 'Апталық бағаларды енгізіңіз.',
    admitted: 'Емтиханға жіберіледі', admissionGood: 'Рұқсат рейтингі 50 балдан жоғары.', notAdmitted: 'Рұқсат рейтингі жеткіліксіз', admissionLow: 'Емтиханға рұқсат алу үшін кемінде 50 балл қажет.',
    needExam: 'B+ алу үшін емтиханнан кемінде {score} балл қажет.', goalReached: 'B+ нәтижесі емтихансыз-ақ қолжетімді.', goalImpossible: 'B+ үшін қазіргі бағалармен 100-ден жоғары балл керек.',
    saved: 'Баға сақталды', cleared: 'Барлық бағалар тазартылды', addPrompt: 'Сабақ түрінің атауын енгізіңіз:', scanReady: 'Суретті оқуға дайын', scanning: 'Бағалар танылып жатыр…', scanDone: '{count} баға табылды. Тексеріп шығыңыз.', scanNone: 'Бағалар анық табылмады. Басқа, анығырақ скриншот қолданып көріңіз.', scanError: 'Суретті тану іске қосылмады. Бағаларды қолмен енгізуге болады.', selectFile: 'Алдымен суретті таңдаңыз.', formulaTip: 'Бұл өріске Platonus-тағы межелік бақылау бағасын жазыңыз. Әлі қойылмаса, бос қалдырыңыз.', courseTip: 'Пән атауын еркін өзгерте аласыз. Ол осы құрылғыда сақталады.', examTip: 'Бұл — сценарий: емтихан бағасын өзгерткенде қорытынды нәтиже бірден жаңарады.'
  },
  ru: {
    brandSub: 'Калькулятор Platonus', eyebrow: 'Умный инструмент для студента', title: 'Узнай оценку заранее.',
    intro: 'Введите оценки по неделям или загрузите скриншот Platonus. Остальное мы посчитаем.', semester: '15 недель', savedLocal: 'Хранится на устройстве',
    aiTitle: 'Автозаполнение по скриншоту', aiText: 'Загрузите скриншот журнала — оценки распознаются на вашем устройстве.', uploadButton: 'Загрузить скриншот',
    courseLabel: 'Дисциплина', clear: 'Очистить', period1: '1-й рубежный период', period2: '2-й рубежный период', weeks: 'недели', addActivity: 'Добавить вид занятия',
    rkHint: 'Если оценки ещё нет, оставьте поле пустым — прогноз посчитается автоматически.', examLabel: 'Оценка за экзамен', examQuestion: 'Сколько вы планируете получить на экзамене?',
    formulaSettings: 'Настройки формулы', profileTitle: 'Профиль Жетысуского университета', profileText: 'В рейтинге ТК — 60%, рубежный контроль — 40%. В итоговой: рейтинг допуска — 60%, экзамен — 40%.',
    currentWeight: 'Вес ТК', rkWeight: 'Вес РК', admissionWeight: 'Рейтинг допуска', examWeight: 'Экзамен',
    settingsFoot: 'Важно: формула Platonus может отличаться в зависимости от вуза и силлабуса. При сомнениях уточните у эдвайзера.',
    liveResult: 'Результат • LIVE', autoSaved: 'сохранено', finalGrade: 'Итоговая оценка', firstPeriod: 'Первый период', secondPeriod: 'Второй период',
    currentTotal1: 'ТК1 общий', currentTotal2: 'ТК2 общий', boundary1: 'Рубежный контроль 1', boundary2: 'Рубежный контроль 2', rating1: 'Рейтинг 1', rating2: 'Рейтинг 2',
    admission: 'Рейтинг допуска', goalTitle: 'Цель: B+ (85)', goalEmpty: 'После заполнения оценок покажем нужный балл за экзамен.', calculate: 'Рассчитать результат', rounding: 'Результат округляется до ближайшего целого.',
    week: 'неделя', quickMarks: 'Быстрые отметки', npDesc: 'не посещал', nbDesc: 'не оценён', minusDesc: '0 баллов', plusDesc: '100 баллов', delete: 'Удалить', save: 'Сохранить',
    uploadTitle: 'Скриншот Platonus', uploadStep1: 'Выберите скриншот, где полностью виден журнал.', uploadStep2: 'Проверьте распознанные ИИ оценки и примените их.', chooseImage: 'Выберите изображение', privacy: 'Скриншот не отправляется на сервер — обработка идёт в браузере.', cancel: 'Отмена', scan: 'Распознать оценки',
    guide: 'Краткая инструкция', howWorks: 'Как это работает?', guide1Title: 'Введите оценки', guide1Text: 'Нажмите на неделю и выберите балл 0–100 или отметку н.п., н.б., −, +.',
    guide2Title: 'Укажите РК и экзамен', guide2Text: 'Если РК ещё нет, оставьте поле пустым. Калькулятор сделает прогноз.', guide3Title: 'Смотрите результат', guide3Text: 'Рейтинги, итоговая оценка, буква и GPA обновляются сразу.',
    npLegend: 'не посещал, не входит в среднее', nbLegend: 'не оценён, не входит в среднее', pmLegend: 'считаются как 0 / 100 баллов', understood: 'Понятно, начнём',
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
  lang: 'kk', period: 1, course: 'AR/VR технологиялары', exam: 85,
  rk: [null, null], weights: { current: 60, rk: 40, admission: 60, exam: 40 },
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
  if (value === '+') return 100;
  if (value === '-') return 0;
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
  const avgs = state.activities.map(a => average(periodValues(a, period))).filter(v => v != null);
  return average(avgs);
}

function renderActivities() {
  const list = $('#activityList');
  const start = state.period === 1 ? 0 : 7;
  const end = state.period === 1 ? 7 : 15;
  list.innerHTML = state.activities.map(activity => {
    const values = periodValues(activity, state.period);
    const avg = average(values);
    const name = activity.customName || t(activity.nameKey);
    const weeks = activity.scores.slice(start, end).map((value, offset) => {
      const week = start + offset + 1;
      const isMark = typeof value === 'string';
      return `<button class="week-button ${value == null ? 'empty' : 'filled'} ${isMark ? 'mark' : ''}" data-activity="${activity.id}" data-week="${week}"><small>${week} ${state.lang === 'kk' ? 'апта' : 'нед.'}</small><b>${value == null ? '＋' : value}</b></button>`;
    }).join('');
    return `<article class="activity-card panel">
      <div class="activity-head"><div class="activity-name-wrap"><span class="activity-icon">${activity.icon || '◇'}</span><span class="activity-name">${name}</span></div><div class="activity-average"><span>${t('avg')}</span><b>${display(avg)}</b></div></div>
      <div class="weeks-grid">${weeks}</div>
      <div class="activity-meta"><span>${values.length} ${t('entered')}</span>${state.activities.length > 1 ? `<button data-remove="${activity.id}">${t('remove')}</button>` : ''}</div>
    </article>`;
  }).join('');
  $$('.week-button', list).forEach(btn => btn.addEventListener('click', () => openScoreDialog(btn.dataset.activity, Number(btn.dataset.week))));
  $$('[data-remove]', list).forEach(btn => btn.addEventListener('click', () => {
    state.activities = state.activities.filter(a => a.id !== btn.dataset.remove); renderActivities(); calculate(); saveState();
  }));
}

function updatePeriodUI() {
  $$('.period-tab').forEach(tab => tab.classList.toggle('active', Number(tab.dataset.period) === state.period));
  $('#rkLabel').textContent = state.period === 1 ? t('rk1') : t('rk2');
  $('#rkInput').value = state.rk[state.period - 1] ?? '';
}

function openScoreDialog(activityId, week) {
  state.activeScore = { activityId, week };
  const activity = state.activities.find(a => a.id === activityId);
  $('#scoreDialogType').textContent = activity.customName || t(activity.nameKey);
  $('#scoreDialogWeek').textContent = week;
  const value = activity.scores[week - 1];
  $('#scoreValue').value = typeof value === 'number' ? value : '';
  $$('.week-button').forEach(b => b.classList.remove('selected'));
  $(`.week-button[data-activity="${activityId}"][data-week="${week}"]`)?.classList.add('selected');
  $('#scoreDialog').showModal();
  setTimeout(() => $('#scoreValue').focus(), 80);
}

function setActiveScore(value) {
  if (!state.activeScore) return;
  const activity = state.activities.find(a => a.id === state.activeScore.activityId);
  activity.scores[state.activeScore.week - 1] = value;
  $('#scoreDialog').close();
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

function parseScoresFromOCR(text) {
  const clean = text.replace(/[|]/g, 'I').replace(/,/g, '.');
  const blocks = [...clean.matchAll(/(?:AT|АТ)\s*[\w\d-]*-(SRSP|СРСП|L|P|Р)([\s\S]*?)(?=(?:AT|АТ)\s*[\w\d-]*-(?:SRSP|СРСП|L|P|Р)|$)/gi)];
  let found = 0;
  for (const match of blocks) {
    const suffix = match[1].toUpperCase();
    const id = suffix === 'L' ? 'lecture' : (suffix === 'SRSP' || suffix === 'СРСП') ? 'srsp' : 'practice';
    const activity = state.activities.find(a => a.id === id);
    if (!activity) continue;
    const lines = match[2].split(/\n+/).map(s => s.trim()).filter(Boolean);
    const scoreLines = lines.filter(line => /(?:оценка|баға)/i.test(line));
    scoreLines.slice(0, 2).forEach((line, rowIndex) => {
      let tokens = line.replace(/^.*?(?:оценка|баға)\s*/i, '').match(/н\.?\s*[пб]\.?|\b(?:100|[1-9]?\d)(?:\.\d+)?\b|[+-]/gi) || [];
      tokens = tokens.map(x => x.replace(/\s/g, '').toLowerCase());
      const limit = rowIndex === 0 ? 7 : 8;
      if (tokens.length > limit) tokens = tokens.slice(0, limit);
      tokens.forEach((token, i) => {
        const normalized = /^н\.?п/.test(token) ? 'н.п.' : /^н\.?б/.test(token) ? 'н.б.' : token === '+' || token === '-' ? token : Number(token);
        if (typeof normalized === 'number' && (normalized < 0 || normalized > 100)) return;
        activity.scores[(rowIndex === 0 ? 0 : 7) + i] = normalized;
        found++;
      });
    });
  }
  return found;
}

async function scanImage() {
  if (!state.uploadFile) return toast(t('selectFile'));
  const btn = $('#scanButton'); btn.disabled = true;
  $('#scanStatus').textContent = t('scanning');
  try {
    const { createWorker } = await import('https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.esm.min.js');
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
  $$('.period-tab').forEach(tab => tab.addEventListener('click', () => { state.period = Number(tab.dataset.period); updatePeriodUI(); renderActivities(); saveState(); }));
  $('#courseName').addEventListener('input', e => { state.course = e.target.value; saveState(); });
  $('#rkInput').addEventListener('input', e => { const v = e.target.value; state.rk[state.period - 1] = v === '' ? null : clamp(v); calculate(); saveState(); });
  $('#examRange').addEventListener('input', e => { state.exam = clamp(e.target.value); $('#examInput').value = state.exam; calculate(); saveState(); });
  $('#examInput').addEventListener('input', e => { state.exam = clamp(e.target.value); $('#examRange').value = state.exam; calculate(); saveState(); });
  ['current', 'rk', 'admission', 'exam'].forEach(key => $(`#${key}Weight`).addEventListener('input', e => { state.weights[key] = clamp(e.target.value); calculate(); saveState(); }));
  $('#openUpload').addEventListener('click', () => $('#uploadDialog').showModal());
  $('#helpButton').addEventListener('click', () => $('#helpDialog').showModal());
  $$('[data-close]').forEach(btn => btn.addEventListener('click', () => $(`#${btn.dataset.close}Dialog`).close()));
  $$('.mini-help').forEach(btn => btn.addEventListener('click', () => toast(t(`${btn.dataset.tip}Tip`))));
  $$('.quick-grid button').forEach(btn => btn.addEventListener('click', () => setActiveScore(btn.dataset.mark)));
  $('#saveScore').addEventListener('click', () => { const raw = $('#scoreValue').value; if (raw !== '') setActiveScore(clamp(raw)); });
  $('#scoreValue').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('#saveScore').click(); } });
  $('#deleteScore').addEventListener('click', () => setActiveScore(null));
  $('#scoreDialog').addEventListener('close', () => $$('.week-button').forEach(b => b.classList.remove('selected')));
  $('#addActivity').addEventListener('click', () => {
    const name = window.prompt(t('addPrompt')); if (!name?.trim()) return;
    state.activities.push({ id: `custom-${Date.now()}`, customName: name.trim(), nameKey: 'laboratory', icon: '△', scores: Array(15).fill(null) });
    renderActivities(); calculate(); saveState();
  });
  $('#resetButton').addEventListener('click', () => {
    state.activities.forEach(a => a.scores = Array(15).fill(null)); state.rk = [null, null];
    $('#rkInput').value = ''; renderActivities(); calculate(); saveState(); toast(t('cleared'));
  });
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
$('#courseName').value = state.course;
$('#examRange').value = state.exam;
$('#examInput').value = state.exam;
Object.entries(state.weights).forEach(([key, value]) => $(`#${key}Weight`).value = value);
bindEvents();
translatePage();
if (!localStorage.getItem('baga-onboarded')) {
  setTimeout(() => { $('#helpDialog').showModal(); localStorage.setItem('baga-onboarded', '1'); }, 500);
}
