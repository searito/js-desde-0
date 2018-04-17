document.onmousedown = function(arg) {
    if (arg.button === 2) {
        alert("Click Bloqueado");
        return;
    }

    console.log("No Hay Problema...");
    console.log(arg);
}


document.onmouseup = function() {
    var texto = window.getSelection().toString();
    console.log(texto);
}