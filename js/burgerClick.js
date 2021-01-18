const burger = document.querySelector(".top-header__burger");
const menu = document.querySelector(".burger-menu");
const lines = document.querySelectorAll(".line");

burger.addEventListener("click", () => {
  menu.classList.toggle("flex");
  // console.log(lines);
  lines.forEach((item) => {
    item[1].classList.toggle("line2");
  });
});
