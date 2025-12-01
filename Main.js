// ===== DATA =====
const quizData = {
  freshman: [
    { q: "What is the capital of Ethiopia?", opts: ["Addis Ababa", "Nairobi", "Kampala", "Djibouti"], a: 0 },
    { q: "Which planet is the Red Planet?", opts: ["Venus", "Mars", "Jupiter", "Saturn"], a: 1 },
    { q: "15 + 27 = ?", opts: ["32", "42", "52", "62"], a: 1 },
    { q: "Chemical symbol for water?", opts: ["H2O", "O2", "CO2", "NaCl"], a: 0 },
    { q: "Largest continent?", opts: ["Africa", "Asia", "Europe", "America"], a: 1 }
  ],
  highschool: [
    { q: "Derivative of x²?", opts: ["x", "2x", "x²", "2"], a: 1 },
    { q: "Atomic number of Hydrogen?", opts: ["1", "8", "12", "6"], a: 0 },
    { q: "Who discovered penicillin?", opts: ["Curie", "Fleming", "Pasteur", "Einstein"], a: 1 },
    { q: "Square root of 144?", opts: ["11", "12", "13", "14"], a: 1 },
    { q: "End of WWII?", opts: ["1943", "1944", "1945", "1946"], a: 2 }
  ],
  elementary: [
    { q: "Days in a week?", opts: ["5", "6", "7", "8"], a: 2 },
    { q: "King of the Jungle?", opts: ["Elephant", "Lion", "Tiger", "Giraffe"], a: 1 },
    { q: "Blue + Yellow = ?", opts: ["Purple", "Green", "Orange", "Brown"], a: 1 },
    { q: "Letters in alphabet?", opts: ["24", "25", "26", "27"], a: 2 },
    { q: "5 x 6 = ?", opts: ["25", "30", "35", "40"], a: 1 }
  ]
};

// ===== STATE =====
let state = {
  page: 'home',
  category: null,
  qIndex: 0,
  score: 0,
  answers: [],
  timer: null,
  timeLeft: 60
};

// ===== NAVIGATION =====
// Handle Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(e.target.dataset.page);
  });
});

function showPage(pageId) {
  // 1. Stop timer if leaving quiz
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }

  // 2. Visual Transition
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId + '-page').classList.add('active');
  
  // 3. Update Nav State
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');
  
  // 4. Scroll to top
  window.scrollTo(0, 0);
}

// ===== QUIZ LOGIC =====
function selectCategory(cat) {
  state.category = cat;
  startQuiz();
}

function startQuiz() {
  if (!state.category) return;
  
  state.qIndex = 0;
  state.score = 0;
  state.answers = new Array(quizData[state.category].length).fill(null);
  state.timeLeft = 60;
  
  showPage('quiz');
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const data = quizData[state.category];
  const q = data[state.qIndex];
  
  // Title
  document.getElementById('quiz-title').textContent = 
    state.category.charAt(0).toUpperCase() + state.category.slice(1) + " Quiz";
  
  // Text
  document.getElementById('question-text').textContent = q.q;
  
  // Options
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  
  q.opts.forEach((optText, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.textContent = optText;
    if (state.answers[state.qIndex] === i) div.classList.add('selected');
    
    div.onclick = () => {
      // Visual selection
      Array.from(container.children).forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
      // Save answer
      state.answers[state.qIndex] = i;
    };
    container.appendChild(div);
  });
  
  // Progress Bar
  const pct = ((state.qIndex + 1) / data.length) * 100;
  document.getElementById('quiz-progress').style.width = pct + '%';
  
  // Buttons
  document.getElementById('prev-btn').disabled = state.qIndex === 0;
  document.getElementById('next-btn').textContent = 
    (state.qIndex === data.length - 1) ? 'Finish' : 'Next';
}

function nextQuestion() {
  const total = quizData[state.category].length;
  if (state.qIndex < total - 1) {
    state.qIndex++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (state.qIndex > 0) {
    state.qIndex--;
    loadQuestion();
  }
}

function startTimer() {
  clearInterval(state.timer); // Clear existing
  const display = document.getElementById('time-left');
  display.textContent = state.timeLeft;
  
  state.timer = setInterval(() => {
    state.timeLeft--;
    display.textContent = state.timeLeft;
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  clearInterval(state.timer);
  
  // Calculate Score
  const data = quizData[state.category];
  state.score = 0;
  data.forEach((q, i) => {
    if (state.answers[i] === q.a) state.score++;
  });
  
  // Render Results
  const pct = Math.round((state.score / data.length) * 100);
  document.getElementById('score-percentage').textContent = pct + '%';
  document.getElementById('correct-answers').textContent = state.score;
  document.getElementById('total-questions').textContent = data.length;
  
  let msg = 'Keep Practicing!';
  if (pct >= 90) msg = 'Outstanding!';
  else if (pct >= 70) msg = 'Great Job!';
  else if (pct >= 50) msg = 'Good Effort!';
  
  document.getElementById('result-message').textContent = msg;
  
  showPage('results');
}

// ===== UI UTILITIES =====
function toggleHowItWorks() {
  const el = document.getElementById('howItWorksContent');
  el.classList.toggle('show');
}

function switchAuth(type) {
  // Tabs
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  // Forms
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.getElementById(type + '-form').classList.add('active');
}

// Mock Form Submission
document.getElementById('login-form').onsubmit = (e) => {
  e.preventDefault();
  alert('Welcome back! (Demo Mode)');
  showPage('home');
};

document.getElementById('register-form').onsubmit = (e) => {
  e.preventDefault();
  alert('Account created! (Demo Mode)');
  showPage('home');
};
