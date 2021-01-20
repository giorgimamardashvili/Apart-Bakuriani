const selected = document.querySelector(".selected"),
  links = document.querySelectorAll(".languages a"),
  lang = document.querySelector(".languages");
console.log(links);

function open(item) {
  selected.addEventListener("click", () => {
    links.forEach((item) => {
      if (!item.contains(selected)) item.classList.toggle("hidden");
    });
  });
}



open(selected);
