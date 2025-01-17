export function moveModalBlocks() {
  document.addEventListener('DOMContentLoaded', () => {
    // Проверяем наличие элементов с классом "modal-2" и атрибутом "data-drop-id"
    const modals = document.querySelectorAll('div.modal.modal-2[data-drop-id]');

    if (modals.length > 0) {
      // Проверяем или создаём контейнер для перемещения модалок
      let hiddenContainer = document.querySelector('.box-swiper__hidden-for-modal');
      if (!hiddenContainer) {
        hiddenContainer = document.createElement('div');
        hiddenContainer.className = 'box-swiper__hidden-for-modal';
        document.body.appendChild(hiddenContainer);
      }

      // Перемещаем найденные модалки в контейнер
      modals.forEach(modal => {
        hiddenContainer.appendChild(modal);
      });
    }
  });
}