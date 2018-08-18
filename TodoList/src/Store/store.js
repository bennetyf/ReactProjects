import {createStore, combineReducers} from 'redux';
import {ListReducer} from '../Components/TodoApp/List/ListReducer';
import {FilterReducer} from '../Components/TodoApp/Filter/FilterReducer';

const reducer = combineReducers({
  todos: ListReducer,
  filter: FilterReducer
});

export default createStore(reducer);
