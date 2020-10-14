var GridGenerator = function GridGenerator(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
};

GridGenerator.prototype.generatecolor = function () {
  return "hello " + name;
};

GridGenerator.prototype.run = function () {
  console.log(this.xAxis, this.yAxis);
  console.log(this.hello("cyril"));
};

var gridGenerator = new GridGenerator(12, 23);
var gridGenerator2 = new GridGenerator("toto", "hello");

gridGenerator.run();

console.log(gridGenerator.xAxis);
console.log(gridGenerator2.xAxis);
