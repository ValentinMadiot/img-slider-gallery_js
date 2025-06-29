/*=============== SWIPER JS GALLERY ===============*/
// Carrousel Principal
let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true }, // Remplace cssMode
  loopedSlides: 5,

  // cssMode: true,
});

// Miniatures Synchronisées
let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Synchronisation
swiperCards.controller.control = swiperThumbs;
swiperThumbs.controller.control = swiperCards;
