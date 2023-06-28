let cam = document.getElementsByClassName("box");
let tab = document.getElementById("tablero");

const vari = [
  ["1", "2", "3"],
  ["4", " ", "6"],
  ["7", "8", "9"],
];

for (let i = 0; i < 9; i++) {
  cam[i].addEventListener("click", function () {
    if (cam[i].textContent === "") {
      cam[i].innerHTML = "X";
      setTimeout(() => {
        turnoO();
      }, 1000);
    }
  });
}

function turnoO() {
  let camposVacios = Array.from(cam).filter(filtroVacios);
  let numero = Math.floor(Math.random() * camposVacios.length);
  camposVacios[numero].innerHTML = "O";
}

function filtroVacios(campo) {
  return campo.textContent === "";
}

let currentPlayer = true;
const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (const campo of combinacionesGanadoras) {
  const [a, b, c] = campo;

  if (
    cam[a].textContent &&
    cam[a].textContent === cam[b].textContent &&
    cam[a].textContent === cam[c].textContent
  ) {
    gameActive = false;
    winner = currentPlayer;
    endGame("win", winner);
    break;
  }
}
