//Checkboxen mit id ansprechen und Variable erstellen
const checkboxesContainer = document.querySelector("#checkbox-area"); // Variable für alle Checkboxen
const fastCheckbox = document.querySelector("#fast-checkbox");
const cheapCheckbox = document.querySelector("#cheap-checkbox");
const goodCheckbox = document.querySelector("#good-checkbox");
let lastChecked;

checkboxesContainer.addEventListener("change", changeCheckbox);
/* ^ Zusammenfassung von:
fastCheckbox.addEventListener("change", changeCheckbox); 
cheapCheckbox.addEventListener("change", changeCheckbox);
goodCheckbox.addEventListener("change", changeCheckbox);
 */

function changeCheckbox(event) {
  const currentCheckbox = event.target; // wo hat Event zuletzt stattgefunden?

  if (fastCheckbox.checked && cheapCheckbox.checked && goodCheckbox.checked) {
    lastChecked.checked = false; // checked "ausschalten"
  }

  lastChecked = currentCheckbox;
}

/* 1.Ansatz

fastCheckbox.setAttribute("checked", "");
cheapCheckbox.setAttribute("checked", "");
goodCheckbox.setAttribute("checked", "");

let lastChecked = ""; //Variable anlegen um zuletzt ausgewählte Checkbox identifizieren

if (fastCheckbox === lastChecked) {
  fastCheckbox.removeAttribute("checked", "");
} else if (cheapCheckbox === lastChecked) {
  cheapCheckbox.removeAttribute("checked", "");
} else if (goodCheckbox === lastChecked) {
  goodCheckbox.removeAttribute("checked", "");
}
*/

/* Lösung
//Checkboxen mit id ansprechen und Variable erstellen
const fastCheckbox = document.querySelector("#fast-checkbox");
const cheapCheckbox = document.querySelector("#cheap-checkbox");
const goodCheckbox = document.querySelector("#good-checkbox");

//Variable anlegen um zuletzt ausgewählte Checkbox identifizieren
let lastCheckbox = null; 

// Funktion mit drei Checkboxen als Parameter (eine die gerade angeklickt wurde und die anderen die ebenfalls aktiv sein könnten)
function click(clickedCheckbox, notClickedCheckbox1, notClickedCheckbox2) {

  // Sind clickedCheckbox und gleichzeitig notClickedCheckbox1 und notClickedCheckbox2 aktiviert?
  if (
    clickedCheckbox.checked &&
    notClickedCheckbox1.checked &&
    notClickedCheckbox2.checked
  ) {

    // Wenn ja: wird lastCheckbox deaktiviert (.checked = false)
    lastCheckbox.checked = false; 
  }

  // lastCheckbox wird auf die gerade angegklickte Checkbox gesetzt, Information darüber welche Checkbox zuletzt ausgewählt wurde, wird aktualisiert 
  lastCheckbox = clickedCheckbox;
}

// Event auf jeweilige Checkbox mit oben definierter function hinzufügen
// die  angeglicket Checkbox und die beiden anderen werden als Parameter übergeben
// "change" wird als Event-Type für Checkboxen verwendet
fastCheckbox.addEventListener("change", function () {
  click(fastCheckbox, cheapCheckbox, goodCheckbox);
});

cheapCheckbox.addEventListener("change", function () {
  click(cheapCheckbox, fastCheckbox, goodCheckbox);
});

goodCheckbox.addEventListener("change", function () {
  click(goodCheckbox, cheapCheckbox, fastCheckbox);
});
*/
