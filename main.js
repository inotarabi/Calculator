const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let firstNumber;
let secondNumber;
let operator;

deleteButton.addEventListener("click", () => {
    displayContent = display.textContent;
    display.textContent = displayContent.slice(0, -1);
});

clearButton.addEventListener("click", () => {
    display.textContent = "";
});

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        display.textContent += value;
    });
});

function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
        add(firstNumber, secondNumber);
    } else if (operator == "-") {
        subtract(firstNumber, secondNumber);
    } else if (operator == "x") {
        multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        divide(firstNumber, secondNumber);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
