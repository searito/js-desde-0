function evento(arg) {
    console.log("Evento Disparado");
    console.log(arg);
}

var objDemo = document.getElementById("txt_ref");
objDemo.addEventListener("keypress", evento);

var btnDemo = document.getElementById("btn_evento");
btnDemo.addEventListener("click", evento);