var Main_image = document.getElementById("Main_image")
var Small_images = document.getElementsByClassName("small_img")

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