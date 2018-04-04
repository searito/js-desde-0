var persona = {
    nombre: "Sear",
    apellido: "Clímaco",
    edad: 26,
    direccion: {
        pais: "El Salvador",
        ciudad: "Chinameca",
        edificio: {
            nombre: "Le Cordon Bleu",
            piso: "5"
        }
    }
}

//*     NOTACION DE PUNTO       */
console.log(persona.direccion.pais);
console.log(persona.direccion);

persona.direccion.departamento = "San Miguel";
console.log(persona.direccion);

console.log(persona.direccion.edificio.nombre);

var edificio = persona.direccion.edificio;
edificio.telefono = "2661-6734";
console.log(persona);


/*      NOTACION DE CORCHETE     */
console.log(persona["apellido"]);

var campo = "edad";
console.log(persona[campo]);