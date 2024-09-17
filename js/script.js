/**
 * Efeito de Scrool
 */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    fixedMenu();
  }

  if (window.scrollY < 50) {
    removeFixedMenu();
  }
});

function fixedMenu() {
  if (!header.classList.contains('active')) {
    header.classList.add('active');
  }
}

function removeFixedMenu() {
  if (header.classList.contains('active')) {
    header.classList.remove('active');
  }
}

/**
 * Navbar Mobile
 */
const toggle = document.getElementById('menu-bar');
const navbar = document.getElementById('navbar');

function openCloseNavBar() {
  if (!navbar.classList.contains('active')) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}

/**
 * Automatizando carrossel
 */

const btnNext = document.getElementById('btn-next');
const btnNextBrand = document.getElementById('brand-btn-next');

setInterval(() => {
  btnNext.click();
}, 10000);

setInterval(() => {
  btnNextBrand.click();
}, 1000);