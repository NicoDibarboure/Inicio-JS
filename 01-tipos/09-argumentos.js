function suma(a, b) {
  console.log(arguments);
  return a + b;
}

let resultado = suma(1, 2, 3, 4, 5);
console.log(resultado);
console.log(typeof suma);
