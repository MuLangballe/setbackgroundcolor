console.log("jeg er i ddcolor 2")

const colArray2 = [["red", "#ff0000"], ["green", "#00ff00"],["yellow", "#ffff00"], ["purple", "#8846F3FF"]]
const colorObjects = [{"name": "red", "id":"#ff0000"}, {"name": "green", "id": "#00ff00"},{"name": "yellow", "id": "#ffff00"}, {"name": "purple", "id": "#8846F3FF"}]

const ddColor2 = document.getElementById("ddColor2")

const pbFillDropdown2 = document.getElementById("pbFillDropdown2")

function fillDropdown2(item){
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item[1]
    ddColor2.appendChild(el)
}

function fillDropdownObj(item){
    const el = document.createElement("option")
    console.log(item)
    el.textContent = item.name
    el.value = item.id
    ddColor2.appendChild(el)
}

function addColors2(btn){
    ddColor2.innerHTML = ""
    //colArray2.forEach(fillDropdown2)
    colorObjects.forEach(fillDropdown2)
    console.log(document.all)
}

function setBackgroundColor2(el){
    const selindex = ddColor2.selectedIndex
    const selectedOption = ddColor2.options[selindex]
    const color = selectedOption.innerText
    bdy.style.backgroundColor = color

}


pbFillDropdown2.addEventListener('click', addColors2)

ddColor2.addEventListener('change', setBackgroundColor2)