var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr);

console.log(arr.reverse() + " => Invertido");


arrMultiplicado = arr.map(function(elem) {
    elem *= elem;
    return elem;
});

console.log(arrMultiplicado + " => Cuadrado");


var arrSquare = arrMultiplicado.map(Math.sqrt);
console.log(arrSquare + " => Raíz Cuadrada");


var arrJoin = arr.join("|");
console.log(arrJoin + " => Join");


var arrSplit = arrJoin.split("|");
console.log(arrSplit + " =>  Split");

var arrPush = arr.push("0");
console.log(arr + " => Push");

var arrUnshift = arr.unshift("..");
console.log(arr + " => Unshift");

console.log(arr.toString() + " => toString");

var elimine = arr.pop();
console.log(arr + " => Pop, Eliminé " + elimine);

arr.splice(5, 1, 9); //POS DE ELEMENTO QUE QUIERO MANIPULAR, ELIMINA LAS SIGUIENTES X POS, INSERTA EN POS X ELEMENTO X
console.log(arr + " => Splice");


var arrSlice = arr.slice(0, 4); //CORTA EL ARR DESDE LA POS x HASTA LA POS X
console.log(arrSlice);
console.log(arr.length + " => Length");



var complexArray = [
    true,
    {
        nombre: "Sear",
        apellido: "Clímaco"
    },
    function() {
        console.warn("Estoy Dentro De Un Array");
    },

    function(persona) {
        console.info(persona.nombre + " " + persona.apellido);
    },
    [
        "Meybelin",
        "Leonela",
        "Silvia",
        "Cindy",
        "Lisseth", [
            "Kevin",
            "Derman",
            "Arquimides",
            "Carlos",
            "Ramos",
            function() {
                console.info(this);
            }
        ]
    ]
];

console.log(complexArray);
console.info(complexArray[0]);
console.error(complexArray[1].nombre + " " + complexArray[1].apellido);
complexArray[2]();
complexArray[3](complexArray[1]);
console.error(complexArray[4][5][3]);

var complexArray2 = complexArray[4][5];
complexArray2[4] = "¡Ramona!";
console.warn(complexArray2);
console.log(complexArray);
complexArray2[5]();