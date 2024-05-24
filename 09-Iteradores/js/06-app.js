// .forEach y .map

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

pendientes.forEach((pendiente, indice) =>
  console.log(`${indice + 1} - ${pendiente}`)
);

const carrito = [
  { id: 1, producto: "Libro" },
  { id: 2, producto: "Camisa" },
  { id: 3, producto: "Guitarra" },
  { id: 4, producto: "Disco" },
];
console.log("-------------------------------------------------------");

carrito.forEach((carrito, indice) =>
  console.log(`${indice + 1} - ${carrito.producto}`)
);

console.log("-------------------------------------------------------");

carrito.map((carrito, indice) =>
  console.log(`${indice + 1} - ${carrito.producto}`)
);

const arreglo1 = carrito.forEach((carrito, indice) => carrito.nombre);
console.log(arreglo1);

const arreglo2 = carrito.map((carrito, indice) => carrito.nombre);
console.log(arreglo2);

// La DIFEENCIA entre .forEach y .map es que .forEach no retorna un nuevo arreglo, mientras que .map sí lo hace.
