"use strict";

const menu = document.querySelector(".menu");
const close = document.querySelector(".on-close");
const screen = document.querySelector(".screen");

menu.addEventListener("click", function () {
  screen.classList.remove("hidden");
});

close.addEventListener("click", function () {
  screen.classList.add("hidden");
});
