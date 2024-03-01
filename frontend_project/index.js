const input = document.querySelector("#user_name");
const login_btn = document.querySelector("#login_btn");

function clear_local_storage(){
    localStorage.clear();
}
function main(){
    //clear_local_storage();
    login_btn.addEventListener("click", ()=>{
        const user_name = input.value;
        localStorage.setItem("user_name", user_name);
        
        if(localStorage.getItem("user_array") == null){
            localStorage.setItem("user_array", `{}`);
        }
        const local_users = localStorage.getItem("user_array");
        const json_local_users = JSON.parse(local_users);
        if(json_local_users[user_name] == undefined){
            json_local_users[user_name] = [];
            localStorage.setItem("user_array", JSON.stringify(json_local_users));
        }
    });
}
main();
//clear_local_storage();