const Filtertypes = {
  ALL:'All',
  COMPLETED:'Completed',
  UNCOMPLETED:'Uncompleted'
};

const SET_FILTER = 'SET_FILTER';

// Action Creator
const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: {
      filter: filter
    }
  }
};

const FilterReducer = (state = Filtertypes.ALL, action) => {
  const {type, payload} = action;
  switch(type) {
    case SET_FILTER:{
      return payload.filter;
    }
    default:
      return state;
  }
};

export {Filtertypes, SET_FILTER, setFilter, FilterReducer};
