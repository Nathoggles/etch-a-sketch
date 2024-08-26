const containerInner = document.querySelector("#containerInner");


function populateDivs(divs) {
    for (let i = 1, i < divs, i++) {
        const div = document.createElement("div");
        div.setAttribute("class, divs");
        containerInner.appendChild(div);
    }
}