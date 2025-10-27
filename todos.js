// todos.js
// Simple in-memory todos module with an intentional bug to debug

let todos = [];
let nextId = 1;

function addTodo(text) {
  const todo = { id: nextId++, text, done: false };
  todos.push(todo);
  return todo;
}

// BUG: accidental assignment operator '=' used instead of comparison '==='
// This will mutate the first todo's id and causes wrong removals — find & fix with debugger.
function removeTodo(id) {
  const idx = todos.findIndex(t => t.id = id); // <-- BUG
  todos.splice(idx, 1);
  return true;
}

function toggleTodo(id) {
  const t = todos.find(t => t.id === id);
  if (!t) return false;
  t.done = !t.done;
  return t;
}

function listTodos() {
  // return direct array (so debugger/repl can inspect/modify easily)
  return todos;
}

// expose module
module.exports = { addTodo, removeTodo, toggleTodo, listTodos, __internal: { todos } };
