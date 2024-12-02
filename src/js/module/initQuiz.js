export function initQuiz({
  containerSelector,
  questionSelector,
  counterSelector,
  prevButtonSelector,
  nextButtonSelector,
  activeClass = 'active',
  disabledClass = 'disabled'
}) {
  const container = document.querySelector(containerSelector);
  const questions = container.querySelectorAll(questionSelector);
  const counter = container.querySelector(counterSelector);
  const prevButton = container.querySelector(prevButtonSelector);
  const nextButton = container.querySelector(nextButtonSelector);

  let currentQuestionIndex = 0;

  function updateCounter() {
    const currentCounter = counter.querySelector('span:nth-child(1)');
    currentCounter.textContent = String(currentQuestionIndex + 1).padStart(2, '0');
  }

  function updateNavigation() {
    prevButton.classList.toggle(disabledClass, currentQuestionIndex === 0);
    nextButton.classList.toggle(disabledClass, currentQuestionIndex === questions.length - 1);
  }

  function showQuestion(index) {
    questions.forEach((question, i) => {
      question.classList.toggle(activeClass, i === index);
    });
    updateCounter();
    updateNavigation();
  }

  prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex -= 1;
      showQuestion(currentQuestionIndex);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
      showQuestion(currentQuestionIndex);
    }
  });

  // Инициализация квиза
  showQuestion(currentQuestionIndex);
}

