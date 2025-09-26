

export default function campaignSwiper() {
    const campaign = "#campaign";

    new Swiper(".popular-swiper-container", {
        slidesPerView:1,
        pagination: {
            el: `${campaign} .swiper-pagination`,
            type: "bullets",
            clickable: true
        }
    })
}