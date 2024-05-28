window.addEventListener("scroll", () => {
  const premium = document.querySelector(".hero-img");
  const ubicacion = premium.getBoundingClientRect();

  console.log(ubicacion);

  if (ubicacion.top < 784) {
    console.log("El elemento ya está visible");
  } else {
    console.log("Aún no, da más scroll");
  }
});
