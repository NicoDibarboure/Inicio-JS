// for (i = 0; i <= 10; i++) {
//   console.log(`Este es el numero ${i}`);
// }

// Para saber si un número es par o impar, se usa el módulo %.

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`El numero ${i} es par`);
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
// }

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}
