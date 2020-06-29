

let content = document.querySelector('.menu-basket');
let delivery = document.querySelector('.menu-basket__delivery');
let btn = document.querySelector('.menu__item.menu__item--cart');


btn.addEventListener('click', () => {
    // let popup = document.querySelector('.menu-basket__common-block');
    // popup && popup.remove()
    content.insertAdjacentHTML('beforeend', render());
    


    let close = document.querySelector('.menu-basket__but-close');
    close.addEventListener('click', () => content.classList.add('disp-none'));


    let continuePurchases = document.querySelector('.menu-basket__continue');
    continuePurchases.addEventListener('click', () => content.classList.add('disp-none'));





    


    // let productQuantity = +document.querySelector('.product__quantity');
    // let cumC = 0;
    // let basketPrice = +document.querySelectorAll('.menu-basket__price');
    // let sum = 0;

    // for(i = 0; i < basketPrice.length; i ++) {
    //     sum = sum + parseInt(basketPrice[i].innerHTML);

    // }
    // console.log(sum)


//     let basketPriceCommon = document.querySelector('.menu-basket__price-common');
//     basketPriceCommon.innerHTML = 'Итого ' + sum + ' руб';
  
    

// let productPlus = document.querySelectorAll('.product__plus');

// productPlus.forEach((i) => {
//     i.addEventListener('click', ddd);

// })

// function ddd(event) {
//     let r = 0;
//     let d = event.target.closest('.menu-basket__block-one').querySelectorAll('.product__quantity');

//     d.forEach((ind) => {
//         ind.innerHTML = +ind.innerHTML+1;

//         for(i = 0; i < basketPrice.length; i ++) {
//             r = basketPrice[i].innerHTML * ind.innerHTML;
    
//         }
//     })

   
//     console.log(r)
// }



function render() {
    
     return `
     <div class="menu-basket__common-delivery">
     <div class="menu-basket__common-block">
     <h1 class="menu-basket__headline">Корзина</h1>
     <button class="menu-basket__but-close" title="Закрыть"><img src="../../www/img/gtk-close_4305.png"alt=""></button>
     <div class="menu-basket__common">
     
     ${
        bascet.map(elem => {
            return `
            <div class="menu-basket__block-one">
                <div class="menu-basket__block-title">
                    <img class="product__img-main menu-basket__img-main" src= "${elem.img}">
                    <div>
                    <h2>${elem.title}</h2>
                    <p class="menu-basket__description">${elem.description}</p>
                    <p class="menu-basket__price">${elem.price}</p>
                    </div>
                </div>

                <div class="product__podblock">
                    <button class="product__minus">-</button>
                    <p class="product__quantity">1</p>
                    <button class="product__plus">+</button>
                </div>
            </div>
 
     </div>
     `
    })
    .join('')
    } 
     <div class="menu-basket__block-button">
         <button class="menu-basket__continue">Продолжить<br>покупки</button>
         <div>
             <p class="menu-basket__price-common"></p>
             <button class="menu-basket__issue">Оформить</button>
         </div>
     </div>


    `;
}

let buttonIssue = document.querySelector('.menu-basket__issue');
let blockone = document.querySelector('.menu-basket__common-block');


buttonIssue.addEventListener('click', () => {

    blockone.insertAdjacentHTML('beforeend', issue());
    


})


function issue() {
    return `
        </div>
        <div class="menu-basket__delivery">
            <h3>Доставка</h3>
            <button class="menu-basket__but-close" title="Закрыть"><img src="../../www/img/gtk-close_4305.png"></button>
            <label><input type="radio">Самовывоз из Новой почты</label>
            <br>
            <label><input type="radio">Курьером Новой почты</label><br>
            <p>Адрес</p>
            <input placeholder="ул.Гагарина" type="text">
            <p>Имя</p>
            <input placeholder="Иван" type="text">
            <p>Фамилия</p>
            <input placeholder="Иванов" type="text">
            <p>Телефон</p>
            <input placeholder="095 254 2312" type="text">
            <div class="menu-basket__issue-block"><button class="menu-basket__issue">Оформить</button></div>
        </div>
        </div>
    `
}



})

