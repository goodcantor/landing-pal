const menu = document.querySelector(".header__menu");
const openMenuBtn = document.querySelector(".header__burger"); // Кнопка открытия меню
const closeMenuBtn = document.querySelector(".header__menu-close");

// Открытие меню
openMenuBtn.addEventListener("click", () => {
  menu.classList.add("header__menu--open");
});

// Закрытие меню
closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("header__menu--open");
});
