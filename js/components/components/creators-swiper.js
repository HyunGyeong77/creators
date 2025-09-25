

export default function creatorsSwiper() {
    const creators = '#creators';

    new Swiper('.creators-swiper-container', {
        slidesPerView:4,
        spaceBetween:20,
        loop:true,
        navigation: {
            nextEl: `${creators} .swiper-button-next`,
            prevEl: `${creators} .swiper-button-prev`
        }
    })
}