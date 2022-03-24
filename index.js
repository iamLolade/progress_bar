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
    const progress = document.querySelectorAll(".singleBar");
    let i = 0;
    if(i == 0) {
        i = 1;
        for(let j = 0; j < progress.length; j++) {
            let elem = progress[j];
            let width = 50;
            let id = setInterval(frame, 10);
            function frame() {
                if(width >= 100) {
                    clearInterval(id)
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                }
            }
        }
    }
})

render();