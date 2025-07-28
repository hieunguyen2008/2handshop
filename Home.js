const menu_icon = document.getElementById("menu_icon");
const navbar = document.getElementById("Navbar");
const close = document.getElementById("close_menu")

if (menu_icon) {
    menu_icon.addEventListener("click", () => {
        navbar.classList.add("active")
    })
}

if (close) {
    close_menu.addEventListener("click", () => {
        navbar.classList.remove("active")
    })
    
}