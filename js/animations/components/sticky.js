

export default function sticky() {
    scroll();
}

function scroll() {
    const floating = document.getElementById("floating");
    let ticking = false;

    const handleScroll = () => {
        if(!ticking) {
            window.requestAnimationFrame(() => {
                floating.classList.toggle("off", window.scrollY < 300);
                ticking = false;
            });

            ticking = true;
        }
    }

    window.addEventListener("scroll", handleScroll);
}
