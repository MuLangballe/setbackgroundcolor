console.log("Jeg er i ddColor")

const colArray = ["red", "green", "yellow", "blue", "orange"]
// #8846F3FF

const ddColor = document.getElementById("ddColor")

const pbFillDropdown = document.getElementById("pbFillDropdown")

let bdy = document.querySelector("body")
function fillDropdown(item){
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el)
}

function addColors(btn){
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown)
    console.log(document.all)
}

function setBackgroundColor(el){
    const selindex = ddColor.selectedIndex
    const selectedOption = ddColor.options[selindex]
    const color = selectedOption.innerText
    bdy.style.backgroundColor = color

}

pbFillDropdown.addEventListener('click', addColors)

ddColor.addEventListener('change', setBackgroundColor)