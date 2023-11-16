//Variable für Main
const main = document.querySelector("main");
// Variable für
const counterWrapper = document.querySelector("#counter");
// Variable für reset-button
const resetBtn = document.querySelector(".btn");
let counter = 0;

// Event für Klick in main-Element
main.addEventListener("click", changeCounter);
// Event für enter und space anlegen
document.addEventListener("keypress", changeByKeypress);
// Event für reset-button
resetBtn.addEventListener("click", reset);

//function für Zahl- und Background-Änderung
function changeCounter() {
  counter++;
  counterWrapper.innerText = counter;
  // console.log(counter);

  main.style.setProperty("--width", counter + "%"); // auf style in main zugreifen
}

// funktion für keypress event
function changeByKeypress(event) {
  if (event.code === "Enter" || event.code === "Space") {
    changeCounter();
  }
}

// funktion für reset-button
function reset() {
  counter = -1; // wegen counter++ wäre es bei reset sonst bei 1
  changeCounter();
}

// Alternative
/*
 const main = document.querySelector("main");
const counterWrapper = document.querySelector("#counter");

const btnReset = document.querySelector("#btn-reset");

let counter = 0;

main.addEventListener("click", changeCounter);
btnReset.addEventListener("click", resetCounter);

function changeCounter() {
  counter++;

  renderCounter();
  changeBackground();
}

function changeByKeypress(event) {
  if (event.code === "Enter" || event.code === "Space") {
    changeCounter();
  }
}

function renderCounter() {
  counterWrapper.innerText = counter;
}

function changeBackground() {
  main.style.setProperty("--width", counter + "%");
}

function resetCounter() {
  counter = 0;

  renderCounter();
  changeBackground();
} 
*/
