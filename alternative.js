
/* ===== DATA STRUCTURE ===== */
// Nested data for specific flows
/* ===== DATA STRUCTURE ===== */
const quizData = {
  freshman: {
    sem1: {
      "Communicative English": [
        { q: "Which of these is a proper noun?", opts: ["City", "Arba Minch", "Country", "Town"], a: 1 },
        { q: "Choose the correct plural: 'Child'", opts: ["Childs", "Children", "Childrens", "Childes"], a: 1 },
        { q: "Antonym of 'Benevolent'?", opts: ["Kind", "Cruel", "Generous", "Helpful"], a: 1 },
        { q: "I ____ to the market yesterday.", opts: ["go", "gone", "went", "going"], a: 2 }
      ],
      "Applied Math I": [
        { q: "Derivative of x^2?", opts: ["x", "2x", "2", "0"], a: 1 },
        { q: "Limit of 1/x as x -> infinity?", opts: ["0", "1", "Infinity", "Undefined"], a: 0 },
        { q: "If f(x) = sin(x), f'(x) is?", opts: ["cos(x)", "-cos(x)", "tan(x)", "sec(x)"], a: 0 },
        { q: "Matrix determinant of [[1,0],[0,1]]?", opts: ["0", "1", "2", "-1"], a: 1 }
      ],
      "General Psychology": [
        { q: "Who is the father of Psychology?", opts: ["Freud", "Wundt", "Skinner", "Watson"], a: 1 },
        { q: "Which part of the brain controls vision?", opts: ["Frontal", "Occipital", "Temporal", "Parietal"], a: 1 },
        { q: "Short term memory duration?", opts: ["1 sec", "20-30 sec", "1 hour", "Unlimited"], a: 1 }
      ],
      "Geography of Ethiopia": [
        { q: "Which river is the longest in Ethiopia?", opts: ["Awash", "Wabe Shebelle", "Blue Nile", "Omo"], a: 1 },
        { q: "The highest peak in Ethiopia?", opts: ["Batu", "Ras Dashen", "Guna", "Tulu Dimtu"], a: 1 },
        { q: "Ethiopia is located in?", opts: ["West Africa", "Horn of Africa", "Southern Africa", "Maghreb"], a: 1 }
      ],
      "Logic & Critical Thinking": [
        { q: "A valid argument with true premises is?", opts: ["Sound", "Unsound", "Weak", "Strong"], a: 0 },
        { q: "'All men are mortal' is a?", opts: ["Premise", "Conclusion", "Fallacy", "Variable"], a: 0 },
        { q: "Which is a formal fallacy?", opts: ["Ad Hominem", "Appeal to Pity", "Affirming Consequent", "Red Herring"], a: 2 }
      ]
    },
    sem2: {
      "Emerging Technology": [
        { q: "What does AI stand for?", opts: ["All Internet", "Artificial Intelligence", "Auto Image", "None"], a: 1 },
        { q: "IoT stands for?", opts: ["Internet of Things", "Input of Text", "Image of Time", "None"], a: 0 },
        { q: "Which is a characteristic of Big Data?", opts: ["Volume", "Velocity", "Variety", "All of above"], a: 3 }
      ],
      "Social Anthropology": [
        { q: "Study of Human societies?", opts: ["Anthropology", "Biology", "Chemistry", "Physics"], a: 0 },
        { q: "Ethnocentrism means?", opts: ["Judging by own culture", "Loving all cultures", "Studying stones", "None"], a: 0 },
        { q: "Bridewealth is paid to?", opts: ["Groom", "Bride's Family", "Government", "Village"], a: 1 }
      ],
      "Economics": [
        { q: "Law of Demand: Price up, Demand...?", opts: ["Up", "Down", "Stays same", "Unknown"], a: 1 },
        { q: "GDP stands for?", opts: ["Global Domestic Product", "Gross Domestic Product", "Gross Daily Pay", "None"], a: 1 },
        { q: "Market where one seller dominates?", opts: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopsony"], a: 0 }
      ],
      "Global Trends": [
        { q: "Headquarters of the AU?", opts: ["Nairobi", "Addis Ababa", "Cairo", "Johannesburg"], a: 1 },
        { q: "National Interest is primarily about?", opts: ["Charity", "Survival & Security", "Friendship", "Sports"], a: 1 }
      ],
      "Inclusiveness": [
        { q: "Impairment refers to?", opts: ["Social barrier", "Biological problem", "Lack of money", "None"], a: 1 },
        { q: "Braille is used by?", opts: ["Deaf", "Blind", "Physically disabled", "None"], a: 1 }
      ]
    }
  },
  highschool: {
    "9": [
      { q: "Grade 9 Bio: Cell Powerhouse?", opts: ["Nucleus", "Mitochondria", "Ribosome", "Wall"], a: 1 },
      { q: "Grade 9 Math: x + 5 = 10", opts: ["5", "10", "15", "0"], a: 0 },
      { q: "Grade 9 Chem: Symbol for Gold?", opts: ["Ag", "Au", "Fe", "Pb"], a: 1 }
    ],
    "10": [
      { q: "Grade 10 Chem: PH of Water?", opts: ["5", "7", "9", "12"], a: 1 },
      { q: "Grade 10 Physics: Unit of Force?", opts: ["Joule", "Newton", "Watt", "Pascal"], a: 1 },
      { q: "Grade 10 Math: Sin(30)?", opts: ["0.5", "1", "0", "0.866"], a: 0 }
    ],
    "11": [
      { q: "Grade 11 Civics: Democracy means?", opts: ["Rule by few", "Rule by people", "Rule by king", "None"], a: 1 },
      { q: "Grade 11 Bio: DNA stands for?", opts: ["Deoxyribonucleic Acid", "Dual Nature Acid", "Dynamic Acid", "None"], a: 0 },
      { q: "Grade 11 History: Battle of Adwa?", opts: ["1896", "1888", "1935", "1991"], a: 0 }
    ],
    "12": [
      { q: "Grade 12 Entrance: Capital of Ethiopia?", opts: ["Addis Ababa", "Gondar", "Mekelle", "Hawassa"], a: 0 },
      { q: "Grade 12 Math: Sin(90)?", opts: ["0", "1", "0.5", "-1"], a: 1 },
      { q: "Grade 12 Physics: E=mc^2 is by?", opts: ["Newton", "Einstein", "Tesla", "Bohr"], a: 1 }
    ]
  }
};

/* ===== UPDATE: loadQuestion Function ===== */
/* Replace your existing loadQuestion function with this one so the 
   University Name shows up in the title during the quiz! */

function loadQuestion() {
  const q = state.currentQuizSet[state.qIndex];
  
  // Set Title based on context
  let title = "Quiz";
  
  if(state.path.type === 'freshman') {
    // Shows "Arba Minch Univ - Logic" etc.
    title = `${state.path.university} : ${state.path.course}`;
  } else if(state.path.type === 'highschool') {
    title = `High School - Grade ${state.path.grade}`;
  }
  
  // Update Title Element (Ensure you have <h2 id="quiz-title"> in HTML)
  const titleEl = document.getElementById('quiz-title');
  if(titleEl) {
    titleEl.textContent = title;
    // Reduce font size slightly if text is very long
    titleEl.style.fontSize = title.length > 20 ? "1.2rem" : "1.8rem";
  }
  
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
/* ===== FAQ INTERACTION ===== */
function toggleFaq(element) {
  // Toggle the active class on the clicked item
  element.classList.toggle('active');
  
  // Optional: Close others when one is opened (Accordion style)
  const allFaqs = document.querySelectorAll('.faq-item');
  allFaqs.forEach(item => {
    if (item !== element) {
      item.classList.remove('active');
    }
  });
}
/* ===== CHAT FUNCTIONALITY ===== */
function sendMessage() {
  const input = document.getElementById('chat-input');
  const messageText = input.value.trim();
  
  if (messageText === "") return; // Don't send empty messages

  const chatBox = document.getElementById('chat-box');

  // 1. Create the Message HTML
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message me'; // Class 'me' aligns it to the right
  
  // Get current time
  const now = new Date();
  const timeString = now.getHours() + ":" + (now.getMinutes()<10?'0':'') + now.getMinutes();

  msgDiv.innerHTML = `
    <div class="msg-user">You</div>
    <p>${escapeHtml(messageText)}</p>
    <div class="msg-time">${timeString}</div>
  `;

  // 2. Add to Chat Box
  chatBox.appendChild(msgDiv);

  // 3. Clear Input
  input.value = "";

  // 4. Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // 5. Simulate a bot reply (Optional - makes it feel alive)
  setTimeout(() => {
    botReply();
  }, 2000);
}

// Function to handle "Enter" key
function handleEnter(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
}

// Security: Prevent HTML injection
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Simple Auto-Reply Bot
function botReply() {
  const chatBox = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message other';
  
  const now = new Date();
  const timeString = now.getHours() + ":" + (now.getMinutes()<10?'0':'') + now.getMinutes();

  msgDiv.innerHTML = `
    <div class="msg-user">System Bot</div>
    <p>Message received. (Note: This is a demo chat. Messages are not saved to a server yet!)</p>
    <div class="msg-time">${timeString}</div>
  `;
  
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
