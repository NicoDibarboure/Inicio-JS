let i = 0;

do {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par.`);
  } else {
    console.log(`El número ${i} es impar.`);
  }

  i++;
} while (i < 10); // El Do While Loop se ejecuta al menos una vez, aunque la condición sea falsa.
