const mobileNav = document.querySelector('.mobile-nav');

mobileNav.addEventListener('click', () => {
  document.getElementById('hamburger-icon').classList.toggle('hidden');
  document.getElementById('close-icon').classList.toggle('hidden');
  document.querySelector('nav').classList.toggle('hidden');
  const dropdownMenu = document.querySelectorAll('.dropdown-menu');
  dropdownMenu.forEach(element => element.classList.add('hidden'));
  const icons = document.querySelectorAll('.arrow-icon');
  icons.forEach(icon => (icon.style.transform = 'rotate(360deg)'));
});

const navLinks = document.querySelectorAll('.nav-link');

function toggleDropdown(e) {
  e.target.classList.toggle('active');
  const link = e.target.nextElementSibling;
  link.classList.toggle('hidden');

  const icon = e.target.lastChild;
  if (link.classList.contains('hidden')) {
    icon.style.transform = 'rotate(360deg)';
  } else {
    icon.style.transform = 'rotate(180deg)';
  }
}

function toggleNav() {
  if (window.screen.width >= 900) {
    document.querySelector('nav').classList.remove('hidden');
  }
}

navLinks.forEach(link => link.addEventListener('click', toggleDropdown));
window.onload = toggleNav;
