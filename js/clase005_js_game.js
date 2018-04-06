function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100; //PUNTOS VIDA
    this.sp = 100; //PUNTOS MAGIA

    this.curar = function(jugadorObjetivo) {
        if (this.sp >= 40) {
            this.sp -= 40;
            //jugadorObjetivo.pv = jugadorObjetivo.pv + 20; //FORMA LARGA
            jugadorObjetivo.pv += 20; //FORMA CORTA
        } else {
            console.info(this.nombre + " No Posee Puntos Mágicos Suficientes Para Continuar Curando");
        }
        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugadorObjetivo) {
        console.log(this);
        console.log(jugadorObjetivo);
    }

    this.tirarFlecha = function(jugadorObjetivo) {
        if (jugadorObjetivo.pv > 40) {
            jugadorObjetivo.pv -= 40;
        } else {
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " Ha Fallecido En Combate...!!!");
        }
        this.estado(jugadorObjetivo);
    }
}


var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);

console.log(gandalf);
console.log(legolas);