// mobile menu
const menuIcon = document.getElementById('menuIcon')
const mobileMenu = document.getElementById('mobileMenu')
const exitMobile = document.querySelector('.exit-mobile-menu')

menuIcon.addEventListener('click', function (e) {
    e.preventDefault()

    mobileMenu.style.display = 'none'

    if (mobileMenu.style.display == "none") {
        mobileMenu.style.display = "block"
        menuIcon.style.display = "none"
    }
})

exitMobile.addEventListener('click', function () {
    if (mobileMenu.style.display == "block") {
        mobileMenu.style.display = "none"
        menuIcon.style.display = "block"
    }
})