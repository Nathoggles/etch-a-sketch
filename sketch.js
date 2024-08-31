const containerInner = document.querySelector("#containerInner");
const black = document.querySelector ("#black");
const rgb = document.querySelector ("#rgb");
const white = document.querySelector ("#white");
const buttons = document.querySelectorAll(".buttons");


let divsColor = "black";
let rgbToggle;
let isBordered = true;

function populateDivs(crossANumber) {
    removeAllChildNodes(containerInner);
    for (let i = 1; i < crossANumber ** 2 * 2 + 1; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divs");
        div.style.flexBasis = `${100 / (crossANumber * 2)}%`;
        containerInner.appendChild(div);

        
    }
    listener();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};  

populateDivs(16);


buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.id === "black" || event.target.id === "white") {
            divsColor = event.target.id;
            rgbToggle = false;
        } else if (event.target.id === "reset"){
            location.reload();
        }
        else if (event.target.id === "toggleBorder" && isBordered == false) {
            const divs = document.querySelectorAll(".divs");
            rgbToggle = false;
            isBordered = true;
            divs.forEach((div) => {
                div.style.border = "1px black solid";
                });   
        } else if (event.target.id === "toggleBorder" && isBordered == true) {
            rgbToggle = false;
            isBordered = false;
            const divs = document.querySelectorAll(".divs");
            divs.forEach((div) => {
                div.style.border = "0";
            });
        } else if (event.target.id === "rgb") {
            rgbToggle = true; 
        }
    });
});

function listener() {
   
const divs = document.querySelectorAll(".divs");
    divs.forEach((div) => { 
        div.addEventListener("pointerover", (event) => {
            if (rgbToggle === true) {
                event.target.style.background = randomRgb();
                console.log(randomRgb);
            } else {
             event.target.style.background = divsColor;
        }});
    });
}





function randomNumber() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(256);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }


let randomRgb = function randomizeRGB(){
    let randomRgb = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    return randomRgb;
    }



//range slider code
const sliderEl = document.querySelector("#myRange");
const sliderValue = document.querySelector(".value");


    sliderEl.addEventListener("input", (event) => {
        
        const tempSliderValue = event.target.value;
        sliderValue.textContent = tempSliderValue;
        populateDivs(tempSliderValue);

        const progress = (tempSliderValue / sliderEl.max) * 100;
        sliderEl.style.background = `linear-gradient(to right, rgb(54, 31, 11) ${progress}%, rgb(122, 85, 50) ${progress}%)`; 
    
    });

    function resetSliderValue(sliderHardValue) {
        const tempSliderValue = sliderHardValue;
        sliderValue.textContent = tempSliderValue;
        populateDivs(sliderHardValue);
    
        const progress = (tempSliderValue / sliderEl.max) * 100;
        sliderEl.style.background = `linear-gradient(to right, rgb(54, 31, 11) ${progress}%, rgb(122, 85, 50) ${progress}%)`; 
    }