const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

meses.forEach((mes, i) => {
  console.log(`Mes: ${i} - ${mes}`);
});

// Encontrar el indice de abril

const indice = meses.findIndex((mes) => mes === "Abril");
console.log(indice);

// Encontrar un indice de un arreglo de objetos...
carrito.forEach((item, i) => {
  console.log(
    `Producto: ${item.nombre} - Precio: ${item.precio} - Indice: ${i}`
  );
});

// Encontrar el indice de Tablet
const indice2 = carrito.findIndex((item) => item.nombre === "Tablet");
console.log(indice2);
