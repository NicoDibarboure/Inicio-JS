// Generar HTML Con JavaScript

const enlace = document.createElement("a");

// Agregar el texto

enlace.textContent = "Nuevo Enlace";

// Añadir clase
enlace.classList.add("navlist");

// Añadir otra forma de añadir clase
enlace.setAttribute("data-enlace", "nuevo-enlace");

enlace.href = "/nuevo-enlace";

enlace.classList.add("nuevo-enlace");

enlace.target = "_blank";

enlace.setAttribute("data-enlace", "nuevo-enlace");

// Agregar al HTML
const navegacion = document.querySelector(".navlist");

// TODO Para saber cuantos hijos tiene un elemento
// * console.log(enlace.children);

navegacion.insertBefore(enlace, navegacion.children[6]);
