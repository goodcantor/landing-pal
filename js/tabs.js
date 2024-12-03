document.addEventListener("DOMContentLoaded", () => {
  // Получаем все заголовки табов
  const tabHeaders = document.querySelectorAll(".tabs__right-tab-header");
  const tabContents = document.querySelectorAll(".tabs__right-tab-content");

  tabHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const tabId = header.getAttribute("data-tab");
      const selectedContent = document.querySelector(`#tab-${tabId}`);
      const icon = header.querySelector(".tabs__right-tab-header-icon");

      // Если текущий таб уже открыт, закрываем его
      if (selectedContent.classList.contains("open")) {
        selectedContent.classList.remove("open");
        header.classList.remove("active");
        icon.style.transform = "rotate(0deg)"; // Сбрасываем иконку
        return; // Завершаем выполнение
      }

      // Закрыть все остальные табы
      tabContents.forEach((content) => {
        content.classList.remove("open");
      });
      tabHeaders.forEach((h) => {
        h.classList.remove("active");
        const hIcon = h.querySelector(".tabs__right-tab-header-icon");
        if (hIcon) {
          hIcon.style.transform = "rotate(0deg)"; // Сбрасываем иконки
        }
      });

      // Открыть выбранный таб
      if (selectedContent) {
        selectedContent.classList.add("open");
        header.classList.add("active");
        icon.style.transform = "rotate(180deg)"; // Переворачиваем иконку
      }
    });
  });
});
