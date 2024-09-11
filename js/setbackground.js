console.log("jeg er set i background")

let inp = document.querySelector(".inpcolor")
console.log(inp)

let pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

pbCol.textContent = "tryk mig for at sætte color"

let bdy = document.querySelector("body")
console.log(bdy)

let inpColorValue = document.querySelector(".inpColorValue")

const inpColorPicker = document.getElementById("inpColorPicker")

function setBackgroundColor(){
    let col = inp.value;
    console.log(col)
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

function useColorPicker(){
    let col = inpColorPicker.value;
    console.log(col)
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

const pTags = document.getElementsByTagName('p')
console.log(pTags)

let ptagArr = Array.from(pTags)
console.log("ptagArr")
ptagArr.forEach(p => p.textContent = "hej fra foreach")

pbCol.addEventListener('click', setBackgroundColor)
document.addEventListener('keyup', setBackgroundColor)
inpColorPicker.addEventListener('input', useColorPicker)