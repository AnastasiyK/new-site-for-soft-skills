document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-open-modal]');
    const modalOverlay = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');
    const videoPlayer = document.getElementById('videoPlayer');

  function openModal() {
    if (modalOverlay) {
        modalOverlay.classList.add('active');
        if (videoPlayer) {
            videoPlayer.play().catch(error => {
            console.error('Ошибка воспроизведения видео:', error);
        });
      }
    }
  }

  function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        if (videoPlayer) {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
            }
        }
    }

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
      console.log('Клик по кнопке:', btn);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      closeModal();
    }
  });
});