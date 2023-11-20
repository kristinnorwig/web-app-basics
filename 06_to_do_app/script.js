// Variable aller Todos als Array mit einzelnen Todos als Objekt anlegen
/*const allTodos = [
  { description: "Einkaufen", done: true, id: 1 },
  { description: "Putzen", done: false, id: 2 },
]; */
// state anlegen für spätere Arbeit mit Backend-Daten

let state;

if (localStorage.getItem("state")) {
  state = JSON.parse(localStorage.getItem("state"));
} else {
  // wenn der localStorage leer ist, zeige folgendes an
  state = {
    todos: [
      { description: "Einkaufen", done: true, id: 1 },
      { description: "Putzen", done: false, id: 2 },
    ],
  };
}

showTodos();

// Todos aus Array mit HTML "verknüpfen" mit Funktion
function showTodos() {
  const list = document.querySelector("#todo-list"); // <ul>
  list.innerHTML = "";

  for (const todo of state.todos) {
    const newTodoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    // type festlegen
    checkbox.type = "checkbox";
    // checked atrribute mit key done verbinden
    checkbox.checked = todo.done;

    // Veränderung des Checkbox Status festhalten mit event auf Checkbox, Event-Listener für Änderungen am "done"-Status
    checkbox.addEventListener("change", function (event) {
      const todoDoneState = event.target.checked;
      todo.done = todoDoneState;
      localStorage.setItem("state", JSON.stringify(state)); // neue done Eigenschaft in localStorage speichern
    });

    const label = document.createElement("label");
    label.textContent = todo.description;
    label.setAttribute("for", todo.id);

    // checkbox in li anlegen
    newTodoLi.appendChild(checkbox);

    newTodoLi.appendChild(label);

    /* Text für li anlegen aus description des Objekts
    const todoText = document.createTextNode(todo.description);
    newTodoLi.append(todoText);*/

    // neues li in ul einfügen
    list.appendChild(newTodoLi);
  }
}

showTodos();

function addTodo(event) {
  event.preventDefault();
  const currInput = document.querySelector("#new-todo");
  const description = currInput.value;
  // console.log(description);
  // allTodos.push(description);

  // Prüfe auf leere Eingabe im input-Feld
  if (description === "") {
    alert("Bitte  Beschreibung eingeben!");
    return;
  }

  // Prüfung auf doppelte Eingabe, ist Todo bereits vorhanden?
  function isDescrDoubled(currInput) {
    for (let index = 0; index < allTodos.length; index++) {
      //durch Array itterieren und aktuellen index mit input vergleichen
      if (
        allTodos[index].description.toLowerCase() === currInput.toLowerCase()
      ) {
        return true; // Duplikat gefunden
      }
    }
    return false; // Kein Duplikat gefunden
  }

  const isDoubled = isDescrDoubled(description); // Konstante für Funktion (zu kompliziert?)

  if (isDoubled) {
    alert("Aufgabe existiert bereits!"); //error, warn => kein Pop-up
    return;
  }

  // Neues Todo-Objekt erstellen
  const newTodo = {
    description: description,
    done: false,
    id: idGenerator(),
  };

  allTodos.push(newTodo);

  localStorage.setItem("state", JSON.stringify(state));

  currInput.value = "";

  showTodos();
}

// Funktion addTodo auf Button ausführen
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", addTodo);

let idCounter = 0;

function idGenerator() {
  return idCounter++;
}

// Remove done todos function
const removeBtn = document.querySelector("#remove-btn");
removeBtn.addEventListener("click", removeDoneTodos);

function removeDoneTodos() {
  const activeTodos = [];

  for (let i = 0; i < state.todos.length; i++) {
    if (state.todos[i].done === false) {
      activeTodos.push(state.todos[i]);
    }
  }

  state.todos = activeTodos;

  localStorage.setItem("state", JSON.stringify(state));

  showTodos();
}

//Filter function noch in Arbeit
/* function filterTodo() {
  const all = document.querySelector("#all-checkbox");
  const open = document.querySelector("#open-checkbox");
  const done = document.querySelector("#done-checkbox");
}

function filterObj(e) {
  let filteredTodo = [];
  if (e.target.id === "open" && e.target.checked) {
    for (const currentTodo of todos) {
      if (!currentTodo.done) {
        todos.push(currentTodo);
      }
    }
    renderTodoList(filteredTodo);
  }
}
*/

// Änderungen im Local Storage speichern ???  Immer wenn sich allTodos ändert
// Wann wird der State in den Local Storage gespeichert?
// - Wenn ein neues Todo erstellt wird
// - Wenn ein Todo abgeschlossen / nicht mehr abgeschlossen => Wenn ein Todo geändert wird
// - Wenn Todos gelöscht werden
// => Wenn sich unser lokaler State (state) ändert

/* bei zweifacher Verwendung Funktion (bsp. LocalStorage) erstellen
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(allTodos));
} 
saveToLocalStorage(); */
