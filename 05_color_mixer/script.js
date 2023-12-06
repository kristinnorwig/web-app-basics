const headEl = document.querySelector("#header");
const hexPEl = document.querySelector("#hexcode");
const bodyEl = document.body;
const rndmClrBtnEl = document.querySelector("#rndmbtn");

changeBgColor();

// Funktion um Hintergrund-Farbe zu ändern
function changeBgColor() {
  const redInput = document.getElementById("red").value;
  const blueInput = document.getElementById("blue").value;
  const greenInput = document.getElementById("green").value;
  bodyEl.style.backgroundColor =
    "rgb(" + redInput + ", " + greenInput + ", " + blueInput + ")"; //setzen des styles auf den Background
  valueHex(redInput, blueInput, greenInput);
}

headEl.addEventListener("input", changeBgColor);

// Funktion um Hintergrund-Farbe zu ändern
function valueHex(r, g, b) {
  r = Number(r).toString(16); // 16 bedeutet hier dass Zahl in Hexadezimalsystem umgewandelt wird (Zeichen 0-9 und den Buchstaben A-F)
  g = Number(g).toString(16);
  b = Number(b).toString(16);

  hexPEl.innerText = "#" + convertToHex(r) + convertToHex(g) + convertToHex(b);
}

function convertToHex(value) {
  // Null hinzufügen, wenn nötig
  if (value < 16) {
    return "0" + value.toString(16);
  } else {
    return value.toString(16);
  }
}

rndmClrBtnEl.addEventListener("click", giveRndmColor);

function giveRndmColor() {
  const rndmRed = getRandomHexValue();
  const rndmGreen = getRandomHexValue();
  const rndmBlue = getRandomHexValue();

  hexPEl.innerText =
    "#" +
    convertToHex(rndmRed) +
    convertToHex(rndmGreen) +
    convertToHex(rndmBlue);

  document.body.style.backgroundColor =
    "#" +
    convertToHex(rndmRed) +
    convertToHex(rndmGreen) +
    convertToHex(rndmBlue);
}

function getRandomHexValue() {
  return Math.floor(Math.random() * 256); // Zufällige Zahl zwischen 0 und 255
}
