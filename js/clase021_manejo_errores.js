try {
    var a = 100;

    throw "Oh Oh Oh"; //                                                                                             FORZAR A QUE SE EJECUTE EL CATCH

    console.log("el valor de la variable es: ", a);
} catch (error) {
    console.error("Error Try: ", error);
}


try {
    console.log("El valor de a es: ", a);
} finally {
    /** FINALLY SIEMPRE SE EJECUTA INDEPENDIENTEMENTE DE SI EL TRY ES CORRECTO O NO **/
    console.info("Finalmente");
}


try {
    throw new Error("Error Tipo 1");

    console.log("Esta Parte nunca se ejecuta");

} catch (e) {
    console.error(e.message);
}


try {
    throw {
        nombreerror: "Error Sintaxis",
        accion: "Verifica La Sintaxis De Tu Código",
        codeerror: 1
    }
} catch (error) {
    console.warn(error);
    console.info(error.codeerror);
    console.info(error.nombreerror);
    console.info(error.accion);
}



try {
    x = function() {
        console.warn("Función dentro del throw");
    }

    throw x

} catch (error) {
    error();
}




try {
    throw 1;
} catch (error) {
    registroError(error);
}

function registroError(error) {
    var ahora = new Date();
    console.info("Se registró un error: ", error, " a las ", ahora.getTime());
}