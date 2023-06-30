let cam = document.querySelectorAll(".box");
let tab = document.getElementById("tablero");
let Btn = document.getElementById("restartBtn");
let gana = document.getElementById("gana");
let computadora = "O";
let juegoTerminado = false;

const vari = [
  ["1", "2", "3"],
  ["4", " ", "6"],
  ["7", "8", "10"],
];

function turnoO() {
  let camposVacios = Array.from(cam).filter(filtroVacios);
  let numero = Math.floor(Math.random() * camposVacios.length);
  if (camposVacios.length > 0) {
    camposVacios[numero].innerHTML = computadora;
  }
}

function filtroVacios(campo) {
  return campo.textContent === "";
}

for (let i = 0; i < 9; i++) {
  cam[i].addEventListener("click", function () {
    if(juegoTerminado){
      return
    }
    if (cam[i].textContent === "") {
      cam[i].innerHTML = "X";
      if (Winner(cam[i].textContent)) {
        gana.innerHTML = `${cam[i].textContent} ha ganado`;
        juegoTerminado = true;
      } else {
        turnoO();
        if (Winner(computadora)) {
          gana.innerHTML = `${computadora} ha ganado`;
          juegoTerminado = true;
        } else {
          let camposVacios = Array.from(cam).filter(filtroVacios);
          if (camposVacios.length === 0) {
            gana.innerHTML = "Ha sido un empate!!!";
            juegoTerminado = true;
          }
        }
      }
    }
  });
}
function Winner(jugador) {
  let win = false;
  let combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Filas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columnas
    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ];

  for (let cells of combinacionesGanadoras) {
    if (
      cam[cells[0]].textContent === jugador &&
      cam[cells[1]].textContent === jugador &&
      cam[cells[2]].textContent === jugador
    ) {
      win = true;
      break;
    }
  }
  return win;
}

let btnreinicio = document.getElementById("btn");
btnreinicio.addEventListener("click", reset);

function reset() {
  window.location.reload();
}
