// AOS Animination
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true
  });

  // Nav Menu

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


// side bar toogle icon 

   function toggleFilter(id) {
    const options = document.getElementById(`filter-options-${id}`);
    const icon = document.getElementById(`toggle-icon-${id}`);
    if (options.classList.contains('hidden')) {
      options.classList.remove('hidden');
      icon.textContent = '-';
    } else {
      options.classList.add('hidden');
      icon.textContent = '+';
    }
  };

  function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-options");
    dropdown.classList.toggle("hidden");
  }

  function selectOption(value) {
    document.getElementById("selected-option").innerText = value;
    document.getElementById("dropdown-options").classList.add("hidden");
  }

  // Close dropdown when clicking outside
  window.addEventListener("click", function (e) {
    const dropdown = document.getElementById("custom-dropdown");
    if (!dropdown.contains(e.target)) {
      document.getElementById("dropdown-options").classList.add("hidden");
    }
  });

   // FAQ Toggle 

   document.addEventListener('DOMContentLoaded', function () {
      const toggles = document.querySelectorAll('.faq-toggle');
      toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
          const content = this.nextElementSibling;
          const icon = this.querySelector('i');
          content.classList.toggle('hidden');
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-up');
        });
      });
    });