let user = {
  email: "nico.dibarboure@gmail.com",
  name: "Nico",
  direccion: {
    calle: "Av. Siempre Viva",
    numero: 742,
  },
  activo: true,
  recuperarClave: function () {
    console.log("Recuperando clave...");
  },
};

/** Esto se llama programacion orientada a OBJETOS.
 *
 * Un objeto es un conjunto de propiedades que tienen un valor.
 *
 * En este caso, el objeto user tiene 4 propiedades:
 *
 * - email
 * - password
 * - direccion
 * - activo
 *
 * Y una funcion:
 *
 * - recuperarClave
 *
 * Las propiedades pueden ser de cualquier tipo, incluso otros objetos.
 *
 * Las funciones que estan dentro de un objeto se llaman metodos.
 *
 * Para acceder a las propiedades de un objeto, se usa la notacion de punto:
 *
 * user.email
 * user.password
 * user.direccion
 * user.activo
 *
 * Para acceder a los metodos de un objeto, tambien se usa la notacion de punto:
 *
 * user.recuperarClave()
 *
 * Para modificar una propiedad de un objeto, se usa la notacion de punto:
 *
 * user.email = '
 * user.password = '
 * user.direccion = '
 * user.activo = '
 *
 * Para agregar una propiedad a un objeto, se usa la notacion de punto:
 *
 * user.nuevaPropiedad = valor;
 *
 * Para eliminar una propiedad de un objeto, se usa la palabra reservada delete:
 *
 * delete user.propiedad;
 *
 * Para acceder a las propiedades de un objeto, tambien se puede usar la notacion de corchetes:
 *
 * user['email']
 * user['password']
 * user['direccion']
 * user['activo']
 *
 *
 */
