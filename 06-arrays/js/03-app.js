const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
];

console.table(meses);

// Cuanto mide el array

console.log(meses.length);

for (let i = 0; i < meses.length; i++) {
  console.log("Este es el mes: ", meses[i]);
}
