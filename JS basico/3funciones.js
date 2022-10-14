//Funciones son las tareas que va a llevar a cabo el navegador.
//'function' es la palabra reservada para las funciones.

//Declarativas
function miFuncion() {
  return 3;
}

miFuncion();
//------------------------------------------------------------

//de Expresión
var miFuncion = function (a, b) {
  return a + b;
};

miFuncion();

//Realizar suma mediante una funcion -------------------------
function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}

sumar(1, 2);

//Saludar estudiante mediante una funcion -------------------------
function saludarEstudiante(nombre) {
  var saludo = "Hola " + nombre;
  console.log(saludo);
}

saludarEstudiante("Pedro");
