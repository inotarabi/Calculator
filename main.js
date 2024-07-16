const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.querySelector("#decimal");
const allButtons = document.querySelectorAll(".key");
const equalButton = document.querySelector("#equals");
const allOperatorButtons = document.querySelectorAll(".operator");

let allOperators = ["x", "/", "+", "-"];
let inputNumbersArray = [];
let inputNumbersArrayNew = [];
let firstNumber = "";
let secondNumber = "";
let operator;
let isEqualPressed = false;

equalButton.addEventListener("click", () => {
    isEqualPressed = true;
    console.log(isEqualPressed);
});

deleteButton.addEventListener("click", () => {
    displayContent = display.textContent;
    display.textContent = displayContent.slice(0, -1);
    inputNumbersArray = inputNumbersArray.slice(0, -1);
});

clearButton.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    isEqualPressed = false;
    inputNumbersArray = [];
    inputNumbersArrayNew = [];
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
        console.log(inputNumbersArray);
        createNewNumberArray(inputNumbersArray);
    });
});

allOperatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = "";
    });
});

function createNewNumberArray(oldNumberArray) {
    let indexWhereOperatorExists;
    let whichOperator;

    for (let index = 0; index <= oldNumberArray.length - 1; index++) {
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

    if (isEqualPressed == true) {
        for (let index = 0; index < indexWhereOperatorExists; index++) {
            firstNumber += oldNumberArray[index].toString();
        }

        for (
            let index = indexWhereOperatorExists + 1;
            index < oldNumberArray.length - 1;
            index++
        ) {
            secondNumber += oldNumberArray[index].toString();
        }

        inputNumbersArrayNew.push(Number(firstNumber));
        inputNumbersArrayNew.push(whichOperator);
        inputNumbersArrayNew.push(Number(secondNumber));
        console.log(inputNumbersArrayNew);

        display.textContent = operate(
            inputNumbersArrayNew[0],
            inputNumbersArrayNew[2],
            inputNumbersArrayNew[1]
        );
    }
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "x") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
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
