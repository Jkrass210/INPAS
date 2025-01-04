export function initCatalogTabs1(containerClass, buttonClass, boxClass, activeClass) {
  const container = document.querySelector(containerClass);

  if (!container) return;

  const closeAllTabs = () => {
    const activeButtons = container.querySelectorAll(`.${buttonClass}.${activeClass}`);
    activeButtons.forEach(button => button.classList.remove(activeClass));
  };

  container.addEventListener('click', (e) => {
    const button = e.target.closest(`.${buttonClass}`);

    if (!button) return;

    e.preventDefault();

    button.classList.toggle(activeClass);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllTabs();
    }
  });
};