

export default function header() {
    scrollEvent();
    focusEvent();
}

function scrollEvent() {
    const header = document.getElementById("header");

    document.addEventListener("scroll", () => {
        const {scrollY} = window;
        header.classList.toggle("active", scrollY > 20);
    });
}

function focusEvent() {
    const header = document.getElementById("header");

    header.addEventListener("focusin", () => {
        if(header.className.includes("active")) return;
        header.classList.add("active");
    });

    header.addEventListener("focusout", () => {
        header.classList.remove("active");
    });
}