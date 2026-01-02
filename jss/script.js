// NAVBAR CHANGE ON SCROLL
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.background =
    window.scrollY > 50 ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.85)";
});

// MOBILE MENU
const toggleMenu = () => {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("show");
};
