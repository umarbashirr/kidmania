const navToggleButton = document.querySelector("#open_canvas");
const canvas = document.getElementById("offCanvas");
const closeCanvasButton = document.querySelector("#closeCanvasBtn");

navToggleButton.addEventListener("click", openCanvas);
closeCanvasButton.addEventListener("click", closeCanvas);

function openCanvas() {
  canvas.classList.add("active");
}

function closeCanvas() {
  if (canvas.classList.contains("active")) {
    canvas.classList.remove("active");
  }
}
