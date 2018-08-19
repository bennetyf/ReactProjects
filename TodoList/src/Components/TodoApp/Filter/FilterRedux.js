import {Filtertypes} from "./Filtertypes";

const SET_FILTER = 'SET_FILTER';

const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter: filter
  }
};

const FilterReducer = (state = Filtertypes.ALL, action) => {
  switch(action.type) {
    case SET_FILTER:{
      return action.filter;
    }
    default:
      return state;
  }
};

export {SET_FILTER, setFilter, FilterReducer};
