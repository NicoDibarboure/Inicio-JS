const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Con un .filter
let resultado;

resultado = carrito.filter((item) => item.precio > 400); // Trae todos los items que tengan un precio mayor a 400.
resultado = carrito.filter((item) => item.precio < 600); // Trae todos los items que tengan un precio menor a 600.
resultado = carrito.filter((item) => item.nombre !== "Audifonos"); // Trae todos los items que no sean "Audifonos".
resultado = carrito.filter((item) => item.nombre === "Audifonos"); // Trae todos los items que sean "Audifonos".

console.log(resultado);
