const puntaje = 350;

function revisarPuntaje() {
  if (puntaje > 400) {
    console.log("Buen puntaje, felicidades.");
    return;
  }

  if (puntaje > 300) {
    console.log("No pasaste el puntaje mínimo.");
    return;
  }
}

revisarPuntaje();
