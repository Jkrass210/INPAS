import { openDrop } from './module/openDrop.js';
import { initQuiz } from './module/initQuiz.js';
import { newQuiz } from './module/newQuiz.js';
import { toggleActiveClass } from './module/toggleActiveClass.js';
import { handleResize } from './module/handleResize.js';
import { initTabLogic } from './module/initTabLogic.js';


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

    // Добавляем уникальные кнопки для box-swiper
    const boxPrevButton = isBoxSwiper ? container.querySelector('.box-swiper__swiper-button-next') : null;
    const boxNextButton = isBoxSwiper ? container.querySelector('.box-swiper__swiper-button-prev') : null;

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
        nextEl: boxNextButton || nextButton || null,
        prevEl: boxPrevButton || prevButton || null,
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
  /*initQuiz({
    containerSelector: '.quiz-container',
    questionSelector: '.quiz-container__question',
    counterSelector: '.quiz-container__counter',
    prevButtonSelector: '#prev-btn',
    nextButtonSelector: '#next-btn',
    activeClass: 'active',
    disabledClass: 'disabled'
  });*/



  newQuiz()
}

if (document.querySelector('.header__burger') && document.querySelector('.header__box-info')) {
  toggleActiveClass({
    buttonClass: 'header__burger',
    targetClass: 'header__box-info',
    closeOnLinkClick: true,
    linkSelector: 'a',
  });
}

if (document.querySelector(".main-section-3__btn") && document.querySelector(".main-section-3__top") && document.querySelector(".main-section-3__mobil-hidden")) {
  const btn = document.querySelector(".main-section-3__btn");
  const topSection = document.querySelector(".main-section-3__top");
  const mobileHidden = document.querySelector(".main-section-3__mobil-hidden");
  handleResize(mobileHidden, btn, topSection, 512)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 512));
}

if (document.querySelector(".box-swiper__link") && document.querySelector(".box-swiper__top-line") && document.querySelector(".box-swiper__mobail-hidden")) {
  const btn = document.querySelector(".box-swiper__link");
  const topSection = document.querySelector(".box-swiper__top-line");
  const mobileHidden = document.querySelector(".box-swiper__mobail-hidden");
  handleResize(mobileHidden, btn, topSection, 650)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 650));
}

if (document.querySelector('#swiper-5') && document.querySelector('#swiper-5 > .swiper-wrapper') && document.querySelectorAll('#swiper-5 > .swiper-slide') && document.querySelector('#swiper-6') && document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')) {
  const swiper6 = new Swiper("#swiper-6", {
    spaceBetween: 17,
    slidesPerView: 4,
    freeMode: false,
  });
  const swiper5 = new Swiper("#swiper-5", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".product-card-section-1__button-prev",
      prevEl: ".product-card-section-1__button-next",
    },
    thumbs: {
      swiper: swiper6,
    },
  })
}

if (document.querySelector('.box-info')) {
  initTabLogic('.box-info');
}

document.addEventListener("DOMContentLoaded", () => {
  const targetElement = document.querySelector(".quiz-container__question.question-6");
  const imgContainer = document.querySelector(".quiz-container__img");

  if (!targetElement || !imgContainer) return;

  // Callback для обработки изменений
  const observerCallback = (mutationsList) => {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (targetElement.classList.contains("active")) {
          imgContainer.style.display = "none";
        } else {
          imgContainer.style.display = ""; // Убираем стиль, возвращая отображение по умолчанию
        }
      }
    }
  };

  // Создаем наблюдатель
  const observer = new MutationObserver(observerCallback);

  // Указываем, за чем следить
  observer.observe(targetElement, { attributes: true });
});
