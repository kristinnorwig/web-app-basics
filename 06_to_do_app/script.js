// Variable aller Todos als Array mit einzelnen Todos als Objekt anlegen
const allTodos = [
  { description: "Einkaufen", done: true, id: 1 },
  { description: "Putzen", done: false, id: 2 },
];

// Todos aus Array mit HTML "verknüpfen" mit Funktion
function showTodos() {
  const list = document.querySelector("#todo-list"); // <ul>
  //list.innerHTML = ""; // <ul> leeren

  // Event-Listener für Änderungen am "done"-Status
  for (const todo of allTodos) {
    const newTodoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    // type festlegen
    checkbox.type = "checkbox";
    // checked atrribute mit done verbinden
    checkbox.checked = todo.done;
    // Veränderung des Checkbox Status "in Konsole" festhalten
    checkbox.addEventListener("change", function (event) {
      const todoDoneState = event.target.checked;
      todo.done = todoDoneState;
    });

    // checkbox in li anlegen
    newTodoLi.appendChild(checkbox);

    // Text für li anlegen aus description des Objekts
    const todoText = document.createTextNode(todo.description);
    newTodoLi.append(todoText);

    // neues li in ul einfügen
    list.appendChild(newTodoLi);
  }
}

showTodos();

// Funktion zum Hinzufügen eines neuen Todos
function addTodo(event) {
  event.preventDefault();
  const newTodoInput = document.querySelector("#new-todo");
  const description = newTodoInput.value.trim();

  // Prüfe auf leere Eingabe im input-Feld
  if (description === "") {
    alert("Bitte  Beschreibung eingeben!");
    return;
  }

  // Prüfung auf doppelte Eingabe, ist Todo bereits vorhanden?
  function isDescrDoubled(currInput) {
    for (let index = 0; index < allTodos.length; index++) {
      //durch Array itterieren und aktuellen index mit input vergleichen
      if (allTodos[index].currInput.toLowerCase() === currInput.toLowerCase()) {
        return true; // Duplikat gefunden
      }
    }
    return false; // Kein Duplikat gefunden
  }
  const isDoubled = isDescrDoubled(description); // Konstante für Funktion (zu kompliziert?)

  if (isDoubled) {
    alert("Aufgabe existiert bereits!"); //error, warn ???
    return;
  }

  // Neues Todo-Objekt erstellen
  const newTodo = {
    description: description, //??
    done: false,
    id: idGenerator(),
  };

  // Variable für den ID-Zähler um neue ID für Todo zu generieren  allTodos.indexOf();
  let idCounter = 0;

  function idGenerator() {
    return idCounter++;
  }

  // Todo zum Array hinzufügen
  allTodos.push(newTodo);

  // Funktion showTodo ausführen um Anzeige aktualisieren
  showTodos();

  // Eingabefeld leeren
  description = "";
}

//Funktion addTodo auf Button ausführen
const addBtn = document.querySelector("button");
addBtn.addEventListener("click", addTodo);

// Änderungen im Local Storage speichern ???  wo??
// saveToLocalStorage();

/* Objekt mit Arrays die wiederum Objekte mit Keys und values enthalten
const state = {
  todos: [
    {description:"kkk", done: false; id:1},
    {description:"mmm", done: false; id:1},
  ],
  user: [
    {username:"max"},
    {username: "lena"},
  ]
} */
