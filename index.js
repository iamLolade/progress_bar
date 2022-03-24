let barContainer = document.getElementById("bars")

const render = () => {
    let bar = "";

    for(let i = 0; i < 6; i++) {
        bar += `
            <li class="bar" id=${i}>50%</li>
        `
    }
    barContainer.innerHTML = bar;
}

render();