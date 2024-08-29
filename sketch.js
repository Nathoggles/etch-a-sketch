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



const sliderEl = document.querySelector("#myRange");
const sliderValue = document.querySelector(".value");



sliderEl.addEventListener("input", (event) => {
    
    const tempSliderValue = event.target.value;
    sliderValue.textContent = tempSliderValue;
    populateDivs(tempSliderValue);

    const progress = (tempSliderValue / sliderEl.max) * 100;
    sliderEl.style.background = `linear-gradient(to right, rgb(54, 31, 11) ${progress}%, rgb(122, 85, 50) ${progress}%)`; 
   
});


function randomNumber() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(256);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
let randomRgb; 
function randomizeRGB(){
 let randomRgb = "rgb(" + randomNumber() + ",&nbsp" + randomNumber() + ",&nbsp" + randomNumber() + ")";
 randomRgb.toString;
 console.log(randomRgb);
}
randomizeRGB();





/*click.forEach((button) => {
    button.addEventListener("click", () => {*/
//why do you need +1? ask later