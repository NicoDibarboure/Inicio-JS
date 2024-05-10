// Para que sirve for in?
// for in es una estructura de control que nos permite recorrer las propiedades de un objeto, es decir, nos permite recorrer las llaves de un objeto.

// Ejemplo:
let user = {
  id: 1,
  name: "Nico",
  age: 30,
};

for (let prop in user) {
  console.log(prop, ":", user[prop]);
}

// En este caso, estamos recorriendo las propiedades de un objeto llamado user. En cada iteración, prop va a ser igual a una de las llaves del objeto user, y user[prop] va a ser igual al valor de esa llave.

let animales = ["perro", "gato", "pez", "loro", "tortuga"];
for (let indice in animales) {
  console.log(indice, ":", animales[indice]);
}

// En este caso, estamos recorriendo las llaves de un array llamado animales. En cada iteración, indice va a ser igual a una de las llaves del array animales, y animales[indice] va a ser igual al valor de esa llave.
