// Object Methods

"use strict";

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(producto); // No se pueden agregar ni eliminar propiedades, pero si se pueden modificar las existentes.

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
