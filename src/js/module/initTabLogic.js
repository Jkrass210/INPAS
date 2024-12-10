export function initTabLogic(wrapperSelector) {
    const wrapper = document.querySelector(wrapperSelector);
  
    if (!wrapper) return;
  
    const buttons = wrapper.querySelectorAll('.box-info__btn-group button');
    const items = wrapper.querySelectorAll('.box-info__box-wrapp .box-info__item');

    let hasActiveButton = false;
    buttons.forEach((button, index) => {
        if (button.classList.contains('active')) {
            items[index].classList.add('active');
            hasActiveButton = true;
        }
    });

    if (!hasActiveButton && buttons.length > 0 && items.length > 0) {
        buttons[0].classList.add('active');
        items[0].classList.add('active');
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach((btn) => btn.classList.remove('active'));
            items.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            items[index].classList.add('active');
        });
    });
  }