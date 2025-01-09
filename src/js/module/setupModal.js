export function setupModal({
  openButtonClass = ".open-modal-1",
  modalClass = ".modal",
  closeButtonClass = ".btn-close",
  stopScrollClass = "stop-scroll",
  activeClass = "active",
}) {
  const openButtons = document.querySelectorAll(openButtonClass);
  const modal = document.querySelector(modalClass);
  const body = document.body;

  if (!modal) {
    console.error("Модальное окно не найдено.");
    return;
  }

  const closeModal = () => {
    modal.classList.remove(activeClass);
    body.classList.remove(stopScrollClass);

    // Очистка инпутов
    const inputs = modal.querySelectorAll("input");
    inputs.forEach(input => (input.value = ""));
  };

  const openModal = () => {
    modal.classList.add(activeClass);
    body.classList.add(stopScrollClass);
  };

  // Открытие модального окна
  openButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); // Предотвращаем стандартное действие для ссылок
      openModal();
    });
  });

  // Закрытие по клику внутри модального окна (но не на вложенных элементах)
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Закрытие по клику на кнопку
  const closeButton = modal.querySelector(closeButtonClass);
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // Закрытие по нажатию клавиши Esc
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains(activeClass)) {
      closeModal();
    }
  });
}
