import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
