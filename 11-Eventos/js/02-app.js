// Eventos que ocurren con el MOUSE

// Seleccionar un elemento

const nav = document.querySelector(".navlist");

// Registrar un evento

// TODO: click
nav.addEventListener("click", () => {
  console.log("clickeando la navegacion");
});

// TODO: posicionarte sobre el elemento
nav.addEventListener("mouseenter", () => {
  console.log("entrando a la navegacion");

  nav.style.backgroundColor = "red";
});

//  TODO: salirse del elemento
nav.addEventListener("mouseout", () => {
  console.log("saliendo de la navegacion");
  nav.style.backgroundColor = "transparent";
});

//  TODO: Doble click
nav.addEventListener("dblclick", () => {
  console.log("doble click a la navegacion");
  nav.style.backgroundColor = "transparent";
});
