const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});
