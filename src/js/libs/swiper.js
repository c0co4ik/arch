const swiper = new Swiper('.swiper',{
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
      width: 1140
    },
  }
});