// Support Babel 7.4
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'typeface-roboto';

import App from './app/app/index';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
