document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector (".menu__mobile");
    const closeBtn = document.querySelector (".close__btn");
    const menuBlock = document.querySelector (".menu__block")
    
    console.log(hamburger);
    console.log(menu);
    console.log(closeBtn);

    // открытие окна
    hamburger.addEventListener("click", () => {
        menu.classList.add("active")
    })

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active")
    })

    // закрытие меню при клике всне его области
    document.addEventListener("click", (e) => {
        console.log(e.target);
        if (!menuBlock.contains(e.target) && !hamburger.contains(e.target)){
            // ! не 
            menu.classList.remove("active");
        }
    });

})