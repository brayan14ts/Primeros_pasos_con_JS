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

//Area del triangulo
function areaTriangulo(base, altura) {
    return "El area del triangulo mide: " + ((base * altura) / 2) + "cm^2.";
}
console.groupEnd();

//PI
const PI= Math.PI;

console.group("Circulo")
//radio/diametro de un circulo
function diametroCirculo(radio){
    return "El diametro del círculo mide: " + (2 * radio) + "cm.";
}

//Perimetro de un circulo
function perimetroCirculo(radio){
    return "El perimetro del círculo mide: " + (2 * radio * PI) + "cm.";
}

//area del circulo
function areaCirculo(radio){
    return "El area del círculo mide: " + (radio * radio * PI) + "cm^2.";
}
console.groupEnd()
