function determinaDato(a) {
    if (a === undefined) {
        console.log("a es undefined... Nó sé que hacer");
    }

    if (typeof a === "number") {
        console.log("a es un número, puedo hacer operaciones matemáticas");
    }

    if (typeof a === "string") {
        console.log("a es un texto, puedo mostrarlo");
    }

    if (typeof a === "object") {
        console.log("a es un objeto, puede ser cualquier cosa");

        if (a instanceof Number) {
            console.log("a es un objeto numérico...");
        }
    }
}

var b = new Number(12);

determinaDato();
determinaDato(22);
determinaDato("Searito");
determinaDato({
    nombre: "Sear",
    apellido: "Clímaco",
    edad: 26
});

determinaDato(b);