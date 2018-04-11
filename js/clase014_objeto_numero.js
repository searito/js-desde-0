var num = 22.67890;

console.log(num.toFixed(2) + ' => toFixed > Agrega x Decimales a Un Número');

console.info(num.toString() + " => toString > Transforma de Número a String");

console.warn(num.toPrecision(5) + " => toPrecision > Recorta x Caracteres De Un Num Comenzando de Izq. a Der.");

var num2 = new Number("22");
console.info(num2);
console.error(num2.valueOf() + " => valueOf > Convierte de String a Numero");