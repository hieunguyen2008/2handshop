var Main_image = document.getElementById("Main_image")
var Small_images = document.getElementsByClassName("small_img")
const cartIcon = document.querySelector("#carticon")
const cart = document.querySelector(".cart_page")
const cartClose = document.querySelector("#cart_close")

Small_images[0].onclick = function(){
    Main_image.src = Small_images[0].src
}

Small_images[1].onclick = function(){
    Main_image.src = Small_images[1].src
}

Small_images[2].onclick = function(){
    Main_image.src = Small_images[2].src
}

Small_images[3].onclick = function(){
    Main_image.src = Small_images[3].src
}



cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));


const addcartButton = document.querySelector(".add_button");
addcartButton.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product1");
        addToCart(productBox);
    })
})


const addToCart = productBox => {
    const productImg = productBox.querySelector("img").src;
    const productName = productBox.querySelector(".productName").textcontent;
    const productPrice = productBox.querySelector(".productPrice").textcontent;

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
};