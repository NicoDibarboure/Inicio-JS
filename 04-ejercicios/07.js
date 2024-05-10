/**
 * Crear algoritmo que devuelva el precio del producto mas el impuesto.
 */

function precioCompleto(precio, impuesto) {
  return precio + (precio * impuesto) / 100;
}

let resultado = precioCompleto(1000, 21);
console.log(resultado); // 121
