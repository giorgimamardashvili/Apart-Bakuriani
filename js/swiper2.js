var galleryThumbs = new Swiper(".gallery__thumbs", {
  // spaceBetween: 16,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var galleryTop = new Swiper(".gallery__top", {
  spaceBetween: 10,
  slidesPerView: 1,

  thumbs: {
    swiper: galleryThumbs,
  },
});
