import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import TodoApp from '../Views/TodoApp';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp}/>
  </Router>
);

export default routes;
