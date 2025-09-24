

export default function Header() {
    const header = document.getElementById("header");
    const aTags = header.querySelectorAll(".navigator a");
    
    aTags.forEach(item => {
        const pathname = new URL(item.href).pathname;
        item.classList.toggle("select", window.location.pathname === pathname);

        if(window.location.pathname === pathname) {
            item.setAttribute("aria-current", `${item.textContent}`);
        } else {
            if(!item.getAttribute("aria-current")) return;
            item.removeAttribute("aria-current");
        }
    });
}