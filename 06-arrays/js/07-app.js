const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// * const nombreProducto = "Monitor 20 Pulgadas";

// * nombreProducto = "Monitor 30 Pulgadas"; // Error

// El valor de una constante no puede ser reasignado

// El valor de un objeto si puede ser modificado, pero no su referencia.

producto.disponible = false;
delete producto.precio;
console.log(producto);
