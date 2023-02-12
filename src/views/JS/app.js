const toggleButton = document.getElementById("toggle-dark-mode");
const root = document.documentElement;

toggleButton.addEventListener("click", function() {
  root.classList.toggle("dark-mode");
});
