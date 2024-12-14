const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = nav.querySelectorAll("a"); // Seleccionamos todos los enlaces dentro del menú

// Abrir menú
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

// Cerrar menú
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

// Cerrar menú automáticamente al hacer clic en un enlace
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

let sliderInner = document.querySelector(".slider--inner");
let imagess = sliderInner.querySelectorAll("img"); // Selecciona todas las imágenes
let index = 0; // Empieza desde la primera imagen

setInterval(function () {
  let percentage = index * -100;
  sliderInner.style.transform = "translateX(" + percentage + "%)";
  index++;
  if (index >= imagess.length) {
    index = 0;
  }
}, 1000);
