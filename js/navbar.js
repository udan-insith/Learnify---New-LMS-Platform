// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("Menu toggled");
});

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Don't close if it's a dropdown toggle on mobile
    if (!link.classList.contains("dropdown-toggle")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

// Handle dropdown menus on mobile
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = toggle.closest(".dropdown");
      dropdown.classList.toggle("active");
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || href === "index.html") {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveNavLink();

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
