/*
var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Hola Mundo";
var resultado = texto.match(reg1);
console.log(resultado);

*/

var texto = "Hola Mundo, 12345. Juana.";
var textoComplejo = "Hola Maráchitos\nQue Ondas";
var textoRep = "WhastApp Niggas?";
var texto2 = "Hoolaa Muundoo, Coomoo, Estamooos";
var pregunta = "La Respuesta De La Suma Es: 45 + 50 = 95";
var palabra = "Aeropuerto";
var arr = texto.match(/^a/); //                                                     ^ INDICA QUE EL TEXTO DEBE COMENZAR CON A MINUSCULA
var arr2 = texto.match(/o$/); //                                                    $ LA ULTIMA LETRA DEL TEXTO DEBE SER O MINUSCULA
var arr3 = texto.match(/.../); //                                                   ... CUALQUIER CARACTER ES PERMITIDO EN LAS PRIMERAS 3 LETRAS
var arr4 = texto.match(/^.o/); //                                                   1° CARACTER CUALQUIER LETRA, 2° ES OBLIGATORIO O MINUSCULA
console.warn(texto);
console.error(textoComplejo);
console.info(textoRep);
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(texto.match(/^.o/));
console.log(texto.match(/[0-9]/)); //                                               TIENE QUE HABER UN NUMERO ENTRE 0 y 9
console.log(texto.match(/[a-z]/)); //                                               DEBE HABER LETRAS DE A HASTA LA Z MINUSCULAS
console.log(texto.match(/[a-zA-Z]/)); //                                            DEBEN HABER LETRAS DE LA A HASTA LA Z MAYUSCULAS Y MINUSCULAS
console.log(texto.match(/^H[a-z]/)); //                                             1° CARACTER H MAYUSCULA, 2° CUALQUIER LETRA DE A HASTA Z MINUSCULA
console.log(texto.match(/[aeiou].$/)); //                                      CUALQUIER VOCAL, SEGUIDA DE CUALQUIER CARACATER, PERO QUE ESTE AL FINAL
console.log(texto.match(/\s/)); //                                                  BUSCAR CUALQUIER ESPACIO EN EL TEXTO
console.log(texto.match(/\w/)); //                                                  ABREVIACION DE LA REGEX [a-zA-Z0-9]
console.log(texto.match(/\d/)); //                                                  ABREVIACION DE LA REGEX [0-9]


/** 
 * CONTROLADORES DE EXPRESIONES REGULARES 
 * i = INSENSIBLE 
 * g = TODAS LAS APARICIONES
 * m = MULTILINEA
 * 
 **/

console.log(texto.match(/m/i)); //                                                  BUSCA LA LETRA M SIN DIFERENCIAR ENTRE MAYUSCULAS Y MINUSCULAS
console.log(texto.match(/[aeiou]/g)); //                                            BUSCA TODAS LAS VOCALES DEL TEXTO
console.log(textoComplejo.match(/[aeiouáéíóú]/ig));

/** ESTRUCTURAS DE REPETICION **/
console.log(textoRep.match(/p+/g)); //                                      ESPECIFICA ADJUNTAR VARIOS CARACTERES QUE SEAN EL MISMO Y ESTEN EN EL TEXTO
console.log(textoRep.match(/g?/g)); //                                               APARECE O NO APARECE EL CARACTER ESPECIFICADO
console.log(textoRep.match(/p*/g));
console.log(textoRep.match(/g{2}/)); //                                              CUANTAS VECES APARECE UNA LETRA ESPECIFICA
console.log(texto2.match(/o{2,5}/g)); //                                             BUSCO LA LETRA O DE 2 HASTA X VECES
console.log(palabra.match(/[aeiou]{2,2}/ig)); //                                     BUSCA VOCALES QUE ESTEN CONSECUTIVAS FORMANDO UN DIPTONGO
console.log(palabra.match(/\w{2,2}/ig)); //                                          SEPARA LA PALABRA EN CONJUNTOS DE 2
console.log(pregunta.match(/\d{1,}|respuesta/ig));