inicarApp();

function inicarApp() {
  console.log("Iniciando app...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda función");
  usuarioAutenticado("Nikito");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... Espere... ");
  console.log(`Usuario autenticado exitosamente: ${usuario}`);
}
