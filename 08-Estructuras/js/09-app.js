const autenticado = true;
const puedePagar = true;

// console.log(
//   autenticado && puedePagar ? "Si puedes ver Netflix" : "No puedes ver Netflix"
// );

console.log(
  autenticado
    ? puedePagar
      ? "Si puedes ver Netflix"
      : "No puedes ver Netflix"
    : "Necesitas estar autenticado"
);

// const efectivo = 800;
// const credito = 400;
// const disponible = efectivo + credito;
// const totalPagar = 600;

// if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
//   if (efectivo > totalPagar) {
//     console.log("Si pagaste con efectivo");
//   } else {
//     console.log("No puedes pagar con efectivo");
//   }
// } else {
//   console.log("Fondos insuficientes");
// }
