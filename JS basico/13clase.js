//clases, generar una funcion constructora o template para poder crear instancias de ella.

let auto1 = {
  marca: "Toyota",
  modelo: "Yaris",
  annio: 2022,
  detalleDelAuto: function () {
    console.log(`Auto: ${this.marca} ${this.modelo} ${this.annio}`);
  },
};

//para no hacer lo anterior mil veces si tengo mil autos podria crearse la funcion constructora

//template:
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//nueva objeto:
let auto2 = new auto("Tesla", "Model 3", 2021);
let auto3 = new auto("Tesla", "Model X", 2020);
