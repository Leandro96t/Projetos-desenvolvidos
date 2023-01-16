const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
 return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult =  currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult =  currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
} 

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult =  currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult =  currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

function squareroot() {
    const enteredNumber = getUserNumberInput();
    const initialResult =  currentResult;
    currentResult = currentResult &radic, enteredNumber;
    createAndWriteOutput('√', initialResult, enteredNumber);
}

function power() {
    const enteredNumber = getUserNumberInput();
    const initialResult =  currentResult;
    currentResult = currentResult ^ enteredNumber;
    createAndWriteOutput('^', initialResult, enteredNumber);
}
 

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
squarerootBtn.addEventListener('click', squareroot);
powerBtn.addEventListener('click', power);

