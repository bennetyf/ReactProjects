import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import LettersApp from '../Views/LettersApp';

const Routes = () => {
  return (
  <Router>
    <Route path="/" component={LettersApp}/>
  </Router>);
};

export default Routes;
