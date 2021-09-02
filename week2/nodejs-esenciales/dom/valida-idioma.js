const inputEs = document.getElementById("input-es");
const inputEn = document.getElementById("input-en");
const btnSubmit = document.getElementById("send");

const parent = document.getElementById("parent");

inputEs.checked = false;    // Regresarlo a su estado normal
inputEn.checked = false;

// function greeting(){
//     if(inputEs.checked){
//         alert("Hola, usuario");
//     }

//     if(inputEn.checked){
//         alert("Hello, user");
//     }
// }

// submit.addEventListener("click",greeting);

function greeting(event){
   let target = event.target;

   switch(target.id){
       case "input-es": 
            alert("Hola, usuario");
            break;

       case "input-en": 
            alert("Hello, user");
            break;
   }

   event.target.checked = false;
}


 parent.addEventListener("click",greeting);

// https://davidwalsh.name/event-delegate Este link lo provee el propio mdn.
// https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/
// https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983#.1g11lfkzo

/*Instructor solution */

/*let saluda = function(){
    alert("Hola, usuario");
}

let greeting = function(){
    alert("Hello, user");
}

let eventHandler;

function changeDelegate(radiobutton){
    let boton = document.getElementById("btnAlertaUsuario");
    boton.removeEventListener("click", eventHandler);

    if(radiobutton.value == "english"){
        eventHandler = greeting;
    }else{
        eventHandler = saluda;
    }

    boton.addEventListener("click", eventHandler);
}*/


// let eventHandler;

// let saluda = function(){
//     alert("Hola, usuario");
// }

// let greeting = function(){
//     alert("Hello, user");
// }

// function handleGreeting(){
//     if(inputEs.checked){
//         eventHandler = saluda;
//     }

//     if(inputEn.checked){
//         eventHandler = greeting;
//     }

//     eventHandler();
// }

// btnSubmit.addEventListener("click",handleGreeting);