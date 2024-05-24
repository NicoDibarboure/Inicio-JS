const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

const carrito = [
  { nombre: "Libro", precio: 500 },
  { nombre: "Camisa", precio: 700 },
  { nombre: "Guitarra", precio: 1500 },
  { nombre: "Disco", precio: 100 },
  { nombre: "Celular", precio: 5000 },
  { nombre: "Laptop", precio: 3000 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  console.log(producto.nombre);
}

// El for of no funciona en un objeto, solo en un arreglo, por lo que se debe usar un for in para recorrer un objeto.
