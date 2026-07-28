// SY Mechanical — Vanilla JS SPA
// ─────────────────────────────────────────────

const API = '/api';

// ── SUBJECT FULL NAMES ───────────────────────────────────────
const SUBJECT_FULL = {
  'FM&HM':      'Fluid Mechanics & Hydraulic Machines',
  'ET':         'Engineering Thermodynamics',
  'KOM':        'Kinematics of Machines',
  'EVS':        'Environmental Science',
  'DSA':        'Data Structures & Algorithms',
  'PP':         'Python Programming',
  'ITPDE':      'Integral Transform & Partial Diff. Eq.',
  'ES':         'Life Skills',
  'Practicals': 'Practical / Lab Session',
  'Library':    'Library Hour',
};

// ── TIMETABLE DATA (from actual schedule) ───────────────────
// ── TIMETABLE DATA ────────────────────────────────────────────
// Source: SY_Classroom_502A_TimeTable_V2.xlsx
// Class: SY | Room: 502A | w.e.f.: 15/06/2026
// Class Teacher: Mr. Nagareddy G.
// Practical time: 11:30–1:30 (Mon/Tue/Wed) | Thu & Fri: 2:15–4:15

const TIMETABLE = {
  Mon: [
    { time: '9:15–10:15',  subject: 'FM&HM',      code: 'FM&HM',  faculty: 'Dr. A.M. Thakare (AMT)',        type: 'lecture',   label: 'Slot 1' },
    { time: '10:15–11:15', subject: 'ITPDE',       code: 'ITPDE',  faculty: 'Dr. Jagannath Nath (JN)',        type: 'lecture',   label: 'Slot 2' },
    { time: '11:15–11:30', subject: 'Short Break',                                                            type: 'break' },
    { time: '11:30–1:30',  subject: 'Practicals',  code: 'PP / FM&HM',
      faculty: 'S1: PP_SM  |  S2: FMHM_AMT  |  S3: PP_NG',                                                   type: 'practical', label: 'Slot 3–4 (2 hrs)' },
    { time: '1:30–2:15',   subject: 'Lunch Break',                                                            type: 'lunch' },
    { time: '2:15–3:15',   subject: 'DSA',         code: 'DSA',    faculty: 'Mr. Jaydeep Shinde (JS)',        type: 'lecture',   label: 'Slot 5' },
    { time: '3:15–4:15',   subject: 'LS',          code: 'ES',     faculty: 'Mr. Pravin Kale (PK)',           type: 'lecture',   label: 'Slot 6' },
    { time: '4:15–5:00',   subject: 'CNC Programming', code: 'CNC', faculty: 'Dr. Pratiksha Wagh (PW)',        type: 'lecture',   label: 'Slot 7' },
  ],

  Tue: [
    { time: '9:15–10:15',  subject: 'DSA',         code: 'DSA',    faculty: 'Mr. Jaydeep Shinde (JS)',        type: 'lecture',   label: 'Slot 1' },
    { time: '10:15–11:15', subject: 'ITPDE',       code: 'ITPDE',  faculty: 'Dr. Jagannath Nath (JN)',        type: 'lecture',   label: 'Slot 2' },
    { time: '11:15–11:30', subject: 'Short Break',                                                            type: 'break' },
    { time: '11:30–1:30',  subject: 'Practicals',  code: 'FM&HM / DSA / ET',
      faculty: 'S1: FMHM_AMT  |  S2: DSA_JS  |  S3: ET_SM',                                                  type: 'practical', label: 'Slot 3–4 (2 hrs)' },
    { time: '1:30–2:15',   subject: 'Lunch Break',                                                            type: 'lunch' },
    { time: '2:15–3:15',   subject: 'ET',          code: 'ET',     faculty: 'Dr. S.G. Mitkari (SM)',          type: 'lecture',   label: 'Slot 5' },
    { time: '3:15–4:15',   subject: 'Library',                                                                type: 'library',   label: 'Slot 6' },
    { time: '4:15–5:00',   subject: 'Practicals',  code: 'CNC',    faculty: 'S1: CNC Programming (PW) | S2: CNC Machining (GS)', type: 'practical',  label: 'Slot 7' },
  ],

  Wed: [
    { time: '9:15–10:15',  subject: 'EVS',         code: 'EVS',    faculty: 'Dr. D.S. Patil (DSP)',           type: 'lecture',   label: 'Slot 1' },
    { time: '10:15–11:15', subject: 'FM&HM',       code: 'FM&HM',  faculty: 'Dr. A.M. Thakare (AMT)',        type: 'lecture',   label: 'Slot 2' },
    { time: '11:15–11:30', subject: 'Short Break',                                                            type: 'break' },
    { time: '11:30–1:30',  subject: 'Practicals',  code: 'ET / PP / DSA',
      faculty: 'S1: ET_SM  |  S2: PP_NG  |  S3: DSA_JS',                                                      type: 'practical', label: 'Slot 3–4 (2 hrs)' },
    { time: '1:30–2:15',   subject: 'Lunch Break',                                                            type: 'lunch' },
    { time: '2:15–3:15',   subject: 'KOM',         code: 'KOM',    faculty: 'Dr. B.A. Phugate (BAP)',         type: 'lecture',   label: 'Slot 5' },
    { time: '3:15–4:15',   subject: 'LS',          code: 'ES',     faculty: 'Mr. Pravin Kale (PK)',           type: 'lecture',   label: 'Slot 6' },
    { time: '4:15–5:00',   subject: 'CNC Programming', code: 'CNC', faculty: 'Dr. Pratiksha Wagh (PW)',        type: 'lecture',   label: 'Slot 7' },
  ],

  Thu: [
    { time: '9:15–10:15',  subject: 'ET',          code: 'ET',     faculty: 'Dr. S.G. Mitkari (SM)',          type: 'lecture',   label: 'Slot 1' },
    { time: '10:15–11:15', subject: 'FM&HM',       code: 'FM&HM',  faculty: 'Dr. A.M. Thakare (AMT)',        type: 'lecture',   label: 'Slot 2' },
    { time: '11:15–11:30', subject: 'Short Break',                                                            type: 'break' },
    { time: '11:30–12:30', subject: 'ITPDE',       code: 'ITPDE',  faculty: 'Dr. Jagannath Nath (JN)',        type: 'lecture',   label: 'Slot 3' },
    { time: '12:30–1:30',  subject: 'KOM',         code: 'KOM',    faculty: 'Dr. B.A. Phugate (BAP)',         type: 'lecture',   label: 'Slot 4' },
    { time: '1:30–2:15',   subject: 'Lunch Break',                                                            type: 'lunch' },
    { time: '2:15–4:15',   subject: 'Practicals',  code: 'DSA / ET / PP',
      faculty: 'S1: DSA_JS  |  S2: ET_SM  |  S3: PP_NG',                                                      type: 'practical', label: 'Slot 5–6 (2 hrs)' },
    { time: '4:15–5:00',   subject: 'CNC Machining', code: 'CNC',   faculty: 'Dr. Gourav Sinha (GS)',          type: 'lecture',   label: 'Slot 7' },
  ],

  Fri: [
    { time: '9:15–10:15',  subject: 'KOM',         code: 'KOM',    faculty: 'Dr. B.A. Phugate (BAP)',         type: 'lecture',   label: 'Slot 1' },
    { time: '10:15–11:15', subject: 'DSA',         code: 'DSA',    faculty: 'Mr. Jaydeep Shinde (JS)',        type: 'lecture',   label: 'Slot 2' },
    { time: '11:15–11:30', subject: 'Short Break',                                                            type: 'break' },
    { time: '11:30–12:30', subject: 'ET',          code: 'ET',     faculty: 'Dr. S.G. Mitkari (SM)',          type: 'lecture',   label: 'Slot 3' },
    { time: '12:30–1:30',  subject: 'EVS',         code: 'EVS',    faculty: 'Dr. D.S. Patil (DSP)',           type: 'lecture',   label: 'Slot 4' },
    { time: '1:30–2:15',   subject: 'Lunch Break',                                                            type: 'lunch' },
    { time: '2:15–4:15',   subject: 'Practicals',  code: 'PP / FM&HM',
      faculty: 'S1: PP_SM  |  S2: PP_NG  |  S3: FMHM_AMT',                                                   type: 'practical', label: 'Slot 5–6 (2 hrs)' },
    { time: '4:15–5:00',   subject: 'CNC Machining', code: 'CNC',   faculty: 'Dr. Gourav Sinha (GS)',          type: 'lecture',   label: 'Slot 7' },
  ],

  Sat: [
    { time: '9:15–10:15',  subject: 'CNC Machining', code: 'CNC',   faculty: 'Dr. Gourav Sinha (GS)',          type: 'lecture',   label: 'Slot 1' },
    { time: '10:15–11:15', subject: 'CNC Programming', code: 'CNC', faculty: 'Dr. Pratiksha Wagh (PW)',        type: 'lecture',   label: 'Slot 2' },
    { time: '11:15–11:30', subject: 'Short Break',                                                            type: 'break' },
    { time: '11:30–1:30',  subject: 'Practicals',  code: 'CNC',    faculty: 'S2: CNC Programming (PW) | S1: CNC Machining (GS)', type: 'practical', label: 'Slot 3–4 (2 hrs)' },
    { time: '1:30–2:15',   subject: 'Lunch Break',                                                            type: 'lunch' },
    { time: '2:15–3:15',   subject: 'Extra Curricular Activity',                                              type: 'activity',  label: 'Slot 5' },
  ],
};



// ── API HELPER ───────────────────────────────────────────────
async function apiFetch(path, opts = {}) {
  try {
    const res = await fetch(API + path, opts);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch (e) {
    console.warn('API error:', path, e.message);
    return null;
  }
}

// ── ROUTING ──────────────────────────────────────────────────
const pages = ['home', 'memories', 'timetable', 'materials', 'questions', 'suggestions', 'about'];

function getCurrentPage() {
  const hash = location.hash.replace('#', '') || 'home';
  return pages.includes(hash) ? hash : 'home';
}

function navigate(page) {
  location.hash = page;
}
window.navigate = navigate;

function showPage(page) {
  pages.forEach(p => {
    document.getElementById(`page-${p}`)?.classList.toggle('hidden', p !== page);
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
  closeSidebar();

  // Load page data
  if (page === 'home') loadHome();
  else if (page === 'memories') loadMemories();

  else if (page === 'timetable') loadTimetable();
  else if (page === 'materials') loadMaterials();
  else if (page === 'questions') loadQuestions();
}

window.addEventListener('hashchange', () => showPage(getCurrentPage()));

// ── SIDEBAR TOGGLE (mobile) ───────────────────────────────────
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}
menuBtn?.addEventListener('click', openSidebar);
overlay?.addEventListener('click', closeSidebar);

// ── CAROUSEL ─────────────────────────────────────────────────
let carouselIndex = 0;
const slides = [
  { src: '/assets/photo1.png', caption: 'First Year — New Beginning, New Friends, New Dreams' },
  { src: '/assets/photo2.png', caption: 'Our Batch — College Days 2025' },
  { src: '/assets/photo3.png', caption: 'Good Times · Crazy Friends · Great Memories' },
];
let carouselTimer;

function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');
  if (!track || !dots) return;

  // Build slides
  track.innerHTML = slides.map((s, i) => `
    <div class="carousel-slide">
      <img src="${s.src}" alt="Memory ${i+1}" loading="${i === 0 ? 'eager' : 'lazy'}" />
      <div class="slide-caption">${s.caption}</div>
    </div>
  `).join('');

  // Build dots
  dots.innerHTML = slides.map((_, i) => `
    <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Slide ${i+1}"></button>
  `).join('');

  dots.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goSlide(+dot.dataset.i));
  });

  document.getElementById('carouselPrev')?.addEventListener('click', () => goSlide(carouselIndex - 1));
  document.getElementById('carouselNext')?.addEventListener('click', () => goSlide(carouselIndex + 1));

  startCarousel();
}

function goSlide(i) {
  carouselIndex = ((i % slides.length) + slides.length) % slides.length;
  const track = document.getElementById('carouselTrack');
  if (track) track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === carouselIndex);
  });
  restartCarousel();
}
function startCarousel() {
  carouselTimer = setInterval(() => goSlide(carouselIndex + 1), 4000);
}
function restartCarousel() {
  clearInterval(carouselTimer);
  startCarousel();
}

// ── COUNTDOWN TIMER ───────────────────────────────────────────
// ── COUNTDOWN TIMER ───────────────────────────────────────────
let masterInterval = null;
let activeTimers = [];

function parseSlotTime(timeStr) {
    // "9:15–10:15" or "9:15-10:15"
    const parts = timeStr.replace('–', '-').split('-');
    const toMins = t => {
        const [h, m] = t.trim().split(':').map(Number);
        return h * 60 + m;
    };
    return { startMins: toMins(parts[0]), endMins: toMins(parts[1]) };
}

function fmtCountdown(totalSecs) {
    if (totalSecs <= 0) return '00:00:00';
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Naya startCountdownTo jo multiple timers support karta hai
function startCountdownTo(targetMins, labelEl, displayEl) {
    activeTimers.push({ targetMins, labelEl, displayEl });

    updateAllTimers(); // First tick immediately

    if (!masterInterval) {
        masterInterval = setInterval(updateAllTimers, 1000);
    }
}

// Ek single master function jo saare timers ko update karega
function updateAllTimers() {
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes();
    const nowSecs = now.getSeconds();
    let shouldReload = false;

    // Memory leak rokne ke liye jo elements page se hat gaye hain unhe filter kar do
    activeTimers = activeTimers.filter(timer => document.body.contains(timer.displayEl));

    if (activeTimers.length === 0) {
        clearInterval(masterInterval);
        masterInterval = null;
        return;
    }

    activeTimers.forEach(timer => {
        const diffSecs = (timer.targetMins - nowMins) * 60 - nowSecs;

        if (diffSecs <= 0) {
            if (timer.displayEl && timer.displayEl.textContent !== '00:00:00') {
                timer.displayEl.textContent = '00:00:00';
                shouldReload = true; // Koi class start ho gayi hai toh reload flag ON karo
            }
        } else {
            if (timer.displayEl) {
                timer.displayEl.textContent = fmtCountdown(diffSecs);
            }
        }
    });

    // Agar kisi ek lecture ka time khatam hua hai, toh loadHome() wapas call karein
    if (shouldReload) {
        activeTimers = []; // Purane array ko clear karein
        clearInterval(masterInterval);
        masterInterval = null;
        loadHome();
    }
}

// ── HOME PAGE ─────────────────────────────────────────────────
async function loadHome() {
  initCarousel();
  const container = document.getElementById('upcomingClasses');
  if (!container) return;

  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const today = days[new Date().getDay()];
  const slots = TIMETABLE[today] || [];

  const activeSlots = slots.filter(s => s.type !== 'break' && s.type !== 'lunch');

  if (!activeSlots.length) {
    container.innerHTML = `<div class="empty-state">NO CLASSES FOR TODAY "TODAY IS FUNDAY"<div class="empty-icon">&#9881;</div></div>`;
    return;
  }

  const now = new Date();
  const nowMins = now.getHours()*60 + now.getMinutes();

  // Find upcoming: first slot that hasn't ended yet
  let upcoming = null;
  let upcomingIdx = -1;
  for (let i = 0; i < activeSlots.length; i++) {
    const { endMins } = parseSlotTime(activeSlots[i].time);
    if (endMins > nowMins) { upcoming = activeSlots[i]; upcomingIdx = i; break; }
  }

  if (!upcoming) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">&#10003;</div>All classes done for today — great job!</div>`;
    return;
  }

  const { startMins, endMins } = parseSlotTime(upcoming.time);
  const inProgress = nowMins >= startMins && nowMins < endMins;
  const targetMins = inProgress ? endMins : startMins;
  const statusLabel = inProgress ? 'IN PROGRESS' : 'UPCOMING LECTURE';
  const countdownLabel = inProgress ? 'ends in' : 'starts in';

  const fullName = SUBJECT_FULL[upcoming.subject] || upcoming.subject;

  // Type badge
  let typeBadge = 'LECTURE';
  if (upcoming.type === 'practical') typeBadge = 'LAB';
  else if (upcoming.type === 'library') typeBadge = 'LIBRARY';
  else if (upcoming.type === 'activity') typeBadge = 'ACTIVITY';

  // Next class (skip breaks)
  const nextSlot = activeSlots[upcomingIdx + 1] || null;
  const nextFull = nextSlot ? (SUBJECT_FULL[nextSlot.subject] || nextSlot.subject) : null;

  container.innerHTML = `
    <div class="ulc-card${inProgress ? ' ulc-inprogress' : ''}">
      <div class="ulc-top-row">
        <span class="ulc-status">${statusLabel}</span>
        <span class="ulc-type-badge">${typeBadge}</span>
        <span class="ulc-room">&#9670; Room 502A</span>
      </div>
      <div class="ulc-subject-full">${fullName}</div>
      <div class="ulc-time-row">
        <span class="ulc-time">${upcoming.time}</span>
        ${upcoming.faculty ? `<span class="ulc-faculty">&#128100; ${upcoming.faculty}</span>` : ''}
      </div>
      <div class="ulc-countdown-wrap">
        <div class="ulc-countdown-label">${countdownLabel}</div>
        <div class="ulc-countdown" id="countdownDisplay">00:00:00</div>
      </div>
    </div>
    ${nextFull ? `
    <div class="ulc-next-hint">
      <span class="ulc-next-label">NEXT CLASS</span>
      <span class="ulc-next-name">${nextFull}</span>
      <span class="ulc-next-time">${nextSlot.time}</span>
    </div>` : ''}
  `;

  startCountdownTo(targetMins, null, document.getElementById('countdownDisplay'));
}

// ── MEMORIES PAGE ─────────────────────────────────────────────
async function loadMemories() {
  const extra = document.getElementById('galleryExtra');
  if (!extra) return;

  const data = await apiFetch('/gallery');
  if (!data || !data.length) { extra.innerHTML = ''; return; }

  extra.innerHTML = `
    <div class="gallery-grid" style="margin-top:12px">
      ${data.map(p => `
        <div class="gallery-item">
          <img src="${p.url}" alt="${p.caption || 'Memory'}" loading="lazy" />
        </div>
      `).join('')}
    </div>
  `;
}

// ── TIMETABLE PAGE ────────────────────────────────────────────
let activeTTDay = 'Mon';

function loadTimetable() {
  // Attach tab listeners once
  const tabs = document.querySelectorAll('.day-tab');
  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTTDay = tab.dataset.day;
      renderDaySlots(activeTTDay);
    };
  });

  // Auto-select today
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const today = days[new Date().getDay()];
  if (TIMETABLE[today]) {
    activeTTDay = today;
    tabs.forEach(t => t.classList.toggle('active', t.dataset.day === today));
  }

  renderDaySlots(activeTTDay);
}

function renderDaySlots(day) {
  const container = document.getElementById('timetableContent');
  if (!container) return;
  const slots = TIMETABLE[day] || [];

  container.innerHTML = `<div class="slots-list">
    ${slots.map(slot => {
      if (slot.type === 'break') return `
        <div class="slot-row">
          <div class="slot-time">${slot.time}</div>
          <div class="slot-content slot-break">
            <span class="slot-break-label">SHORT BREAK</span>
          </div>
        </div>`;
      if (slot.type === 'lunch') return `
        <div class="slot-row">
          <div class="slot-time">${slot.time}</div>
          <div class="slot-content slot-lunch">
            <span class="slot-break-label">LUNCH BREAK</span>
          </div>
        </div>`;

      let badgeHtml = '';
      if (slot.type === 'lecture')   badgeHtml = `<span class="slot-badge badge-lecture">LECTURE</span>`;
      if (slot.type === 'practical') badgeHtml = `<span class="slot-badge badge-practical">LAB</span>`;
      if (slot.type === 'library')   badgeHtml = `<span class="slot-badge badge-library">LIBRARY</span>`;
      if (slot.type === 'activity')  badgeHtml = `<span class="slot-badge badge-activity">ACTIVITY</span>`;

      return `
        <div class="slot-row">
          <div class="slot-time">${slot.time}</div>
          <div class="slot-content">
            <div class="slot-subject">${slot.subject} ${badgeHtml}</div>
            ${slot.faculty ? `<div class="slot-detail">${slot.faculty}</div>` : ''}
          </div>
        </div>`;
    }).join('')}
  </div>`;
}

// ── MATERIALS PAGE ────────────────────────────────────────────
const SUBJECTS = [
  { code: 'FM&HM', full: 'Fluid Mechanics & Hydraulic Machines' },
  { code: 'ET',    full: 'Engineering Thermodynamics' },
  { code: 'KOM',   full: 'Kinematics of Machines' },
  { code: 'DSA',   full: 'Data Structures & Algorithms' },
  { code: 'ITPDE', full: 'Integral Transform & Partial Diff. Eq.' },
  { code: 'PP',    full: 'Python Programming' },
  { code: 'EVS',   full: 'Environmental Science' },
  { code: 'ES',    full: 'Life Skills' },
];

/* ============================================================
   STUDY MATERIAL LIST — SIRF YAHAN EDIT KARO NOTES/PYQ ADD KARNE KE LIYE
  
   ============================================================ */
const MATERIALS_DATA = [
   {
    subject: 'FM&HM',
    type: 'notes',
    title: 'Unit 1 ',
   fileUrl: 'https://drive.google.com/file/d/1ev-YLeR_2FJMLwzv3HxXCdu7xUFDzWk0/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
  {
    subject: 'FM&HM',
    type: 'notes',
    title: 'Unit 1(Handwritten) ',
   fileUrl: 'https://drive.google.com/file/d/1ev-YLeR_2FJMLwzv3HxXCdu7xUFDzWk0/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
   {
    subject: 'FM&HM',
    type: 'notes',
    title: 'Unit 2(Handwritten) ',
   fileUrl: 'https://drive.google.com/file/d/1HZ1SWsrVuqtey-5J0KzFxoYZvTZBrgP9/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
   {
    subject: 'FM&HM',
    type: 'notes',
    title: 'TAE -1 (Answers) ',
   fileUrl: 'https://drive.google.com/file/d/1HZ1SWsrVuqtey-5J0KzFxoYZvTZBrgP9/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
  /* ============================================================
   STUDY MATERIAL LIST — SIRF YAHAN EDIT KARO NOTES/PYQ ADD KARNE KE LIYE
  
   ============================================================ */
   {
    subject: 'ET',
    type: 'notes',
    title: 'Unit 1(Handwritten) ',
   fileUrl: 'https://drive.google.com/file/d/1f4Hh_2UyEV2QhG7fR2gKGnCz5u1f-fc2/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
   /* ============================================================
   STUDY MATERIAL LIST — SIRF YAHAN EDIT KARO NOTES/PYQ ADD KARNE KE LIYE
  
   ============================================================ */
   
  {
    subject: 'ITPDE',
    type: 'notes',
    title: '30 Qustions Answers',
   fileUrl: 'https://drive.google.com/file/d/1qSmNvBb2EUrxB0wlSErkHrhReM5u3xfv/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
   {
    subject: 'ITPDE',
    type: 'notes',
    title: 'Unit 1(handwritten)',
   fileUrl: 'https://drive.google.com/file/d/1qlXobpqklxmI29uF1hs3es-5KmuADAru/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
   {
    subject: 'ITPDE',
    type: 'notes',
    title: 'Unit 2(handwritten)',
   fileUrl: 'https://drive.google.com/file/d/192J27gcY4JwmVuu4PwbH2pw6lMFMKvEd/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
   /* ============================================================
   STUDY MATERIAL LIST — SIRF YAHAN EDIT KARO NOTES/PYQ ADD KARNE KE LIYE
  
   ============================================================ */
   
  {subject: 'PP',
    type: 'notes',
    title: 'Assignment No-1(S1) ',
   fileUrl: 'https://drive.google.com/file/d/1wn3lTMhIt27qDNZmMsNP4nHAD-7jl7Wk/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
 {
    subject: 'PP',
    type: 'notes',
    title: 'Assignment No-2(S1) ',
   fileUrl: 'https://drive.google.com/file/d/1XM6j2udeLZxszUn-GafN2yTepIJdSGgv/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
  /* ============================================================
   STUDY MATERIAL LIST — SIRF YAHAN EDIT KARO NOTES/PYQ ADD KARNE KE LIYE
  
   ============================================================ */
   {
    subject: 'DSA',
    type: 'notes',
    title: 'Unit 1(Handwritten) ',
   fileUrl: 'https://drive.google.com/file/d/1OWwF6UMiVC3lGfM9G9ah0iPFD7MQpjkN/view?usp=drivesdk',
    uploadedBy: ' Admin',
   },
    /* ============================================================
   STUDY MATERIAL LIST — SIRF YAHAN EDIT KARO NOTES/PYQ ADD KARNE KE LIYE
  
   ============================================================ */
   {
    subject: 'KOM',
    type: 'notes',
    title: 'Unit 1(handwritten)',
   fileUrl: 'https://drive.google.com/file/d/1IOAoPpCSn3ybGf8xO3s2cZ4gDi2cWv-M/view?usp=drivesdk',
    uploadedBy: 'Admin',
   },
  // {
  //   subject: 'ET',
  //   type: 'pyqs',
  //   title: '2024 PYQ Paper',
  //   fileUrl: 'https://drive.google.com/file/d/XXXXXXXXXXXXXXX/view',
  //   uploadedBy: 'Admin',
  // },
];

let materialsData = [];
let matSubjectFilter = '';
let matListenersAdded = false;

async function loadMaterials() {
  const content = document.getElementById('materialsContent');
  if (!content) return;

  // Koi API/database nahi — seedha hardcoded MATERIALS_DATA use hota hai
  materialsData = MATERIALS_DATA;
  renderMaterialsBySubject();

  if (!matListenersAdded) {
    matListenersAdded = true;

    document.getElementById('filterSubject')?.addEventListener('change', e => {
      matSubjectFilter = e.target.value;
      renderMaterialsBySubject();
    });
  }
}

// ── TOAST ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}
window.tapMaterialTile = function(type, subCode, hasItems) {
  if (!hasItems) {
    showToast(`🔜 ${subCode} ${type} — Upload ho raha hai jald hi!`);
  }
};

function renderMaterialItem(m) {
  const tag = m.type === 'notes' ? 'NOTES' : 'PYQ';
  const tagClass = m.type === 'notes' ? 'tag-notes' : 'tag-pyq';
  return `
    <div class="smc-item">
      <span class="smc-item-tag ${tagClass}">${tag}</span>
      <span class="smc-item-title">${escHtml(m.title)}</span>
      <span class="smc-item-by">${escHtml(m.uploadedBy || 'Admin')}</span>
      ${m.fileUrl ? `<a class="mat-link" href="${m.fileUrl}" target="_blank" rel="noopener">OPEN ↗</a>` : ''}
    </div>`;
}

function renderMaterialsBySubject() {
  const content = document.getElementById('materialsContent');
  if (!content) return;

  const subjects = matSubjectFilter
    ? SUBJECTS.filter(s => s.code === matSubjectFilter)
    : SUBJECTS;

  content.innerHTML = subjects.map(sub => {
    const notes = materialsData.filter(m => m.subject === sub.code && m.type === 'notes');
    const pyqs  = materialsData.filter(m => m.subject === sub.code && m.type === 'pyqs');
    const allItems = [...notes, ...pyqs];


    return `
      <div class="smc-card">
        <div class="smc-header">
          <span class="smc-code">${sub.code}</span>
          <span class="smc-full">${sub.full}</span>
        </div>
        <div class="smc-tiles">
          <div class="smc-tile smc-tile-notes" onclick="tapMaterialTile('NOTES', '${sub.code}', ${notes.length > 0})">
            <div class="smc-tile-icon">📝</div>
            <div class="smc-tile-label">NOTES</div>
            <div class="smc-tile-count">${notes.length > 0 ? notes.length + ' files' : 'Tap to check'}</div>
          </div>
          <div class="smc-tile smc-tile-pyq" onclick="tapMaterialTile('PYQ', '${sub.code}', ${pyqs.length > 0})">
            <div class="smc-tile-icon">📋</div>
            <div class="smc-tile-label">PYQ</div>
            <div class="smc-tile-count">${pyqs.length > 0 ? pyqs.length + ' files' : 'Tap to check'}</div>
          </div>
        </div>
        ${allItems.length ? `
        <div class="smc-items-list">
          ${allItems.map(renderMaterialItem).join('')}
        </div>` : ''}
      </div>`;
  }).join('');
}

// ── QUESTIONS PAGE ────────────────────────────────────────────
async function loadQuestions() {
  const list = document.getElementById('questionsList');
  if (!list) return;

  const data = await apiFetch('/questions');
  renderQuestions(data || FALLBACK_QUESTIONS, list);

  // Ask form
  document.getElementById('askForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('askSubmit');
    const msg = document.getElementById('askMsg');
    const fd = new FormData(e.target);

    btn.disabled = true; btn.textContent = 'POSTING...';
    const res = await apiFetch('/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: fd.get('question'),
        askedBy: fd.get('askedBy'),
        subject: fd.get('subject') || undefined,
      }),
    });
    btn.disabled = false; btn.textContent = 'POST QUESTION';

    if (res) {
      msg.className = 'form-msg success';
      msg.textContent = 'Question posted! Your batchmates can now answer.';
      e.target.reset();
      const fresh = await apiFetch('/questions');
      renderQuestions(fresh || [res, ...FALLBACK_QUESTIONS], list);
      setTimeout(() => { msg.className = 'form-msg hidden'; }, 3000);
    } else {
      msg.className = 'form-msg error';
      msg.textContent = 'Could not post. Check connection and try again.';
    }
  });
}

function renderQuestions(questions, container) {
  if (!questions.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">&#9651;</div>No questions yet. Be the first to ask!</div>`;
    return;
  }

  container.innerHTML = questions.map((q, idx) => {
    const answers = q.answers || [];
    return `
      <div class="question-card" id="qcard-${q.id || idx}">
        <div class="q-header" onclick="toggleQ('${q.id || idx}')">
          <div>
            <div class="q-text">${escHtml(q.question)}</div>
            <div class="q-meta">
              <span class="q-author">${escHtml(q.askedBy)}</span>
              ${q.subject ? `<span class="q-subject">${escHtml(q.subject)}</span>` : ''}
            </div>
          </div>
          <div style="text-align:right;min-width:70px;">
            <div class="q-ans-count">${answers.length} ans</div>
            <div class="q-toggle" id="qtoggle-${q.id || idx}">&#9660;</div>
          </div>
        </div>
        <div class="q-body" id="qbody-${q.id || idx}">
          <div class="answers-list">
            ${answers.length
              ? answers.map(a => `
                  <div class="answer-item">
                    <div class="ans-text">${escHtml(a.answer)}</div>
                    <div class="ans-by">— ${escHtml(a.answeredBy)}</div>
                  </div>`).join('')
              : `<div class="no-answers">No answers yet — be the first!</div>`}
          </div>
          <div class="answer-form">
            <input class="answer-input" placeholder="Type your answer..." id="ainput-${q.id || idx}" />
            <input class="answer-name" placeholder="Your name" id="aname-${q.id || idx}" />
            <button class="ans-submit" onclick="submitAnswer('${q.id || idx}')">ANSWER</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.toggleQ = function(id) {
  const body = document.getElementById(`qbody-${id}`);
  const icon = document.getElementById(`qtoggle-${id}`);
  if (!body) return;
  const open = body.classList.toggle('open');
  if (icon) icon.innerHTML = open ? '&#9650;' : '&#9660;';
};

window.submitAnswer = async function(qId) {
  const input = document.getElementById(`ainput-${qId}`);
  const nameEl = document.getElementById(`aname-${qId}`);
  if (!input || !nameEl) return;
  const answer = input.value.trim();
  const answeredBy = nameEl.value.trim();
  if (!answer) { input.focus(); return; }
  if (!answeredBy) { nameEl.focus(); return; }

  const res = await apiFetch(`/questions/${qId}/answers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer, answeredBy }),
  });

  if (res) {
    input.value = '';
    nameEl.value = '';
    const list = document.getElementById('questionsList');
    const fresh = await apiFetch('/questions');
    if (fresh && list) renderQuestions(fresh, list);
  }
};


// ── SUGGESTIONS ───────────────────────────────────────────────
function initSuggestions() {
  document.getElementById('suggestForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('suggestSubmit');
    const msg = document.getElementById('suggestMsg');
    const fd = new FormData(e.target);

    btn.disabled = true; btn.textContent = 'SUBMITTING...';
    const res = await apiFetch('/suggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        suggestion: fd.get('suggestion'),
        submittedBy: fd.get('submittedBy') || undefined,
      }),
    });
    btn.disabled = false; btn.textContent = 'SUBMIT SUGGESTION';

    if (res) {
      msg.className = 'form-msg success';
      msg.textContent = 'Thank you! Your suggestion has been recorded.';
      e.target.reset();
      setTimeout(() => { msg.className = 'form-msg hidden'; }, 4000);
    } else {
      msg.className = 'form-msg error';
      msg.textContent = 'Could not submit. Please try again.';
    }
  });
}

// ── HELPERS ───────────────────────────────────────────────────
function escHtml(str) {
  return String(str || '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// ── DARK / LIGHT THEME TOGGLE ────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('syme-theme') || 'light';
  applyTheme(saved);

  const toggle = (e) => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };
  document.getElementById('themeToggle')?.addEventListener('click', toggle);
  document.getElementById('topbarThemeToggle')?.addEventListener('click', toggle);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('syme-theme', theme);
  const icon        = document.getElementById('themeIcon');
  const label       = document.getElementById('themeLabel');
  const topbarIcon  = document.getElementById('topbarThemeIcon');
  if (theme === 'light') {
    if (icon)       icon.textContent  = '☀';
    if (label)      label.textContent = 'Dark Mode';
    if (topbarIcon) topbarIcon.textContent = '☀';
  } else {
    if (icon)       icon.textContent  = '☾';
    if (label)      label.textContent = 'Light Mode';
    if (topbarIcon) topbarIcon.textContent = '☾';
  }
}

// ── INIT ──────────────────────────────────────────────────────
function init() {
  initTheme();
  initSuggestions();
  showPage(getCurrentPage());
}

document.addEventListener('DOMContentLoaded', init);
