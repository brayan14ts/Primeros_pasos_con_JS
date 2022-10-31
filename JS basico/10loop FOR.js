//Loops son ciclos que ocurriran mientras una condicion se cumpla
//hacer tareas de forma repetitiva

var personas = ["Juan", "Luis", "Ana", "Maria"];

function saludarPersonas(persona) {
  console.log(`Hola, ${persona}`);
}

//for ---------------------------------
for (var i = 0; i < personas.length; i++) {
  saludarPersonas(personas[i]);
}

//Hola, Juan
//Hola, Luis
//Hola, Ana
//Hola, Maria


//for de otra manera FOR OF-------------------
for (var persona of personas) {
  saludarPersonas(persona);
}

//for de otra manera FOR IN-------------------


