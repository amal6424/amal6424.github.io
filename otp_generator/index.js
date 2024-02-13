const otp_view = document.querySelector("#otp_view");
const otp_view2 = document.querySelector("#otp_view2");
const check_button = document.querySelector("#button");
const input = document.querySelector("#input");
const warn = document.querySelector("#warn");

const otpString = "Here is your OTP: ";
let otpp = "";

main();
function main(){
    check_button.addEventListener("click",()=>{
        if(input.value == otpp)
            warn.innerHTML = "Your captcha is correct";
        else
            warn.innerHTML = "You entered incorrect Captcha";
    });
    generateOTP();
    setInterval(generateOTP, 10000);
}
function generateOTP(){
    let otp = Math.floor(1000+Math.random()*10000)%10000;
    otp = otp + "";
    otp_view.innerHTML = otpString + otp;
    let o = ""
    for(let i=0;i<4;i++){
        let randomNumber = Math.floor(Math.random()*10)
        let number = 48+Math.floor(Math.random()*9  );
        let charracter = String.fromCharCode(65 + randomNumber);
        o+= (Math.floor(Math.random()*10)%2==0)?number:charracter;

    }
    otpp = o
    otp_view.innerHTML = o;
}