document.addEventListener('DOMContentLoaded' , () => {
    const buttons = document.querySelectorAll('[data-open-modal]');
    const modalOverlay = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');
    const modalForm = document.querySelector('.course__form');
    const signupForm = document.querySelector('.signup');
    console.log(buttons)

    function openModal(){
        if (modalOverlay && modalForm) {
            modalOverlay.classList.add('active')
        }
    }

    function closeModal(){
        if (modalOverlay && modalForm) {
            modalOverlay.classList.remove('active')
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // e - остановка перехода по ссылке 
            e.preventDefault();
            openModal();
            console.log('Клик по кнопке:', btn);
        });
    });

    if (modalClose){
        modalClose.addEventListener('click', closeModal)
    }

    if (modalOverlay){
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        })
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
            closeModal();
        }
    });

})
