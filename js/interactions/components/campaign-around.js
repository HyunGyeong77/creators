

export default function campaignAround() {
    let currentSelect = "전체";
    
    const campaignAround = document.getElementById("campaign-around");
    const buttons = campaignAround.querySelectorAll(".list button");
    const contents = campaignAround.querySelectorAll("[data-value]");

    const handleClick = (e) => {
        const {currentTarget} = e;
        currentSelect = currentTarget.textContent;

        contents.forEach(item => {
            item.classList.toggle("select", item.dataset.value === currentSelect);
        })

        buttons.forEach(item => {
            item.classList.toggle("select", item.textContent === currentSelect);
        });
    }

    contents.forEach(item => {
        item.classList.toggle("select", item.dataset.value === currentSelect);
    });

    buttons.forEach(item => {
        item.classList.toggle("select", item.textContent === currentSelect);
        item.addEventListener("click", handleClick);
    });
}