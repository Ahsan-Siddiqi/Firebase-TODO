/**
 * Render all of the non-completed todos into the DOM
 */
function renderTodos(todos) {
  const todosEl = document.querySelector("#todos_list");
  todosEl.innerHTML = "";

  todos.forEach((todo) => {
    if (todo.completed) return;

    // create a div with a p and a checkbox
    const todoEl = document.createElement("div");
    todoEl.className = "todo";

    const todoTextEl = document.createElement("p");
    const todoCheckboxEl = document.createElement("input");
    todoCheckboxEl.type = "checkbox";

    // add the todo text to the p
    todoTextEl.textContent = todo.text;

    // add the todo text and checkbox to the div
    todoEl.appendChild(todoTextEl);
    todoEl.appendChild(todoCheckboxEl);

    // add the div to the DOM
    todosEl.appendChild(todoEl);
  });
}

/**
 * Render all of the completed todos into the DOM
 */
function renderCompletedTodos(todos) {
  const todosEl = document.querySelector("#todos_completed_list");
  todosEl.innerHTML = "";

  todos.forEach((todo) => {
    if (!todo.completed) return;

    const todoEl = document.createElement("p");
    todoEl.textContent = todo.text;
    todosEl.appendChild(todoEl);
  });
}
