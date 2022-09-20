// display menu:
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const menu_list = document.querySelector(".menu_list");

console.log(menu);
console.log(close);

menu.addEventListener("click", function () {
  menu.classList.add("hidden");
  menu_list.classList.remove("hidden");
});

close.addEventListener("click", function () {
  menu.classList.remove("hidden");
  menu_list.classList.add("hidden");
});
