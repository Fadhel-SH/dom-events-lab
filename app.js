/*-------------------------------- Constants --------------------------------*/
const DISPLAY = document.querySelector('.display');
const BUTTONS = document.querySelectorAll('.button');
const NUMBER_BUTTONS = document.querySelectorAll('.number');
const OPERATOR_BUTTONS = document.querySelectorAll('.operator');
const EQUALS_BUTTONS = document.querySelector('.equals');
const CLEAR_BUTTONS = document.querySelector('.operator.C');


/*-------------------------------- Variables --------------------------------*/
let firstNumber = null;
let secondNumber = null;
let currentOperation = null;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
NUMBER_BUTTONS.forEach((button) => {
 button.addEventListener('click', handleNumberButtonClick);   
});
OPERATOR_BUTTONS.forEach((button) => {
    button.addEventListener('click', handleOperatorButtonClick);   
});
EQUALS_BUTTONS.addEventListener('click', handleEqualsButtonClick);
CLEAR_BUTTONS.addEventListener('click', handleClearButtonClick);   

/*-------------------------------- Functions --------------------------------*/
function handleNumberButtonClick(event) {
    const number = event.target.textCpntent;
    if (firstNumber === null) {
        firstNumber = number;
    } else {
        secondNumber = (secondNumber || '') + number;
    }
    updateDisplay(firstNumber || secondNumber || '0');
    }
function handleOperatorButtonClick(event){
        const operator = event.target.textContent;
        if (firstNumber !== null && secondNumber !== null) {
            performOperation();
    }
    currentOperation = operator;
}
function handleEqualsButtonClick() {
    if (firstNumber !== null && secondNumber !== null && currentOperation !== null) {
        performOperation();
    }
}   
function handleClearButtonClick() {
    firstNumber = null;
    secondNumber = null;
    currentOperation = null;
    updateDisplay('0');
    }
    function performOperation() {
        let result;
        switch (currentOperation){
            case '+':
                result = Number(firstNumber) + Number(secondNumber);
                break;
                case '-':
                result = Number(firstNumber) - Number(secondNumber);
            break;
            case '*':
                result = Number(firstNumber) * Number(secondNumber);
                break;
                case '/':
                    result = Number(firstNumber) / Number(secondNumber);
                    break;
                    default:
                        result = '0';
                        break;
                        }
           
        firstNumber = result.toString();
        secondNumber = null;
        currentOperation = null;
        updateDisplay(firstNumber);
                    }
        function updateDisplay(value) {
            DISPLAY.textContent = value;
            }