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

/**
 * Add a new todo
 * @returns {void}
 */
function addTodo(todos) {
  // Get the todo input
  const todoInput = document.getElementById("todo_input");
  const todoText = todoInput.value;

  // Check if the todo text is empty
  if (todoText === "") {
    alert("Todo text cannot be empty");
    return;
  }

  // Create a new todo object
  const todo = {
    text: todoText,
    completed: false,
  };

  // Create a new todo object and add it to the todos array
  todos.push(todo);

  // Render the todos and add the todo to the database
  renderTodos(todos);
  addTodoToDatabase(todo);

  // Clear the todo input
  todoInput.value = "";
}

/**
 * Delete a todo
 * @returns {void}
 */
function deleteTodo(todos) {
  // Get the todo input
  const todoInput = document.getElementById("todo_input");
  const todoText = todoInput.value;

  // Check if the todo text is empty
  if (todoText === "") {
    alert("Todo text cannot be empty");
    return;
  }

  // Find the todo in the todos array
  const todoIndex = todos.findIndex((todo) => todo.text === todoText);

  // Check if the todo exists
  if (todoIndex === -1) {
    alert("Todo does not exist");
    return;
  }

  // Remove the todo from the todos array
  const todo = todos.splice(todoIndex, 1)[0];

  // Render the todos and remove the todo from the database
  renderTodos(todos);
  deleteTodoFromDatabase(todo);

  // Clear the todo input
  todoInput.value = "";
}
