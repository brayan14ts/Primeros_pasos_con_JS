//switch es como un if pero diferente en su sintaxis y su uso, pero fuera de algunas ocasiones son muy parecidos.

//---------------------------------------------------------

var nota=prompt("Ingresa cual fue tu nota en el examen:");

switch(nota) {
    case 1||2||3||4:
        console.log("no pasaste");
        break;
    case  5||6||7:
        console.log("Lo hiciste bien");
        break;
    default:
        console.log("Excelente! Sigue asi")
}

//---------------------------------------------------------
