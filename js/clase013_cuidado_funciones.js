function crearFunciones() {
    var arr = [];
    var num = 1;

    for (var num = 1; num <= 3; num++) {
        arr.push((function(numero) {
            return function() {
                console.log(numero);
            }
        })(num));
    }

    /*arr.push((function(numero) {
        return function() {
            console.log(numero);
        }
    })(num));

    num = 2;
    arr.push(function() {
        console.log(num);
    });

    num = 3;
    arr.push(function() {
        console.log(num);
    });*/

    return arr;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();