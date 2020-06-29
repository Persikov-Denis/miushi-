
const prevIcon = '<img class="carusel-prev-icon" src="../../www/img/prev.png" alt="">';
const nextIcon = '<img class="carusel-next-icon" src="../../www/img/next.png" alt="">';

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
