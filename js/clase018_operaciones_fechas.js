var fecha = new Date(2018, 04, 11);
console.error(fecha);

/*fecha.setDate(29);
console.log(fecha);*/

Date.prototype.sumarAnios = function(anios) { //   HECHO EN CURSO
    this.setFullYear(this.getFullYear() + anios);
    return this;
}

Date.prototype.restarAnios = function(anios) {
    this.setFullYear(this.getFullYear() - anios);
    return this;
}

Date.prototype.sumarMes = function(mes) {
    this.setMonth(this.getMonth() + mes);
    return this;
}

Date.prototype.restarMes = function(mes) {
    this.setMonth(this.getMonth() - mes);
    return this;
}

Date.prototype.sumarDias = function(dias) { //   HECHO EN CURSO
    this.setDate(this.getDate() + dias);
    return this;
}

Date.prototype.restarDias = function(dias) {
    this.setDate(this.getDate() - dias);
    return this;
}


console.warn(fecha.sumarDias(19));
console.info(fecha.restarDias(12));
console.log(fecha.sumarAnios(12));
console.log(fecha.restarAnios(13));
console.log(fecha.sumarMes(3));
console.log(fecha.restarMes(4));