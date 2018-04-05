function primeraFuncion() {
    var a = 22;
    console.log(a);
}

primeraFuncion();


/*      FUNCION CON PARAMETROS       */

function imprimir(nombre, apellido) {
    /*if (apellido === undefined) {
        apellido = "Torton";
    }*/

    apellido = apellido || "Torton";
    console.log(nombre + " " + apellido);
}

imprimir("Searito", "Clímaco");


function imprimirNombre(persona) {
    console.log(persona.nombre + " " + persona.apellido);
}

imprimirNombre({
    nombre: "Beatriz",
    apellido: "Claros"
});


function imprimirObj(persona) {
    console.log(persona.nombre + " " + persona.apellido);
}

var obj = {
    nombre: "Guadalupe",
    apellido: "Soriano"
}

imprimirObj(obj);


function printing(fn) {
    fn();
}

printing(function() {
    console.log("Función Anónima Ejecutada...");
});


function imprimir2(fn) {
    fn();
}

var miFuncion = function() {
    console.log("Ejecutando Función");
}

imprimir2(miFuncion);



/*      FUNCIONES CON RETORNO       */
function obtenerAleatorio() {
    return Math.random();
}

console.log("Número Random: " + obtenerAleatorio());


function obtenerNombre() {
    return "Searín";
}

var nombre = obtenerNombre();
console.log(nombre + " Perez");


function esMayor05() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

if (esMayor05()) {
    console.log("El Número Random Es Mayor a 0.5");
} else {
    console.log("El Número Random Es Menor a 0.5");
}


function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Zulma", "Cortez");
console.log(persona);


function creandoFuncion() {
    return function(nombre) {
        console.log("Me Creo " + nombre);

        return function() {
            console.log("Segunda Función");
        }
    }
}

var nuevaFuncion = creandoFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();




/*      FUNCIONES DE PRIMERA CLASE      */
function a() {
    console.log("Función a");
}

a();

a.nombre = "Inés";
a.direccion = {
    pais: "España",
    ciudad: "Granada",
    edificio: {
        piso: "6to",
        nombre: "Torre Colón"
    }
}