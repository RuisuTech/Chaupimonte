const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

let sliderInner = document.querySelector(".slider--inner");
let images = sliderInner.querySelectorAll("img"); // Selecciona todas las imágenes
let index = 0; // Empieza desde la primera imagen

setInterval(function () {
  let percentage = index * -100;
  sliderInner.style.transform = "translateX(" + percentage + "%)";
  index++;
  if (index >= images.length) { // Cambia la condición
    index = 0; // Vuelve al inicio
  }
}, 1000);

