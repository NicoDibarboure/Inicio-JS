const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Si puedes comprar");
} else if (!usuario) {
  console.log("Inicia sesión o crea una cuenta");
} else if (!puedePagar) {
  console.log("Fondos insuficientes");
} else if (!usuario && !puedePagar) {
  console.log("Inicia sesión o crea una cuenta y verifica tus fondos");
}
