// TYPEOF FUNCION PARA ASEGURAR LOS TIPOS DE DATOS

function identificando(param) {
    console.log("El Dato Ingresado Es Tipo: " + typeof param);
}

identificando(1);
identificando("Sear");
identificando({});
identificando(function() {});


// INSTANCEOF COMPARA 2 OBJETOS 

function identificandoDatos(param) {
    console.log("El Dato Ingresado Es Tipo: " + typeof param);
    console.log(param instanceof Persona);
}

function Persona() {
    this.nombre = "Luis";
    this.edad = 29;
}

var personica = new Persona();
identificandoDatos(personica);