const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 600 },
  { nombre: "Celular", precio: 700 },
];

// Con un .every. En los .every TODOS los elementos deben CUMPLIR con la condición para que se cumpla la condición.

const resultado = carrito.every((producto) => producto.precio < 1000);
console.log(resultado); //true

// Con un .some. En los .some AL MENOS UNO de los elementos debe CUMPLIR con la condición para que se cumpla la condición.

const resultado2 = carrito.some((producto) => producto.precio < 600);
console.log(resultado2); //true
