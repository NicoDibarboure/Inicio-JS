// Object Literal

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// Object Constructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const product2 = new Producto("Cartera", 15000);
const billetera = new Producto("Billetera", 25000);

console.log(product2);
console.log(billetera);
