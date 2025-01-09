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

    const inputs = modal.querySelectorAll("input");
    inputs.forEach(input => (input.value = ""));
  };

  const openModal = () => {
    modal.classList.add(activeClass);
    body.classList.add(stopScrollClass);
  };

  openButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      openModal();
    });
  });

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const closeButton = modal.querySelector(closeButtonClass);
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains(activeClass)) {
      closeModal();
    }
  });
}
