document.addEventListener('click', butbascet);

let bascet = [];

function butbascet(event) {
    if( !event.target.classList.contains('product__bascet-link')) return;
    
    let basc = {
        img: event.target.closest('.product').querySelector('.product__img-main').src,
        title: event.target.closest('.product').querySelector('.product__title').innerHTML,
        description: event.target.closest('.product').querySelector('.product__value').innerHTML,
        price: event.target.closest('.product').querySelector('.product__price').innerHTML
    }

    bascet.push(basc);
    console.log(bascet);   


  bascet.forEach((item,index) => {

    let ind = index + 1;
      console.log(ind)

      let count = document.querySelector('.menu__count');
      count.innerHTML = ind;
      count.classList.add('disp-block')
  })


}










   

