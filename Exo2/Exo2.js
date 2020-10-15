/*** @author Joel  */
/**
 *
 * @param {*} sum
 * @param {*} nbr
 */
var drawBar = function drawBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
};

/**
 * @param{}
 */

drawBar.prototype.bar = function () {
  var progress = document.createElement("progress");
  progress.value = this.nbr;
  progress.max = this.sum;
  progress.style.fontSize = "45px";
  document.body.appendChild(progress);
};

var barProgress = new drawBar(100, 40);
barProgress.bar();
