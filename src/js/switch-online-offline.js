function setMode(mode) {
    // Обновляем активный переключатель
    const buttons = document.querySelectorAll('.toggle-btn');
    console.log(buttons)
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (mode === 'offline') {
        buttons[0].classList.add('active');
    }
    else {
        buttons[1].classList.add('active');
    }

    // Скрываем все информационные блоки
    document.querySelectorAll('.mode-content').forEach (block => {
        block.classList.remove('active');
    });

    // Показываем нужный
    document.getElementById(`${mode}-content`).classList.add('active');
    
    console.log('Выбран режим: ', mode);
}

    // Функция открытия модального окна
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

    // Функция закрытия модального окна
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

