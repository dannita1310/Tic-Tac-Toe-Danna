var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.add("active");
  } else {
    icon.classList.remove("active");
  }
};

let cam = document.querySelectorAll(".box");
let tab = document.getElementById("tablero");
let Btn = document.getElementById("restartBtn");
let playerM = "O";

const vari = [
  ["1", "2", "3"],
  ["4", " ", "6"],
  ["7", "8", "10"],
];

function turnoO() {
  let camposVacios = Array.from(cam).filter(filtroVacios);
  let numero = Math.floor(Math.random() * camposVacios.length);
  camposVacios[numero].innerHTML = playerM;
  if (Winner(playerM)) {
    console.log(`${playerM} ha ganado`);
  }
}

function filtroVacios(campo) {
  return campo.textContent === "";
}

for (let i = 0; i < 9; i++) {
  cam[i].addEventListener("click", function () {
    if (cam[i].textContent === "") {
      cam[i].innerHTML = "X";
      turnoO();
    }
    if (Winner(cam[i].textContent)) {
      console.log(`${cam[i].textContent} ha ganado`);
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

let ganador = document.getElementById("ganador");
ganador.innerHTML = "Ganador: Usuario";
