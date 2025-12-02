
/* ===== DATA STRUCTURE ===== */
// Nested data for specific flows
const quizData = {
  freshman: {
    sem1: {
      "Communicative English": [
        { q: "Which is a proper noun?", opts: ["City", "Arba Minch", "Country", "Town"], a: 1 },
        { q: "Plural of 'Child'?", opts: ["Childs", "Children", "Childrens", "Childes"], a: 1 },
        { q: "Antonym of 'Happy'?", opts: ["Sad", "Joyful", "Glad", "Bright"], a: 0 }
      ],
      "Applied Math I": [
        { q: "Derivative of x^2?", opts: ["x", "2x", "2", "0"], a: 1 },
        { q: "Limit of 1/x as x->infinity?", opts: ["0", "1", "Infinity", "Undefined"], a: 0 },
        { q: "Integral of 2x dx?", opts: ["x^2", "2x^2", "x", "x^3"], a: 0 }
      ],
      "General Psychology": [
        { q: "Who is the father of Psychology?", opts: ["Freud", "Wundt", "Skinner", "Watson"], a: 1 },
        { q: "Study of the mind is?", opts: ["Biology", "Psychology", "Sociology", "Geology"], a: 1 }
      ]
    },
    sem2: {
      "Emerging Technology": [
        { q: "What does AI stand for?", opts: ["All Internet", "Artificial Intelligence", "Auto Image", "None"], a: 1 },
        { q: "IoT stands for?", opts: ["Internet of Things", "Input of Text", "Image of Time", "None"], a: 0 }
      ],
      "Anthropology": [
        { q: "Study of Human societies?", opts: ["Anthropology", "Biology", "Chemistry", "Physics"], a: 0 }
      ]
    }
  },
  highschool: {
    "9": [
      { q: "Grade 9 Bio: Cell Powerhouse?", opts: ["Nucleus", "Mitochondria", "Ribosome", "Wall"], a: 1 },
      { q: "Grade 9 Math: x + 5 = 10", opts: ["5", "10", "15", "0"], a: 0 }
    ],
    "10": [
      { q: "Grade 10 Chem: PH of Water?", opts: ["5", "7", "9", "12"], a: 1 },
      { q: "Grade 10 Physics: Unit of Force?", opts: ["Joule", "Newton", "Watt", "Pascal"], a: 1 }
    ],
    "11": [
      { q: "Grade 11 Civics: Democracy means?", opts: ["Rule by few", "Rule by people", "Rule by king", "None"], a: 1 },
      { q: "Grade 11 Bio: DNA stands for?", opts: ["Deoxyribonucleic Acid", "Dual Nature Acid", "Dynamic Acid", "None"], a: 0 }
    ],
    "12": [
      { q: "Grade 12 Entrance: Capital of Ethiopia?", opts: ["Addis Ababa", "Gondar", "Mekelle", "Hawassa"], a: 0 },
      { q: "Grade 12 Math: Sin(90)?", opts: ["0", "1", "0.5", "-1"], a: 1 }
    ]
  }
};

// ===== STATE =====
let state = {
  page: 'home',
  path: {
    type: null, // 'freshman' or 'highschool'
    university: null,
    semester: null,
    course: null,
    grade: null
  },
  currentQuizSet: [], // The actual list of questions to play
  qIndex: 0,
  score: 0,
  answers: [],
  timer: null,
  timeLeft: 60
};

// ===== NAVIGATION HANDLERS =====

// 1. General Page Switcher
function showPage(pageId) {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show target page
  const target = document.getElementById(pageId + '-page');
  if(target) target.classList.add('active');
  
  // Update Navbar (optional)
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');
  
  window.scrollTo(0, 0);
}

// 2. Freshman Flow
function startFreshmanFlow() {
  state.path.type = 'freshman';
  showPage('university');
}

function selectUniversity(uniName) {
  state.path.university = uniName; // Stored, though we only have AMU for now
  showPage('semester');
}

function selectSemester(sem) {
  state.path.semester = sem;
  renderCourses(sem);
  showPage('course');
}

function renderCourses(sem) {
  const courseListDiv = document.getElementById('course-list');
  courseListDiv.innerHTML = ''; // Clear previous
  
  const courses = quizData.freshman[sem]; // Get object of courses
  const courseNames = Object.keys(courses);
  
  courseNames.forEach(courseName => {
    // Create HTML for course box dynamically
    const box = document.createElement('div');
    box.className = 'feature-box';
    box.onclick = () => selectCourse(courseName);
    
    // Simple icon for courses
    const img = document.createElement('img');
    img.src = 'https://cdn-icons-png.flaticon.com/512/2641/2641443.png'; // Document icon
    
    const h3 = document.createElement('h3');
    h3.textContent = courseName;
    
    box.appendChild(img);
    box.appendChild(h3);
    courseListDiv.appendChild(box);
  });
}

function selectCourse(courseName) {
  state.path.course = courseName;
  // Set the questions
  state.currentQuizSet = quizData.freshman[state.path.semester][courseName];
  startQuiz();
}

// 3. High School Flow
function startHighSchoolFlow() {
  state.path.type = 'highschool';
  showPage('grade');
}

function selectGrade(grade) {
  state.path.grade = grade;
  // Set the questions
  state.currentQuizSet = quizData.highschool[grade];
  startQuiz();
}

// 4. Elementary Flow
function handleElementary() {
  // Simple alert per requirement "Coming Soon" with no design change
  alert("Elementary Section: Coming Soon!");
}

// ===== QUIZ ENGINE =====

function startQuiz() {
  if (!state.currentQuizSet || state.currentQuizSet.length === 0) {
    alert("No questions found for this selection.");
    return;
  }
  
  state.qIndex = 0;
  state.score = 0;
  state.answers = new Array(state.currentQuizSet.length).fill(null);
  state.timeLeft = 60;
  
  showPage('quiz');
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const q = state.currentQuizSet[state.qIndex];
  
  // Set Title based on context
  let title = "Quiz";
  if(state.path.type === 'freshman') title = state.path.course;
  if(state.path.type === 'highschool') title = "Grade " + state.path.grade;
  
  document.getElementById('quiz-title').textContent = title;
  
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
      Array.from(container.children).forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
      state.answers[state.qIndex] = i;
    };
    container.appendChild(div);
  });
  
  // Progress
  const pct = ((state.qIndex + 1) / state.currentQuizSet.length) * 100;
  document.getElementById('quiz-progress').style.width = pct + '%';
  
  // Buttons
  document.getElementById('prev-btn').disabled = state.qIndex === 0;
  document.getElementById('next-btn').textContent = 
    (state.qIndex === state.currentQuizSet.length - 1) ? 'Finish' : 'Next';
}

function nextQuestion() {
  const total = state.currentQuizSet.length;
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
  clearInterval(state.timer);
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
  
  state.score = 0;
  state.currentQuizSet.forEach((q, i) => {
    if (state.answers[i] === q.a) state.score++;
  });
  
  const pct = Math.round((state.score / state.currentQuizSet.length) * 100);
  document.getElementById('score-percentage').textContent = pct + '%';
  document.getElementById('correct-answers').textContent = state.score;
  document.getElementById('total-questions').textContent = state.currentQuizSet.length;
  
  let msg = 'Keep Practicing!';
  if (pct >= 90) msg = 'Outstanding!';
  else if (pct >= 70) msg = 'Great Job!';
  else if (pct >= 50) msg = 'Good Effort!';
  
  document.getElementById('result-message').textContent = msg;
  showPage('results');
}

// ===== UI UTILITIES =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(e.target.dataset.page);
  });
});

function switchAuth(type) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.getElementById(type + '-form').classList.add('active');
}

// Mock Forms
document.getElementById('login-form').onsubmit = (e) => {
  e.preventDefault();
  alert('Welcome back!');
  showPage('home');
};
document.getElementById('register-form').onsubmit = (e) => {
  e.preventDefault();
  alert('Account created!');
  showPage('home');
};
