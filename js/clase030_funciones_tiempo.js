var segundos = 0;

var intervalo = setInterval(function() {
    segundos++;

    console.log("Seg", segundos);

    if (segundos === 3) {
        clearInterval(intervalo);
    }
}, 1000);



var printing = {
    nombre: "Searito",
    edad: 26,
    imprimir: function() {
        var self = this;

        setTimeout(function() {
            console.log(self);
            console.log(self.nombre, self.edad);
        }, 1000);
    }
};

printing.imprimir();


var temporizador = setTimeout("reloj()", 1000);

function reloj() {
    var tiempo = new Date();
    var horas = tiempo.getHours();
    var minutos = tiempo.getMinutes();
    var segundos = tiempo.getSeconds();
    var horaString = new String(horas);
    var minutosString = new String(minutos);
    var segundosString = new String(segundos);

    if (horaString.length === 1) {
        horaString = "0" + horaString;
    }

    if (minutosString.length === 1) {
        minutosString = "0" + minutosString;
    }

    if (segundosString.length === 1) {
        segundosString = "0" + segundosString;
    }

    var marco = document.getElementById("marco_reloj");
    marco.innerHTML = (horaString + " : " + minutosString + " : " + segundosString);
    temporizador = setTimeout("reloj()", 1000);
}


function fechaHoy() {
    var hoy = new Date();
    var dia = hoy.getDate();
    var anio = hoy.getFullYear();
    var meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    if (dia < 10) {
        dia = "0" + dia;
    }

    var marcoFecha = document.getElementById("marco_fecha");
    marcoFecha.innerHTML = (dia + " / " + meses[hoy.getMonth()] + " / " + anio);
}


fechaHoy();