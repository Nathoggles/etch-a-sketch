const containerInner = document.querySelector("#containerInner");




function populateDivs(divs) {
    console.log(divs);
    for (let i = 1; i < divs; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "divs");
        containerInner.appendChild(div);
    }
}

populateDivs(513);


//add repopulation if resize?