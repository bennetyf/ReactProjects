import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import TodoApp from '../Views/TodoApp';

const Routes = () => {
  return (
  <Router>
    <Route path="/" component={TodoApp}/>
  </Router>);
};

export default Routes;
