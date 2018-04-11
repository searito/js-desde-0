var palabra = new String("Searito");
console.log(palabra);
console.error(palabra.toUpperCase() + " => toUpperCase > Cambia El String a Mayusculas");
console.info(palabra.toLocaleLowerCase() + " => toLowerCase > Cambia El String a Minusculas");

var i = palabra.indexOf("t");
console.log("La letra 't' está en la posición ", i);

var word = new String("Carretera");
var secondI = word.lastIndexOf("r");
console.warn("La última 'r' se encuentra en la posición ", secondI);

var frase = new String("Programando En JavaScript");
var corte = frase.substr(6, 15); //CORTA EL STRING X POSICIONES
console.log(corte);

var cortando = frase.substr(0, frase.indexOf(" "));
console.info(cortando);

var split = frase.split(" ");
console.log(split);
console.log(split.length);



document.write(frase.italics());