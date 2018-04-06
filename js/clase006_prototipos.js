function Persona() {
    this.nombre = "Lorena";
    this.apellido = "Menjívar";
    this.edad = 29;
    this.pais = "El Salvador";
}

Persona.prototype.imprimirDatos = function() {
    console.warn(this.nombre + " " + this.apellido + " (" + this.edad + " Años)");
}

var nombre = new Persona();
nombre.imprimirDatos();


Number.prototype.esPositivo = function() {
    if (this >= 0) {
        return true;
    } else {
        return false;
    }
}