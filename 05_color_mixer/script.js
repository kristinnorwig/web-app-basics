const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const colorValue = document.querySelector("#color-value");

function setBackgroundColor() {
  const color = "#" + red + green + blue;
  document.body.style.backgroundColor = color;
  colorValue.innerText = color;
}
