//Juego: Piedra Papel o Tijera con 'if'

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

function resultado(usuario, maquina) {
  if (usuario == maquina) {
    return("Esto es un empate");
  } else {
    if (usuario == a && maquina == b) {
      return("Perdiste");
    } else if (usuario == a && maquina == c) {
      return("Ganaste");
    } else if (usuario == b && maquina == a) {
      return("Ganaste");
    } else if (usuario == b && maquina == c) {
      return("Perdiste");
    }
  }
}

resultado()

//Juego: Piedra Papel o Tijera con 'switch'

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}