import {SET_FILTER} from "../Actions/FilterActions";
import {Filtertypes} from "./Filtertypes";

const FilterReducer = (state = Filtertypes.ALL, action) => {
  switch(action.type) {
    case SET_FILTER:{
      return action.filter;
    }
    default:
      return state;
  }
};

export {FilterReducer};
