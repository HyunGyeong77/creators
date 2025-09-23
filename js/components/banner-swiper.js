export default function bannerSwiper() {
    const swiperContainer = '.banner-swiper-container';

    const swiper = new Swiper(swiperContainer, {
        slidesPerView:'auto',
        spaceBetween:60,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop:true,
        centeredSlides:true,
        navigation: {
            nextEl: `${swiperContainer} .swiper-button-next`,
            prevEl: `${swiperContainer} .swiper-button-prev`
        },
        on: {
            init: () => {
                const duplicates = document.querySelectorAll(`${swiperContainer} .swiper-slide-duplicate`);
                duplicates.forEach(item => {
                    const focusables = item.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
                    focusables.forEach(el => el.setAttribute("tabindex", "-1"));
                })
            }
        }
    });

    swiper.el.addEventListener("mouseenter", function() {
        swiper.autoplay.stop();
    });

    swiper.el.addEventListener("mouseleave", function() {
        swiper.autoplay.start();
    })
}