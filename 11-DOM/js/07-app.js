// Cambiar CSS con JavaScript

// const encabezado = document.querySelector(".hero-text h1");
// console.log(encabezado);

// encabezado.style.backgroundColor = "#333";
// encabezado.style.borderRadius = "20px";
// encabezado.style.fontFamily = "Arial";
// encabezado.style.textTransform = "uppercase";

const titulo = document.querySelector(".hero-text h1");
titulo.classList.add("nueva-clase", "segunda-clase");
titulo.classList.remove("nueva-clase", "segunda-clase");
console.log(titulo.classList);
