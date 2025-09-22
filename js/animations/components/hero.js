export default function hero() {
    counting();
    currentDate();
}

function counting() {
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

function currentDate() {
    const heroDate = document.getElementById("hero-date");
    const date = new Date();
    const curDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getDate()}`;
    heroDate.innerText = curDate;
}