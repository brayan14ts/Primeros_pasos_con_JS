//array es una estructura de datosque guarda ciertos valores.

//Sus elementos principales son: Indice y elemento.

var frutas = ["Naranja", "Pera", "Manzana", "Anana"];

//ver elementos
console.log(frutas);

//ver cantidad de elementos
console.log(frutas.length);

//acceder a un elemento especifico del array
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

//agregar mas elementos al array
var addfrutas = frutas.push("Fresa", "Uva");

//eliminar ultimo elemento del array
var deletelastfrutas = frutas.pop();

//agregar elemento al principio del array
var addfirtsfrutas = frutas.unshift("Banana");

//eliminar elemento del inicio del array
var deletefirstfrutas = frutas.shift();

//saber posicion de un elemento del array
var searchfrutas = frutas.indexOf("Manzana");
console.log(searchfrutas)