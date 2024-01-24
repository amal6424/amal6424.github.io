const INCH_TO_CM = 1;
const CM_TO_INCH = 2;
const GRAM_TO_KG = 3;
const KELVIN_TO_CELCIOUS = 4;
const UNIT_TO_SQUARE = 5;

const headers = ["Inch to CM","CM to Inch","Gram to KG","Kelvin to Celcious","Unit to Square"];
const buttons = [document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3"),document.getElementById("b4"),document.getElementById("b5")];

let activeConverter = INCH_TO_CM;

const outputBox = document.getElementById("outputBox");
const inputBox = document.getElementById("inputBox");
const header = document.getElementById("header");

function Convert(){
    if(inputBox.value == ''){
        inputBox.value = 0;
    }
    if(activeConverter === INCH_TO_CM){
        outputBox.innerHTML = parseFloat(inputBox.value) * 2.54;
    }else if(activeConverter === CM_TO_INCH){
        outputBox.innerHTML = parseFloat(inputBox.value) / 2.54;
    }else if(activeConverter === GRAM_TO_KG){
        outputBox.innerHTML = parseFloat(inputBox.value) / 1000;
    }else if(activeConverter === KELVIN_TO_CELCIOUS){
        outputBox.innerHTML = parseFloat(inputBox.value) - 273.15;
    }else{
        let outVal = parseFloat(inputBox.value);
        outputBox.innerHTML = outVal * outVal;
    }
}
function ChangeConverter(type){
    let index = type - 1;
    header.innerHTML = headers[index];
    buttons[activeConverter - 1].style.backgroundColor = "aliceblue";
    buttons[index].style.backgroundColor = "greenyellow";
    activeConverter = type;
    Convert();
}