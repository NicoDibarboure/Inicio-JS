const encabezado = document.querySelector(".hero-text h1");
console.log(encabezado);

console.log(encabezado.innerText); // Si en el CSS - visibility: hidden; - no se muestra el texto.
console.log(encabezado.textContent); // Si en el CSS - visibility: hidden; - se muestra el texto.
console.log(encabezado.innerHTML); // Se trae el HTML

// Modificar el texto

const nuevoHeading = (encabezado.textContent = "Nuevo Heading");

const imagen = document.querySelector(".hero-img img");
console.log(imagen);
