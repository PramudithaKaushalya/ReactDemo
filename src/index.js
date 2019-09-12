import React from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Reg from './auth/Register';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
serviceWorker.unregister();
