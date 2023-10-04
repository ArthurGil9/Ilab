"use strict";

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: false,

  // If we need pagination
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
