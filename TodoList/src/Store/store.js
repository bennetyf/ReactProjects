import {createStore, combineReducers} from 'redux';
import {reducer as todoReducer} from '../Components/TodoApp/todos/index';
import {reducer as filterReducer} from '../Components/TodoApp/filter/index';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const Store = createStore(reducer);
export default Store;
