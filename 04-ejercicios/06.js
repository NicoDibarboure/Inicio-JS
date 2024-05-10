/**
 * Crear algoritmo que devuelva la cantidad de numeros positivos de un array.
 */

let array = [2, 5, 7, 15, 5, 100, 55];

function getPositivos(arr) {
  let positivos = 0;

  for (numero of arr) {
    if (numero > 0) {
      positivos++;
    }
  }
  return positivos;
}

let positivos = getPositivos(array);
console.log(
  "Hay una cantidad de ",
  positivos,
  "numeros positivos en el array."
); // 5
