import React from 'react';
import Item from "./Item/Item";
import AddItem from './AddItem/AddItem';
import {Filtertypes} from '../Filter/Filtertypes';
import {connect} from "react-redux";

const List = ({todos}) => {
  return (
    <div className="todos">
      <AddItem />
      <ul className="todo-list">
        {
          todos.map((item) => {
            return (
              <Item
                key={item.id}
                text={item.text}
                completed={item.completed}
                id = {item.id}
              />
            );
          })
        }
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    todos: ((todos, filter) => {
      switch(filter){
        case Filtertypes.ALL:
          return todos;
        case Filtertypes.COMPLETED:
          return todos.filter(item => item.completed);
        case Filtertypes.UNCOMPLETED:
          return todos.filter(item => !item.completed);
        default:
          throw new Error('Unsupported Filter Type');
      }
    })(state.todos, state.filter)
  };
};

export default connect(mapStateToProps,null)(List);
