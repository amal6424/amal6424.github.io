const product_name = document.querySelector("#product_name");
const product_image = document.querySelector('#image');

const add_to_cart_btn = document.querySelector("#add_to_cart_btn");


function main(){
    document.onreadystatechange=()=>{
        if(document.readyState == "complete"){
            const p_name = localStorage.getItem("product_name");
            const p_price = localStorage.getItem("product_price");
            const p_url = localStorage.getItem("product_image");
            product_name.innerHTML = `Product name: ${p_name} <br>price: ${p_price}$`
            product_image.src = `../${p_url}`
            let obj = {name:p_name,url:p_url};
            add_to_cart_btn.addEventListener("click", ()=>{
                let users = JSON.parse(localStorage.getItem("user_array"));
                users[localStorage.getItem("user_name")].push(obj);
                localStorage.setItem("user_array", JSON.stringify(users));
            });
        }
    };
}
main();