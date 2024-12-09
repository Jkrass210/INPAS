import { openDrop } from './module/openDrop.js';
import { initQuiz } from './module/initQuiz.js';
import { toggleActiveClass } from './module/toggleActiveClass.js';

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

/*if (document.querySelectorAll('.swiper-container').length) {
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
}*/

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
      spaceBetween: isHeroSlider ? 30 : isBoxSwiper ? 10 : 15,
      slidesPerView: isHeroSlider ? 1 : isBoxSwiper ? 1 : 2,
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
      breakpoints: {
        650: {
          slidesPerView: isHeroSlider
            ? 1 // Герой-слайдер остаётся без изменений
            : isBoxSwiper
            ? 2 // Для box-swiper: 2 слайда
            : 4, // Для остальных: 5 слайдов
        },
        900: {
          slidesPerView: isHeroSlider
            ? 1 // Герой-слайдер остаётся без изменений
            : isBoxSwiper
            ? 3 // Для box-swiper: 2 слайда
            : 5, // Для остальных: 5 слайдов
          spaceBetween: 15,
        },
        1210: {
          spaceBetween: isHeroSlider ? 30 : isBoxSwiper ? 23 : 20,
          slidesPerView: isHeroSlider ? 1 : isBoxSwiper ? 3 : 6,
        }
        // Можешь добавить больше брейкпоинтов, если потребуется
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

if (document.querySelector('.header__burger') && document.querySelector('.header__box-info')) {
  toggleActiveClass({
    buttonClass: 'header__burger',
    targetClass: 'header__box-info',
    closeOnLinkClick: true,
    linkSelector: 'a',
  });
}