document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true
  });

  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      menuToggle.checked = true;
    });
  }

  if (menuToggle && closeMenu) {
    closeMenu.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  }
});
