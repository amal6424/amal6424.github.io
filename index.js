let display = document.getElementById("displayParagraph");
let displayResult = "0"

function clearDisplay(){
    displayResult = "0";
    display.innerHTML = displayResult
}
function numberKeyPress(number){
    if(display.innerHTML.length < 9){
        if(displayResult == 0){
            displayResult = number
        }else{
            displayResult = displayResult + "" + number
        }
        display.innerHTML = displayResult
    }
}