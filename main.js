import {fischArray} from "data.js"

const fischArtenContainer = document.getElementById("fisch-arten-container")
const selectedFisch = document.createElement("div")



document.addEventListener("click",(e)=>{
    if(e.target.dataset.fisch){
       renderFischSelection(e.target.id)
    } else if (e.target.dataset.remove){
        e.target.parentElement.remove()
    }
})


function renderFischSelection(obj){
    let fisch = fischArray[obj]
    document.body.append(selectedFisch)
    selectedFisch.classList.add("fisch")
    selectedFisch.innerHTML = `
    <div class="fisch-header">
        <h1>${fisch.name}</h2>
        <img src="${fisch.img}" width="150px"> 
    </div>
    <div>
        <span class="bold">Standardgröße:</span>
        ${fisch.größe} cm
    </div>
    <div>
        <span class="bold">Angelrute:</span>
        ${fisch.angel}
    </div>
    <div>
        <span class="bold">Köder:</span> 
        ${fisch.köder}
    </div>
    <div>
        <span class="bold">Uhrzeit:</span> 
        ${fisch.zeit} 
    </div>
    <div>
        <span class="bold">Gewässerart:</span> 
        ${fisch.gewässer} 
    </div>
    <button data-remove="selection" id="close-btn" class="close-btn">x</button>
    `
}





function renderFischOptions(){
fischArray.forEach(fisch => {
    fischArtenContainer.innerHTML += `
    <div class="fisch-art"> 
        <img class="fisch-img" src="${fisch.img}">
        <div class="fisch-name-und-button">
        <h2 class="fisch-name">${fisch.name}</h2>
        <button data-fisch="${fisch.name}"  class="fisch-btn" id="${fisch.id}">
        👉
        </button>
        </div>
    </div>
    `
})
}

renderFischOptions()
