function Answer() {
  var Sidea =parseInt(document.getElementById('firstNumber').value);
  var Sideb =parseInt(document.getElementById('secondNumber').value);
  var Sidec =parseInt(document.getElementById('thirdNumber').value);
  if (Sidea>=Sideb+Sidec || Sideb>=Sidec+Sidea || Sidec>=Sidea+Sideb) {
    alert("Not a triangle");
  }
  else if(Sidea===Sideb && Sideb===Sidec ) {
    alert("Equilateral");
  }
  else if (Sidea===Sideb || Sideb===Sidec || Sidec===Sidea) {
    alert("Isosceles");
  }
  else if (Sidea!==Sideb && Sideb!==Sidec) {
    alert("Scalene");
  }
}
function getAlert(){
  alert(" i work ");
}
// function resetBtn(){
//
// }
