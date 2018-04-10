function miFuncion(a, b, c, d) {
    if (arguments.length !== 4) {
        console.error("La Función Necesita 4 Parámetros");
        return;
    }
    //console.log(arguments);

    console.log(a + b + c + d);
}

miFuncion(15, 30, 5, 42);