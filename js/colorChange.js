const buttons = document.querySelectorAll(".choose__item");
const buyingTypes = document.querySelectorAll("buying__type");

function colorChange(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
      item.forEach((btn) => {
        btn.classList.remove("active");
      });
      item[i].classList.add("active");
    });
  }
}

colorChange(buttons);
colorChange(buyingTypes);
