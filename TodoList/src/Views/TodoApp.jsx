import React from 'react';
import {view as Todos} from '../Components/TodoApp/todos/index';
import {view as Filter} from '../Components/TodoApp/filter/index';

export default class TodoApp extends React.Component {
  render(){
    return (
      <div>
        <Todos/>
        <Filter/>
      </div>
    );
  }
}
