const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const am = document.querySelector("#am");

main();
function main(){
    setInterval(updateTime, 1000);
}
function updateTime(){
    let clock = new Date();
    let hour = clock.getHours();
    let seconds = clock.getSeconds();
    let minutes = clock.getMinutes();
    let aa = "am";
    if(hour>12) {aa = "pm";hour = hour - 12;}
    if(hour == 0) hour = 12;
    if(hour < 10) hour = "0" + hour;
    if(seconds < 10) seconds = "0" + seconds;
    if(minutes < 10) minutes = "0" + minutes;
    hr.innerHTML = hour;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    am.innerHTML = aa ;
}