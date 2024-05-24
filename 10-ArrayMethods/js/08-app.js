const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 600 },
  { nombre: "Celular", precio: 700 },
];

const meses2 = [...meses, "Agosto"];
console.log(meses2);

const productoNew = { nombre: "Disco Duro", precio: 300 };
const carrito2 = [...carrito, productoNew];
console.log(carrito2);
