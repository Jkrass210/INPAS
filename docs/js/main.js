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

if(document.querySelector('#swiper-1')){
  var swiper1 = new Swiper("#swiper-1", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".slider-hero__swiper-button-prev",
      prevEl: ".slider-hero__swiper-button-next",
    },
  });
}

if(document.querySelector('#swiper-2')){
  var swiper2 = new Swiper("#swiper-2", {
    slidesPerView: 6,
    spaceBetween: 20,

    navigation: {
      nextEl: ".slider-partners__swiper-button-prev",
      prevEl: ".slider-partners__swiper-button-next",
    },
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