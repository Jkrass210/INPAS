export function newQuiz() {
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const questions = document.querySelectorAll(".quiz-container__question");
  const counter = document.querySelector(".quiz-container__counter");
  const questionsMap = {
    "question-1": {
      1: "question-2.1",
      2: "question-2.1",
      3: "question-2.1",
      4: "question-3.2",
      5: "question-2.2",
    },
    "question-2.1": {
      1: "question-6.1",
      2: "question-5.1",
      3: "question-3.1",
      4: "question-3.2",
    },
    "question-2.2": {
      1: "question-3.3",
      2: "question-3.4",
    },
    "question-3.1": {
      1: "question-6.3",
      2: "question-6.4",
    },
    "question-3.2": {
      1: "question-4.1",
      2: "question-4.2",
    },
    "question-3.3": {
      1: "question-6.7",
      2: "question-6.8",
    },
    "question-3.4": {
      1: "question-6.9",
      2: "question-6.10",
    },
    "question-4.1": {
      1: "question-6.5",
      2: "question-6.6",
    },
    "question-4.2": {
      1: "question-6.3",
      2: "question-6.6",
    },
    "question-5.1": {
      1: "question-6.2",
      2: "question-6.2",
      3: "question-6.2",
      4: "question-6.2",
      5: "contacts-form-7",
    },
    "question-6.1": "contacts-form-7",
    "question-6.2": "contacts-form-7",
    "question-6.3": "contacts-form-7",
    "question-6.4": "contacts-form-7",
    "question-6.5": "contacts-form-7",
    "question-6.6": "contacts-form-7",
    "question-6.7": "contacts-form-7",
    "question-6.8": "contacts-form-7",
    "question-6.9": "contacts-form-7",
    "question-6.10": "contacts-form-7",
  };

  let currentQuestion = "question-1";
  let pathQuestions = ["question-1"];
  let totalBranchQuestions = calculateBranchLength(currentQuestion);

  function calculateBranchLength(start) {
    let count = 0;
    let visited = new Set();
    let stack = [start];

    while (stack.length > 0) {
      const current = stack.pop();
      if (!visited.has(current)) {
        visited.add(current);
        count++;
        const nextQuestions = Object.values(questionsMap[current] || {});
        stack.push(...nextQuestions);
      }
    }
    return count;
  }

  /*function updateCounter() {
    const currentIndex = pathQuestions.indexOf(currentQuestion) + 1;
    counter.querySelector("span:first-child").textContent = currentIndex
      .toString()
      .padStart(2, "0");
    counter.querySelector("span:last-child").textContent = totalBranchQuestions
      .toString()
      .padStart(2, "0");
  }*/

  function updateNextButtonText() {
    if (currentQuestion.startsWith("question-6")) {
      nextBtn.textContent = "Оставить заявку";
    } else {
      nextBtn.textContent = "Далее";
    }
  }

  function updateButtonStates() {
    if (pathQuestions.length === 1) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    const currentBlock = document.getElementById(currentQuestion);
    const selectedInput = currentBlock.querySelector("input:checked");

    if (selectedInput) {
      nextBtn.classList.remove("disabled");
    } else {
      nextBtn.classList.add("disabled");
    }
  }

  function showQuestion(id) {
    questions.forEach((q) => {
      q.classList.remove("active");
    });
    const nextQuestion = document.getElementById(id);
    if (nextQuestion) {
      nextQuestion.classList.add("active");
    }
    currentQuestion = id;
    //updateCounter();
    updateNextButtonText();
    updateButtonStates();
  }

  function handleNext() {
    if (nextBtn.classList.contains("disabled")) return;

    if (currentQuestion.startsWith("question-6")) {
      showQuestion("contacts-form-7");
      pathQuestions.push("contacts-form-7");
      return;
    }

    const currentBlock = document.getElementById(currentQuestion);
    const selectedInput = currentBlock.querySelector("input:checked");

    if (!selectedInput) {
      alert("Выберите ответ перед переходом.");
      return;
    }

    const selectedValue = Number(selectedInput.value);
    const nextQuestionId = questionsMap[currentQuestion]?.[selectedValue];

    if (nextQuestionId) {
      if (pathQuestions.length === 1) {
        totalBranchQuestions = calculateBranchLength(nextQuestionId) + 1;
      }

      if (!pathQuestions.includes(nextQuestionId)) {
        pathQuestions.push(nextQuestionId);
      }
      showQuestion(nextQuestionId);
    } else {
      alert("Следующий вопрос не найден.");
    }
  }

  function handlePrev() {
    if (prevBtn.classList.contains("disabled")) return;

    if (pathQuestions.length > 1) {
      pathQuestions.pop();
      const previousQuestion = pathQuestions[pathQuestions.length - 1];
      showQuestion(previousQuestion);
    } else {
      alert("Это первый вопрос.");
    }
  }

  function handleInputChange() {
    const currentBlock = document.getElementById(currentQuestion);
    const selectedInput = currentBlock.querySelector("input:checked");

    if (selectedInput) {
      const selectedValue = Number(selectedInput.value);
      const nextQuestionId = questionsMap[currentQuestion]?.[selectedValue];
      if (nextQuestionId) {
        totalBranchQuestions = calculateBranchLength(nextQuestionId) + 1;
      }
    }

    //updateCounter();
    updateButtonStates();
  }

  function attachRadioHandlers() {
    questions.forEach((q) => {
      const inputs = q.querySelectorAll("input[type='radio']");
      inputs.forEach((input) => {
        input.addEventListener("change", handleInputChange);
      });
    });
  }

  nextBtn.addEventListener("click", handleNext);
  prevBtn.addEventListener("click", handlePrev);

  attachRadioHandlers();
  showQuestion(currentQuestion);
}