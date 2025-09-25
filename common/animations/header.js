

export default function Header() {
    const header = document.getElementById("header");
    const aTags = header.querySelectorAll(".navigator a");
    
    aTags.forEach(item => {
        let href = new URL(item.href).pathname;
        item.classList.toggle("select", window.location.pathname === href);

        if(window.location.pathname === href) {
            item.setAttribute("aria-current", `${item.textContent}`);
        } else {
            if(!item.getAttribute("aria-current")) return;
            item.removeAttribute("aria-current");
        }
    });
}