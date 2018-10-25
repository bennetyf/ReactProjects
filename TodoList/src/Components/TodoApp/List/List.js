import React from 'react';
import Item from "./Item/Item";
import AddItem from './AddItem/AddItem';
import {Filtertypes} from '../Filter/FilterRedux';
import {connect} from "react-redux";

import './style.css';

const List = ({filtered_todos}) => {
  return (
    <div className="todos">
      <AddItem />
      <ul className="todo-list">
        {
          Object.keys(filtered_todos).reverse().map(iid => {
            return (
              <Item
                key = {iid}
                text = {filtered_todos[iid].text}
                completed = {filtered_todos[iid].completed}
                id = {iid}
              />
            );
          })
          // filtered_todos.map((item) => {
          //   return (
          //     <Item
          //       key={item.id}
          //       text={item.text}
          //       completed={item.completed}
          //       id = {item.id}
          //     />
          //   );
          // })
        }
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    filtered_todos: ((todos, filter) => {
      // const items = todos.items;
      // const ids = todos.ids;
      switch(filter){
        case Filtertypes.ALL:
          return todos;
        case Filtertypes.COMPLETED:
          return Object.keys(todos)
                  .filter(key => todos[key].completed)
                  .reduce((obj,key) => {obj[key] = todos[key]; return obj;},{});
          // return .filter(item => item.completed);
        case Filtertypes.UNCOMPLETED:
          return Object.keys(todos)
            .filter(key => !todos[key].completed)
            .reduce((obj,key) => {obj[key] = todos[key]; return obj;},{});
          // return todos.filter(item => !item.completed);
        default:
          throw new Error('Unsupported Filter Type');
      }
    })(state.todos, state.filter)
  };
};

export default connect(mapStateToProps,null)(List);
