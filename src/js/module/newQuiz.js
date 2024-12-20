export function newQuiz(){
  /*const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const questions = document.querySelectorAll(".quiz-container__question");
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
  };

  let currentQuestion = "question-1";

  function showQuestion(id) {
    questions.forEach((q) => {
      q.classList.remove("active");
      q.style.display = "none";
    });
    const nextQuestion = document.getElementById(id);
    if (nextQuestion) {
      nextQuestion.classList.add("active");
      nextQuestion.style.display = "flex";
    }
    currentQuestion = id;
  }

  function handleNext() {
    const currentBlock = document.getElementById(currentQuestion);
    const selectedInput = currentBlock.querySelector("input:checked");

    if (!selectedInput) {
      alert("Выберите ответ перед переходом.");
      return;
    }

    const selectedValue = Number(selectedInput.value);
    const nextQuestionId = questionsMap[currentQuestion]?.[selectedValue];

    if (nextQuestionId) {
      showQuestion(nextQuestionId);
    } else {
      alert("Следующий вопрос не найден.");
    }
  }

  function handlePrev() {
    // Определяем предыдущий блок через стек или дополнительную логику
    alert("Логика возврата к предыдущему блоку не реализована.");
  }

  nextBtn.addEventListener("click", handleNext);
  prevBtn.addEventListener("click", handlePrev);

  // Показываем первый вопрос
  showQuestion(currentQuestion);*/





  /*ааааааааааааа*/
 
    /*const questions = document.querySelectorAll(".quiz-container__question");
    const counter = document.querySelector(".quiz-container__counter");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
  
    let currentQuestionIndex = 0;
  
    // Функция для обновления состояния
    function updateQuizState(index) {
      // Скрываем все вопросы, кроме текущего
      questions.forEach((question, i) => {
        question.classList.toggle("active", i === index);
      });
  
      // Обновляем счетчик
      const current = (index + 1).toString().padStart(2, "0");
      const total = questions.length.toString().padStart(2, "0");
      counter.querySelector("span:first-child").textContent = current;
      counter.querySelector("span:last-child").textContent = total;
  
      // Управляем кнопками
      prevButton.disabled = index === 0; // Блокируем "Назад" на первом вопросе
      nextButton.disabled = index === questions.length - 1; // Блокируем "Далее" на последнем вопросе
    }
  
    // Функция для обработки клика по кнопке "Далее"
    function goToNextQuestion() {
      console.log('@@@@@@@@@@')
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuizState(currentQuestionIndex);
      }
    }
  
    // Функция для обработки клика по кнопке "Назад"
    function goToPreviousQuestion() {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuizState(currentQuestionIndex);
      }
    }
  
    // Навешиваем обработчики событий на кнопки
    nextButton.addEventListener("click", goToNextQuestion);
    prevButton.addEventListener("click", goToPreviousQuestion);
  
    // Инициализация состояния
    updateQuizState(currentQuestionIndex);*/
 
   /*ааааааааааааа*/



   document.addEventListener("DOMContentLoaded", () => {
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const questions = document.querySelectorAll(".quiz-container__question");
    const counter = document.querySelector(".quiz-container__counter");
    const totalQuestions = questions.length; // Общее количество вопросов
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
    };
  
    let currentQuestion = "question-1";
  
    // Функция обновления нумерации
    function updateCounter() {
      const currentIndex = Array.from(questions).findIndex(
        (q) => q.id === currentQuestion
      );
      const current = (currentIndex + 1).toString().padStart(2, "0");
      const total = totalQuestions.toString().padStart(2, "0");
  
      counter.querySelector("span:first-child").textContent = current;
      counter.querySelector("span:last-child").textContent = total;
    }
  
    function showQuestion(id) {
      questions.forEach((q) => {
        q.classList.remove("active");
        q.style.display = "none";
      });
      const nextQuestion = document.getElementById(id);
      if (nextQuestion) {
        nextQuestion.classList.add("active");
        nextQuestion.style.display = "flex";
      }
      currentQuestion = id;
      updateCounter(); // Обновляем нумерацию
    }
  
    function handleNext() {
      const currentBlock = document.getElementById(currentQuestion);
      const selectedInput = currentBlock.querySelector("input:checked");
  
      if (!selectedInput) {
        alert("Выберите ответ перед переходом.");
        return;
      }
  
      const selectedValue = Number(selectedInput.value);
      const nextQuestionId = questionsMap[currentQuestion]?.[selectedValue];
  
      if (nextQuestionId) {
        showQuestion(nextQuestionId);
      } else {
        alert("Следующий вопрос не найден.");
      }
    }
  
    function handlePrev() {
      // Определяем предыдущий блок через стек или дополнительную логику
      alert("Логика возврата к предыдущему блоку не реализована.");
    }
  
    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);
  
    // Показываем первый вопрос и инициализируем счетчик
    showQuestion(currentQuestion);
  });
  
};