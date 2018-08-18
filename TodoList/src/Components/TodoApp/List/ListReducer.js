import {ADD, TOGGLE, REMOVE} from "../Actions/ListActions";

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

export {ListReducer};
