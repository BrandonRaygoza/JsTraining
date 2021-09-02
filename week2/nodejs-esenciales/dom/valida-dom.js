const message = document.getElementById("message");
const btnSend = document.getElementById("btnSend");
const btnDelete = document.getElementById("btnDelete");

message.value = "";

function validateInput(obj){
    
    console.log(obj.value);
    if(message.value !== ""){
        btnSend.setAttribute("enabled", "");
        btnSend.removeAttribute("disabled");
        btnDelete.setAttribute("enabled", "");
        btnDelete.removeAttribute("disabled");
    }else
    {
        btnSend.setAttribute("disabled", "");
        btnSend.removeAttribute("enabled");
        btnDelete.setAttribute("disabled", "");
        btnDelete.removeAttribute("enabled");
    }
    
}

// Con this, le paso el boton (el input)
message.addEventListener("keyup", function(){validateInput(this)});