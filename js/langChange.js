const button = document.getElementById("lang"),
  langContainer = document.querySelector(".languages");

button.addEventListener("click", () => {
  langContainer.classList.toggle("flex");
});
