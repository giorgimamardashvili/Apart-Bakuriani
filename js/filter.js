// function sort() {
//   const buttons = document.querySelectorAll(".choose__item");
//   const items = document.querySelectorAll(".container-swipe__slide");

//   function filter(category, items) {
//     items.forEach((item) => {
//       const isItemFiltered = !item.classList.contains(category);
//       const isShowAll = category.toLowerCase() === "all";
//       if (isItemFiltered && !isShowAll) {
//         item.classList.add("hide");
//       } else {
//         item.classList.remove("hide");
//       }
//     });
//   }

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const currentCategory = button.dataset.filter;

//       console.log(currentCategory);
//       filter(currentCategory, items);

//       buttons.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       this.classList.add("active");
//     });
//   });
// }

// sort();
