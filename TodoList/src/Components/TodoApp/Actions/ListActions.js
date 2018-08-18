// Action Type Definitions
const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

// Action Creator Definitions
let nextTodoId = 0;
const addTodo = (text) => ({
  type: ADD,
  id: nextTodoId++,
  text: text,
  completed: false
});

const toggleTodo = (id) => ({
  type: TOGGLE,
  id: id
});

const removeTodo = (id) => ({
  type: REMOVE,
  id: id
});

export {ADD, TOGGLE, REMOVE, addTodo, toggleTodo, removeTodo};
