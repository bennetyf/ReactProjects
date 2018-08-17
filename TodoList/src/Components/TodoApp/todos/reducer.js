import {ADD, TOGGLE, REMOVE} from "./actionTypes";

export default (state = [], action) => {
  switch (action.type){
    case ADD: {
      return [{id:action.id, text:action.text, completed:false}, ...state];
    }
    case TOGGLE: {
      return state.map((item)=>{
        if(item.id === action.id){
          return {...item, completed: !item.completed};
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
}
