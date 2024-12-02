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

if (document.querySelectorAll('.swiper-container').length) {
  document.querySelectorAll('.swiper-container').forEach((container) => {
    const swiperWrapper = container.querySelector('.swiper');
    const swiperWrapper1 = container.querySelector('.swiper-wrapper');
    const prevButton = container.querySelector('.slider-hero__swiper-button-next, .slider-partners__swiper-button-next');
    const nextButton = container.querySelector('.slider-hero__swiper-button-prev, .slider-partners__swiper-button-prev');
    
    // Проверяем, существует ли обертка слайдов
    if (!swiperWrapper1) return;

    const isHeroSlider = container.classList.contains('slider-hero');
    const isBoxSwiper = container.classList.contains('box-swiper');

    new Swiper(swiperWrapper, {
      spaceBetween: isHeroSlider ? 30 : isBoxSwiper ? 23 : 20,
      slidesPerView: isHeroSlider ? 1 : isBoxSwiper ? 3 : 6,
      effect: isHeroSlider ? 'fade' : 'slide',
      fadeEffect: isHeroSlider
        ? {
            crossFade: true,
          }
        : undefined,
      navigation: {
        nextEl: nextButton || null,
        prevEl: prevButton || null,
      },
      on: {
        init: function () {
          const loadedClass = swiperWrapper.querySelector('.loaded');
          if (loadedClass) {
            loadedClass.classList.remove('loaded');
          }
        },
      },
    });
  });
}

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