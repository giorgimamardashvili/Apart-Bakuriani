var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters

  // loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  observer: true,
  observeSlideChildren: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  375: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
