const formulario = document.querySelector("#form");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  console.log("Enviando formulario");
  console.log(e);
  console.log(e.target);
  console.log(e.target.action);
  console.log(e.target.method);
}
