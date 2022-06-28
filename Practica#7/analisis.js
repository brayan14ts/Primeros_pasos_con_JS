const salariosColombia = colombia.map(function (persona) {
  return persona.salary;
});

//salarios ordenados de menor a mayor
const salariosColOrdenados = salariosColombia.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

//10% de los salarios mas altos
var top10= (salariosColOrdenados.length *(-.1));
const salariosColTop10= salariosColOrdenados.slice(top10);

//Reutilice la funcion CalcularMediana de la Practica#6
function calcularMediana(listaOrdenada) {
  var cantElementos2 = listaOrdenada.length;
  var cociente = cantElementos2 % 2;

  if (cociente === 0) {
    var elementoMediana1 = listaOrdenada[cantElementos2 / 2 - 1];
    var elementoMediana2 = listaOrdenada[cantElementos2 / 2];
    var mediana = (elementoMediana1 + elementoMediana2) / 2;
  } else {
    var mediana = listaOrdenada[cantElementos2 / 2 - 0.5];
  }

  console.log(mediana);
}

//Carlacular la mediana de salarios en colombia
calcularMediana(salariosColOrdenados);
//Carlacular la mediana del 10% de salarios mas altos en colombia
calcularMediana(salariosColTop10);
