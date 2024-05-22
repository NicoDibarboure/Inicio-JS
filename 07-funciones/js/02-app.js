// Declaracion de Funciòn (Function Declaration)

sumar(); // Esta es una variable de tipo Hoisting, por lo que se puede llamar antes de ser declarada.
function sumar() {
  console.log(2 + 2);
}

// Expression de Funcion (Function Expression)

sumar2(); // Esta es una variable de tipo Hoisting, por lo que no se puede llamar antes de ser declarada porque debajo de esta linea se declara la variable.
const sumar2 = function () {
  console.log(3 + 3);
};
