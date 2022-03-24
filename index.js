let barContainer = document.getElementById("bars");
let finishBtn = document.getElementById("finish")

const colors = ["#B1E26F", "#ED7C6E", "#FEFEFE", "#8DCCEF", "#F9D076"];

const render = () => {
    let bar = "";

    for(let i = 0; i < 6; i++) {
        bar += `
            <div class="barTemplate">
                <li class="singleBar" style="background-color: ${colors[i]}">50%</li>
            </div>
        `
    }
    barContainer.innerHTML = bar;
}

finishBtn.addEventListener("click", () => {
    const progress = document.querySelector(".singleBar");
    progress.setAttribute("id", "play-animation")
})

render();