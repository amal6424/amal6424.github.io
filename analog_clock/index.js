//let canvas = new HTMLCanvasElement();
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
main();
function main(){
    let cx = canvas.width/2;
    let cy = canvas.height/2;
    context.fillStyle = "#ff0000";
    context.strokeStyle = "#ff0000";
    context.fillRect(cx,cy, 10,100);
}