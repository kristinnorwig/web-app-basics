let darkMode = false; // Variable für aktuellen Mode
const btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  // let darkMode = false; außerhalb von funktion, da man sonst nicht hin und her switchen kann
  darkMode = !darkMode; // wenn darkMode zuvor false war, wird er nun true
  if (darkMode) {
    document.body.classList.add("body-dark");
    btn.classList.add("button-dark");
    // document.title = "Good Night"; benutzen wenn zuvor anderer Title, jetzt Standardmäßig Good Morning
  } else {
    document.body.classList.remove("body-dark");
    btn.classList.remove("button-dark");
    // document.title = "Good Morning";
  }

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
