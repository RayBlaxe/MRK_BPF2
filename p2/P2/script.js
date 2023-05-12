const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');
let operand1 = '';
let operand2 = '';
let operator = '';

function clear() {
    operand1 = '';
    operand2 = '';
    operator = '';
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value+= number;
}

function appendDecimal() {
    if (display.value.includes('.')) {
        display.value += '.';
    }
}
function setOperator(op){
    operand1 = display.value;
    operator = op;
    operand2 = '';
    display.value = '';
}
function calculate(){
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    switch(operator){
        case '+':
            display.value = num1 + num2;
            break;
        case '-':
            display.value = num1 - num2;
            break;
        case '*':
            display.value = num1 * num2;
            break;
        case '/':
            display.value = num1 / num2;
            break;
    }

    operand1 = display.value;
    operand2 = '';
    operator = '';
}


clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);
divideButton.addEventListener('click', () => setOperator('/'));
multiplyButton.addEventListener('click', () => setOperator('*'));
subtractButton.addEventListener('click', () => setOperator('-'));
addButton.addEventListener('click', () => setOperator('+'));
decimalButton.addEventListener('click', appendDecimal);

for (let i = 0; i < 10; i++) {
    const numberButton= document.getElementById(i.toString());
    numberButton.addEventListener('click', () => appendNumber(i));
}
equalsButton.addEventListener('click', ()=>{
    operand2 = display.value;
    calculate();
});