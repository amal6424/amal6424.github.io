const OPERATION_ADD = 1;
const OPERATION_SUB = 2;
const OPERATION_MUL = 3;
const OPERATION_DIV = 4;
const OPERATION_DEF = 0;

const display = document.querySelector("#display");
const leftOperandDisplay = document.querySelector("#leftOperandDisplay");
const rightOperandDisplay = document.querySelector("#rightOperandDisplay");
const operatorSignDisplay = document.querySelector("#operatorSign");
const equalsSignDisplay = document.querySelector("#equalsSign");

const acButton = document.querySelector("#ac");
const backspaceButton = document.querySelector("#backspaceButton");

const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const divButton = document.querySelector("#div");
const mulButton = document.querySelector("#mul");
const decimalButton = document.querySelector("#decimal");

const numberButtons = [document.querySelector("#zero"),document.querySelector("#one"),document.querySelector("#two"),document.querySelector("#three"),document.querySelector("#four"),document.querySelector("#five"),document.querySelector("#six"),document.querySelector("#seven"),document.querySelector("#eight"),document.querySelector("#nine")];

const equalsButton = document.querySelector("#equals");

let currentOperation = OPERATION_DEF;

let leftOperand = '';
let rightOperand = 0;

let equalsPressed = false;


main();
function main(){
    acButton.addEventListener("click", allClear);
    backspaceButton.addEventListener("click", backspace);

    addButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_ADD)});
    subButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_SUB)});
    divButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_DIV)});
    mulButton.addEventListener("click", ()=>{ChangeOperation(OPERATION_MUL)});

    equalsButton.addEventListener("click", equals);
    decimalButton.addEventListener("click", addDecimal);

    for(let i=0;i<10;i++){
        numberButtons[i].addEventListener("click", ()=>{NumberKeyPress(i)});
    }
    updateDisplay();
}
function updateDisplay(){
    leftOperandDisplay.innerHTML = leftOperand;
    rightOperandDisplay.innerHTML = rightOperand;
    switch(currentOperation){
        case OPERATION_ADD:
            operatorSignDisplay.innerHTML = '+';
            break;
        case OPERATION_SUB:
            operatorSignDisplay.innerHTML = '-';
            break;
        case OPERATION_DIV:
            operatorSignDisplay.innerHTML = '/';
            break;
        case OPERATION_MUL:
            operatorSignDisplay.innerHTML = 'x';
            break;
        case OPERATION_DEF:
            operatorSignDisplay.innerHTML = '';
            break;
    }
    if(equalsPressed) equalsSignDisplay.innerHTML = '=';
    else equalsSignDisplay.innerHTML = '';
}
function allClear(){
    rightOperand = 0;
    leftOperand = '';
    currentOperation = OPERATION_DEF;
    equalsPressed = false;
    updateDisplay();
}
function backspace(){
    if(rightOperand.toString().length>0){
        rightOperand = rightOperand.toString().substring(0, rightOperand.toString().length - 1);
    }
    if(rightOperand.toString().length==0){
        rightOperand = 0;
    }
    updateDisplay();
}
function ChangeOperation(type){
    calculate(type);
    currentOperation = type;
    updateDisplay();
}
function addDecimal(){
    if(rightOperand.toString().indexOf(".") == -1)
        NumberKeyPress(".");
}
function NumberKeyPress(num){
    if(rightOperand.toString().length == 12)return;
    if(rightOperand == 0 && num != "." && rightOperand.toString().length == 1) rightOperand = '';
    rightOperand = rightOperand + "" + num;
    updateDisplay();
}
function equals(){
    calculate(currentOperation);
    rightOperand = leftOperand;
    leftOperand = ''
    currentOperation = OPERATION_DEF;
    equalsPressed = true;
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