// ==========================================
// OWSM_SACHIN — SOUTH KOLKATA PANDAL EXPLORER
// JavaScript: Progress, XP, Badges, Search,
// Filters, Routes, Sound & Local Leaderboard
// ==========================================

const pandals = [
  {n:1,day:1,name:"Ekdalia Evergreen Club",location:"Ekdalia Road, Ballygunge",transport:"Ballygunge Junction / Metro",distance:"Start"},
  {n:2,day:1,name:"Falguni Sangha",location:"Ballygunge area",transport:"Walk / Auto",distance:"0.4–0.8 km"},
  {n:3,day:1,name:"Singhi Park Sarbojanin",location:"Dover Lane / Ramani Chatterjee Road",transport:"Metro / Auto",distance:"0.8–1.2 km"},
  {n:4,day:1,name:"Hindustan Club",location:"Gariahat area",transport:"Walk / Auto",distance:"0.7–1.0 km"},
  {n:5,day:1,name:"Hindustan Park Sarbojanin",location:"Golpark / Hindustan Park",transport:"Metro / Auto",distance:"0.5–0.8 km"},
  {n:6,day:1,name:"Ballygunge Cultural Association",location:"20 Lake View Road",transport:"Metro / Auto",distance:"0.7–1.0 km"},
  {n:7,day:1,name:"Samaj Sebi Sangha",location:"Lake View Road",transport:"Walk / Auto",distance:"0.3–0.7 km"},
  {n:8,day:1,name:"Tridhara Sammilani",location:"Deshapriya Park / Rashbehari",transport:"Kalighat Metro",distance:"0.8–1.2 km"},
  {n:9,day:1,name:"Deshapriya Park",location:"Hazra / Deshapriya Park",transport:"Kalighat Metro",distance:"0.5–0.9 km"},
  {n:10,day:1,name:"Maddox Square",location:"Garcha / Ballygunge",transport:"Walk / Auto",distance:"1–2 km"},
  {n:11,day:1,name:"Ballygunge 21 Pally",location:"Bondel Road area",transport:"Walk / Auto",distance:"1–2 km"},
  {n:12,day:1,name:"Ballygunge Station Sarbojanin",location:"Ballygunge Station area",transport:"Ballygunge Junction",distance:"1–2 km"},

  {n:13,day:2,name:"Badamtala Ashar Sangha",location:"Nepal Bhattacharya Street, Kalighat",transport:"Kalighat Metro",distance:"Start"},
  {n:14,day:2,name:"66 Pally Sarbojanin",location:"Kalighat area",transport:"Kalighat Metro",distance:"0.2–0.5 km"},
  {n:15,day:2,name:"64 Pally Durga Puja",location:"Satish Mukherjee Road",transport:"Kalighat Metro",distance:"0.5–1 km"},
  {n:16,day:2,name:"Nepal Bhattacharya Street Club",location:"Nepal Bhattacharya Street",transport:"Kalighat Metro",distance:"0.2–0.5 km"},
  {n:17,day:2,name:"Shibmandir Sarbojanin",location:"Lake Temple Road",transport:"Metro / Auto",distance:"1–2 km"},
  {n:18,day:2,name:"Mudiali Club",location:"S.R. Das Road, Mudiali",transport:"Rabindra Sarobar Metro",distance:"1–2 km"},
  {n:19,day:2,name:"Paddapukur Barowari",location:"Paddapukur / Bhowanipore",transport:"Metro / Auto",distance:"2–3 km"},
  {n:20,day:2,name:"68 Pally",location:"Indra Roy Road / Bakul Bagan",transport:"Metro / Auto",distance:"1–2 km"},
  {n:21,day:2,name:"Bhawanipur 75 Palli",location:"Bhowanipore",transport:"Metro / Auto",distance:"1–2 km"},
  {n:22,day:2,name:"Chakraberia Sarbojanin",location:"Chakraberia, Bhowanipore",transport:"Metro / Auto",distance:"1–2 km"},
  {n:23,day:2,name:"Harish Park",location:"Bhowanipore area",transport:"Metro / Auto",distance:"1–2 km"},
  {n:24,day:2,name:"Alipore Sarbojanin",location:"Alipore",transport:"Bus / Auto",distance:"2–4 km"},
  {n:25,day:2,name:"Chetla Agrani Club",location:"Chetla",transport:"Bus / Auto",distance:"2–3 km"},
  {n:26,day:2,name:"Suruchi Sangha",location:"New Alipore",transport:"Rail / Auto",distance:"2–4 km"},

  {n:27,day:3,name:"Lake Gardens Sarbojanin",location:"Lake Gardens",transport:"Rabindra Sarobar / Local Rail",distance:"Start"},
  {n:28,day:3,name:"Jodhpur Park Sarbojanin",location:"Jodhpur Park",transport:"Auto / Bus",distance:"1–2 km"},
  {n:29,day:3,name:"Jodhpur Park 95 Palli",location:"Jodhpur Park",transport:"Walk / Auto",distance:"1–2 km"},
  {n:30,day:3,name:"Selimpur Pally",location:"Selimpur",transport:"Walk / Auto",distance:"1–2 km"},
  {n:31,day:3,name:"Jadavpur Athletic Club",location:"Jadavpur",transport:"Jadavpur Rail / Auto",distance:"2–3 km"},
  {n:32,day:3,name:"Jadavpur Adhibasi Brinda",location:"Jadavpur area",transport:"Rail / Auto",distance:"1–2 km"},
  {n:33,day:3,name:"Baghajatin Tarun Sangha",location:"Baghajatin",transport:"Baghajatin Rail / Auto",distance:"2–3 km"},
  {n:34,day:3,name:"Baghajatin A Block",location:"Baghajatin",transport:"Walk / Auto",distance:"0.5–1.5 km"},
  {n:35,day:3,name:"Bosepukur Sitala Mandir",location:"Kasba / Bosepukur",transport:"Auto / Bus",distance:"3–5 km"},
  {n:36,day:3,name:"Bosepukur Talbagan",location:"Kasba / Bosepukur",transport:"Walk / Auto",distance:"0.5–1 km"},
  {n:37,day:3,name:"Rajdanga Naba Uday Sangha",location:"Rajdanga",transport:"Auto / Bus",distance:"2–3 km"},
  {n:38,day:3,name:"Kasba Sarbojanin",location:"Kasba",transport:"Auto / Bus",distance:"1–2 km"},
  {n:39,day:3,name:"Ajeya Sanghati",location:"Kasba area",transport:"Walk / Auto",distance:"1–2 km"},
  {n:40,day:3,name:"Santoshpur Trikon Park",location:"Santoshpur Avenue",transport:"Metro / Auto",distance:"3–5 km"},
  {n:41,day:3,name:"Santoshpur Lake Pally",location:"Santoshpur",transport:"Walk / Auto",distance:"1–2 km"},
  {n:42,day:3,name:"Santoshpur Avenue Sarbojanin",location:"Santoshpur Avenue",transport:"Walk / Auto",distance:"0.5–1.5 km"},
  {n:43,day:3,name:"Santoshpur Adhibasi Brinda",location:"Santoshpur",transport:"Walk / Auto",distance:"1–2 km"},
  {n:44,day:3,name:"Naktala Udayan Sangha",location:"Naktala",transport:"Metro / Auto",distance:"4–6 km"},
  {n:45,day:3,name:"Naktala Sarbojanin",location:"Naktala",transport:"Walk / Auto",distance:"1–2 km"},
  {n:46,day:3,name:"Tollygunge Agragami",location:"Tollygunge",transport:"Mahanayak Uttam Kumar Metro",distance:"2–4 km"},
  {n:47,day:3,name:"Naba Durga",location:"Garia area",transport:"Metro / Auto",distance:"4–6 km"},
  {n:48,day:3,name:"Shakti Sangha",location:"Haltu / Purbachal area",transport:"Bus / Auto",distance:"3–5 km"},
  {n:49,day:3,name:"Ballygunge Cultural Association (Revisit)",location:"Lake View Road",transport:"Metro / Auto",distance:"Optional"},
  {n:50,day:3,name:"Ekdalia Evergreen Club (Revisit)",location:"Ekdalia Road, Ballygunge",transport:"Metro / Auto",distance:"Optional"}
];

// ------------------------------------------
// WEBSITE SETTINGS
// ------------------------------------------

const STORAGE_KEY = "southKolkataPandalCompleted2026";
const PLAYER_KEY = "southKolkataPandalPlayer2026";
const LEADER_KEY = "southKolkataPandalLeaderboard2026";
const SOUND_KEY = "southKolkataPandalSound2026";

let activeDay = "all";
let query = "";
let completed = new Set();

try {
  completed = new Set(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").map(Number)
  );
} catch (error) {
  completed = new Set();
}

const grid = document.getElementById("pandal-grid");
const empty = document.getElementById("empty");

// ------------------------------------------
// SAVE PROGRESS
// ------------------------------------------

function saveCompleted() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

function updateProgress() {
  const total = pandals.length;
  const done = completed.size;
  const percent = Math.round((done / total) * 100);

  const bar = document.getElementById("progress-fill");
  const label = document.getElementById("progress-label");
  const remaining = document.getElementById("remaining-count");

  if (bar) bar.style.width = percent + "%";
  if (label) label.textContent = `${done} / ${total} pandals completed · ${percent}%`;
  if (remaining) remaining.textContent = `${total - done} remaining`;
}

// ------------------------------------------
// PLAYER PROFILE
// ------------------------------------------

function getPlayer() {
  return localStorage.getItem(PLAYER_KEY) || "owsm_sachin";
}

const playerInput = document.getElementById("player-name");

if (playerInput) {
  playerInput.value = getPlayer();
}

document.getElementById("save-player")?.addEventListener("click", () => {
  const name = (playerInput?.value || "").trim().slice(0, 22) || "owsm_sachin";

  localStorage.setItem(PLAYER_KEY, name);

  if (playerInput) playerInput.value = name;

  updateScore();

  const button = document.getElementById("save-player");

  if (button) {
    button.textContent = "✓ Saved";
    setTimeout(() => button.textContent = "Save Player", 1100);
  }
});

// ------------------------------------------
// SOUND EFFECT
// ------------------------------------------

let soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
let audioContext = null;

function playRewardSound() {
  if (!soundEnabled) return;

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    audioContext = audioContext || new AudioCtx();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const now = audioContext.currentTime;

    [523.25, 659.25, 783.99].forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = now + index * 0.09;

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.11, start + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.19);

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start(start);
      oscillator.stop(start + 0.21);
    });
  } catch (error) {
    console.log("Sound unavailable");
  }
}

function updateSoundButton() {
  const button = document.getElementById("sound-toggle");
  if (!button) return;

  button.textContent = soundEnabled ? "🔊 Sound ON" : "🔇 Sound OFF";
  button.classList.toggle("muted", !soundEnabled);
  button.setAttribute("aria-pressed", String(soundEnabled));
}

document.getElementById("sound-toggle")?.addEventListener("click", () => {
  soundEnabled = !soundEnabled;

  localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");

  updateSoundButton();

  if (soundEnabled) playRewardSound();
});

// ------------------------------------------
// XP, LEVELS AND BADGES
// ------------------------------------------

function updateScore() {
  const totalXP = completed.size * 20;
  const level = Math.floor(totalXP / 100) + 1;
  const xpIntoLevel = totalXP % 100;
  const xpLeft = 100 - xpIntoLevel;

  let rank = "🌱 Beginner Explorer";

  if (totalXP >= 1000) rank = "🏆 Pandal Master";
  else if (totalXP >= 500) rank = "✨ Puja Champion";
  else if (totalXP >= 200) rank = "🌟 Route Explorer";
  else if (totalXP >= 100) rank = "🔥 Super Visitor";

  const score = document.getElementById("score-total");

  if (score) {
    score.textContent = totalXP;
    score.classList.remove("score-pop");
    void score.offsetWidth;
    score.classList.add("score-pop");
  }

  const levelElement = document.getElementById("score-level");
  const nextLevel = document.getElementById("next-level");
  const levelFill = document.getElementById("level-fill");
  const rankElement = document.getElementById("score-rank");

  if (levelElement) levelElement.textContent = level;
  if (nextLevel) {
    nextLevel.textContent =
      totalXP >= 1000 ? "MAX RANK UNLOCKED" : `${xpLeft} XP to next level`;
  }

  if (levelFill) levelFill.style.width = xpIntoLevel + "%";
  if (rankElement) rankElement.textContent = rank;

  function unlockBadge(id, unlocked, label) {
    const element = document.getElementById(id);
    if (!element) return;

    element.classList.toggle("unlocked", unlocked);
    element.textContent = (unlocked ? "🏅 " : "🔒 ") + label;
  }

  unlockBadge("badge-first", completed.size >= 1, "First Pandal");
  unlockBadge("badge-ten", completed.size >= 10, "10 Stops");
  unlockBadge("badge-half", completed.size >= 25, "Halfway Hero");
  unlockBadge("badge-master", completed.size >= 50, "Pandal Master");

  saveLeaderboardScore();
  renderLeaderboard();
}

// ------------------------------------------
// LEADERBOARD — THIS DEVICE ONLY
// ------------------------------------------

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function saveLeaderboardScore() {
  try {
    const board = JSON.parse(localStorage.getItem(LEADER_KEY) || "[]");
    const name = getPlayer();
    const xp = completed.size * 20;

    const existing = board.find(
      player => player.name.toLowerCase() === name.toLowerCase()
    );

    if (existing) {
      existing.xp = Math.max(existing.xp, xp);
      existing.stops = Math.max(existing.stops, completed.size);
    } else {
      board.push({ name, xp, stops: completed.size });
    }

    board.sort((a, b) => b.xp - a.xp || b.stops - a.stops);

    localStorage.setItem(LEADER_KEY, JSON.stringify(board.slice(0, 10)));
  } catch (error) {
    console.log("Leaderboard could not be saved");
  }
}

function renderLeaderboard() {
  const boardElement = document.getElementById("leaderboard");
  if (!boardElement) return;

  let board = [];

  try {
    board = JSON.parse(localStorage.getItem(LEADER_KEY) || "[]");
  } catch (error) {
    board = [];
  }

  const myName = getPlayer();
  const myXP = completed.size * 20;

  if (!board.some(p => p.name.toLowerCase() === myName.toLowerCase())) {
    board.push({
      name: myName,
      xp: myXP,
      stops: completed.size
    });
  }

  board.sort((a, b) => b.xp - a.xp || b.stops - a.stops);

  boardElement.innerHTML = board.slice(0, 10).map((player, index) => {
    const isMe = player.name.toLowerCase() === myName.toLowerCase();
    const medal = ["🥇", "🥈", "🥉"][index] || `#${index + 1}`;

    return `
      <div class="leaderboard-row ${isMe ? "current" : ""}">
        <div class="leader-medal">${medal}</div>
        <div>
          <div class="leader-name">
            ${escapeHTML(player.name)}${isMe ? " · YOU" : ""}
          </div>
          <div class="leader-sub">
            ${player.stops} stops completed
          </div>
        </div>
        <div class="leader-xp">${player.xp} XP</div>
      </div>
    `;
  }).join("");
}

// ------------------------------------------
// PANDAL CARDS
// ------------------------------------------

function render() {
  if (!grid) return;

  const filtered = pandals.filter(pandal => {
    const matchesDay =
      activeDay === "all" || String(pandal.day) === activeDay;

    const searchableText =
      `${pandal.name} ${pandal.location} ${pandal.transport}`.toLowerCase();

    return matchesDay && searchableText.includes(query.toLowerCase());
  });

  grid.innerHTML = filtered.map(pandal => {
    const done = completed.has(pandal.n);

    return `
      <article class="card ${done ? "completed" : ""}">
        <div class="card-top">
          <span class="num">STOP ${String(pandal.n).padStart(2, "0")}</span>
          <span class="tag">DAY ${pandal.day}</span>
        </div>

        <h3>${escapeHTML(pandal.name)}</h3>
        <p>📍 ${escapeHTML(pandal.location)}</p>
        <p class="transport">🚇 ${escapeHTML(pandal.transport)}</p>
        <p>↔ Estimated distance: ${escapeHTML(pandal.distance)}</p>

        <div class="card-actions">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pandal.name + " " + pandal.location + " Kolkata")}"
          >
            Google Maps ↗
          </a>

          <button
            class="complete-btn ${done ? "is-done" : ""}"
            data-complete="${pandal.n}"
          >
            ${done ? "✓ Visited · 20 XP" : "☐ Mark visited · +20 XP"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-complete]").forEach(button => {
    button.addEventListener("click", () => {
      const number = Number(button.dataset.complete);

      if (completed.has(number)) {
        completed.delete(number);
      } else {
        completed.add(number);
        playRewardSound();
      }

      saveCompleted();
      render();
      updateProgress();
      updateScore();

      const activeTab = document.querySelector(".day-tab.active");
      renderDay(activeTab?.dataset.day || "1");
    });
  });

  if (empty) {
    empty.classList.toggle("hidden", filtered.length > 0);
  }

  updateProgress();
}

// ------------------------------------------
// DAY-WISE ROUTE INFORMATION
// ------------------------------------------

const dayInfo = {
  1: {
    title: "Ballygunge · Gariahat · Golpark · Rashbehari",
    start: "Ballygunge Station",
    summary: "Explore the Ballygunge and Gariahat cluster.",
    ids: Array.from({length: 12}, (_, i) => i + 1),
    times: [
      "8:00–9:00 · Reach the starting point",
      "9:00–12:30 · Explore nearby pandals",
      "12:30–1:30 · Lunch break",
      "1:30–5:00 · Continue the route"
    ]
  },

  2: {
    title: "Kalighat · Bhowanipore · Chetla · New Alipore",
    start: "Kalighat Metro",
    summary: "Use public transport between neighbourhoods.",
    ids: Array.from({length: 14}, (_, i) => i + 13),
    times: [
      "8:00–9:00 · Check the route",
      "9:00–12:30 · Explore Kalighat",
      "12:30–1:30 · Lunch and transfer",
      "1:30–5:30 · Continue towards New Alipore"
    ]
  },

  3: {
    title: "Lake Gardens · Jodhpur Park · Kasba · Santoshpur",
    start: "Lake Gardens / Rabindra Sarobar",
    summary: "This is a longer route. Check traffic before travelling.",
    ids: Array.from({length: 24}, (_, i) => i + 27),
    times: [
      "8:00–9:00 · Check the route",
      "9:00–12:30 · Lake Gardens and Jadavpur",
      "12:30–1:30 · Lunch and transfer",
      "1:30–6:00 · Continue towards Kasba and Santoshpur"
    ]
  }
};

function renderDay(day) {
  const details = document.getElementById("day-details");
  if (!details) return;

  const data = dayInfo[day];
  if (!data) return;

  const doneCount = data.ids.filter(id => completed.has(id)).length;

  details.innerHTML = `
    <h3>${escapeHTML(data.title)}</h3>
    <p><b>Starting point:</b> ${escapeHTML(data.start)}</p>
    <p>${escapeHTML(data.summary)}</p>

    <p class="day-progress">
      Completed: ${doneCount} / ${data.ids.length} stops
    </p>

    <ul class="route-list">
      ${data.ids.map(id => {
        const pandal = pandals.find(item => item.n === id);
        if (!pandal) return "";

        const done = completed.has(id);

        return `
          <li class="${done ? "route-done" : ""}">
            <b>${done ? "✓" : pandal.n + "."}</b>
            ${escapeHTML(pandal.name)}
            <br>
            <small>${escapeHTML(pandal.location)}</small>
          </li>
        `;
      }).join("")}
    </ul>

    <div class="timeline">
      ${data.times.map(time => `<span>${escapeHTML(time)}</span>`).join("")}
    </div>

    <p style="margin-top:18px">
      <a
        class="button primary"
        target="_blank"
        rel="noopener"
        href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.title + " Durga Puja pandals Kolkata")}"
      >
        Open Google Maps ↗
      </a>
    </p>
  `;
}

// ------------------------------------------
// SEARCH
// ------------------------------------------

document.getElementById("search")?.addEventListener("input", event => {
  query = event.target.value;
  render();
});

// ------------------------------------------
// DAY FILTER BUTTONS
// ------------------------------------------

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    activeDay = button.dataset.filter;

    render();
  });
});

// ------------------------------------------
// DAY ROUTE TABS
// ------------------------------------------
document.querySelectorAll(".day-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".day-tab").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderDay(button.dataset.day);
  });
});

// ------------------------------------------
// PROGRESS FILTER: ALL / VISITED / REMAINING
// ------------------------------------------

document.querySelectorAll(".progress-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".progress-filter").forEach(item => {
      item.classList.remove("active");
    });

document.querySelectorAll(".day-tab").forEach(button => {
  button.addEv
  item.classList.remove("active");
    });

    button.classList.add("active");

    const mode = button.dataset.progress;

    grid?.querySelectorAll(".card").forEach(card => {
      const number = Number(
        card.querySelector("[data-complete]")?.dataset.complete
      );

      const hide =
        mode === "done" ? !completed.has(number) :
        mode === "todo" ? completed.has(number) :
        false;

      card.classList.toggle("hidden", hide);
    });
  });
});

//
document.getElementById("reset-progress")?.addEventListener("click", () => {
  if (confirm("Do you want to reset all completed pandals?")) {
    completed.clear();

    saveCompleted();
    render();
    updateScore();

    const activeTab = document.querySelector(".day-tab.active");
    renderDay(activeTab?.dataset.day || "1");
  }
});

// ------------------------------------------
// LUXURY 3D CARD HOVER ANIMATION
// ------------------------------------------

if (grid) {
  grid.addEventListener("pointermove", event => {
    const card = event.target.closest(".card");

    if (
      !card ||
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.transform =
      `perspective(900px) rotateX(${(0.5 - y) * 5}deg) ` +
      `rotateY(${(x - 0.5) * 6}deg) translateY(-2px)`;
  });

  grid.addEventListener("pointerout", event => {
    const card = event.target.closest(".card");

    if (card && !card.contains(event.relatedTarget)) {
      card.style.transform = "";
    }
  });
}

// ------------------------------------------
// START WEBSITE
// ------------------------------------------

render();
renderDay(1);
updateProgress();
updateScore();
renderLeaderboard();
updateSoundButton();
