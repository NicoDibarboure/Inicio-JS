/* Crear array de logitud N, y que sus elementos sean numero de 1 hasta N */

let logitud = 7;

function crearArray(n) {
  if (n <= 0) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}
let resultado = crearArray(logitud);
console.log(resultado);
