/** 
 *  BIND
 *  Crea una función enlazada con el mismo cuerpo de la función original.En la función enlazada, 
 *  el objeto this se resuelve en el objeto pasado.La función enlazada tiene los parámetros 
 *  iniciales especificados.
 * **/

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function() {
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

var miCarro = {
    color: "Negro",
    marca: "BAC Mono"
}

console.log(carro.imprimir());


var logCarro = function(arg1, arg2) {
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos: ", arg1, arg2);
    console.error("===========================================================");


}

var logModeloCarro = logCarro.bind(carro);
logModeloCarro("primer argumento", "segundo argumento");




/**
 * CALL
 * Llama a un método de un objeto y sustituye el objeto actual por otro objeto.
 * **/

logModeloCarro.call(carro, "123", "456");



/** 
 * APPLY
 * Llama a la función, sustituyendo el objeto especificado por el valor de this de la función, y la matriz
 * especificada por los argumentos de la función.
 * **/

logModeloCarro.apply(carro, ["asdf", "jklñ"]);



// FUNCIONES PRESTADAS

console.log(carro.imprimir.call(miCarro));