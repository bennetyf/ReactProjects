import React from 'react';
import AddTodo from './addItem';
import TodoList from './List';

export default () => {
  return (
    <div className="todos">
      <AddTodo/>
      <TodoList/>
    </div>
  );
}