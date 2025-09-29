export default function hero() {
    document.addEventListener("DOMContentLoaded", () => {
        anime({
            targets:"#hero-count",
            innerText: [0, 3700],
            round:1,
            easing: 'easeOutQuart',
            duration: 2500,
            update: function() {
                const heroCount = document.getElementById("hero-count");
                heroCount.innerText = Number(heroCount.innerText).toLocaleString();
            }
        })
    });   
}