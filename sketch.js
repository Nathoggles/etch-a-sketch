const containerInner = document.querySelector("#containerInner");




function populateDivs(crossANumber) {
    console.log(crossANumber);
    removeAllChildNodes(containerInner);
    for (let i = 1; i < crossANumber ** 2 * 2 + 1; i++) {
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

const divs = document.querySelectorAll(".divs");
let divsColor = "black";

divs.forEach((div) => { 
    div.addEventListener("pointerover", (event) => { event.target.style.background = divsColor;
    })
});




let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};



/*click.forEach((button) => {
    button.addEventListener("click", () => {*/
//why do you need +1? ask later