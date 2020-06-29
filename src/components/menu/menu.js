
let media = document.querySelector('.menu__media__tablet-phone');

let burger = document.querySelector('.header-media-phone__burger');
burger.addEventListener('click', burgerMenu);




function burgerMenu() {

    if (media.classList.contains('display-block')) {
        media.classList.remove('display-block');
    }
    
    else {
        media.classList.add('display-block');
    }
}   


