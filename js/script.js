const changeThemeBtn = document.querySelector("#change-theme");

//Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or Dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark")

  if(darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  //Save or remove dark mode from LocalStorage
  localStorage.removeItem("dark");

  if(document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});