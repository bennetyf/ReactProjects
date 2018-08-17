import {ADD, TOGGLE, REMOVE} from "./actionTypes";

let nextTodoId = 0;

// Define action creators (returns are function object)
export const addTodo = (text) => ({
  type: ADD,
  id: nextTodoId++,
  text: text,
  completed: false
});

export const toggleTodo = (id) => ({
  type: TOGGLE,
  id: id
});

export const removeTodo = (id) => ({
  type: REMOVE,
  id: id
});
