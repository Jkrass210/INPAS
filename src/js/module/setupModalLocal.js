export function setupModalLocal(buttonId) {
  const modal = document.querySelector(`[data-drop-id="${buttonId}"]`);

  if (!modal) {
    console.error(`Модальное окно с data-drop-id="${buttonId}" не найдено.`);
    return;
  }

  const modalInner = modal.querySelector('.modal-feedback');
  const closeButton = modal.querySelector('.btn-close');
  const body = document.body;

  const openModal = () => {
    modal.classList.add('active');
    body.classList.add('stop-scroll');
    document.addEventListener('keydown', handleEscapeKey);
    modal.addEventListener('click', handleClickOutside);
  };

  const closeModal = () => {
    modal.classList.remove('active');
    body.classList.remove('stop-scroll');
    document.removeEventListener('keydown', handleEscapeKey);
    modal.removeEventListener('click', handleClickOutside);
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleClickOutside = (event) => {
    if (!modalInner.contains(event.target)) {
      closeModal();
    }
  };

  if (closeButton) {
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      closeModal();
    });
  }
  openModal();
}