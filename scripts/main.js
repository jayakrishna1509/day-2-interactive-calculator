// Calculator State Variables
let currentOperand = "0";
let previousOperand = "";
let operator = null;
let readyToReset = false;

const currentEle = document.querySelector(".current-operand");
const previousEle = document.querySelector(".previous-operand");
const buttons = document.querySelectorAll(".buttons button");

// Operators Logic
const ops = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

// Functions

// Update the display Trigger Animation
function updateDisplay(highlight = false) {
  currentEle.textContent = currentOperand;
  previousEle.textContent = previousOperand;
  currentEle.classList.remove("display-update");
  void currentEle.offsetWidth;
  currentEle.classList.add("display-update");
  if (highlight) {
    currentEle.classList.add("result-highlight");
    setTimeout(() => currentEle.classList.remove("result-highlight"), 950);
  }
  console.log("[DOM Updated] Display:", currentOperand);
}

// Appends Number/Dot (arrow function) with Input Validation
const appendNumber = (val) => {
  if (readyToReset) {
    currentOperand = "";
    readyToReset = false;
  }
  if (val === "." && currentOperand.includes(".")) return;
  if (currentOperand === "0" && val !== ".") currentOperand = "";
  currentOperand += val;
  console.log(`[User Input] Number input: ${val}`);
  updateDisplay();
};

// Operator Button Logic (arrow function)
const chooseOperator = (op) => {
  if (operator && currentOperand !== "") compute();
  operator = op;
  previousOperand = `${currentOperand} ${ops[op] || op}`;
  currentOperand = "";
  updateDisplay();
};

// Main Calculation (Normal / Switch function)
function compute() {
  let prev = parseFloat(previousOperand);
  let curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;
  let result;
  switch (operator) {
    case "add":
      result = prev + curr;
      break;
    case "subtract":
      result = prev - curr;
      break;
    case "multiply":
      result = prev * curr;
      break;
    case "divide":
      result = curr !== 0 ? prev / curr : "NaN";
      break;
    default:
      return;
  }
  console.log(`[User Input] Number 1: ${prev}, Number 2: ${curr}`);
  previousOperand = `${prev} ${ops[operator]} ${curr} =`;
  currentOperand = result.toString();
  console.log(`[Operation] ${prev} ${ops[operator]} ${curr} = ${result}`);
  animateDisplay();
  readyToReset = true;
  updateDisplay(true);
}

// IIFE for Percent Calculation Logic
(function setupPercentButton() {
  document
    .querySelector('[data-action="percent"]')
    .addEventListener("click", function () {
      if (currentOperand !== "0" && currentOperand !== "") {
        currentOperand = (parseFloat(currentOperand) / 100).toString();
        animateDisplay();
        updateDisplay();
      }
    });
})();

// Animate Display Result Highlight
function animateDisplay() {
  currentEle.classList.remove("result-highlight");
  void currentEle.offsetWidth;
  currentEle.classList.add("result-highlight");
  setTimeout(() => currentEle.classList.remove("result-highlight"), 950);
  console.log("[Animation Triggered] Keyframe effect on result box");
}

// Event Listeners and Animations for Buttons
buttons.forEach((btn) => {
  if (btn.classList.contains("number")) {
    btn.addEventListener("click", () => {
      btn.classList.add("number-pressed");
      setTimeout(() => btn.classList.remove("number-pressed"), 170);
      appendNumber(btn.textContent.trim());
    });
  } else {
    btn.addEventListener("click", () => {
      btn.classList.add("operator-pressed");
      setTimeout(() => btn.classList.remove("operator-pressed"), 210);
      const action = btn.dataset.action;
      switch (action) {
        case "clear":
          if (!bomClearConfirm()) return;
          break;
        case "delete":
          currentOperand = currentOperand.slice(0, -1) || "0";
          updateDisplay();
          break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
          chooseOperator(action);
          break;
        case "calculate":
          compute();
          break;
      }
    });
  }
});

// BOM Confirmation for Clear/Reset
function bomClearConfirm() {
  const conf = confirm("[BOM Alert] Confirm to clear result?");
  if (conf) {
    clearAll();
    return true;
  }
  return false;
}
function clearAll() {
  currentOperand = "0";
  previousOperand = "";
  operator = null;
  readyToReset = false;
  updateDisplay();
  console.log("[BOM Confirmed] Display cleared");
}

// Currying and Hoisting Demos

// Hoisting Demo

function hoistingDemo() {
  // Function Hoisting bedfore declaration
  hoisted();

  function hoisted() {
    console.log("[Hoisting Demo] Function executed before declaration");
    try {
      console.log(tdzVar);
      let tdzVar = 42;
    } catch (e) {}
  }
}
document.getElementById("hoisting-demo").onclick = hoistingDemo;

// Currying Demo
function curryGreet(greeting) {
  return function (name) {
    return `${greeting} ${name}! Welcome Back!`;
  };
}
const helloJohn = curryGreet("Hello")("John");
function curryingDemo() {
  (function () {
    console.log("[Currying Demo]", helloJohn);
    alert(`[Currying Demo]\n${helloJohn}`);
  })();
}
document.getElementById("currying-demo").onclick = curryingDemo;

// Greeting Alert
function showGreeting() {
  setTimeout(() => alert(helloJohn), 100);
}

// Initial Display Update
updateDisplay();

// JS Runtime Log
console.log("[JS Runtime] Script Loaded");
