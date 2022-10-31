//JS esta diseñado en POO
//la idea es traer orjetos del mundo real a código
//los objetos tienen propiedades, las priopiedades tienen clave-valor

let miAuto = {
  marca: "Toyota",
  modelo: "Yaris",
  annio: 2022,
  detalleDelAuto: function () {
    console.log(`Auto: ${this.marca} ${this.modelo} ${this.annio}`);
  },
};

//acceder a la informacion
miAuto;
miAuto.marca;
miAuto.annio;
miAuto.detalleDelAuto();
