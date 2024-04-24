let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let operator = document.getElementById("operation");
let output = document.getElementById("output");

function calculate() {
  const value1 = parseInt(document.getElementById("input1").value);
  const value2 = parseInt(document.getElementById("input2").value);
  if (isNaN(value1) || isNaN(value2)) {
    output.textContent = "Enter numbers only";
  } else {
    switch (operator.value) {
      case "addition":
        output.textContent = "Output is: " + (value1 + value2);
        break;

      case "subtraction":
        output.textContent = "Output is: " + (value1 - value2);
        break;

      case "multiplication":
        output.textContent = "Output is: " + value1 * value2;
        break;

      case "divison":
        output.textContent = "Output is: " + value1 / value2;
        break;

      default:
        output.textContent = "Please select operator";
        break;
    }
  }
}

operator.addEventListener("change", () => {
  calculate();
});

input1.addEventListener("input", () => {
  calculate();
});

input2.addEventListener("input", () => {
  calculate();
});
