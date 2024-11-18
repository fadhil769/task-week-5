const toggleDarkMode = () => {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
};

// Add event listener to the button
document
  .querySelector(".btn-dark-mode")
  .addEventListener("click", toggleDarkMode);
