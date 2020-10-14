class MyMorpionXO {
  constructor() {
    this.player1 = player1;
    this.player2 = player2;
  }
}

var matrix = function matrix() {
  var table = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    var Row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      var Cell = document.createElement("td");
      Cell.style.width = "100px";
      Cell.style.height = "100px";
      Cell.style.cursor = "pointer";
      Cell.className = "cases";

      Row.appendChild(Cell);
    }
    table.appendChild(Row);
  }
  document.body.appendChild(table);
  table.style.border = "solid 1px";
  table.setAttribute("border", "2px");
};

matrix();

var i = 0;

var cass = document.querySelectorAll(".cases");

function turn() {
  i++;
  return i % 2 === 0 ? "O" : "X";
}

function winner(best) {
  alert(`${best} a gagné!`);
}
debugger;
function win() {
  //line
  if (
    cass[0].innerHTML !== " " &&
    cass[0].innerHTML === cass[1].innerHTML &&
    cass[1].innerHTML === cass[2].innerHTML
  ) {
    winner(cass[0].innerHTML);
  } else if (
    cass[3].innerHTML !== " " &&
    cass[3].innerHTML === cass[4].innerHTML &&
    cass[4].innerHTML === cass[5].innerHTML
  ) {
    winner(cass[3].innerHTML);
  } else if (
    cass[6].innerHTML !== " " &&
    cass[6].innerHTML === cass[7].innerHTML &&
    cass[7].innerHTML === cass[8].innerHTML
  ) {
    winner(cass[6].innerHTML);
  }
  //col
  else if (
    cass[0].innerHTML !== " " &&
    cass[0].innerHTML === cass[3].innerHTML &&
    cass[3].innerHTML === cass[6].innerHTML
  ) {
    winner(cass[0].innerHTML);
  } else if (
    cass[1].innerHTML !== " " &&
    cass[1].innerHTML === cass[4].innerHTML &&
    cass[4].innerHTML === cass[7].innerHTML
  ) {
    winner(cass[1].innerHTML);
  } else if (
    cass[2].innerHTML !== " " &&
    cass[2].innerHTML === cass[5].innerHTML &&
    cass[5].innerHTML === cass[8].innerHTML
  ) {
    winner(cass[2].innerHTML);
  }
  //diag
  else if (
    cass[0].innerHTML !== " " &&
    cass[0].innerHTML === cass[4].innerHTML &&
    cass[4].innerHTML === cass[8].innerHTML
  ) {
    winner(cass[0].innerHTML);
  } else if (
    cass[2].innerHTML !== " " &&
    cass[2].innerHTML === cass[4].innerHTML &&
    cass[4].innerHTML === cass[6].innerHTML
  ) {
    winner(cass[2].innerHTML);
  } else if (
    cases[0].innerHTML !== "" &&
    cases[1].innerHTML !== "" &&
    cases[2].innerHTML !== "" &&
    cases[3].innerHTML !== "" &&
    cases[4].innerHTML !== "" &&
    cases[5].innerHTML !== "" &&
    cases[6].innerHTML !== "" &&
    cases[7].innerHTML !== "" &&
    cases[8].innerHTML !== ""
  ) {
  }
}

function game() {
  if (!this.innerHTML) this.innerHTML = turn();
  win();
}

cass.forEach((el) => el.addEventListener("click", game));
