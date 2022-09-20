"use strict";

const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const container = document.querySelector(".container");
const grid_2 = document.querySelector(".grid_2");
const grid_3 = document.querySelector(".grid_3");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const men_item = document.querySelector(".men_item");
const li = document.querySelectorAll(".li");

// BY DEFAULT THE LIGHT SETTING:
VANTA.RINGS({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
});

// LIGHT MODE:
light.addEventListener("click", function () {
  light.classList.add("hidden");
  dark.classList.remove("hidden");
  container.style.backgroundColor = " #fff";
  container.style.color = "#343a40";
  grid_2.classList.add("gray_color");
  grid_3.classList.add("gray_color");
  body.classList.add("gray_color");
  footer.classList.add("black_text");
  men_item.classList.add("black_text");
  for (const [i, item] of li.entries()) li[i].classList.add("black_text");

  VANTA.RINGS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0xffffff,
  });
});

// DARK MODE:
dark.addEventListener("click", function () {
  dark.classList.add("hidden");
  light.classList.remove("hidden");
  container.style.backgroundColor = " #212529";
  container.style.color = "#fff";
  grid_2.classList.remove("gray_color");
  grid_3.classList.remove("gray_color");
  body.classList.remove("gray_color");
  footer.classList.remove("black_text");
  men_item.classList.remove("black_text");
  for (const [i, item] of li.entries()) li[i].classList.remove("black_text");

  VANTA.RINGS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
});
