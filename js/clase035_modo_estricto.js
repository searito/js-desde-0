/** 
 * SE RECOMIENDA USAR EL MODO ESTRICTO ENCAPSULADO
 * DENTRO DE FUNCIONES, PARA EVITAR POSIBLES CONFLICTOS
 * CON LIBRERIAS DE 3°
 * **/

function getNombre() {
    "use strict";
    secondName = "Pablo";
    return secondName;
}

nombre = "Searito";
console.log(nombre);

console.log(getNombre());