let num1 = "";
let operator = "";
let num2 = "";
let isCalculated = false;

const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operators");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
const decimalBtn = document.querySelector("#decimal");
const deleteBtn = document.querySelector("#delete");
const numbers = document.querySelectorAll(".number");

display.textContent = "0";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

function operate(op, a, b) {
  const n1 = Number(a);
  const n2 = Number(b);

  let result;

  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = subtract(n1, n2);
      break;
    case "x":
      result = multiply(n1, n2);
      break;
    case "÷":
      result = divide(n1, n2);
      break;
    default:
      return "Error";
  }

  if (result === "Error") return result;

  return Math.round(result * 1000000) / 1000000;
}

function updateDisplay(value) {
  display.textContent = value || "0";
}

function handleNumber(value) {
  if (isCalculated) {
    num1 = "";
    operator = "";
    num2 = "";
    isCalculated = false;
  }

  if (operator === "") {
    num1 += value;
    updateDisplay(num1);
  } else {
    num2 += value;
    updateDisplay(num2);
  }
}

function handleOperator(op) {
  if (num1 === "") return;

  if (operator !== "" && num2 !== "") {
    const result = operate(operator, num1, num2);

    if (result === "Error") {
      updateDisplay("Error");
      resetAll();
      return;
    }

    num1 = String(result);
    num2 = "";
    updateDisplay(num1);
  }

  operator = op;
  isCalculated = false;
}

function handleEqual() {
  if (num1 === "" || operator === "" || num2 === "") return;

  const result = operate(operator, num1, num2);

  if (result === "Error") {
    updateDisplay("Error");
    resetAll();
    return;
  }

  num1 = String(result);
  operator = "";
  num2 = "";
  isCalculated = true;
  updateDisplay(num1);
}

function handleClear() {
  resetAll();
  updateDisplay("0");
}

function handleDelete() {
  if (isCalculated) return;

  if (operator === "") {
    num1 = num1.slice(0, -1);
    updateDisplay(num1);
  } else {
    num2 = num2.slice(0, -1);
    updateDisplay(num2);
  }
}

function handleDecimal() {
  if (operator === "") {
    if (!num1.includes(".")) {
      num1 = num1 === "" ? "0." : num1 + ".";
      updateDisplay(num1);
    }
  } else {
    if (!num2.includes(".")) {
      num2 = num2 === "" ? "0." : num2 + ".";
      updateDisplay(num2);
    }
  }
}

function resetAll() {
  num1 = "";
  operator = "";
  num2 = "";
  isCalculated = false;
}

numbers.forEach((btn) =>
  btn.addEventListener("click", () => handleNumber(btn.textContent)),
);

operators.forEach((btn) =>
  btn.addEventListener("click", () => handleOperator(btn.textContent)),
);

equalBtn.addEventListener("click", handleEqual);
clearBtn.addEventListener("click", handleClear);
deleteBtn.addEventListener("click", handleDelete);
decimalBtn.addEventListener("click", handleDecimal);

//Keyboard

document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    handleNumber(e.key);
  }

  if (e.key === ".") handleDecimal();

  if (e.key === "+" || e.key === "-") {
    handleOperator(e.key);
  }

  if (e.key === "*") handleOperator("x");
  if (e.key === "/") handleOperator("÷");

  if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    handleEqual();
  }

  if (e.key === "Backspace") handleDelete();
  if (e.key === "Escape") handleClear();
});
