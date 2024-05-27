const card = document.querySelector(".formulario");
console.log(card);

// Podemos tener selectores especificos como en css

const info = document.querySelector(".formulario .info");
console.log(info);

// Seleccionar el segundo item de un listado

const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);
console.log(segundoCard); // Devuelve el segundo card. En este caso sera NULL porque no existe en el HTML.

// Seleccionar id con querySelector.

const formulario = document.querySelector("#formulario");
console.log(formulario);

// Seleccionar elementos HTML con querySelector

const navegacion = document.querySelector("nav");
console.log(navegacion);
