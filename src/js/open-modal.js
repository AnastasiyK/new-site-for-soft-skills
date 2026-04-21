document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('[data-open-modal]');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    const modals = {
        signup: document.getElementById('modal-signup'),
        video: document.getElementById('modal-video')
    };

    const videoFrame = document.getElementById('video-frame');
    const signupForm = document.querySelector('.signup');

    function openModal(modalName, videoSrc = null) {
        const modal = modals[modalName];
        if (!modal) {
            console.error(`Модалка "${modalName}" не найдена`);
            return;
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 

        if (modalName === 'video' && videoSrc && videoFrame) {
            videoFrame.src = videoSrc;
        }
    }

    function closeModal(modalName) {
        const modal = modals[modalName];
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = ''; 

        if (modalName === 'video' && videoFrame) {
            videoFrame.src = '';
        }
    }

    function closeAllModals() {
        Object.keys(modals).forEach(name => closeModal(name));
    }

    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalName = btn.dataset.openModal; 
            const videoSrc = btn.dataset.videoSrc;
            openModal(modalName, videoSrc);
        });
    });


    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();й
            const modal = btn.closest('.modal-overlay');
            const modalName = Object.keys(modals).find(key => modals[key] === modal);
            if (modalName) closeModal(modalName);
        });
    });

    Object.entries(modals).forEach(([name, modal]) => {
        if (!modal) return;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(name);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        Object.entries(modals).forEach(([name, modal]) => {
            if (modal?.classList.contains('active')) closeModal(name);
        });
    });

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            console.log('Заявка:', Object.fromEntries(formData));
           
            alert('Спасибо! Мы свяжемся с вами.');
            signupForm.reset();
            closeModal('signup');
        });
    }
});