function darkMode() {
  let element = document.body;
  let content = document.getElementById("darkModeToggle");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("darkModeToggle");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}
const darkModeToggle = document.getElementById("darkModeToggle");

function toggleDarkMode() {
  if (darkModeToggle.checked) {
    darkMode();
  } else {
    lightMode();
  }

}

darkModeToggle.addEventListener("change", toggleDarkMode);
