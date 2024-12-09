export function toggleActiveClass({ 
    buttonClass, 
    targetClass, 
    closeOnLinkClick = false, 
    linkSelector = 'a' 
  }) {
    const button = document.querySelector(`.${buttonClass}`);
    const target = document.querySelector(`.${targetClass}`);
    
    if (!button || !target) {
      console.error('Элементы с указанными классами не найдены.');
      return;
    }
  
    function closeActive() {
      button.classList.remove('active');
      target.classList.remove('active');
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
  
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');
  
      if (isActive) {
        closeActive();
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
      } else {
        button.classList.add('active');
        target.classList.add('active');
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
  