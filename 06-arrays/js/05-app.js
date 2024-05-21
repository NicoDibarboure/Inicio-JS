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

// Agregar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);
