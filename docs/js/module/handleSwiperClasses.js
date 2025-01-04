let swiperInstances = {}; // Объект для хранения экземпляров Swiper

export function handleSwiperClasses(slidersConfig) {
  slidersConfig.forEach(({ elementId, classWrapp, breakpoint, swiperConfig }) => {
    const swiperContainer = document.getElementById(elementId);
    if (!swiperContainer) return;

    const swiperList = swiperContainer.querySelector(classWrapp);
    if (!swiperList) return;

    const swiperItems = swiperList.querySelectorAll("li");

    if (window.innerWidth <= breakpoint) {
      if (!swiperItems.length) return; // Пропускаем, если список пуст

      // Добавляем классы Swiper
      swiperContainer.classList.add("swiper");
      swiperList.classList.add("swiper-wrapper");
      swiperItems.forEach((item) => item.classList.add("swiper-slide"));

      // Инициализируем Swiper, если он еще не создан
      if (!swiperInstances[elementId]) {
        swiperInstances[elementId] = createSwiper(`#${elementId}`, swiperConfig);
      }
    } else {
      // Удаляем классы Swiper
      swiperContainer.classList.remove("swiper");
      swiperList.classList.remove("swiper-wrapper");
      swiperItems.forEach((item) => item.classList.remove("swiper-slide"));

      // Уничтожаем Swiper, если он существует
      if (swiperInstances[elementId]) {
        swiperInstances[elementId].destroy(true, true); // Удаление всех DOM-элементов Swiper
        delete swiperInstances[elementId]; // Удаляем из объекта
      }
    }
  });
}

function createSwiper(selector, config) {
  return new Swiper(selector, {
    slidesPerView: 1, // Настройки по умолчанию
    spaceBetween: 18,
    loop: false,
    ...config, // Индивидуальные настройки для слайдера
  });
}


