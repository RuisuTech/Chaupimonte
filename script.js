const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = nav.querySelectorAll("a");

// Abrir menú
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

let sliderInner = document.querySelector(".slider--inner");
let imagess = sliderInner.querySelectorAll("img");
let index = 0;

setInterval(function () {
  let percentage = index * -100;
  sliderInner.style.transform = "translateX(" + percentage + "%)";
  index++;
  if (index >= imagess.length) {
    index = 0;
  }
}, 2000);
