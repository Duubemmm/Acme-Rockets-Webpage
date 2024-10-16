const initApp = () => {
    const hamburgerButton = document.getElementById('hamburger-btn')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerButton.classList.toggle('toggle-btn')
}

hamburgerButton.addEventListener('click', toggleMenu)
mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
