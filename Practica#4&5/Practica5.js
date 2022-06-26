//Instrucciones:
//pide al usuario que indique su nombre y su edad. Como mensaje de salida le indicarás qué edad tuvo
//el año pasado y cuantos años tendrá el siguiente año.
//Ejemplo: [nombre] el año pasado tenías X años y el próximo año cumplirás Y años.

function saludo(nombre, edad) {
  return (
    nombre +
    " el año pasado tenías " +
    (edad - 1) +
    " años y el próximo año cumplirás " +
    (edad + 1) +
    " años."
  );
}

function saludarA() {
  var tuNombre = prompt("¿Cual es tu nombre?");
  var tuEdad = Number(prompt("¿Cuantos años tienes?"));

  const mensaje = saludo(tuNombre, tuEdad);
  alert(mensaje);
}

saludarA();
