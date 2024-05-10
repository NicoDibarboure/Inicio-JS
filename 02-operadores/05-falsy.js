// short-circuit

// Falso (falsy)
// undefined
// null
// 0
// false
// ''
// NaN
// Todo lo demás es verdadero (truthy)
// Ejemplo

let nombre = "Nicolas";
let username = nombre || "Invitado";
console.log(username); // Nicolas
