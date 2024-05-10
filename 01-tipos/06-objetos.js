// Un objeto es un tipo de referencia. A diferencia de los tipos primitivos, los objetos no son valores en sí mismos, sino que son colecciones de pares clave-valor. En JavaScript, los objetos son una de las características más importantes del lenguaje. Son una forma de almacenar y organizar datos de manera eficiente.

// Para crear un objeto, utilizamos llaves {} y dentro de ellas definimos las propiedades del objeto. Cada propiedad se compone de una clave y un valor, separados por dos puntos. Las propiedades se separan por comas.

// Ejemplo:

let persona = {
  nombre: "Nicolas",
  apellido: "Dibarboure",
  edad: 23,
  estaCasado: false,
  hijos: null,
  mascotas: ["perro", "gato"],
};

// En este caso, el objeto persona tiene las siguientes propiedades:

// nombre: "Nicolas"

// apellido: "Dibarboure"

// edad: 23

// estaCasado: false

// hijos: null

// mascotas: ["perro", "gato"]

// Para acceder a las propiedades de un objeto, utilizamos la notación de punto (.). Por ejemplo, para acceder al nombre de la persona, escribimos persona.nombre.

// Ejemplo:

console.log(persona.nombre); // Nicolas

// También podemos acceder a las propiedades utilizando la notación de corchetes ([]). En este caso, la clave se pasa como una cadena de texto.

// Ejemplo:

console.log(persona["apellido"]); // Dibarboure

// Si la clave contiene caracteres especiales o espacios, es necesario utilizar la notación de corchetes.

// Ejemplo:

let persona2 = {
  "nombre completo": "Nicolas Dibarboure",
};

console.log(persona2["nombre completo"]); // Nicolas Dibarboure

// También podemos agregar nuevas propiedades a un objeto simplemente asignando un valor a una nueva clave.

// Ejemplo:

persona.nacionalidad = "Uruguayo";

console.log(persona.nacionalidad); // Uruguayo

// Para eliminar una propiedad de un objeto, utilizamos la palabra clave delete.

// Ejemplo:

delete persona.nacionalidad;

console.log(persona.nacionalidad); // undefined

// Los objetos pueden contener otros objetos como propiedades. Estos objetos anidados se conocen como objetos anidados.

// Ejemplo:

let persona = {
  nombre: "Nicolas",

  direccion: {
    calle: "Av. 18 de Julio",

    numero: 123,

    ciudad: "Montevideo",
  },
};

console.log(persona.direccion.ciudad); // Montevideo

// En este caso, el objeto persona tiene una propiedad direccion que a su vez es otro objeto con las propiedades calle, numero y ciudad.

// Los objetos también pueden contener funciones como propiedades. Estas funciones se conocen como métodos.

// Ejemplo:

let persona = {
  nombre: "Nicolas",

  saludar: function () {
    console.log("Hola, mi nombre es " + this.nombre);
  },
};

persona.saludar(); // Hola, mi nombre es Nicolas

// En este caso, el objeto persona tiene una propiedad saludar que es una función que imprime un mensaje en la consola.

// La palabra clave this se refiere al objeto que contiene el método. En este caso, this hace referencia al objeto persona.

// Los objetos en JavaScript son dinámicos, lo que significa que podemos agregar, modificar y eliminar propiedades en tiempo de ejecución.

// Ejemplo:

let persona = {
  nombre: "Nicolas",
};

persona.apellido = "Dibarboure";

console.log(persona.apellido); // Dibarboure

persona.nombre = "Juan";

console.log(persona.nombre); // Juan

delete persona.nombre;

console.log(persona.nombre); // undefined

// En este caso, primero agregamos la propiedad apellido al objeto persona, luego modificamos la propiedad nombre y finalmente eliminamos la propiedad nombre.

// Los objetos en JavaScript son una de las características más poderosas del lenguaje. Nos permiten almacenar y organizar datos de manera eficiente y flexible. Los objetos son fundamentales para trabajar con estructuras de datos más complejas y para crear aplicaciones web interactivas y dinámicas.

// Para más información sobre objetos en JavaScript, puedes consultar la documentación oficial de Mozilla Developer Network (MDN).

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos

// Ejercicios

// 1. Crea un objeto llamado persona con las siguientes propiedades:

// nombre: "Juan"

// apellido: "Perez"

// edad: 30

// EstaCasado: true

// hijos: ["Lucas", "Maria"]

// mascotas: {perro: "Toby", gato: "Garfield"}

// 2. Agrega una nueva propiedad al objeto persona con el nombre "nacionalidad" y el valor "Uruguayo".

// 3. Modifica la propiedad "nombre" del objeto persona y cámbiala por "Pedro".

// 4. Elimina la propiedad "apellido" del objeto persona.

// 5. Crea un objeto llamado direccion con las siguientes propiedades:

// calle: "Av. 18 de Julio"

// numero: 123

// ciudad: "Montevideo"

// Agrega la propiedad direccion al objeto persona.

let persona = {
  nombre: "Juan",

  apellido: "Perez",

  edad: 30,

  estaCasado: true,

  hijos: ["Lucas", "Maria"],

  mascotas: { perro: "Toby", gato: "Garfield" },
};

persona.nacionalidad = "Uruguayo";

persona.nombre = "Pedro";

delete persona.apellido;

let direccion = {
  calle: "Av. 18 de Julio",

  numero: 123,

  ciudad: "Montevideo",
};

persona.direccion = direccion;

console.log(persona);

// {nombre: "Pedro", edad: 30, estaCasado: true, hijos: Array(2), mascotas: {…}, nacionalidad: "Uruguayo", direccion: {…}}

// apellido: undefined

// direccion: {calle: "Av. 18 de Julio", numero: 123, ciudad: "Montevideo"}

// edad: 30

// estaCasado: true

// hijos: (2) ["Lucas", "Maria"]

// mascotas: {perro: "Toby", gato: "Garfield"}

// nacionalidad: "Uruguayo"

// nombre: "Pedro"
