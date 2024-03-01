const products_array = [
    {name:"laptop",price:"1000",url:"../images/shopping.webp"},
    {name:"fridge",price:"1221",url:"../images/fridge.webp"},
    {name:"washingmaching",price:"12212",url:"../images/washing_machine.webp"},
    {name:"tv",price:"24323",url:"../images/tv.webp"},
    {name:"macbook",price:"12",url:"../images/macbook.png"},
    {name:"iphone",price:"535",url:"../images/iphone.webp"},
    {name:"car",price:"64654",url:"../images/car.png"},
    {name:"Lipstick",price:"999",url:"../images/lipstick.png"},
    {name:"bike", price:"12000",url:"../images/bike.png"},
    {name:"rtx 4090", price:"94569", url:"../images/rtx.png"},
    {name:"GTA-5",price:"5555", url:"../images/gta.jpeg"},
    {name:"Camera", price:"100", url:"../images/camera.png"}
];


const user_name = document.querySelector("#user_name");

const product_container = document.querySelector("#products_container");
function create_product(productName, price,product_image){
    const a = document.createElement("a");
    const innerHtml = `
        <div class="item">
            <div class="img"></div>
            <div class="name_price">
               <span class="name">${productName}<br> <span class="price">${price}</span>$</span>
            </div>
        </div>`;
    a.innerHTML = innerHtml;
    a.getElementsByClassName("img").item(0).
    style.backgroundImage=`url('${product_image}')`;
    a.href = "product_info/product.html";
    a.onclick=()=>{
        localStorage.setItem("product_name", productName);
        localStorage.setItem("product_price", price);
        localStorage.setItem("product_image", product_image);
    }
    product_container.appendChild(a);
}
function main(){
    document.onreadystatechange=()=>{
        if(document.readyState == "complete"){
            user_name.innerHTML = localStorage.getItem("user_name");
            for(let i=0;i<products_array.length;i++){
                create_product(products_array[i].name , products_array[i].price, products_array[i].url);
            }
            if(localStorage.getItem("json_cart")==null){
                console.log("cart set");
                localStorage.setItem("json_cart", "[]");
            }
        }
    };
}
main();