//Calculo de figuras geométricas

console.group("Cuadrado");
//Perimetro de un cuadrado
function perimetroCuadrado(lado) {
  return "El perimetro del cuadrado mide: " + (lado * 4) + "cm.";
}

//area del cuadrado
function areaCuadrado(lado) {
  return "El area del cuadrado mide: " + (lado * lado) + "cm^2.";
}
console.groupEnd();

console.group("Triangulo");

//Perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return "El perimetro del triangulo mide: " + (lado1 + lado2 + base) + "cm.";
}

//Raiz cuadrada / potencia
raiz = Math.sqrt;

//Altura de triangulo isosceles
function alturaTriangulo(base, lado) {
  return (
    "La altura de tu triangulo isosceles es: " +
    raiz((lado**2) - ((base**2) / 4)) + "cm."
  );
}

//Area del triangulo
function areaTriangulo(base, altura) {
  return "El area del triangulo mide: " + (base * altura) / 2 + "cm^2.";
}
console.groupEnd();

//PI
const PI = Math.PI;

console.group("Circulo");
//radio/diametro de un circulo
function diametroCirculo(radio) {
  return "El diametro del círculo mide: " + (2 * radio) + "cm.";
}

//Perimetro de un circulo
function perimetroCirculo(radio) {
  return "El perimetro del círculo mide: " + (2 * radio * PI) + "cm.";
}

//area del circulo
function areaCirculo(radio) {
  return "El area del círculo mide: " + (radio * radio * PI) + "cm^2.";
}
console.groupEnd();

//Interacción entre  JS y HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = Number(input.value);

  const perimetro = areaCuadrado(value);
  alert(perimetro);
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("InputLado1Triangulo");
  const lado2 = document.getElementById("InputLado2Triangulo");
  const base = document.getElementById("InputBaseTriangulo");
  const value1 = Number(lado1.value);
  const value2 = Number(lado2.value);
  const value3 = Number(base.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAlturaTriangulo() {
  const lado1 = document.getElementById("InputLado1Triangulo");
  const lado2 = document.getElementById("InputLado2Triangulo");
  const base = document.getElementById("InputBaseTriangulo");
  const value1 = Number(lado1.value);
  const value2 = Number(lado2.value);
  const value3 = Number(base.value);

  if (value1 === value2) {
    const altura = alturaTriangulo(value3, value1);
    alert(altura);
  } else {
    alert("Tu triangulo no es isosceles ni equilatero");
  }
}
