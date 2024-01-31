const hr_hand = document.querySelector(".hr_hand");
const min_hand = document.querySelector(".min_hand");
const sec_hand = document.querySelector(".sec_hand");

main();
function main(){
    setInterval(updateTime, 1000);
    updateTime();
}
function updateTime(){
    const clock = new Date();
    let hour = clock.getHours();
    const min = clock.getMinutes();
    const sec = clock.getSeconds();
    const hour_deg_unit = 0.5*min;
    if(hour> 12) hour -= 12;
    const hr_deg = (360/12)*hour;
    const min_deg = (360/60)*min;
    const sec_deg = (360/60)*sec;
    hr_hand.style.transform = `rotate(${hr_deg+hour_deg_unit}deg)`;
    min_hand.style.transform = `rotate(${min_deg}deg)`;
    sec_hand.style.rotate = `${sec_deg}deg`;
}