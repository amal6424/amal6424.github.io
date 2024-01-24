const OPERATION_ADD = 1;
const OPERATION_SUB = 2;
const OPERATION_MUL = 3;
const OPERATION_DIV = 4;
const OPERATION_DEF = 0;

const display = document.querySelector("#display");

const acButton = document.querySelector("#ac");

const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const divButton = document.querySelector("#div");
const mulButton = document.querySelector("#mul");

const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");

const equalsButton = document.querySelector("#equals");

let currentOperation = OPERATION_DEF;

let leftOperand = 0;
let rightOperand = 0;


main();
function main(){
    acButton.addEventListener("click", allClear);

    addButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_ADD)});
    subButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_SUB)});
    divButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_DIV)});
    mulButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_MUL)});

    equalsButton.addEventListener("click", equals);

    oneButton.addEventListener("click", ()=>{NumberKeyPress(1)});
    twoButton.addEventListener("click", ()=>{NumberKeyPress(2)});
    threeButton.addEventListener("click", ()=>{NumberKeyPress(3)});
    fourButton.addEventListener("click", ()=>{NumberKeyPress(4)});
    fiveButton.addEventListener("click", ()=>{NumberKeyPress(5)});
    sixButton.addEventListener("click", ()=>{NumberKeyPress(6)});
    sevenButton.addEventListener("click", ()=>{NumberKeyPress(7)});
    eightButton.addEventListener("click", ()=>{NumberKeyPress(8)});
    nineButton.addEventListener("click", ()=>{NumberKeyPress(9)});
    zeroButton.addEventListener("click", ()=>{NumberKeyPress(0)});
    updateDisplay();
}
function updateDisplay(){
    display.innerHTML = rightOperand;
}
function allClear(){
    rightOperand = 0;
    leftOperand = 0;
    currentOperation = OPERATION_DEF;
    updateDisplay();
}
function ChangeOperation(type){
    calculate(type);
    currentOperation = type;
    updateDisplay();
}
function NumberKeyPress(num){
    if(rightOperand == 0) rightOperand = '';
    rightOperand = rightOperand + "" + num;
    updateDisplay();
}
function equals(){
    calculate(currentOperation);
    rightOperand = leftOperand;
    leftOperand = ''
    currentOperation = OPERATION_DEF;
    updateDisplay();
}
function calculate(type){
    switch(currentOperation){
        case OPERATION_ADD:
            leftOperand = parseFloat(leftOperand) + parseFloat(rightOperand);
            rightOperand = 0;
            break;
        case OPERATION_SUB:
            leftOperand = parseFloat(leftOperand) - parseFloat(rightOperand);
            rightOperand = 0;
            break;
        case OPERATION_MUL:
            if(currentOperation == OPERATION_DEF && leftOperand == 0)
                leftOperand = rightOperand;
            else
                leftOperand = parseFloat(leftOperand) * parseFloat(rightOperand);
            rightOperand = 0;
            break;
        case OPERATION_DIV:
            leftOperand = parseFloat(leftOperand) / parseFloat(rightOperand);
            rightOperand = 0;
            break;
        case OPERATION_DEF:
            leftOperand = parseFloat(rightOperand);
            rightOperand = 0;
            break;
    }
}