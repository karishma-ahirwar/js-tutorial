document.addEventListener('DOMContentLoaded', init);

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Which programming language is commonly used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  }
];

let currentQuestion = 0;
let userResponses = [];

function init() {
  showQuestion();
  document.getElementById('submit-btn').addEventListener('click', submitAnswer);
}

function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const currentQ = quizQuestions[currentQuestion];

  questionElement.textContent = currentQ.question;

  optionsElement.innerHTML = '';
  currentQ.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.textContent = option;
    li.addEventListener('click', () => selectOption(index));
    optionsElement.appendChild(li);
  });
}

function selectOption(index) {
  userResponses[currentQuestion] = quizQuestions[currentQuestion].options[index];
}

function submitAnswer() {
  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your Score: ${calculateScore()} out of ${quizQuestions.length}`;
}

function calculateScore() {
  let score = 0;
  quizQuestions.forEach((question, index) => {
    if (userResponses[index] === question.correctAnswer) {
      score++;
    }
  });
  return score;
}
