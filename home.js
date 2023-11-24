const dropdown = document.querySelector('.dropdown-menu')
const ironClick = document.querySelector('.iron-click')
const burgerMenu = document.querySelector('.burger-menu')
const clickBurgerMenu = document.querySelector('.burger_menu-in')
const clickCloseburger = document.querySelector('.close-Button')
const burgerMenuALL = document.querySelector('.burger_menu-in ')

ironClick.addEventListener('click', () => {
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
})

burgerMenu.addEventListener('click', () => {
    clickBurgerMenu.style.display = (clickBurgerMenu.style.display === "block") ? "none" : "block";
})


clickCloseburger.addEventListener('click', () => {
    burgerMenuALL.style.display = (burgerMenuALL.style.display === "block") ? "none" : "block";
})