var GridGenerator = function GridGenerator(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
};

GridGenerator.prototype.myTab = function myTab() {
  var myTab = document.createElement("table");
  for (let i = 0; i < this.xAxis; i++) {
    var Row = document.createElement("tr");
    for (let j = 0; j < this.yAxis; j++) {
      var Cell = document.createElement("td");

      Cell.appendChild(Row);
    }
    Row.appendChild(myTab);
  }
  document.body.appendChild(myTab);
};

var randomColor = function randomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  Cell.style.backgroundColor = "#" + randomColor;



  
};

var newTab = new GridGenerator(4, 4);
newTab.myTab();
