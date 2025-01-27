// Resultado aleatorio para la computadora
function obtenerResultadoAleatorioComputadora() {
  const opciones = ["Piedra", "Papel", "Tijeras"];
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio]; //regresa el nombre del array
}

// Solo puedes ganar en 3 casos
function haGanadoElJugador(player, computer) {
  return (
    (player === "Piedra" && computer === "Tijeras") ||
    (player === "Tijeras" && computer === "Papel") ||
    (player === "Papel" && computer === "Piedra")
  );
}

let puntuacionJugador = 0;
let puntuacionComputadora = 0;

// operaion para el resultado de los casos
function obtenerResultadosRonda(opcionUsuario) {
  const resultadoComputadora = obtenerResultadoAleatorioComputadora();

  if (haGanadoElJugador(opcionUsuario, resultadoComputadora)) {
    puntuacionJugador++;
    return `Eres chingon!! Tú ganas:\n\nTú: ${opcionUsuario} \n\nCompu: ${resultadoComputadora}`;
  } else if (resultadoComputadora === opcionUsuario) {
    return `Es un empate! Ambos eligieron ${opcionUsuario}`;
  } else {
    puntuacionComputadora++;
    return `Estas bien menso, la computadora te ganó:\n\nTú: ${resultadoComputadora} \n\nCompu: ${opcionUsuario}`;
  }
}

// html
const elementoPuntuacionJugador = document.getElementById("puntuacion-jugador");
const elementoPuntuacionComputadora = document.getElementById("puntuacion-computadora");
const mensajeResultadosRonda = document.getElementById("mensaje-resultados");
const mensajeGanador = document.getElementById("mensaje-ganador");
const contenedorOpciones = document.querySelector(".options-container");
const botonReiniciarJuego = document.getElementById("reiniciar-juego-btn");

// operacion de resultados
function mostrarResultados(opcionUsuario) {
  mensajeResultadosRonda.innerText = obtenerResultadosRonda(opcionUsuario);
  elementoPuntuacionComputadora.innerText = puntuacionComputadora;
  elementoPuntuacionJugador.innerText = puntuacionJugador;

  if (puntuacionJugador === 3 || puntuacionComputadora === 3) {
    mensajeGanador.innerText = `${
      puntuacionJugador === 3 ? "El isay" : "La compu"
    } ha ganado el juego!`;

    botonReiniciarJuego.style.display = "block";
    contenedorOpciones.style.display = "none";
  }
}

// reinicio
function reiniciarJuego() {
  mensajeResultadosRonda.innerText = "";
  botonReiniciarJuego.style.display = "none";
  contenedorOpciones.style.display = "block";
  mensajeGanador.innerText = "";
  puntuacionJugador = 0;
  elementoPuntuacionJugador.innerText = 0;
  puntuacionComputadora = 0;
  elementoPuntuacionComputadora.innerText = 0;
}

// eventos
document.getElementById("piedra-btn").addEventListener("click", () => mostrarResultados("Piedra"));
document.getElementById("papel-btn").addEventListener("click", () => mostrarResultados("Papel"));
document.getElementById("tijeras-btn").addEventListener("click", () => mostrarResultados("Tijeras"));
botonReiniciarJuego.addEventListener("click", reiniciarJuego);