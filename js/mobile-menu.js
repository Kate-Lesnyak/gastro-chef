const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
const mobileMenu = document.querySelector(".js-menu-container");
const mobilMenuList = document.querySelector(".js-menu-list");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
};

mobilMenuList.addEventListener("click", toggleMenu);
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
