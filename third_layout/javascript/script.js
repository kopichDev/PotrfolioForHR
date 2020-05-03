var btnBurger = document.querySelector('.menu__btn');

btnBurger.onclick = function() {
    event.preventDefault;
    btnBurger.classList.toggle('menu__btn_active'); // ВКЛ/ВЫКЛ КЛАСС НА ЭЛЕМЕНТ
}






// btnBurger.onclick = function() {
//     event.preventDefault;
//     btnBurger.classList.add('menu__btn_active');
// }

// btnBurger.onclick = function() {
//     event.preventDefault;
//     if (el.classList.contains('menu__btn_active') {
//         btnBurger.classList.remove('menu__btn_active');
//     }
// }
