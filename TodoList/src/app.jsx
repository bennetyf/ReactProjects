import Store from './Store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import routes from './Routes/index';

ReactDOM.render(
  <Provider store={Store}>
    <routes />
  </Provider>,
  document.getElementById('root')
);
