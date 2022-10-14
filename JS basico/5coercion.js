//Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
//Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
//Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

//coercion implicita:
var a = 4 + "7"; //String "47"
var b = 4 * "7"; //Number 28
var c = 4 + "";  //String "4 "

//coercion explicita:
var d = String(b);      //String "28"
var e = Number("45");   //Number 45


