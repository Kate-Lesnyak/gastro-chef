const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1180: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
