const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navToggleBtnBurger = document.querySelector(".nav-toggle-btn__burger");
const mobileNav = document.querySelector(".mobile-nav");

let showMenu = false;

navToggleBtn.addEventListener("click", () => {
  if (!showMenu) {
    navToggleBtnBurger.classList.add("open");
    mobileNav.style.transform = "translateX(0)";

    showMenu = true;
  } else {
    navToggleBtnBurger.classList.remove("open");
    mobileNav.style.transform = "translateX(100%)";

    showMenu = false;
  }
});
