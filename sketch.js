const containerInner = document.querySelector("#containerInner");




function populateDivs(crossANumber) {
    console.log(crossANumber);
    removeAllChildNodes(containerInner);
    for (let i = 1; i < crossANumber ** 2 * 2; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divs");
        div.style.flexBasis = `${100 / (crossANumber * 2)}%`;
        containerInner.appendChild(div);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};  

populateDivs(16);


//add repopulation if resize?