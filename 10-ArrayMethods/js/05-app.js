const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// con un forEach. Este método sirve mas para iterar sobre un array y no para buscar un elemento en específico.
let resultado = "";
carrito.forEach((producto, index) => {
  if (producto.nombre === "Tablet") {
    resultado = carrito[index];
  }
});

console.log(resultado);
// con un find(). Este método es más eficiente que un forEach. Sirve mas para buscar un elemento en específico.

const resultado2 = carrito.find((producto) => producto.nombre === "Tablet");
console.log(resultado2);
