let butPlus = document.querySelectorAll('.product__plus');
let butMinus = document.querySelectorAll('.product__minus');

let productCommon = document.querySelector('.product');
let num = document.querySelector('.product__quantity');

butPlus.forEach(element => {
    element.addEventListener('click', plus);
});


function plus(event) {

    let r = event.target.closest('.product').querySelectorAll('.product__quantity');

    r.forEach(el => {
        el.innerHTML = +el.innerHTML +1;
    });
}



butMinus.forEach(element => {
    element.addEventListener('click', minus);
});


function minus(event) {

    let r = event.target.closest('.product').querySelectorAll('.product__quantity');

    r.forEach(el => {
        el.innerHTML = +el.innerHTML -1;
    });
}






















// let num = document.querySelectorAll('.product__plus');

// num.forEach((x) => {
//     x.addEventListener('click', (e) => {
//         let b = e.target.parentElement.querySelector('.product__quantity');
//         b.innerHTML = +b.innerHTML + 1;
//     })

// })