function crearProducto(nombre, precio) {
    nombre = nombre || "Sin Nombre";
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precio $", precio);
}


function crearProductoPrecio100(nombre) {
    crearProducto(nombre, 100);
}


function crearProductoCamisa(precio) {
    crearProducto("Camisa", precio);
}


crearProducto();
crearProducto("Nintendo Switch", 600);
crearProductoPrecio100("Resident Evil 7");
crearProductoCamisa(54.95);