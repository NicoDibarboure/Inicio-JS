const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist de ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la playlist ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function (id) {
  console.log(`Borrando canción con el id: ${id}`);
};

reproductor.borrar(30);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
