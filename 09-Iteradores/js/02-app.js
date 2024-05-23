// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log(`Este es el CINCO`);
//     continue; // Esto hace que se salte el número 5.
// Break se usa para detener el ciclo.
//   }
//   console.log(`Este es el numero ${i}`);
// }

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El producto ${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(carrito[i].nombre);
}
