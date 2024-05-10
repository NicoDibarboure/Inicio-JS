let i = 0;

while (i < 6) {
  i++; // Incremento i en 1
  if (i === 2) {
    continue; // Salto a la siguiente iteración

    // El código que sigue a continue no se ejecuta
  }
  if (i === 4) {
    break; // Salgo del bucle

    // El código que sigue a break no se ejecuta
    // Esto se puede utilizar para: For, While, Do While y Switch.
  }

  console.log(i);
}
