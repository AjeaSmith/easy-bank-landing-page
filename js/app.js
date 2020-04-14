// Selectors 
const icon = document.querySelector(".icon");
const menu = document.querySelector(".menu");

// Events
icon.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);

// Functions
function openMenu() {
    menu.classList.remove("hide");
    icon.src = "images/icon-close.svg";
}
function closeMenu() {
    menu.classList.add("hide");
    icon.src = "images/icon-hamburger.svg";
}