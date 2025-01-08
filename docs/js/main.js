import { openDrop } from './module/openDrop.js';
import { initQuiz } from './module/initQuiz.js';
import { newQuiz } from './module/newQuiz.js';
import { toggleActiveClass } from './module/toggleActiveClass.js';
import { handleResize } from './module/handleResize.js';
import { initTabLogic } from './module/initTabLogic.js';
import { handleSwiperClasses } from './module/handleSwiperClasses.js';
import { initTabs } from './module/initTabs.js';
import { testWebP } from './module/testWebP.js'
import { playVideo } from './module/playVideo.js';
import { initCatalogTabs1 } from './module/initCatalogTabs1.js';
import { handleSwiperControls } from './module/handleSwiperControls.js';

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});

if(document.querySelector('#openSearch')){
  const btnSearch = document.querySelector('#openSearch');
  btnSearch.addEventListener('click', () => {
    openDrop(btnSearch, false)
  })
}

if(document.querySelector('#openAboutCompany')){
  const btnSearch = document.querySelector('#openAboutCompany');
  btnSearch.addEventListener('click', () => {
    openDrop(btnSearch, false)
  })
}

if(document.querySelector('#openDrop2')){
  const btnDrop1 = document.querySelector('#openDrop2');
  btnDrop1.addEventListener('click', () => {
    openDrop(btnDrop1, ".drop-down-1__item", true, true)
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
  newQuiz()
}

if (document.querySelector('.header__burger') && document.querySelector('.header__box-info')) {
  toggleActiveClass({
    buttonClass: 'header__burger',
    targetClass: 'header__box-info',
    closeOnLinkClick: true,
    linkSelector: 'a',
    addStopScroll: true,
  });
}

if (document.querySelector(".main-section-3__btn") && document.querySelector(".main-section-3__top") && document.querySelector(".main-section-3__mobil-hidden")) {
  const btn = document.querySelector(".main-section-3__btn");
  const topSection = document.querySelector(".main-section-3__top");
  const mobileHidden = document.querySelector(".main-section-3__mobil-hidden");
  handleResize(mobileHidden, btn, topSection, 512)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 512));
}

if (document.querySelector(".watch-rest") && document.querySelector(".box-blog__list>li:last-child") && document.querySelector(".box-blog__mobil-hidden")) {
  const btn = document.querySelector(".watch-rest");
  const topSection = document.querySelector(".box-blog__list>li:last-child");
  const mobileHidden = document.querySelector(".box-blog__mobil-hidden");
  handleResize(mobileHidden, btn, topSection, 1210)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1210));
}

if (document.querySelector(".box-swiper__link") && document.querySelector(".box-swiper__top-line") && document.querySelector(".box-swiper__mobail-hidden")) {
  const btn = document.querySelector(".box-swiper__link");
  const topSection = document.querySelector(".box-swiper__top-line");
  const mobileHidden = document.querySelector(".box-swiper__mobail-hidden");
  handleResize(mobileHidden, btn, topSection, 650)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 650));
}

if (document.querySelector(".service-support-section-3__link") && document.querySelector(".service-support-section-3__top-line") && document.querySelector(".service-support-section-3__mobil-hidden")) {
  const btn = document.querySelector(".service-support-section-3__link");
  const topSection = document.querySelector(".service-support-section-3__top-line");
  const mobileHidden = document.querySelector(".service-support-section-3__mobil-hidden");
  handleResize(mobileHidden, btn, topSection, 650)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 650));
}

if (document.querySelector('#swiper-5') && document.querySelector('#swiper-5 > .swiper-wrapper') && document.querySelectorAll('#swiper-5 > .swiper-slide') && document.querySelector('#swiper-6') && document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')) {
  const swiper6 = new Swiper("#swiper-6", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: false,
    breakpoints: {
      650: {
        spaceBetween: 17,
      },
    },
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
  const targetElements = document.querySelectorAll(".quiz-container__question.question-6");
  const imgContainer = document.querySelector(".quiz-container__img");
  const formContainer = document.querySelector(".quiz-container__form");
  const contactsForm = document.getElementById("contacts-form-7");
  const quizNavigation1 = document.getElementById("quiz-navigation-1");
  const quizNavigation2 = document.getElementById("quiz-navigation-2");
  const prevBtn = document.getElementById("prev-btn");

  if (
    !targetElements.length ||
    !imgContainer ||
    !formContainer ||
    !contactsForm ||
    !quizNavigation1 ||
    !quizNavigation2 ||
    !prevBtn
  )
    return;

  // Callback для обработки изменений
  const observerCallback = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        const targetElement = mutation.target;

        // Условие для элементов с классом "question-6"
        if (targetElement.classList.contains("active")) {
          imgContainer.style.display = "none";
          formContainer.classList.add("question-6");
        } else {
          imgContainer.style.display = ""; // Убираем стиль, возвращая отображение по умолчанию
          formContainer.classList.remove("question-6");
        }

        // Условие для элемента с ID "contacts-form-7"
        if (contactsForm.classList.contains("active")) {
          quizNavigation1.style.display = "none";
          quizNavigation2.insertBefore(prevBtn, quizNavigation2.firstChild); // Перемещаем кнопку в quiz-navigation-2
        } else {
          quizNavigation1.style.display = ""; // Восстанавливаем отображение по умолчанию
          quizNavigation1.insertBefore(prevBtn, quizNavigation1.firstChild); // Перемещаем кнопку обратно в quiz-navigation-1
        }
      }
    });
  };

  // Создаем наблюдатель
  const observer = new MutationObserver(observerCallback);

  // Указываем, за чем следить для каждого элемента
  targetElements.forEach((element) => {
    observer.observe(element, { attributes: true });
  });

  // Также следим за элементом с ID "contacts-form-7"
  observer.observe(contactsForm, { attributes: true });
});

if (document.querySelector('#swiper-7') || document.querySelector('#swiper-8')) {
  document.addEventListener("DOMContentLoaded", () => {
    handleSwiperClasses([
      {
        elementId: "swiper-7",
        classWrapp: ".about-company-section-4__list",
        breakpoint: 900,
        swiperConfig: {
          slidesPerView: 1,
          spaceBetween: 18,
          grid: {
            rows: 3, // 3 строки
            fill: "row",
          },
          navigation: {
            nextEl: ".swiper-7__swiper-button-prev",
            prevEl: ".swiper-7__swiper-button-next",
          },
          loop: false, // Нет бесконечного прокручивания
          breakpoints: {
            // Для окон шириной меньше 650px
            650: {
              slidesPerView: 2, // 2 столбца
              spaceBetween: 18,
              grid: {
                rows: 3, // Оставляем 3 строки
              },
               // Отступы остаются такими же
            },
          },
        },
      },
      {
        elementId: "swiper-8",
        classWrapp: ".box-blog__list",
        breakpoint: 900,
        swiperConfig: {
          slidesPerView: 1, // Обычный свайпер в одну строку
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-8__swiper-button-prev",
            prevEl: ".swiper-8__swiper-button-next",
          },
          breakpoints: {
            650: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
          }
        },
      },
    ]);

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        handleSwiperClasses([
          {
            elementId: "swiper-7",
            classWrapp: ".about-company-section-4__list",
            breakpoint: 900,
            swiperConfig: {
              grid: {
                rows: 3, // 3 строки
                fill: "row",
              },
              navigation: {
                nextEl: ".swiper-7__swiper-button-next",
                prevEl: ".swiper-7__swiper-button-prev",
              },
            },
          },
          {
            elementId: "swiper-8",
            classWrapp: ".box-blog__list",
            breakpoint: 900,
            swiperConfig: {
              slidesPerView: 2, // Обычный свайпер в одну строку
              spaceBetween: 20,
              navigation: {
                nextEl: ".swiper-8__swiper-button-next",
                prevEl: ".swiper-8__swiper-button-prev",
              },
            },
          },
        ]);
      }, 200); // Задержка для оптимизации
    })
  });
  
}

if(document.querySelector('#tabs-1')) {
  initTabs('#tabs-1', '.tabs__btn', '.tabs__info');
}

if(document.querySelectorAll(".btn-video-play")) {
  playVideo()
}

if(document.querySelector('.filter')){
  initCatalogTabs1('.filter__list', 'drop-down-2__btn', 'drop-down-2__box', 'active');
}

if (document.querySelector('.initFilter') && document.querySelector('.catalog-section-1__aside')){
  toggleActiveClass({
    buttonClass: 'initFilter',
    targetClass: 'catalog-section-1__aside',
    closeOnLinkClick: true,
    linkSelector: 'a',
    addStopScroll: true,
  });
}

if(document.querySelectorAll('.box-swiper-1__swiper')){
  document.querySelectorAll('.box-swiper-1__swiper').forEach((swiperContainer) => {
    new Swiper(swiperContainer, {
      slidesPerView: 2, // Показывать 4 слайда
      spaceBetween: 10, // Отступ между слайдами 20px
      navigation: {
        nextEl: swiperContainer.closest('.box-swiper-1__container').querySelector('.box-swiper-1__swiper-button-prev'),
        prevEl: swiperContainer.closest('.box-swiper-1__container').querySelector('.box-swiper-1__swiper-button-next'),
      },
      breakpoints: {
        // Настройка для адаптивности
        650: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1030: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });
}

if(document.querySelectorAll(".box-swiper-1__swiper-slide")){
  handleSwiperControls({
    swiperSlideClass: 'box-swiper-1__swiper-slide',
    buttonsGroupClass: 'box-swiper-1__group-btn',
    breakpoint: 1030
  });
}

if(document.querySelectorAll('.box-reviews__swiper')){
  document.querySelectorAll('.box-reviews__swiper').forEach((swiperElement) => {
    new Swiper(swiperElement, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
        fill: 'row',
      },
      spaceBetween: 20,
      navigation: {
        nextEl: swiperElement.closest('.box-reviews').querySelector('.box-reviews__swiper-button-prev'),
        prevEl: swiperElement.closest('.box-reviews').querySelector('.box-reviews__swiper-button-next'),
      },
      breakpoints: {
        650: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 20,
        },
        1030: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {
            rows: 1,
            fill: 'row',
          },
          spaceBetween: 20,
        },
      },
    });
  });
}