//Hoisting de las variables---------------------------------
var miNombre;
console.log(miNombre);

//la consola asumira que 'miNombre' es de tipo 'undefined'



//Hoisting de las funciones---------------------------------
hey();

function hey() {
  console.log("Hola " + miNombre);
}

var miNombre = "Brayan";

//Siempre se ejecuta primero las funciones y las variables, en tal sentido cuando se ejecute el codigo de arriba,
//retornara 'Hola Undefined' porque al ejecutar la linea 10 aun no esta definido 'miNombre'.
