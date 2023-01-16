const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[date-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand] ");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

   formatDisplayNumber(number) {
     const StringNumber = number.toString();

    const integerDigits = parseFloat(StringNumber.split(".")[0]);
    const decimalDigits = StringNumber.split(".")[1];

    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits: 0,
  });
}
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else { 
  return integerDisplay;
  }
}

  calculate() {
    let result;

    const _previousOperand = parseFloat(this.previousOperand)
    const _currentOperand = parseFloat(this.currentOperand)

    if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;

    switch (this.operation) {
       case "+":
          result = _previousOperand + _currentOperand;
          break;
       case "-":
          result = _previousOperand - _currentOperand
          break;
       case "÷":
          result = _previousOperand / _currentOperand
          break;
       case "x":
          result = _previousOperand * _currentOperand
          break;
       case "√":
          result = Math.sqrt(_previousOperand)
          break;
       case "^":
          result = _previousOperand ** _currentOperand
          break;
          default:
          return;
    }
    
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";

  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;

    if (this.previousOperand != "") {
      this.calculate();
    }

    this.operation = operation;

    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  appendNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return;

    this.currentOperand = `${this.currentOperand}${number.toString()}`;

  }



  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(this.previousOperand)}${this.operation || ""}`;
    this.currentOperandTextElement.innerText = this.formatDisplayNumber(this.currentOperand);
  }
 }

 const calculator = new Calculator(
   previousOperandTextElement,
   currentOperandTextElement
   );

   for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
      calculator.appendNumber(numberButton.innerText);
      calculator.updateDisplay();
    });
   }

   for (const operationButton of operationButtons) {
      operationButton.addEventListener('click', () => {
      calculator.chooseOperation(operationButton.innerText);
      calculator.updateDisplay();
    })
  }

   allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
   })
   equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
   })


/*const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const squarerootBtn = document.getElementById('btn-squareroot');
const powerBtn = document.getElementById('btn-power');
//Botões adicionados 
const scoreBtn = document.getElementById('btn-score');
const cleanBtn = document.getElementById('btn-clean');
const sevenBtn = document.getElementById('btn-seven');
const eightBtn = document.getElementById('btn-eight');
const nineBtn = document.getElementById('btn-nine');
const fourBtn = document.getElementById('btn-four');
const fiveBtn = document.getElementById('btn-five');
const sixBtn = document.getElementById('btn-six');
const oneBtn = document.getElementById('btn-one');
const twoBtn = document.getElementById('btn-two');
const threeBtn = document.getElementById('btn-three');  
const zeroBtn = document.getElementById('btn-zero');
const equalBtn = document.getElementById('btn-equal');






const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

//const calcActionsOutput = document.getElementById('calc-actions'); //Inclusa(teste)

function outputResult(result, text, actions) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
  calcActionsOutput.textContent = actions;
}*/