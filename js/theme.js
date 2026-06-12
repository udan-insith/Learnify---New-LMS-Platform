// Theme Switcher
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";

// Initialize theme on page load
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
} else {
  body.classList.remove("dark-theme");
}

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Get current theme
  const isDarkMode = body.classList.contains("dark-theme");

  // Save to localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Add animation
  body.style.animation = "themeSwitch 0.6s ease";

  setTimeout(() => {
    body.style.animation = "none";
  }, 600);

  // Log theme change
  console.log(`Theme switched to: ${isDarkMode ? "Dark" : "Light"} mode`);
});

// Add keyboard shortcut (Ctrl/Cmd + Shift + T to toggle theme)
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "T") {
    e.preventDefault();
    themeToggle.click();
  }
});
