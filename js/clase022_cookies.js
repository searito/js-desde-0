function crearCookie(nombre, valor) {
    //***		ESCAPE CAMBIA LOS CARACTERES PROBLEMATICOS PARA LA COOKIE POR SU VERSION HTML
    valor = escape(valor);
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1);
    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
}

/*
	document.cookie = "nombre=Sear;";
	document.cookie = "apellido=Clímaco;";
*/

function borrarCookie(nombre, valor) {
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 1);
    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
}


function getCookie(nombre) {
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);

    for (var i = 0; i < cookieArr.length; i++) {
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if (parArr[0] === nombre) {
            return unescape(parArr[1]);
        }
    }
    return undefined;
}


var probandoEscape = "123;456_789'|";
console.log("Sin función escape ", probandoEscape);
console.log("Con función escape ", escape(probandoEscape));
console.log("Aplicando función unescape ", unescape(probandoEscape));


crearCookie("nombre", "Jeannette");
//borrarCookie("Jeannette", "Flores");

crearCookie("nombre", "Roxana");
crearCookie("apellido", "Palacios");
crearCookie("correo", "roxy_palacios@gmail.com");
crearCookie("direccion", "8va calle pte. n° 19, B° Yusique, Chinameca");


console.log(getCookie("direccion"));
//console.log(cookies);