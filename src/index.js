import "./styles.css";

var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1;
var operand2;
var operator;

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+" || value == "-" || value == "/" || value == "*") {
      // alert("inside operator if!");
      operator = value;
      operand1 = Number(display.innerText);
      display.innerText = "";
    } else if (value == "%") {
      display.innerText = Number(display.innerText) / 100;
    } else if (value == "+/-") {
      display.innerText = -Number(display.innerText);
    } else if (value == "AC") {
      display.innerText = "";
      operand1 = 0;
      operand2 = 0;
      operator = null;
    } else if (value == "=") {
      operand2 = Number(display.innerText);
      let result = eval(operand1 + "" + operator + "" + operand2);
      display.innerText = result;
    } else {
      display.innerText += value;
    }
  });
}
