let barContainer = document.getElementById("bars")

const colors = ["#B1E26F", "#ED7C6E", "#FEFEFE", "#8DCCEF", "#F9D076"];

const render = () => {
    let bar = "";

    for(let i = 0; i < 6; i++) {
        bar += `
            <div class="barTemplate">
                <li class="singleBar" style="background-color: ${colors[i]}" id=${i}>50%</li>
            </div>
        `
    }
    barContainer.innerHTML = bar;
}

render();