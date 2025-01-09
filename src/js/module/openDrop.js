export function openDrop(btn, itemSelector, init = true, updateButtonText = false) {
  const buttonId = btn.id;
  const drop = document.querySelector(`[data-drop-id="${buttonId}"]`);
  const infoSpan = btn.closest('.drop-down1__wrapp')?.querySelector('.drop-down1__info');

  function offDrop() {
    btn.classList.remove("active");
    drop.classList.remove("active");
  }

  function onDrop() {
    btn.classList.add("active");
    drop.classList.add("active");
  }

  if (drop.classList.contains("active")) {
    offDrop();
  } else {
    onDrop();
  }

  const handleClickOutside = (event) => {
    if (!btn.contains(event.target) && !drop.contains(event.target)) {
      offDrop();
      removeListeners();
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      offDrop();
      removeListeners();
    }
  };

  const handleScroll = () => {
    offDrop();
    removeListeners();
  };

  const addListeners = () => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('scroll', handleScroll, { passive: true });
  };

  const removeListeners = () => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscapeKey);
    document.removeEventListener('scroll', handleScroll);
  };

  addListeners();

  if (init) {
    const span = btn.querySelector('span');

    drop.addEventListener('click', (event) => {
      const clickedItem = event.target.closest(itemSelector);
      if (!clickedItem) return;

      if (updateButtonText) {
        const firstSpan = clickedItem.querySelector('span:not(.hidden)');
        const hiddenSpan = clickedItem.querySelector('.hidden');

        if (firstSpan && span) {
          span.textContent = firstSpan.textContent;
        }
        if (hiddenSpan && infoSpan) {
          infoSpan.textContent = hiddenSpan.textContent;
        }
      }
      drop.querySelectorAll(itemSelector).forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      offDrop();
    });
  }
}

