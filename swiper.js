
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 20rem
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 30rem
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 40rem
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 10
        }
    }
})
