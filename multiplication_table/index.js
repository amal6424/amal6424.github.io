const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

const table1 = document.querySelector("#table1");
const table2 = document.querySelector("#table2");

main();
function main(){
    button1.addEventListener("click", ()=>{submitPress(1);});
    button2.addEventListener("click", ()=>{submitPress(2);});
}
function submitPress(type){
    switch(type){
        case 1:
            createTable(input1, table1);
            break;
        case 2:
            createTable(input2, table2);
            break;
    }
}
function createTable(inputElement, tableElement){
    let num = inputElement.value;
    if(num == ''){
        tableElement.style.color = "red";
        tableElement.innerHTML = "please enter valid number";
    }else if(num == 0){
        tableElement.style.color = "red";
        tableElement.innerHTML = "please number must be greater than 0 and less than 1000";
    }else if(num > 999){
        tableElement.style.color = "red";
        tableElement.innerHTML = "please number must be less than 1000";
    }else{
        tableElement.style.color = "black";
        let str = "<br>";
        for(let i=1;i<11;i++){
            str += (num+" x "+i+" = " + (num*i) + "<br><br>");
        }
        tableElement.innerHTML = str;
    }
}