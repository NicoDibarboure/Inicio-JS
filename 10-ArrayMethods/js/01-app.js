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

// Comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
  console.log(mes);
  if (mes === "Enero") {
    console.log("Enero si existe");
  }
});

const resultado = meses.includes("Enero"); // includes sirve para saber si un valor existe en un ARREGLO.
console.log(resultado);

// En un arreglo de objetos se utiliza .some para saber si un valor existe en un arreglo de objetos.

const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe);

// En un array tradicional con .some
const existe2 = meses.some((meses) => meses === "Febrero");
console.log(existe2);
