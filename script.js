function darkMode() {
  let element = document.body;
  let content = document.getElementById("darkModeToggle");
  element.className = "dark-mode";
  content.checked = true;

}

function lightMode() {
  let element = document.body;
  let content = document.getElementById("darkModeToggle");
  element.className = "light-mode";
  content.checked = false;

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


darkMode();

function saveDarkModePreference(isDarkMode) {
  document.cookie = `darkMode=${isDarkMode}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function loadDarkModePreference() {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'darkMode') {
          return value === 'true';
      }
  }
  return false;
}


const isDarkModeEnabled = loadDarkModePreference();
if (isDarkModeEnabled) {
  darkMode();
} else {
  lightMode();
}


darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
      darkMode();
      saveDarkModePreference(true);
  } else {
      lightMode();
      saveDarkModePreference(false);
  }
});

