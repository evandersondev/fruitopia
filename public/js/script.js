document.querySelector(".menu").addEventListener("click", () => {
  const toggleMenu = document.querySelector(".toggle-menu");
  toggleMenu.style.display = "flex";
  toggleMenu.style.left = 0;
  toggleMenu.style.opacity = 1;
});
