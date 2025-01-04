export function toggleActiveClass({
  buttonClass,
  targetClass,
  closeOnLinkClick = false,
  linkSelector = 'a',
  addStopScroll = false, // Новый параметр
}) {
  const button = document.querySelector(`.${buttonClass}`);
  const target = document.querySelector(`.${targetClass}`);
  const body = document.body; // Ссылка на body

  if (!button || !target) {
    console.error('Элементы с указанными классами не найдены.');
    return;
  }

  function closeActive() {
    button.classList.remove('active');
    target.classList.remove('active');
    if (addStopScroll) {
      body.classList.remove('stop-scroll');
    }
  }

  function handleClickOutside(event) {
    if (!target.contains(event.target) && event.target !== button) {
      closeActive();
      document.removeEventListener('click', handleClickOutside);
    }
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      closeActive();
      document.removeEventListener('keydown', handleEscapeKey);
    }
  }

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const isActive = button.classList.contains('active');

    if (isActive) {
      closeActive();
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    } else {
      button.classList.add('active');
      target.classList.add('active');
      if (addStopScroll) {
        body.classList.add('stop-scroll');
      }
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }
  });

  if (closeOnLinkClick) {
    target.addEventListener('click', (event) => {
      if (event.target.closest(linkSelector)) {
        closeActive();
      }
    });
  }
}
