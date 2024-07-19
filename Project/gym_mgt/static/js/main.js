import {cart,addToCart , saveToStorage} from './cart.js';
import {shoeProducts,tShirtProducts,trackPantProducts,supplementProducts,equipmentProducts} from './products.js';
import {renderPaymentSummary,addProductToCart} from './checkout.js';

const wrapper = document.querySelector(".slider-wrapper");
const menuItems=document.querySelectorAll(".menu-item");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
       wrapper.style.transform= `translate(${-100 * index}vw)`;
    });
})



let shoeProductHtml='';
let tShirtProductHtml='';
let trackPantProductHtml='';
let dumbbellsProductHtml='';
let equipmentProductHtml='';


shoeProducts.forEach((shoeProduct)=> {
    shoeProductHtml+=addProductInWeb(shoeProduct);
    document.querySelector('.shoe-container').innerHTML=shoeProductHtml;
});

tShirtProducts.forEach((tShirtProduct)=> {
    tShirtProductHtml+=addProductInWeb(tShirtProduct);
    document.querySelector('.t-shirt-container').innerHTML=tShirtProductHtml;
});

trackPantProducts.forEach((trackPantProduct)=>{
    trackPantProductHtml+=addProductInWeb(trackPantProduct);
    document.querySelector('.trackpant-container').innerHTML=trackPantProductHtml;
});

supplementProducts.forEach((dumbbellsProduct)=>{
    dumbbellsProductHtml+=addProductInWeb(dumbbellsProduct);
    document.querySelector('.supplement-container').innerHTML=dumbbellsProductHtml;
});

equipmentProducts.forEach((equipmentProduct)=>{
    equipmentProductHtml+=addProductInWeb(equipmentProduct);
    document.querySelector('.equipment-container').innerHTML=equipmentProductHtml;
});


var result= '';
function addProductInWeb(Product){
    result=`<div class="product-item">
                <div class="img-container">
                    <img src="${Product.image}" alt="" class="img-item">
                </div>
                <div class="product-desc">
                    <p class="product-title limit-text-to-1-lines">${Product.name}</p>
                    <p class="product-price">₹${Product.price}</p>
                    <button class="add-to-cart-button"
                    data-product-id="${Product.id}">ADD TO CART</button>
                </div>
            </div>`
    return result;
}


let cartquantity= JSON.parse(localStorage.getItem('cartQuantity'));
console.log(cartquantity);
document.querySelector('.cart-quantity').innerHTML=cartquantity;


export function updateCartQuantity(){
    let cartQuantity=0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.cart-quantity').innerHTML=cartQuantity;
    saveCartQuantity(cartQuantity);
}

document.querySelectorAll('.add-to-cart-button').forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId = (button.dataset.productId);
        addToCart(productId);
        addProductToCart();
        updateCartQuantity();
    });
});

function saveCartQuantity(cartQuantity){
    localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity));
    console.log(cartQuantity);
}



//cart

let cartIcon=document.querySelector('#cart-image');
let cartDet=document.querySelector('.cart');
let cartClose=document.querySelector('#close-cart');

cartIcon.onclick = () =>{
    cartDet.classList.add("active");
};

cartClose.onclick = () =>{
    cartDet.classList.remove("active");
};

console.log(document.readyState);
if(document.readyState == "loading" || document.readyState == "interactive"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}

function ready(){
    var quantityInputs = document.querySelectorAll('.incart-quantity');
    for (var i=0; i< quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
}

// function removeCartItem(event){
//     var buttonClicked = event.target;
    
//     console.log(buttonClicked);
//     buttonClicked.parentElement.remove();
//     saveToStorage();
//     uppdateTotal();
// }

function quantityChanged(event){
    var input= event.target;
    if(isNaN(input.value) || input.value <=0) {
        input.value = 1
    }    
    else{
        renderPaymentSummary();
    }
};

// Define a function to handle checkout process


// function uppdateTotal(){
//     var cartContent= document.getElementsByClassName('cart-content')[0];
//     var cartBoxes= document.getElementsByClassName('cart-box');
//     var total= 0;
//     for (var i=0; i< cartBoxes.length; i++){
//         console(cartBoxes);
//         var cartBox = cartBoxes[i];
//         var priceElement = cartBox.getElementsByClassName('cart-product-price')[0];
//         var quantityElement = cartBox.getElementsByClassName('incart-quantity')[0];
//         var price = parseFloat(priceElement.innerText.replace("₹",""));
//         var quantity= quantityElement.value;
//         total+=(price*quantity);

//         total=Math.round(total*100)/100;

//         document.getElementsByClassName('total-price')[0].innerText="₹"+total;
//     }
// }

// function updateTotal(){
//     var cartBoxes = document.getElementsByClassName('cart-box')[0];
//     var total = 0;
//     cart.forEach((cartItem) => {
//         var = cartItem.
//     })
// }
