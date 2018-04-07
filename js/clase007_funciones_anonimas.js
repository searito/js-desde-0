(function() {
    var a = 10;
    console.log(a);

    a = function() {
        a = 20;
        return a;
    }();
    console.log(a);
})();


/*      METODO 2       */
function ejecutarFuncion(fn) {
    if (fn() === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(ejecutarFuncion(function() {
    console.log("Función Anónima Ejecutada...!!!");
    return 1;
}));