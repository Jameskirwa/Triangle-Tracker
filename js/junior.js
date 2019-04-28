var results = function() {
  var Side a =parseInt(document.getElementById('firstNumber').value);
  var Side b =parseInt(document.getElementById('secondNumber').value);
  var Side c =parseInt(document.getElementById('thirdNumber').value);
  if (Side a>=Side b+Side c || side b>=Side c+Side a || Side c>=Side a+Side b) {
    alert("Not a triangle");
  }
  else if(Side a===Side b && Side b===Side c ) {
    alert("Equilateral");
  }
  else if (Side a===Side b || Side b===Side c || Side c===Side a) {
    alert("Isosceles");
  }
  else if (Side a!==Side b && Side b!==Side c) {
    alert("Scalene");
  }
}
function resetBtn(){

}
