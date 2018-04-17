function launchAlert() {
    alert("Esta Es Una Alerta");
}

function launchConfirm() {
    var question = confirm("Esta Seguro Que Quieres Borrar Algo?");
    console.log(question);
}

function launchPrompt() {
    var input = prompt("Ingresa Algo", "Hola Mundo");
    console.log(input);
}

var alerta = document.getElementById("btn_alert");
var confirmacion = document.getElementById("btn_confirm");
var cajaInput = document.getElementById("btn_prompt");

alerta.addEventListener("click", launchAlert);
confirmacion.addEventListener("click", launchConfirm);
cajaInput.addEventListener("click", launchPrompt);