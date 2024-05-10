let accion = "listar";

switch (accion) {
  case "listar":
    console.log("Listando usuarios");
    break;
  case "guardar":
    console.log("Guardando usuario");
    break;
  case "editar":
    console.log("Editando usuario");
    break;
  case "eliminar":
    console.log("Eliminando usuario");
    break;
  default:
    console.log("Acción no reconocida");
    break;
}
