const busqueda = document.querySelector("#formulario");

busqueda.addEventListener("keydown", (e) => {
  console.log("Escribiendo...");
});

busqueda.addEventListener("keyup", (e) => {
  console.log(e.type);
});

busqueda.addEventListener("blur", (e) => {
  console.log("Saliendo del input");
});

busqueda.addEventListener("copy", (e) => {
  console.log("Texto copiado");
});

busqueda.addEventListener("paste", (e) => {
  console.log("Texto pegado");
});

busqueda.addEventListener("cut", (e) => {
  console.log("Texto cortado");
});

busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") console.log("No hay nada en el input");
  else console.log("Escribiendo en el input");
});

// Eventos de teclado

// * Keydown: Se ejecuta cuando presionamos una tecla
// * Keyup: Se ejecuta cuando soltamos una tecla
// * Blur: Se ejecuta cuando salimos del input
// * Copy: Se ejecuta cuando copiamos texto
// * Paste: Se ejecuta cuando pegamos texto
// * Cut: Se ejecuta cuando cortamos texto
// * Input: Se ejecuta cuando se escribe en el input (Hace lo mismo que keydown y keyup pero es más moderno. Se recomienda usar este evento)
