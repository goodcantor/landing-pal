// Получаем элементы
const overlay = document.querySelector(".header__overlay");
const modal = document.querySelector(".header__modal");
const closeModalBtn = document.querySelector(".header__modal-close");

// Функция для открытия модалки
function openModal() {
  overlay.classList.add("header__overlay--visible");
  modal.classList.add("header__modal--visible");
}

// Функция для закрытия модалки
function closeModal() {
  overlay.classList.remove("header__overlay--visible");
  modal.classList.remove("header__modal--visible");
}

// Открыть модалку (например, по клику на кнопку)
document.querySelector(".header__btn").addEventListener("click", openModal);
document
  .querySelector(".header__menu-button")
  .addEventListener("click", openModal);

document.querySelector(".tell__link").addEventListener("click", openModal);

// Закрыть модалку при клике на крестик или оверлей
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
