const previousoperationText = document.querySelector("#previous-operation");
const currentoperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator {
constructor (previousoperationText, currentoperationText) {
  this.previousoperationText = previousoperationText
  this.currentoperationText = currentoperationText //número que está impresso na tela
  this.currentoperation = "" //Está digitando agora
}
//Recebe um dígito ao iniciar a calculadora 
 addDigit(digit) {

  this.currentoperation = digit //Quando a pessoa clica no digito qual foi ele
  this.updateScreen(); //Responsável por atualizar a tela
 }
}


processoperation(operation) {
  let operationValue;
  const previous = +this.previousoperationText.innerText.split(" ")[0];
  const current = +this.currentoperationText.innerText; //Conversão numérica do valor anterior

  switch (operation) {
    case "+":
      operationValue = previous + current
      this.updateScreen(operationValue, operation, current, previous);
     break;
    default:
     return;
  }



  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
       previous = null
    ) {
      if(operationValue === null) {
        this.currentoperationText.innerText += this.currentoperation;
      } else {
          //checa se o valor é 0, se for adiciona apenas o valor atual
         if (previous === 0) {
                operationValue = current
           }
           //adiciona o valor atual ao anterior
           this.previousoperationText.innerText = `${operationValue} ${operation}`
           this.currentoperationText.innerText = ""; //colocar os números da minha operação atual dentro do texto atual
         }
      }


}

const calc = new calculator(previousoperationText, currentoperationText);

buttons.forEach((btn)=> {
  btn.addEventListener("click", (e)=> {
    const value = e.target.innerText;
    if (+value >= 0 || value == ".") {
      calc.addDigit(value);
    } else {
      console.log("op: " + value);
    }

    

  });
});

/*const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const squarerootBtn = document.getElementById('btn-squareroot');
const powerBtn = document.getElementById('btn-power');



const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}*/