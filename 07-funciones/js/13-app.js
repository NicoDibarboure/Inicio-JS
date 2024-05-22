const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log("Pausando..."),
  crearPlaylist: (nombre) => console.log(`Creando la playlist de ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la playlist ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.borrar = (id) => console.log(`Borrando canción con el id: ${id}`);
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("Rock");
reproductor.reproducirPlaylist("Heavy Metal");
