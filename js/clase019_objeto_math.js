var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.234567;
console.log(num1);
console.log(Math.round(num1 * 100) / 100); //          OBTENIENDO 2 DECIMALES
console.log(Math.floor(num1)); //                      QUITA TODOS LOS DECIMALES

var rnd = Math.random();
console.log(rnd);


function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomEntre(1, 200));
console.log(Math.sqrt(22)); //                         RAIZ CUADRADA
console.log(Math.pow(5, 9)); //                        EXPONENTE