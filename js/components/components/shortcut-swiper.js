

export default function shortcutSwiper() {
    const shortcut = '#shortcut';

    function updateTabindex(swiper) {
        swiper.slides.forEach(item => {
            const isVisible = item.classList.contains("swiper-slide-active");
            const aTags = item.querySelectorAll("a");
            aTags.forEach(a => {
                a.setAttribute("tabindex", isVisible ? "0" : "-1");
            });
        });
    }

    const swiper = new Swiper('.shortcut-swiper-container', {
        slidesPerView:1,
        spaceBetween:19.2,
        autoplay: {
            delay:3000,
            disableOnInteraction: false
        },
        pagination: {
            el: `${shortcut} .swiper-pagination`,
            type: 'bullets',
            clickable: true,
        },
        on: {
            init: updateTabindex,
            slideChangeTransitionEnd: updateTabindex
        }
    });

    const handleFocus = (boolean) => () => {
        boolean ? swiper.autoplay.stop() : swiper.autoplay.start();
    }

    swiper.el.addEventListener("mouseenter", handleFocus(true));
    swiper.el.addEventListener("mouseleave", handleFocus(false));
    swiper.el.addEventListener("focusin", handleFocus(true));
    swiper.el.addEventListener("focusout", handleFocus(false));
}