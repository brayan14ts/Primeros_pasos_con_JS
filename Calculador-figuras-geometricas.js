//Calculo de figuras geométricas

console.group("Cuadrado");
    //Lado  de un cuadrado
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

    //Perimetro de un cuadrado
    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm.");

    //area del cuadrado
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2.");
console.groupEnd();

console.group("Triangulo");
    //Lados de un triangulo
    const ladoTriangulo1 = 5;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 7;
    console.log(
    "Los lados del triangulo miden: " +
        ladoTriangulo1 +
        "cm, " +
        ladoTriangulo2 +
        "cm, " +
        baseTriangulo +
        "cm."
    );

    //Altuta del triangulo
    const alturaTriangulo = 6;
    console.log("La altura del triangulo mide: " + alturaTriangulo + "cm.");

    //Perimetro del triangulo
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("El perimetro del cuadrado mide: " + perimetroTriangulo + "cm.");

    //Area del triangulo
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log("El area del triangulo mide: " + areaTriangulo + "cm^2.");
console.groupEnd();

console.group("Circulo");
    //radio/diametro de un circulo
    const radioCirculo = 5;
    const diametroCirculo = radioCirculo * 2;
    const PI = Math.PI;
    console.log("El radio del círculo mide: " + radioCirculo + "cm.");
    console.log("El diametro del círculo mide: " + diametroCirculo + "cm.");

    //Perimetro de un circulo
    const perimetroCirculo = PI * diametroCirculo;
    console.log("El perimetro del círculo mide: " + perimetroCirculo + "cm.");

    //area del circulo
    const areaCirculo = 3.1416 * radioCirculo * radioCirculo;
    console.log("El area del círculo mide: " + areaCirculo + "cm^2.");
console.groupEnd();
