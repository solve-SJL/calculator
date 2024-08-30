let currentInput = "";
let previousInput = "";
let operation = null;

document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.getAttribute("data-number"));
  });
});

document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", () => {
    setOperation(button.getAttribute("data-operation"));
  });
});

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearDisplay);

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput === number;
  } else {
    currentInput += number;
  }

  updateDisplay();
}

function setOperation(op) {
  if (currentInput === "") return;

  operation = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "add":
      result = prev + current;
      break;
    case "minus":
      result = prev - current;
      break;
    case "multiply":
      result = prev * current;
      break;
    case "divide":
      if (current === 0) {
        alert("0으로 나눌 수 없습니다.");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result;
  operation = null;
  previousInput = "";
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").textContent = currentInput || 0;
}
