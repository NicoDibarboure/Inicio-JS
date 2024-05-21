// const meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
// ];

// meses.push("Diciembre"); // Push agregar al final del array
// console.table(meses);

// meses.pop(); // Pop elimina el último elemento del array
// console.table(meses);

// meses.unshift("Mes 0"); // Unshift agrega al inicio del array
// console.table(meses);

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
const producto3 = {
  nombre: "Teclado",
  precio: 200,
};

carrito.push(producto); // Agrega al final del array
carrito.push(producto2); // Agrega al final del array
carrito.unshift(producto3); // Agrega al inicio del array

console.table(carrito);
