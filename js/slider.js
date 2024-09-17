const swiper1 = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 20,

  // Linhas de navegação
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  // Responsividade
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    }
  }
});

const swiper2 = new Swiper('.slider-wrappe', {
  loop: true,
  spaceBetween: 20,

  // Linhas de navegação
  navigation: {
    nextEl: '.brand-btn-next',
    prevEl: '.brand-btn-prev',
  },

  // Responsividade
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    530: {
      slidesPerView: 3
    },
    690: {
      slidesPerView: 4
    },
    900: {
      slidesPerView: 5
    }
  }
});