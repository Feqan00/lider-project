const dropdown = document.querySelector('.dropdown-menu')
const ironClick = document.querySelector('.iron-click')
const burgerMenu = document.querySelector('.burger-menu')

ironClick.addEventListener('click', () => {
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
})

burgerMenu.addEventListener('click', () => {
    
})
