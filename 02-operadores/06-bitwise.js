// Bitwise operators en español son operadores de bits. Estos operadores son usados para manipular los valores en bits. Los valores son convertidos a números enteros y representados en bits antes de realizar las operaciones.

// 1. Bitwise AND (&)
// El operador AND (&) compara cada bit de los números y devuelve un 1 si ambos bits son 1, de lo contrario devuelve 0.

// 2. Bitwise OR (|)
// El operador OR (|) compara cada bit de los números y devuelve 1 si al menos uno de los bits es 1.

// 3. Bitwise XOR (^)
// El operador XOR (^) compara cada bit de los números y devuelve 1 si los bits son diferentes, de lo contrario devuelve 0.

// 4. Bitwise NOT (~)
// El operador NOT (~) invierte los bits de un número.

// 5. Bitwise Left Shift (<<)
// El operador Left Shift (<<) desplaza los bits de un número a la izquierda.

// 6. Bitwise Right Shift (>>)
// El operador Right Shift (>>) desplaza los bits de un número a la derecha.

// 7. Bitwise Zero Fill Right Shift (>>>)
// El operador Zero Fill Right Shift (>>>) desplaza los bits de un número a la derecha y rellena los nuevos bits con ceros.

// Ejemplo
//
// const num1 = 5; // 101
// const num2 = 3; // 011
//
// // Bitwise AND
// console.log(num1 & num2); // 1
//
// // Bitwise OR
// console.log(num1 | num2); // 7
//
// // Bitwise XOR
// console.log(num1 ^ num2); // 6
//
// // Bitwise NOT
// console.log(~num1); // -6
//
// // Bitwise Left Shift
// console.log(num1 << 1); // 10
//
// // Bitwise Right Shift
// console.log(num1 >> 1); // 2
//
// // Bitwise Zero Fill Right Shift
// console.log(num1 >>> 1); // 2
// En este ejemplo, num1 es 5 y num2 es 3. Los valores binarios de 5 y 3 son 101 y 011 respectivamente.
