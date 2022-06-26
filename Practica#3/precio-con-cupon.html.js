//Generar array de cupones válidos a la fecha

//Generar fórmulas de calculo de descuento
function calcularDescuento(precio, cupon) {
  switch (cupon) {
    case "CUPON25":
      var porcentaje = 25;
      var descuento = (precio * porcentaje) / 100;
      break;
    case "CUPON40":
      var porcentaje = 40;
      var descuento = (precio * porcentaje) / 100;
      break;
    case "MEGACUPON":
      var porcentaje = 60;
      var descuento = (precio * porcentaje) / 100;
      break;
    default:
      var porcentaje = 0;
      var descuento = (precio * porcentaje) / 100;
  }

  var precioConDescuento = precio - descuento;

  switch (porcentaje) {
    case 0:
      return "Cupón no válido o está vencido.";
      break;
    default:
      return (
        "Has obtenido un descuento de " +
        porcentaje +
        "%, solo pagaras : $" +
        precioConDescuento +
        "."
      );
  }
}

//Se crea funcion que recibe datos y genera respuesta en el html
function ButtonPriceConCuponDeDescuento() {
  //se obtiene los elementos de precio y descuento del producto desde el html
  const inputPrice = document.getElementById("inputPrice");
  const inputCupon = document.getElementById("inputCupon");
  //se obtiene los valores de los elementos
  const value1 = inputPrice.value;
  const value2 = inputCupon.value;

  //genera constante de la ejecucion de la funcicon calcularDescuento
  const mensaje = calcularDescuento(value1, value2);

  //se genera variable del parrafo (html) donde se mostrara el mensaje de respuesta
  const PriceResponse = document.getElementById("PriceResponse");
  //inserta texto en el parrafo HTML
  PriceResponse.innerText = mensaje;
}
