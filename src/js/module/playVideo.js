/*export function playVideo() {
  const videos = document.querySelectorAll('.service-support-section-3__list video');
  const playButtons = document.querySelectorAll('.btn-video-play');

  // Инициализация видео
  playButtons.forEach((button, index) => {
      const video = videos[index];

      // Клик по кнопке воспроизведения
      button.addEventListener('click', () => {
          if (video.paused) {
              playVideo(video, button);
          } else {
              pauseVideo(video, button);
          }
      });

      // Клик по самому видео
      video.addEventListener('click', () => {
          if (video.paused) {
              playVideo(video, playButtons[index]);
          } else {
              pauseVideo(video, playButtons[index]);
          }
      });

      // Событие завершения видео
      video.addEventListener('ended', () => {
          button.classList.remove('hidden');
      });
  });

  // Управление пробелом для паузы/воспроизведения
  document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
          event.preventDefault(); // Предотвращает прокрутку страницы
          const activeVideo = Array.from(videos).find(video => !video.paused);
          if (activeVideo) {
              const button = activeVideo.nextElementSibling; // Кнопка рядом с активным видео
              pauseVideo(activeVideo, button);
          }
      }
  });

  // Функция воспроизведения видео
  function playVideo(video, button) {
      // Останавливаем все остальные видео
      videos.forEach((vid, idx) => {
          if (vid !== video) {
              pauseVideo(vid, playButtons[idx]);
          }
      });

      video.play();
      button.classList.add('hidden');
  }

  // Функция паузы видео
  function pauseVideo(video, button) {
      video.pause();
      button.classList.remove('hidden');
  }
};*/
export function playVideo() {
    const videos = document.querySelectorAll('.service-support-section-3__list video');
    const playButtons = document.querySelectorAll('.btn-video-play');
  
    // Инициализация видео
    playButtons.forEach((button, index) => {
        const video = videos[index];
  
        // Клик по кнопке воспроизведения
        button.addEventListener('click', () => {
            if (video.paused) {
                playVideo(video, button);
            } else {
                pauseVideo(video, button);
            }
        });
  
        // Клик по самому видео
        video.addEventListener('click', () => {
            if (video.paused) {
                playVideo(video, playButtons[index]);
            } else {
                pauseVideo(video, playButtons[index]);
            }
        });
  
        // Событие завершения видео
        video.addEventListener('ended', () => {
            button.classList.remove('hidden');
            video.removeAttribute('controls'); // Удаляем controls по завершению видео
        });
    });
  
    // Управление пробелом для паузы/воспроизведения
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Предотвращает прокрутку страницы
            const activeVideo = Array.from(videos).find(video => !video.paused);
            if (activeVideo) {
                const button = activeVideo.nextElementSibling; // Кнопка рядом с активным видео
                pauseVideo(activeVideo, button);
            }
        }
    });
  
    // Функция воспроизведения видео
    function playVideo(video, button) {
        // Останавливаем все остальные видео
        videos.forEach((vid, idx) => {
            if (vid !== video) {
                pauseVideo(vid, playButtons[idx]);
            }
        });
  
        video.play();
        video.setAttribute('controls', ''); // Добавляем controls
        button.classList.add('hidden');
    }
  
    // Функция паузы видео
    function pauseVideo(video, button) {
        video.pause();
        video.removeAttribute('controls'); // Удаляем controls
        button.classList.remove('hidden');
    }
  };
  
