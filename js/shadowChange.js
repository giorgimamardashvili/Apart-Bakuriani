const slides = document.querySelectorAll(".container-swipe__slide");

function shadowChange(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
      item.forEach((btn) => {
        btn.classList.remove("active-shadow");
      });
      item[i].classList.add("active-shadow");
    });
  }
}

shadowChange(slides);
