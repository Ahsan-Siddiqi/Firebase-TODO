/**
 * Add a new todo to the todos array
 * @returns {void}
 */
function addTodo(todos) {
  // Get the todo input
  const todoInput = document.getElementById("todo_input");

  // Get the todo text
  const todoText = todoInput.value;

  // Check if the todo text is empty
  if (todoText === "") {
    alert("Todo text cannot be empty");
    return;
  }

  // Create a new todo object
  const newTodo = {
    text: todoText,
    completed: false,
  };

  // Add the new todo to the todos array
  todos.push(newTodo);

  // Render the todos
  renderTodos(todos);

  // Clear the todo input
  todoInput.value = "";
}
