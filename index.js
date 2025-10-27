// index.js
const todosModule = require('./todos');
const { addTodo, removeTodo, listTodos } = todosModule;

console.log('Starting Todo app');

addTodo('Buy milk');
addTodo('Write code');
addTodo('Read book');

console.log('Initial todos:', listTodos());

setTimeout(() => {
  debugger; // <-- we'll hit this when using NODE_INSPECT_RESUME_ON_START=1
  console.log('About to remove todo with id 2');
  const removed = removeTodo(2); // this will demonstrate the bug
  console.log('Removed?', removed);
  console.log('Todos after remove:', listTodos());
}, 1000);

console.log('Waiting...');
