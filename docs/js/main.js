import { openDrop } from './module/openDrop.js';
import { initQuiz } from './module/initQuiz.js';

if(document.querySelector('#openSearch')){
  const btnSearch = document.querySelector('#openSearch');
  btnSearch.addEventListener('click', () => {
    openDrop(btnSearch, false)
  })
}

if(document.querySelector('#openDrop1')){
  const btnDrop1 = document.querySelector('#openDrop1');
  btnDrop1.addEventListener('click', () => {
    openDrop(btnDrop1, false)
  })
}


$("#owlCarousel-1").owlCarousel({
  items:1,
  mouseDrag:false,
  touchDrag:false,
  nav:true,
  rewind:false,
  //center:true,
  navText: [
    `<svg width="12" height="20" viewBox="0 0 12 20">
      <use xlink:href="img/sprite.svg#btnSwiper11"></use>
    </svg>`,
    `<svg width="12" height="20" viewBox="0 0 12 20">
        <use xlink:href="img/sprite.svg#btnSwiper12"></use>
    </svg>`
  ],
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 500,
});

// Функция для выравнивания высоты всех слайдов
function setEqualHeight($carousel) {
  let maxHeight = 0;

  // Находим максимальную высоту среди всех слайдов
  $carousel.find('.item').each(function () {
    $(this).css('height', 'auto'); // Сбрасываем высоту для пересчёта
    const elementHeight = $(this).outerHeight();
    if (elementHeight > maxHeight) {
      maxHeight = elementHeight;
    }
  });

  // Устанавливаем максимальную высоту всем слайдам
  $carousel.find('.item').css('height', maxHeight + 'px');
}

// Инициализация Owl Carousel
$("#owlCarousel-2").owlCarousel({
  items: 6,         // Количество видимых элементов
  margin: 20,       // Отступы между элементами
  loop: true,       // Зацикливание
  onInitialized: function (event) {
    setEqualHeight($("#owlCarousel-2")); // Выравниваем высоту при инициализации
  },
  onResized: function (event) {
    setEqualHeight($("#owlCarousel-2")); // Обновляем высоту при изменении размеров окна
  }
});

if (document.querySelector('.quiz-container') && document.querySelectorAll('.quiz-container__question')) {
  initQuiz({
    containerSelector: '.quiz-container',
    questionSelector: '.quiz-container__question',
    counterSelector: '.quiz-container__counter',
    prevButtonSelector: '#prev-btn',
    nextButtonSelector: '#next-btn',
    activeClass: 'active',
    disabledClass: 'disabled'
  });
}