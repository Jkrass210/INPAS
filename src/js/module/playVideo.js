export function playVideo() {
    const videos = document.querySelectorAll('.service-support-section-3__list video');
    const playButtons = document.querySelectorAll('.btn-video-play');

    playButtons.forEach((button, index) => {
        const video = videos[index];

        button.addEventListener('click', () => {
            if (video.paused) {
                playVideo(video, button);
            } else {
                pauseVideo(video, button);
            }
        });

        video.addEventListener('click', () => {
            if (video.paused) {
                playVideo(video, playButtons[index]);
            } else {
                pauseVideo(video, playButtons[index]);
            }
        });
        video.addEventListener('ended', () => {
            button.classList.remove('hidden');
            video.removeAttribute('controls');
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            const activeVideo = Array.from(videos).find(video => !video.paused);
            if (activeVideo) {
                const button = activeVideo.nextElementSibling;
                pauseVideo(activeVideo, button);
            }
        }
    });

    function playVideo(video, button) {
        videos.forEach((vid, idx) => {
            if (vid !== video) {
                pauseVideo(vid, playButtons[idx]);
            }
        });
  
        video.play();
        video.setAttribute('controls', '');
        button.classList.add('hidden');
    }
  
    function pauseVideo(video, button) {
        video.pause();
        video.removeAttribute('controls');
        button.classList.remove('hidden');
    }
  };
  
