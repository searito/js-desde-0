var hoy = new Date();
console.log(hoy);

var dateMilisegundos = new Date(0); //FECHA EN MILISEGUNDOS
console.info(dateMilisegundos);

var fechaFija = new Date(2018, 4, 11, 22, 29, 45, 15); //AÑO, MES, DÍA, HORA, MINUTO, SEGUNDO, MILISEGUNDO
console.log(fechaFija);

console.log("Año = " + hoy.getFullYear());
console.log("Mes = " + hoy.getMonth());
console.log("Día = " + hoy.getDate());
console.log("Hora = " + hoy.getHours());
console.log("Minutos = " + hoy.getMinutes());
console.log("Segundos = " + hoy.getSeconds());
console.log("Milisegundos = " + hoy.getMilliseconds());


var inicio = new Date();
for (var i = 0; i <= 25000; i++) {
    console.log("Something...");
}
var fin = new Date();
var duracion = fin.getTime() - inicio.getTime();
console.log("El proceso se ejecutó en ", duracion, "milisegundos");
console.log("El proceso se ejecutó en ", (duracion / 1000), "segundos");