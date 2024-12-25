export function initTabs(tabsContainerSelector, tabButtonClass, tabContentClass) {
  const tabsContainer = document.querySelector(tabsContainerSelector);
  if (!tabsContainer) return;

  const tabButtons = tabsContainer.querySelectorAll(tabButtonClass);
  const tabContents = tabsContainer.querySelectorAll(tabContentClass);

  tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const isActive = button.classList.contains('active');

          tabButtons.forEach((btn) => btn.classList.remove('active'));
          tabContents.forEach((content) => content.classList.remove('active'));

          if (!isActive) {
              button.classList.add('active');
              const correspondingContent = tabContents[index];
              correspondingContent.classList.add('active');
          }
      });
  });
}

