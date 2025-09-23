

export default function banner() {
    const banner = document.getElementById("banner");

    const handleFocus = (boolean) => () => {
        banner.classList.toggle("active", boolean);
    }

    banner.addEventListener("focusin", handleFocus(true));
    banner.addEventListener("focusout", handleFocus(false));
}