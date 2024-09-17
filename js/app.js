/**
 * Swiper Slider
 */
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// Animations
ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

/**
 * Menu mobile
 */
function navBar() {
  const navbar = document.getElementById('navbar');
  const header = document.getElementById('header');

  if (navbar.classList.contains('openbar')) {
    navbar.classList.remove('openbar');
    header.classList.remove('header-bar');
  }else {
    navbar.classList.add('openbar');
    header.classList.add('header-bar');
  }
}