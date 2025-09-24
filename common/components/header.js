

export default function header() {
    scrollEvent();
    focusEvent();
}

let isFocus = false;

function scrollEvent() {
    const header = document.getElementById("header");

    document.addEventListener("scroll", () => {
        if(isFocus) return;

        const {scrollY} = window;
        header.classList.toggle("active", scrollY > 20);
    });
}

function focusEvent() {
    const header = document.getElementById("header");

    header.addEventListener("focusin", () => {
        header.classList.add("active");
        isFocus = true;
    });

    header.addEventListener("focusout", () => {
        header.classList.remove("active");
        isFocus = false;
    });
}