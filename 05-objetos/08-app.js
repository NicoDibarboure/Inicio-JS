// Object Methods

"use strict";

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

Object.freeze(producto); // No se puede modificar el objeto

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto)); // Verifica si el objeto esta congelado
