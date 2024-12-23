/*export function handleSwiperClasses(elementId, classWrapp, n) {
  const swiperContainer = document.getElementById(elementId);
  if (!swiperContainer) return;
  
  const swiperList = swiperContainer.querySelector(classWrapp);
  const swiperItems = swiperList.querySelectorAll("li");
  const breakpoint = n;

  if (window.innerWidth <= breakpoint) {
    // Добавляем классы Swiper
    swiperContainer.classList.add("swiper");
    swiperList.classList.add("swiper-wrapper");
    swiperItems.forEach((item) => item.classList.add("swiper-slide"));
  } else {
    // Удаляем классы Swiper
    swiperContainer.classList.remove("swiper");
    swiperList.classList.remove("swiper-wrapper");
    swiperItems.forEach((item) => item.classList.remove("swiper-slide"));
  }
}*/

let swiperInstance = null; // Переменная для хранения экземпляра Swiper

export function handleSwiperClasses(elementId, classWrapp, n) {
  const swiperContainer = document.getElementById(elementId);
  if (!swiperContainer) return;
  
  const swiperList = swiperContainer.querySelector(classWrapp);
  const swiperItems = swiperList.querySelectorAll("li");
  const breakpoint = n;

  console.log(swiperItems)

  if (window.innerWidth <= breakpoint) {
    // Добавляем классы Swiper
    swiperContainer.classList.add("swiper");
    swiperList.classList.add("swiper-wrapper");
    swiperItems.forEach((item) => item.classList.add("swiper-slide"));

    // Инициализируем Swiper, если он еще не создан
    if (!swiperInstance) {
      swiperInstance = createSwiper(`#${elementId}`);
    }
  } else {
    // Удаляем классы Swiper
    swiperContainer.classList.remove("swiper");
    swiperList.classList.remove("swiper-wrapper");
    swiperItems.forEach((item) => item.classList.remove("swiper-slide"));

    // Уничтожаем Swiper, если он существует
    if (swiperInstance) {
      swiperInstance.destroy(true, true); // Удаление всех DOM-элементов Swiper
      swiperInstance = null; // Сбрасываем переменную
    }
  }
}

function createSwiper(selector) {
  return new Swiper(selector, {
    slidesPerView: 1, // 2 столбца по умолчанию
    spaceBetween: 18, // Отступы между слайдами
    grid: {
      rows: 3, // 3 строки
      fill: 'row', // Заполнять строки
    },
    navigation: {
      nextEl: '.swiper-7__swiper-button-prev',
      prevEl: '.swiper-7__swiper-button-next',
    },
    loop: false, // Нет бесконечного прокручивания
    breakpoints: {
      // Для окон шириной меньше 650px
      650: {
        slidesPerView: 2, // 1 столбец
        grid: {
          rows: 3, // Оставляем 3 строки
        },
        spaceBetween: 18, // Отступы остаются такими же
      },
    },
  });
}
