// Ejercicio 1 

const personaje = {
    nombre: "Arthur",
    nivel: 7,
    vida: 100, 
    arma: "Hacha de guerra",
    atacar: function() {
        console.log("El personaje está atacando con su arma");
    }
};

console.log(personaje.nombre)
console.log(personaje.arma)
personaje.atacar()

// Ejercicio 2

const productos = {
    nombre: "monitor",
    precio: 500,
    stock: 30,
    calcularDescuento: function(porcentaje) {
        const descuento = this.precio * (porcentaje / 100);
        return this.precio - descuento;
    }
};

console.log(productos.calcularDescuento(10));

// Ejercicio 3

const usuarios = [
    { nombre: "Jenrry", edad: 23, estado: "activo" },
    { nombre: "Luis", edad: 22, estado: "inactivo" },
    { nombre: "Diego", edad: 19, estado: "activo" }
];

const activos = usuarios.filter(usuario => usuario.estado);
console.log("activos", activos);

const mayores = usuarios.filter(usuario => usuario.edad);
console.log("mayores", mayores);

// Ejercicio 4

const IVA = 0.19;

function calcularTotal(precio) {
    return precio + (precio * IVA);
}
console.log(calcularTotal(100));

// Ejercicio 5

function probarScope() {
    let mensaje = "Hola mundo";
    console.log(mensaje);
}
probarScope();
// console.log(mensaje); // Esto genera error porque 'mensaje' no está definido fuera de la función.

// Ejercicio 6

// ejemplo de var (scope de funcion, se ignora el if)
if (true) {
    var saludo = "Hola bro";
}
    console.log(saludo);

// ejemplo de let (scope de bloque, se respeta el if)
if (true) {
    let despedida = "Chao bro";
}

// Ejercicio 7

console.log(ciudad);
var ciudad = "Barranquilla";

// Ejercicio 8

saludar();
function saludar() { console.log("Hola"); }

// Ejercicio 9

function cargarUsuarios(callback) {
    console.log("Cargando..");
    setTimeout(() => {
        const usuarios = ["Will", "Santiago", "Fernando"];
        callback(usuarios);
    }, 2000);
}

cargarUsuarios((lista) => {
    console.log("Usuarios cargados:", lista);
});

// Ejercicio 10

function prepararPedido(nombre, callback) {
    console.log("Preparando pedido..");
    setTimeout(() => {
        callback(nombre);
    }, 1000);
}

prepararPedido("Juancho", (nombreCliente) => {
    console.log(`Pedido listo para ${nombreCliente}`);
});
