//Generar formulas de calculo de descuento
function calcularDescuento(precio, porcentajeDescuento) {
  var descuento = (precio * porcentajeDescuento) / 100;
  var precioConDescuento = precio - descuento;

  return (
    "Tu producto cuesta $" +
    precio +
    ". Pero con el descuento de " +
    porcentajeDescuento +
    "%, solo pagaras : $" +
    precioConDescuento +
    "."
  );
}

//Se crea funcion que recibe datos y genera respuesta en el html
function ButtonPriceConDescuento() {
  //se obtiene los elementos de precio y descuento del producto desde el html
  const inputPrice = document.getElementById("inputPrice");
  const inputDescuento = document.getElementById("inputDescuento");
  //se obtiene los valores de los elementos
  const value1 = inputPrice.value;
  const value2 = inputDescuento.value;

  //genera constante de la ejecucion de la funcicon calcularDescuento
  const mensaje = calcularDescuento(value1, value2);

  //se genera variable del parrafo (html) donde se mostrara el mensaje de respuesta
  const PriceResponse = document.getElementById("PriceResponse");
  //inserta texto en el parrafo HTML
  PriceResponse.innerText = mensaje;
}
