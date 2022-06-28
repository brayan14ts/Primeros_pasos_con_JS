// Promedio = (a+b+c+...+n)/n. Es la suma de las entradas,dividido por la cantidad de entradas.

//Calcular el promedio (media aritmetica) ---usando el ciclo FOR
//lista debe tener formato lista: [a,b,c,d...]
function calcularPromedio(lista) {
  //sumar las edades:
  var sumarElementos = 0;

  for (let i = 0; i < lista.length; i++) {
    sumarElementos += lista[i]; //esto es igual a: sumarElementos = sumarElementos + edades[i]
  }

  //contar la cantidad de elementos en el array:
  var cantElementos = lista.length;

  var promedio = sumarElementos / cantElementos;
  alert(promedio);
}

//--------------------------------------------------------------------------------------------------------------

//Mediana es el valor del medio (cuando es impar la cantidad de valores) ordenados de menor a mayor o viceversa.
// se tiene a,b,c --> la mediana es b (el valor del medio).

//Mediana es el promedio de los valores del medio (cuando es par la cantidad de valores) ordenados de menor a mayor o viceversa.
// se tiene a,b,c,d --> la mediana es (b+c)/2 (promdio de los dos valores del medio).

//lista debe tener formato lista: [a,b,c,d...]
function calcularMediana(lista) {
  listaOrdenada = lista.sort(
    function(salaryA, salaryB){
      return salaryA-salaryB;
    }
  );
  var cantElementos2 = lista.length;
  var cociente = cantElementos2 % 2;

  if (cociente === 0) {
    var elementoMediana1 = lista[(cantElementos2 / 2) -1];
    var elementoMediana2 = lista[(cantElementos2 / 2)];
    var mediana = (elementoMediana1 + elementoMediana2) / 2;
  } else {
    var mediana = lista[(cantElementos2 / 2) - 0.5];
  }

  alert(mediana);
}

//--------------------------------------------------------------------------------------------------------------
//NO LOGRE CALCULAR MODA

//Moda es el valor que mas se repite.
//Se tiene a,b,c,b,b,b,5,x,a,d --> La moda es 'b' que se repite mas veces que el resto.
//Se tiene a,a,5,d,5  --> La moda son 'a' y '5' que se repiten dos veces c/u.

// function calcularModa(lista) {
//     listaOrdenada2= lista.sort();

//     //convertir el array en objeto, contabilizando los opbtetos que se repiten
//     elementosCantidad = {};

//     listaOrdenada

// }


