const vueltas = Number(prompt("Ingresa un número: "));

for (let i = 1; i < vueltas + 1; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
    continue;
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
    continue;
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
    continue;
  } else {
    console.log(i);
    continue;
  }
}
