let swiperInstances = {};

export function handleSwiperClasses(slidersConfig) {
  slidersConfig.forEach(({ elementId, classWrapp, breakpoint, swiperConfig }) => {
    const swiperContainer = document.getElementById(elementId);
    if (!swiperContainer) return;

    const swiperList = swiperContainer.querySelector(classWrapp);
    if (!swiperList) return;

    const swiperItems = swiperList.querySelectorAll("li");

    if (window.innerWidth <= breakpoint) {
      if (!swiperItems.length) return;

      swiperContainer.classList.add("swiper");
      swiperList.classList.add("swiper-wrapper");
      swiperItems.forEach((item) => item.classList.add("swiper-slide"));

      if (!swiperInstances[elementId]) {
        swiperInstances[elementId] = createSwiper(`#${elementId}`, swiperConfig);
      }
    } else {
      swiperContainer.classList.remove("swiper");
      swiperList.classList.remove("swiper-wrapper");
      swiperItems.forEach((item) => item.classList.remove("swiper-slide"));

      if (swiperInstances[elementId]) {
        swiperInstances[elementId].destroy(true, true);
        delete swiperInstances[elementId];
      }
    }
  });
}

function createSwiper(selector, config) {
  return new Swiper(selector, {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: false,
    ...config,
  });
}


