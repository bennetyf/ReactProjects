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

const ListReducer = (state=[], action) => {
  switch (action.type) {
    case ADD: {
      if (action.type === ADD){
        return [{id:action.id, text:action.text, completed:false}, ...state];
      } else {
        return state;
      }
    }
    case TOGGLE: {
      return state.map((item)=>{
        if(item.id === action.id){
          return Object.assign({}, item, {completed: !item.completed});
        }else{
          return item;
        }
      })
    }
    case REMOVE: {
      return state.filter((item) => {
        return item.id !== action.id;
      })
    }
    default: {
      return state;
    }
  }
};

export {ADD, REMOVE, TOGGLE, addTodo, toggleTodo, removeTodo, ListReducer};
