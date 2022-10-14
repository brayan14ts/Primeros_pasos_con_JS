var personas = ["Juan", "Luis", "Ana", "Maria"];

function saludarPersonas(persona) {
  console.log(`Hola, ${persona}`);
}

while (personas.length > 0) {
  console.log(personas);
  var persona = personas.shift();
  saludarPersonas(persona);
}

//con el for podemos definir un fin de intentos, con el while ocurrira meintras la consicion sea verdad
