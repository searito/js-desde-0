var objetoJS = {
    nombre: "Sear",
    edad: 26
};

console.log("Objeto Literal", objetoJS);


var jsonString = JSON.stringify(objetoJS);
console.log("Objeto JSON", jsonString);

var objetoDesdeJSON = JSON.parse(jsonString);
console.log("Objeto Convertido", objetoDesdeJSON);