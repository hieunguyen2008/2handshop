const menu_icon = document.getElementById("menu_icon");
const navbar = document.getElementById("Navbar");
const close = document.getElementById("close_menu")
const cartIcon = document.querySelector("#carticon")
const cart = document.querySelector(".cart_page")
const cartClose = document.querySelector("#cart_close")

if (menu_icon) {
    menu_icon.addEventListener("click", () => {
        navbar.classList.add("active")
    })
}

if (close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("active")
    })
    
}

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));


const addcartButton = document.querySelectorAll(".cart");
addcartButton.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product1");
        addToCart(productBox);
    })
})

const cartContent = document.querySelector(".cart_content");
const addToCart = productBox => {
    const productImg = productBox.querySelector("img").src;
    const productName = productBox.querySelector(".productName").textContent;
    const productPrice = productBox.querySelector(".productPrice").textContent;

    const cartItems = cartContent.querySelectorAll(".cart_product");
    for (let item of cartItems) {
        if (item.textContent === productName) {
            alert("This item is already in the cart!");
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart_box")
    cartBox.innerHTML = `<div class="cart_box">
                    <img src="${productImg}" class="cart_img" alt="">
                    <div class="cart_details">
                        <h2 class="cart_product">${productName}</h2>
                        <span class="cart_price">${productPrice}</span>
                    </div>
                    <i class="fa-solid fa-trash cart_remove"></i>
                </div>`;

    cartContent.appendChild(cartBox);
    updatePrice();

    cartBox.querySelector(".cart_remove").addEventListener("click", () => {
        cartBox.remove();
        updatePrice();
    })

};



const updatePrice = () => {
    const totalPrice = document.querySelector(".total_price");
    const cartBoxes = document.querySelectorAll(".cart_box");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart_price");
        const price = priceElement.textContent.replace("$", "");
        total += price * 0.5;
    });

    totalPrice.textContent = `$${total}`;
    
}



const buyNowButton = document.querySelector(".button");
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cart_box");
    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please add items to your cart before buying.");
        return;
    }

    cartBoxes.forEach(cartBox => cartBox.remove());
    updatePrice();
    alert("Successful purchase. Thank you for your purchase.")
});