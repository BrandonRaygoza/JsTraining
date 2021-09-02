"use-strict";

let array = [];
const btnInput = document.querySelector(".input-button");
const itemList = document.querySelector(".item-list");

const input = function getDataFromUser(){
   
    let data = window.prompt("Input some value: ");
    let newDomElement = document.createElement("li");

    if(data !== null){
        array.push(data);
        newDomElement.textContent = data;
        itemList.appendChild(newDomElement);
    }
       
    // Another way is:
    // let itemList = document.querySelector(".item-list");

    // while(itemList.firstChild)
    //     itemList.removeChild(itemList.firstChild);

    // array.forEach(function(item){
    //     let newItem = document.createElement("li");
    //     newItem.textContent = data;
    //     itemList.appendChild(newItem);
    // });
}

btnInput.addEventListener("click",input);