const carrito = [];

// Definir un producto

const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

// push agrega al final del arreglo

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 200,
};
const producto4 = {
  nombre: "Mouse",
  precio: 300,
};

// Agregar al inicio del arreglo
carrito.unshift(producto3, producto4);

console.table(carrito);

// Eliminar último elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// Eliminar un elemento en específico
carrito.splice(1, 1);
console.table(carrito);
