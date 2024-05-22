// Operador Mayor que y Menor que

const dinero = 200;
const totalAPagar = 300;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
  console.log("Si podemos pagar");
} else if (cheque) {
  console.log("Si puedo pagar porque tengo chequera");
} else if (tarjeta) {
  console.log("Si puedo pagar porque tengo tarjeta");
} else {
  console.log("Fondos insuficientes");
}
