/*** @author Joel  */

var GridGenerator = function GridGenerator(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
};
GridGenerator.prototype.matrix = function () {
  var mytblr = document.createElement("table");
  for (let i = 0; i < this.xAxis; i++) {
    var Row = document.createElement("tr");
    for (let j = 0; j < this.yAxis; j++) {
      var Cell = document.createElement("td");
      Cell.style.width = "100px";
      Cell.style.height = "100px";
      Row.appendChild(Cell);
    }
    mytblr.appendChild(Row);
  }
  document.body.appendChild(mytblr);
};

function changeBackgroungColor(className) {
  setInterval(function () {
    var elems = document.querySelectorAll(className);
    var index = 0,
      length = elems.length;

    for (; index < length; index++) {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      elems[index].style.backgroundColor = "#" + randomColor;
    }
  }, 2000);
}
var tab = new GridGenerator(4, 4);
changeBackgroungColor("td");
tab.matrix();
