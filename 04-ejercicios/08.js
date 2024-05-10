/** Crear algoritmo que tome un array de objetos y devuelva un array de pares */

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

let pares = [
  [1, { id: 1, name: "John" }],
  [2, { id: 2, name: "Jane" }],
  [3, { id: 3, name: "Paul" }],
];

function toPairs(array) {
  return array.map((item) => [item.id, item]);
}

console.log(toPairs(array));
