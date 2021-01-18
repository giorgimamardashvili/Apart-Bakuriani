const modalTrigger = document.querySelectorAll("[data-modal]"),
  modal = document.getElementById("modal"),
  modalClose = document.querySelector(".modal__button2");

modalTrigger.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.toggle("hide");
    document.body.style.overflow = "hidden";
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hide");
    document.body.style.overflow = "";
  }
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hide");
  document.body.style.overflow = "";
});
