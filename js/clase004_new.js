function persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 26;

    this.imprimirPersona = function() {
        return this.nombre + " " + this.apellido + "(" + this.edad + " Años)";
    }
}

var miInfo = new persona("Cristela", "Baires");
console.log(miInfo.imprimirPersona());