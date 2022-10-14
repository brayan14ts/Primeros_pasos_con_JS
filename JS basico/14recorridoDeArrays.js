var articulos = [
  { nombre: "Bici", costo: 2000 },
  { nombre: "Libro", costo: 4000 },
  { nombre: "TV", costo: 200 },
  { nombre: "Laptop", costo: 150 },
  { nombre: "Mouse", costo: 7000 },
  { nombre: "Telefono", costo: 250 },
];

//filtrar objetos del array---------------------------------------------------------------------------
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

articulosFiltrados;
/*
{
  Costo: 200;
  nombre: TV;
}
{
  Costo: 150;
  nombre: Laptop;
}
{
  Costo: 250;
  nombre: Telefono;
}
*/

//metodo map()-------------------------------------------------------------------------------------------
var filtradoXnombre = articulos.map(function (articulo) {
  return articulo.nombre;
});

filtradoXnombre;
// [ Bici,Libro,TV,Laptop,Mouse,Telefono ]

//metodo .find()
var encontrarArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

encontrarArticulo;
// { costo:150,nombre:Laptop }

//metodo .forEach()----------------------------------------------------------------------------------------
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});
/*
Bici
Libro
TV
Laptop
Mouse
Telefono
*/

//metodo .some()--------------------------------------------------------------------------------------------
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});

articulosBaratos;
//true