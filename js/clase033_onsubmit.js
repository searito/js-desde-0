function validar() {
    var nombre = document.getElementById("txt_nombre").value;
    var apellido = document.getElementById("txt_apellido").value;

    console.log("Nombre", nombre + "\n" + "Apellido", apellido);


    if (nombre.length < 1) {
        return false;
    }

    if (apellido.length < 1) {
        return false;
    }
    return true;
}


console.log(window.location.search);
console.log(window.location.search.split("&"));