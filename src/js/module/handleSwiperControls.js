export function handleSwiperControls({
  swiperSlideClass,
  buttonsGroupClass,
  breakpoint = 900
}) {
  const blocks = document.querySelectorAll(`.${buttonsGroupClass}`);

  function updateButtonsVisibility() {
    blocks.forEach(block => {
      const swiperContainer = block.closest('.section');
      const slides = swiperContainer.querySelectorAll(`.${swiperSlideClass}`);
      const windowWidth = window.innerWidth;

      if (slides.length <= 4) {
        if (windowWidth <= breakpoint) {
          block.style.display = 'flex';
        } else {
          block.style.display = 'none';
        }
      } else {
        block.style.display = '';
      }
    });
  }

  updateButtonsVisibility();

  window.addEventListener('resize', updateButtonsVisibility);
}


