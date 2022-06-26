//-------------------------------------------------------------------------------------------------
//Instrucciones:
//vas con tus amigos a tu restaurante favorito y acuerdan dividir la cuenta.
//Para facilitar las cosa pedirás al usuario que indique el total a pagar, entre cuantas
//personas se dividirá la cuenta, porcentaje de propina a incluir, un porcentaje de impuestos,
//total a pagar incluyendo propina más impuestos y el total a pagar por cada persona.

function cuenta(totalCuenta, cantPersonas, porcentajePropina, porcentajeImp) {
  var propina = totalCuenta * (porcentajePropina / 100);
  var deudaTotal = totalCuenta * (1 + porcentajeImp / 100) + propina;
  var deudaPorPersona = deudaTotal / cantPersonas;

  return (
    "La cuenta total a pagar es de: $" +
    deudaTotal +
    ", y cada uno debe pagar: $" +
    deudaPorPersona +
    "."
  );
}

function pedirCuenta() {
  var value1 = Number(prompt("Ingrese monto total a pagar:"));
  var value2 = Number(prompt("Ingrese la cantidad de personas que pagaran:"));
  var value3 = Number(prompt("Ingrese porcentaje de propina a incluir:"));
  var value4 = Number(prompt("Ingrese porcentaje de impuestos:"));

  const mensaje = cuenta(value1, value2, value3, value4);
  alert(mensaje);
}

pedirCuenta();
