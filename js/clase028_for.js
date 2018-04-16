for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.warn("=========================");


for (var i = 0; i < 10; i += 3) {
    console.log(i);
}

console.error("===========================");


/**         FOR IN          **/

var Persona = function() {
    this.nombre = "Rosa";
    this.apellido = "Martínez";
    this.edad = 26;
};

var Ro = new Persona();
Persona.prototype.direccion = "San Miguel";

for (var prop in Ro) {
    /* PROPIDADES DEL OBJETO
     if (!Ro.hasOwnProperty(prop))
         continue;
     console.log(prop, ":", Ro[prop]);
     */

    // PROPIEDADES DEL PROTOTIPO
    if (Ro.hasOwnProperty(prop))
        continue;
    console.log(prop, ":", Ro[prop]);

}



[1, 2, 3, 4, 5, 6, 7, true, false, "Searito"].forEach(function(val) {
    console.log(val);
});