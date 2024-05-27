// Traversing the DOM

const traversing = document.querySelector("nav");
// console.log(traversing.children); // Los espacios en blanco son considerados elementos.

// console.log(traversing.children[0].nodeName);
// console.log(traversing.children[0].nodeType);

// const form = document.querySelector(".formulario");
// console.log((form.children[0].textContent = "Hola"));

// Traversing the hijo al padre
// console.log(traversing.parentElement);

// Traversing entre hermanos

// console.log(traversing.nextElementSibling);
// console.log(traversing.previousElementSibling);
// console.log(traversing.nextElementSibling.nextElementSibling);

// Traversing el ultimo hijo
// const ultimo = document.querySelector("#ultimo");

console.log(traversing.lastElementChild);
