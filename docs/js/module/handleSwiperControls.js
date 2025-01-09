export function handleSwiperControls({ 
  swiperSlideClass,
  buttonsGroupClass
}) {
  const blocks = document.querySelectorAll(`.${buttonsGroupClass}`);

  function updateButtonsVisibility() {
    const windowWidth = window.innerWidth;

    blocks.forEach(block => {
      const swiperContainer = block.closest('.section');
      const slidesCount = swiperContainer.querySelectorAll(`.${swiperSlideClass}`).length;

      // Если слайдов больше 4, ничего не делать
      if (slidesCount > 4) return;

      if (slidesCount === 4 && windowWidth <= 1030) {
        block.style.display = 'flex';
      } else if (slidesCount === 3 && windowWidth <= 650) {
        block.style.display = 'flex';
      } else {
        block.style.display = 'none';
      }
    });
  }

  updateButtonsVisibility();
  window.addEventListener('resize', updateButtonsVisibility);
}