const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// carrito.forEach(function (item) {
//   console.log(`${item.nombre} - Precio: ${item.precio}`);
// });

// .map method
// .map crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const nuevoArray = carrito.map(function (item) {
  return `${item.nombre} - Precio: ${item.precio}`;
});

console.log(nuevoArray);
