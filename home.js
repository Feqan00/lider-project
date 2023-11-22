const dropdown = document.querySelector('.dropdown-menu')
const ironClick = document.querySelector('.iron-click')

ironClick.addEventListener('click', () => {
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
})  



