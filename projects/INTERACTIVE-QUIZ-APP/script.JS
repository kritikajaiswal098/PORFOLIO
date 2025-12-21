const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a browser?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  
  current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => selectOption(opt));
    optionsEl.appendChild(btn);
  });
}

function selectOption(selected) {
  const current = quizData[currentIndex];
  if(selected === current.answer) score++;
  currentIndex++;
  
  if(currentIndex < quizData.length) loadQuestion();
  else showResult();
}

function showResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${quizData.length}`;
}

nextBtn.addEventListener("click", loadQuestion);
restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  loadQuestion();
});

// Initial load
loadQuestion();
