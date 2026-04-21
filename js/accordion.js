console.log("Я вижу тебя!!!!")

document.querySelectorAll('.questions__item').forEach(item => {
    console.log("Я вижу тебяяяя!!!!")
    item.addEventListener('click', () => {
        // Закрываем все другие
        document.querySelectorAll('.questions__item').forEach(element => {
            if (element !== item){
                element.classList.remove('active');
            }
        });
        // Переключаем текущий
        item.classList.toggle('active');
    });
});
