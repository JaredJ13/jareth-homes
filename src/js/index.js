// index page parallax scroll

let imageContainer = document.getElementById('mainBackgroundPic');

window.addEventListener("scroll", function () {
    let offset = window.scrollY
    imageContainer.style.backgroundPositionY = offset * -5 + "px";
})