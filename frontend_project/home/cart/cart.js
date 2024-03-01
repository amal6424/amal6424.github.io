const container = document.querySelector("#container");
const cart_array = [];
function create_item(obj, index){

    const item_container = document.createElement("div");
    const item = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const remove_btn = document.createElement("button");

    h2.innerHTML = obj.name;
    img.src = "../"+obj.url;

    item_container.classList.add("item_container");
    item.classList.add("item");
    img.classList.add("image");
    remove_btn.classList.add("remove_btn");
    remove_btn.setAttribute("index", index + "")

    item.appendChild(img);
    item.appendChild(h2);
    item.appendChild(remove_btn);
    remove_btn.innerHTML = "X"
    item_container.appendChild(item);

    remove_btn.onclick = ()=>{
        container.removeChild(item_container);
        cart_array.splice(index, 1);
        const json_cart = JSON.parse(localStorage.getItem("user_array"));
        json_cart[localStorage.getItem("user_name")] = cart_array;
        
        localStorage.setItem("user_array", JSON.stringify(json_cart));
    }
    container.appendChild(item_container);
}
function main(){
    document.onreadystatechange = ()=>{
        if(document.readyState == "complete"){
            const json_cart = JSON.parse(localStorage.getItem("user_array"));
            const json_user = json_cart[localStorage.getItem("user_name")];
            console.log("cart: "+ JSON.parse(localStorage.getItem("user_array")));
            for(let i=0;i<json_user.length;i++){
                create_item(json_user[i], i);
                cart_array.push(json_user[i]);
            }
        }
    }
}
main();