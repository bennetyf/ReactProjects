import {combineReducers} from 'redux';
import {ListReducer} from '../Components/TodoApp/List/ListRedux';
import {FilterReducer} from '../Components/TodoApp/Filter/FilterRedux';
import * as ListAction from '../Components/TodoApp/List/ListRedux';
import * as FilterAction from '../Components/TodoApp/Filter/FilterRedux';

const todoapp_reducer = combineReducers({
  todos: ListReducer,
  filter: FilterReducer
});

export {todoapp_reducer, ListAction, FilterAction};

