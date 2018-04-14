var nota = 51;

if (nota >= 90) {
    console.log("Tu Nota Es 'A'");

} else if (nota >= 80) {
    console.log("Tu Nota Es 'B'");

} else if (nota >= 70) {
    console.log("Tu Nota Es 'C'");

} else if (nota >= 60) {
    console.log("Tu Nota Es 'D'");

} else {
    if (nota < 50) {
        console.log("Tu Nota Es '-F'");
    } else {
        console.log("Tu Nota Es '+F'");
    }
}



var n1 = 12;
var n2 = 9;
var mayor = 0;

if (n1 > n2) {
    mayor = n1;
} else {
    mayor = n2;
}

console.log("El número mayor es: ", mayor);

// OPERADOR TERNARIO
var ternario = (n1 > n2) ? n1 : n2;
console.log("Usando Operador ternario el num > es: ", ternario);


// OPERADOR TERNARIO MAS COMPLEJO

var t = (n1 > n2) ? function() {
    console.log("El primer número es mayor que el segundo");
    return n1;
}() : function() {
    console.log("El segundo numero es mayor que el primero");
    return n2;
}();
console.log(t);


var a = 22;
var b = undefined;
var c = a || b;
console.log(c);


function getNombre(nombre) {
    var name = nombre || "Sin Nombre";
    console.log(name);
}

getNombre();
getNombre("Marisol");