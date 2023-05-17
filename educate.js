    // JavaScript code for quiz functionality
    const questions = document.querySelectorAll('.question');
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');

    let currentQuestion = 0;
    let totalQuestions = questions.length;

    updateProgress();

    // Disable the back button on the first question
    if (currentQuestion === 0) {
      backButton.disabled = true;
    }

    // Add event listeners to buttons
    backButton.addEventListener('click', goToPreviousQuestion);
    nextButton.addEventListener('click', goToNextQuestion);

    function goToPreviousQuestion() {
      if (currentQuestion > 0) {
        questions[currentQuestion].classList.add('hidden');
			currentQuestion--;
questions[currentQuestion].classList.remove('hidden');
}
  updateProgress();
}

function goToNextQuestion() {
  const selectedAnswer = document.querySelector(`input[name="answer${currentQuestion + 1}"]:checked`);

  if (selectedAnswer) {
    questions[currentQuestion].classList.add('hidden');
    currentQuestion++;
    questions[currentQuestion].classList.remove('hidden');
    backButton.disabled = false;
  }

  if (currentQuestion === totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }

  updateProgress();
}

function updateProgress() {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  progressText.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
}
