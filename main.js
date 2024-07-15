const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.querySelector("#decimal");
const allButtons = document.querySelectorAll(".key");

let allOperators = ["x", "/", "+", "-"];
let inputNumbersArray = [];
let inputNumbersArrayNew = [];
let firstNumber;
let secondNumber;
let operator;

deleteButton.addEventListener("click", () => {
    displayContent = display.textContent;
    display.textContent = displayContent.slice(0, -1);
    inputNumbersArray = inputNumbersArray.slice(0, -1);
});

clearButton.addEventListener("click", () => {
    display.textContent = "";
    inputNumbersArray = [];
});

decimalButton.addEventListener("click", () => {
    decimal = ".";
    isThereADecimal = false;
    displayContent = display.textContent.toString();
    for (eachDigit = 0; eachDigit <= displayContent.length - 1; eachDigit++) {
        currentDigit = displayContent[eachDigit];
        if (currentDigit == decimal) {
            isThereADecimal = true;
        }
    }
    if (isThereADecimal == false) {
        display.textContent = displayContent + ".";
    }
});

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        display.textContent += value;
    });
});

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        inputNumbersArray.push(value);
        // console.log(inputNumbersArray);
        createNewNumberArray(inputNumbersArray);
    });
});

function createNewNumberArray(oldNumberArray) {
    let indexWhereOperatorExists;
    let whichOperator;

    for (index = 0; index <= oldNumberArray.length - 1; index++) {
        for (
            operatorArrayIndex = 0;
            operatorArrayIndex <= 3;
            operatorArrayIndex++
        ) {
            if (oldNumberArray[index] == allOperators[operatorArrayIndex]) {
                indexWhereOperatorExists = index;
                whichOperator = allOperators[operatorArrayIndex];
                console.log(indexWhereOperatorExists);
                console.log(whichOperator);
            }
        }
    }

    inputNumbersArrayNew[0] = inputNumbersArrayNew.push(
        oldNumberArray.slice(0, whichOperator)
    );
    console.log(inputNumbersArrayNew);
}

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
