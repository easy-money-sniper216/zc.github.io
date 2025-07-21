let picture = document.getElementsByTagName('img')[0]
picture.onclick = function() {
    if (picture.src.includes("pic1")) {
        picture.src = "images/pic2.webp";
    } else {
        picture.src = "images/pic1.jpeg";
    }
}