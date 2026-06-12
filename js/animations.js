// Scroll Animations - Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in-up");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with data-animate attribute
document.addEventListener("DOMContentLoaded", () => {
  const animatableElements = document.querySelectorAll("[data-animate]");
  animatableElements.forEach((el) => observer.observe(el));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation class to elements on load
window.addEventListener("load", () => {
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-fade-in-up");
    }, index * 100);
  });
});

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll("[data-parallax]");
  parallaxElements.forEach((el) => {
    const scrollPosition = window.pageYOffset;
    const speed = el.getAttribute("data-parallax") || 0.5;
    el.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

console.log("Animations initialized");
