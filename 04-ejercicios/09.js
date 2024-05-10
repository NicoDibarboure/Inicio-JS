/** Crear algoritmo que devuelva un array de objetos en base a pares */

let pairs = [
  [1, { name: "John" }],
  [2, { name: "Jane" }],
  [3, { name: "Paul" }],
];

let array = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Paul",
  },
];

function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }

  return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);
