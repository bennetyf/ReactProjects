import {createStore} from 'redux';
import {todoapp_reducer} from '../Views/TodoAppRedux';

export default createStore(todoapp_reducer);
