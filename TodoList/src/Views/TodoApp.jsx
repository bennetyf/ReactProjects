import React from 'react';
import Todos from '../Components/TodoApp/List/List';
import Filter from '../Components/TodoApp/Filter/Filter';
import Store from '../Store/store';
import {Provider} from "react-redux";

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Todos/>
          <Filter/>
        </div>
      </Provider>
    )
  }
}
