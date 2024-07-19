import {cart,removeFromCart,saveToStorage} from './cart.js';
import {products, getProduct} from './products.js';


let cartsummaryhtml= JSON.parse(localStorage.getItem('cartSummaryHtml'));
document.querySelector('.cart-content').innerHTML=cartsummaryhtml;
// console.log(cartsummaryhtml);

addProductToCart();
export function addProductToCart(){
    let cartSummaryHtml='';
    cart.forEach((cartItem) => {

        const productId = cartItem.productId;
    
        const matchingProduct= getProduct(productId);
    
    
        cartSummaryHtml += `
        <div class="cart-box cart-item-container-${matchingProduct.id}">
            <img src="${matchingProduct.image}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${matchingProduct.name}</div>
                <div class="cart-product-price">₹${matchingProduct.price}</div>
                <input type="number" value="${cartItem.quantity}" class="incart-quantity">
            </div>
            <i class='bx bxs-trash-alt cart-remove' style='color:red'  data-product-id="${matchingProduct.id}"></i>
        </div>
        `;
        // console.log(cartSummaryHtml);
        document.querySelector('.cart-content').innerHTML = cartSummaryHtml;
    });
    
    saveCartProducts(cartSummaryHtml);
    // console.log(cartSummaryHtml);

    document.querySelectorAll('.cart-remove').forEach((link)=> {
        link.addEventListener('click', ()=> {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            const container = document.querySelector(`.cart-item-container-${productId}`);
            // container.remove();
            cartSummaryHtml = cartSummaryHtml-container.remove();
            saveCartProducts(cartSummaryHtml);
            console.log(cartSummaryHtml);
            renderPaymentSummary();
            console.log(cart);
        }); 
    });
};

function saveCartProducts(cartSummaryHtml){
    localStorage.setItem('cartSummaryHtml',JSON.stringify(cartSummaryHtml));
}



let totalPrice=renderPaymentSummary();

export function renderPaymentSummary() {
    let productPrice = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPrice += product.price * cartItem.quantity;
        // console.log(product);
    });

    const paymentSummaryHtml = `
                <div class="total-title">Total</div>
                <div class="total-price">₹${productPrice}</div>
            `;

    document.querySelector('.total').innerHTML=paymentSummaryHtml;
    return productPrice;
};

console.log(typeof(cart));

let proceed = document.querySelector('.buy-btn');

console.log(cart);

proceed.onclick = () => {
    if(cart.length > 0){
        window.location.href="checkout.html";
    }
    else{
        alert("Add item(s) to proceed"); 
    }
}
