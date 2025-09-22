export default function bannerSwiper() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView:'auto',
        spaceBetween:60,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop:true,
        centeredSlides:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    swiper.el.addEventListener("mouseenter", function() {
        swiper.autoplay.stop();
    });

    swiper.el.addEventListener("mouseleave", function() {
        swiper.autoplay.start();
    })
}