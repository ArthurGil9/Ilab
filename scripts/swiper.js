"use strict";

const swiper = new Swiper(".swiper", {
  lazy: true,
  direction: "vertical",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -1],
    },
    next: {
      translate: [0, "100%", 0],
    },
  },
});

const swiper2 = new Swiper('.swiper--2', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
});