import cuid from 'cuid';

// Action Type Definitions
const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

// Action Creator Definitions
const addTodo = (text) => ({
  type: ADD,
  payload: {
    id: cuid(),
    text: text,
    completed: false
  }
});

const toggleTodo = (id) => ({
  type: TOGGLE,
  payload: {
    id: id
  }
});

const removeTodo = (id) => ({
  type: REMOVE,
  payload: {
    id: id
  }
});

// Reducer for the todos sub-tree
const ListReducer = (state={}, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD: {
      console.log({...state});
      return { ...state, [payload.id]: {id: payload.id, text: payload.text, completed: false}};
    }
    case TOGGLE: {
      return {...state, [payload.id]:{...state[payload.id], completed: !state[payload.id].completed}};
      // return state.map((item)=>{
      //   if(item.id === action.id){
      //     return { ...item, completed: !item.completed };
      //   }else{
      //     return item;
      //   }
      // })
    }
    case REMOVE: {
      let obj = {...state};
      delete obj[payload.id];
      return obj;
      // return state.filter((item) => {
      //   return item.id !== action.id;
      // })
    }
    default: {
      return state;
    }
  }
};

export {ADD, REMOVE, TOGGLE, addTodo, toggleTodo, removeTodo, ListReducer};
