const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};
// const nombre = producto.nombre;

// console.log(nombre);

// Object Destructuring

const { nombre } = producto;

console.log(nombre);

// Destructuring con arrays. Se utiliza corchetes en lugar de llaves.

const numeros = [10, 20, 30, 40, 50];

const [a, b, c, ...cuarto] = numeros;

console.log(a, b, c, cuarto);
