import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './profile';

const props = {
    name: 'viking',
    age: 20
};

ReactDOM.render(<Profile {...props} />, document.getElementById('root'));
