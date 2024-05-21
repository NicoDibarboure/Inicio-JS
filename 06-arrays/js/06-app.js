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

let resultado;

resultado = [...carrito, producto]; // Esta manera de declarar es la forma correcta de agregar un elemento al array. Se le conoce como Spread Operator.
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);
