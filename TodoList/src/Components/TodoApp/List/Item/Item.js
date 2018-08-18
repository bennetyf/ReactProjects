import React from 'react';
import {toggleTodo, removeTodo} from "../../Actions/ListActions";
import {connect} from 'react-redux';

// Presentational Component
const Item = ({onToggle, onRemove, id, completed, text}) => (
  <li
    className="todo-item"
    style={{textDecoration: completed? 'line-through':'none'}}
  >
    <input className="toggle" type="checkbox" checked={completed?"checked":""} readOnly onClick={() => onToggle(id)}/>
    <label className="text">{text}</label>
    <button className="remove" onClick={() => onRemove(id)}> x </button>
  </li>
);

// Container Component
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

export default connect(null, mapDispatchToProps)(Item);
