// Selectors 
const menuBtn = document.querySelector(".icon");
const menu = document.querySelector(".menu");
// Events
menuBtn.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);
// Functions
function openMenu() {
    menu.style.display = "flex";

    if (menu.style.display = "flex") {
        menuBtn.src = "images/icon-close.svg";
    }
}
function closeMenu() {
    menu.style.display = "none";
    menuBtn.src = "images/icon-hamburger.svg";
}