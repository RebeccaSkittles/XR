function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.querySelector(".dark-mode-button").addEventListener("click", toggleDarkMode);
