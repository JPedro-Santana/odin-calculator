let firstOperand = '';
let operator = '';
let secondOperand = '';

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
    return a / b;
}

/*Create a new function operate that takes an operator and two numbers
 and then calls one of the above functions on the numbers.*/
function operate(operator, firstOperand, secondOperand){
    if (operator == '+'){
        add(firstOperand,secondOperand)
    }
    else if (operator == '-'){
        subtract(firstOperand,secondOperand)
    }

}

/*  Create the functions that update one of your number variables when the calculator’s digit buttons are clicked. 
Your calculator’s display should also update to reflect the value of that number variable.
*/ 
let display = document.querySelector('#display')

function updateValue(value){


}


function clearDisplay(){
    firstOperand = '';
    operator = '';
    secondOperand = '';
    display.textContent = '0';
}
