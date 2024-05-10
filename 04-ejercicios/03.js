/**
 * Indice validar que no sea menor a cero y que * el elemento exista en el Array
 * */

function getbyIdx(arr, idx) {
  if (idx < 0 || idx >= arr.length) {
    return "Elemento no encontrado";
  }
  return arr[idx];
}

let resultado = getbyIdx([1, 2, 3, 4, 5, 6], 5);
console.log(resultado); // 3
