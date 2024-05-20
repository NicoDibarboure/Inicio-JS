const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// * 3 Metodos para objetos:
// *  Keys
// *  Values
// *  Entries

// * 1. Keys
console.log(Object.keys(producto)); // ["nombre", "precio", "disponible"]

// * 2. Values
console.log(Object.values(producto)); // ["Monitor 20 Pulgadas", 300, true]

// * 3. Entries
console.log(Object.entries(producto)); // [["nombre", "Monitor 20 Pulgadas"], ["precio", 300], ["disponible", true]]
