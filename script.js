const questions = [
  "What planet is known as the 'Red Planet'?", 
  "Who painted the Mona Lisa?", 
  "In the Office, what is Dwight's secrect name for Angela?"
  ];
const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"], 
  ["Leonardo", "Michealaneglo", "Da Vinci", "Picaso"], 
  ["Monkey", "Babe", "Sweets", "Honey"]];

const correctAnswers = ["Mars", "Da Vinci", "Monkey"];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("question").innerHTML = questions[currentQuestionIndex];
  
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  } else {
    document.getElementById("result").innerHTML = 
    `You scored ${score} points out of ${questions.length} questions!`;
    document.getElementById("question").innerHTML = "";
  document.getElementById(`choices`).innerHTML = "";
  }
}

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

displayQuestion();
