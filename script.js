// === Dark Mode Toggle ===
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function setMode(dark) {
  if (dark) {
    document.body.classList.add('dark-mode');
    modeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    modeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}
modeToggle.onclick = () => {
  setMode(!document.body.classList.contains('dark-mode'));
};
setMode(localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark));

// === Copy Email Button ===
document.getElementById('copy-email').onclick = function() {
  const email = document.getElementById('email-text').textContent;
  navigator.clipboard.writeText(email).then(() => {
    this.textContent = "✅";
    setTimeout(() => this.textContent = "📋", 1200);
  });
};

// === Project Cards Auto-populate ===
const projects = [
  {
    name: "Machine-Learning",
    desc: "A curated set of machine learning algorithms, models, and projects in Python.",
    repo: "https://github.com/MayankSinghM/Machine-Learning",
    live: null
  },
  {
    name: "Portfolio Website",
    desc: "My personal portfolio built with modern web technologies.",
    repo: "https://github.com/MayankSinghM/portfolio",
    live: null
  },
  {
    name: "Student Score Predictor",
    desc: "Predict student scores using linear regression and visualization.",
    repo: "https://github.com/MayankSinghM/student-score-predictor",
    live: null
  },
  {
    name: "Stock Prediction",
    desc: "Machine learning models for predicting stock prices.",
    repo: "https://github.com/MayankSinghM/Stock-Prediction",
    live: null
  }
];
const grid = document.getElementById('projects-grid');
projects.forEach(proj => {
  let card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div>
      <div class="project-title">${proj.name}</div>
      <div class="project-desc">${proj.desc}</div>
    </div>
    <div class="project-links">
      <a href="${proj.repo}" target="_blank">GitHub</a>
      ${proj.live ? `<a href="${proj.live}" target="_blank">Live Demo</a>` : ''}
    </div>
  `;
  grid.appendChild(card);
});
