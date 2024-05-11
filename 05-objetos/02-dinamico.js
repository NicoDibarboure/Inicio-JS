const user = { id: 1 };

user.name = "Nico";
user.guardar = function () {
  console.log("Guardando usuario...", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// const user1 = Object.freeze({ id: 1 }); // * No se puede modificar
const user1 = Object.seal({ id: 1 }); // * Se puede modificar
user1.name = "Nico";
user1.id = 2;
console.log(user1);
