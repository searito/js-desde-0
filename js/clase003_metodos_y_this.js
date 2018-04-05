var persona = {
    nombre: "Esmeralda",
    apellido: "Ayala",
    imprimirNombre: function() {
        console.log(this.nombre + " " + this.apellido);
    },
    direccion: {
        pais: "El Salvador",
        obtenerPais: function() {
            console.log("El País De Origen Es " + this.pais);

            var self = this;
            var nuevaDireccion = function() {
                console.log("La Dirección Es " + self.pais);
            }

            nuevaDireccion();
        }
    }
}

persona.imprimirNombre();
persona.direccion.obtenerPais();