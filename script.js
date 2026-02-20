let currentInput = '0';
let previousInput = '';
let operator = null;

const currentDisplay = document.getElementById('current-operand');
const previousDisplay = document.getElementById('previous-operand');

function updateDisplay() {
    currentDisplay.innerText = currentInput;
    previousDisplay.innerText = operator ? `${previousInput} ${operator}` : '';
    
    // Auto-scale text size for long numbers
    if (currentInput.length > 6) {
        currentDisplay.style.fontSize = '3rem';
    } else {
        currentDisplay.style.fontSize = '4.5rem';
    }
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '0' && previousInput === '') return;
    if (operator !== null) calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = curr === 0 ? "Error" : prev / curr; break;
        default: return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function appendPercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}