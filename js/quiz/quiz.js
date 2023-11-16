const quizQuestions = [
  {
    "question": "What is the capital of France?",
    "options": ["Berlin", "Paris", "Madrid", "Rome"],
    "correctAnswer": "Paris"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Mars", "Jupiter", "Venus", "Saturn"],
    "correctAnswer": "Mars"
  },
  {
    "question": "Who wrote 'Romeo and Juliet'?",
    "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    "correctAnswer": "William Shakespeare"
  }
];

let currentQuestion = 0;
let userAnswers = [];
let timer;

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  questionContainer.textContent = quizQuestions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  quizQuestions[currentQuestion].options.forEach((option, index) => {
    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.name = "answer";
    radioBtn.value = option;
    radioBtn.addEventListener("change", () => userAnswers[currentQuestion] = option);

    const label = document.createElement("label");
    label.textContent = option;

    optionsContainer.appendChild(radioBtn);
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement("br"));
  });

  startTimer(10).then(() => {
    userAnswers[currentQuestion] = null; // Timeout, mark as unanswered
    nextQuestion();
  });
}

function startTimer(seconds) {
  return new Promise((resolve) => {
    let timeLeft = seconds;

    const countdown = () => {
      document.getElementById("feedback").textContent = `Time left: ${timeLeft} seconds`;
      timeLeft--;

      if (timeLeft < 0) {
        clearTimeout(timer);
        resolve(); // Resolve the promise when the timer reaches 0
      } else {
        timer = setTimeout(countdown, 1000);
      }
    };

    countdown();
  });
}

function nextQuestion() {
  clearTimeout(timer);

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  let correctAnswers = 0;

  quizQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correctAnswer) {
      correctAnswers++;
    }
  });

  const feedbackContainer = document.getElementById("feedback");
  feedbackContainer.innerHTML = `<h3>Quiz Completed!</h3><br/>You scored ${correctAnswers} out of ${quizQuestions.length} questions.`;
  feedbackContainer.style.backgroundColor = "aqua";

  // Optional: Provide feedback on each question
  quizQuestions.forEach((question, index) => {
    const result = document.createElement("p");
    result.textContent = `Q${index + 1}: ${
      userAnswers[index] === question.correctAnswer ? "Correct" : "Incorrect"
      }`;
    feedbackContainer.appendChild(result);
  });
}

// Initial display
displayQuestion();
