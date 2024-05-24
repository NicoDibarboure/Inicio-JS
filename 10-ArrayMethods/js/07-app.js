const meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];

// Con un .concat

const meses4 = meses1.concat(meses2, meses3);
console.log(meses4);

// Spread Operator o Rest Operator

const resultado = [...meses1, ...meses2, ...meses3];
console.log(resultado);
