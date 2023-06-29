var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.add("active");
  } else {
    icon.classList.remove("active");
  }
};

let cam = document.getElementsByClassName("box");
let tab = document.getElementById("tablero");
let Btn = document.getElementById("restartBtn");

const vari = [
  ["1", "2", "3"],
  ["4", " ", "6"],
  ["7", "8", "10"],
];

function turnoO() {
  let camposVacios = Array.from(cam).filter(filtroVacios);
  let numero = Math.floor(Math.random() * camposVacios.length);
  camposVacios[numero].innerHTML = "O";
}

function filtroVacios(campo) {
  return campo.textContent === "";
}

for (let i = 0; i < 9; i++) {
  cam[i].addEventListener("click", function () {
    if (cam[i].textContent === "") {
      cam[i].innerHTML = "X";
      setTimeout(() => {
        turnoO();
      }, 1000);
    }

    console.log(cam);

    if (
      cam[0].textContent == "X" &&
      cam[1].textContent == "X" &&
      cam[2].textContent == "X"
    ) {
      alert("GANASTE ARRIBA EN LA FILA");
    }

    if (
      cam[3].textContent == "X" &&
      cam[4].textContent == "X" &&
      cam[5].textContent == "X"
    ) {
      alert("GANASTE EN LA FILA DEL MEDIO");

      for (let i = 0; i < 1; i++) {
        console.log("holaaaaa");
        break;
      }
    }

    if (
      cam[6].textContent == "X" &&
      cam[7].textContent == "X" &&
      cam[8].textContent == "X"
    ) {
      alert("GANASTE EN LA FILA DE ABAJO");
    }

    if (
      cam[0].textContent == "X" &&
      cam[3].textContent == "X" &&
      cam[6].textContent == "X"
    ) {
      alert("GANASTE EN LA PRIMERA FILA HORIZONTAL");
    }

    if (
      cam[1].textContent == "X" &&
      cam[4].textContent == "X" &&
      cam[7].textContent == "X"
    ) {
      alert("GANASTE EN LA FILA VERTICAL DEL MEDIO");
    }

    if (
      cam[2].textContent == "X" &&
      cam[5].textContent == "X" &&
      cam[8].textContent == "X"
    ) {
      alert("GANASTE EN LA FILA HORIZONATL DERECHA");
    }
    if (
      cam[0].textContent == "X" &&
      cam[4].textContent == "X" &&
      cam[8].textContent == "X"
    ) {
      alert("GANASTE EN LA FILA DIAGONAL IZQUIERDA");
    }
    if (
      cam[2].textContent == "X" &&
      cam[4].textContent == "X" &&
      cam[6].textContent == "X"
    ) {
      alert("GANASTE DIAGONAL DERECHA");
    }
    if (
      cam[0].textContent == "O" &&
      cam[1].textContent == "O" &&
      cam[2].textContent == "O"
    ) {
      alert("O GANA ARRIBA EN LA FILA");
    }

    if (
      cam[3].textContent == "O" &&
      cam[4].textContent == "O" &&
      cam[5].textContent == "O"
    ) {
      alert("O GANA EN LA FILA DEL MEDIO");
    }

    if (
      cam[6].textContent == "O" &&
      cam[7].textContent == "O" &&
      cam[8].textContent == "O"
    ) {
      alert("O GANA EN LA FILA DE ABAJO");
    }

    if (
      cam[0].textContent == "O" &&
      cam[3].textContent == "O" &&
      cam[6].textContent == "O"
    ) {
      alert("O GANA EN LA PRIMERA FILA VERTICAL");
    }

    if (
      cam[1].textContent == "O" &&
      cam[4].textContent == "O" &&
      cam[7].textContent == "O"
    ) {
      alert("O GANA EN LA FILA VERTICAL DEL MEDIO");
    }

    if (
      cam[2].textContent == "O" &&
      cam[5].textContent == "O" &&
      cam[8].textContent == "O"
    ) {
      alert("O GANA EN LA FILA VERTICAL DERECHA");
    }
    if (
      cam[0].textContent == "O" &&
      cam[4].textContent == "O" &&
      cam[8].textContent == "O"
    ) {
      alert("O GANA EN LA FILA DIAGONAL IZQUIERDA");
    }
    if (
      cam[2].textContent == "O" &&
      cam[4].textContent == "O" &&
      cam[6].textContent == "O"
    ) {
      alert("O GANA DIAGONAL DERECHA");
    }
  });
}

let btnreinicio = document.getElementById("btn");
btnreinicio.addEventListener("click", reset);

function reset() {
  window.location.reload();
}

let ganador = document.getElementById("ganador");
ganador.innerHTML = "Ganador: Usuario";
