"use-strict";

let array = [];     
const btnInput = document.querySelector(".input-button");
const itemList = document.querySelector(".item-list");

const input = function getDataFromUser(){
   
    let data = window.prompt("Input some value: ");     // Pedir dato al usuario
    let newDomElement = document.createElement("li");   // Crear nuevo elemento li
    const btnDelete = document.createElement("button"); // Crear nuevo elemento button (que sera el delete)

    //btnDelete.setAttribute("id",`btn${array.length}`);    // Yo le pongo de id el tamano del arrelgo
    btnDelete.setAttribute("class","btnDelete");            // Todos hacen lo mismo, asi que mejor uso una clase

    if(data !== null){
        array.push(data);                       // Agrega el dato al arreglo
        newDomElement.textContent = data;       // Ponle el nuevo dato al nuevo elemento li   
        btnDelete.textContent = "Delete";       // Ponle texto al nuevo boton de borrar
        newDomElement.appendChild(btnDelete);   // El nuevo boton sera hijo del nuevo li
        itemList.appendChild(newDomElement);    // El nuevo li, sera hijo del ol
    }

    btnDelete.addEventListener("click", removeElement); // a cada nuevo boton agregado, agregarle su listener
   
}

// Falto eliminar elementos del arreglo
function removeElement(e){
   let li = this.parentNode;    // El papa del boton, es el li (this == al boton)
   
   //console.log(li.childNodes[0].nodeValue); // Esto de aqui seria util para borrar el elemento por valor, pero que pasa si se repite el valor?
   // Lo que se me ocurre es poner un id = a la pos del elemento en el arreglo, a cada boton de delete, y asi borrar el elemento del arreglo en base al id del boton
   li.remove();                 // Borra al papa (y por consecuente, al hijo)
}

btnInput.addEventListener("click",input);   // Escucha si el usuario quiere agregar un elemento