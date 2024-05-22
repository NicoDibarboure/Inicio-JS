const aprendiendo2 = function (tecnologia, tecnologia2 = "No se asigno") {
  console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
};

aprendiendo2("JavaScript", "Node.js");

const aprendiendo = (tecnologia, tecnologia2) =>
  `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo("HTML5", "Node.js"));
