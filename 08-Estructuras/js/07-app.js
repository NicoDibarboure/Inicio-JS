const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (totalPagar < efectivo || totalPagar < credito || totalPagar < disponible) {
  console.log("Si podemos pagar");
} else {
  console.log("Fondos insuficientes");
}
