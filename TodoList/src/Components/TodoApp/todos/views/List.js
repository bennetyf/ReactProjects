import React from 'react';
import {connect} from 'react-redux';
import Item from '../../List/Item/Item';
import {FilterTypes} from '../../constants';
import {removeTodo, toggleTodo} from "../actions";

const mapStateToProps = (state) => {
  return {
    todos: ((todos,filter) => {
      switch(filter){
        case FilterTypes.ALL:
          return todos;
        case FilterTypes.COMPLETED:
          return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
          return todos.filter(item => !item.completed);
        default:
          throw new Error('Unsupported Filter Type');
      }
    })(state.todos, state.filter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTodo(id))
    },

    onRemove: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

// Functional Component (Pure Rendering)
const List = ({todos, onToggle, onRemove}) => {
  return (
    <ul className="todo-list">
      {
        todos.map((item) => {
          return (
            <Item
              key={item.id}
              text={item.text}
              completed={item.completed}
              onToggle={()=>onToggle(item.id)}
              onRemove={()=>onRemove(item.id)}
            />
          );
        })
      }
    </ul>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
