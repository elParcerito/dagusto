// Menú móvil
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Animaciones al hacer scroll
const elements = document.querySelectorAll('.fade-up');

const showOnScroll = () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();