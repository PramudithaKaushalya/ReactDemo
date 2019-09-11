import React from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Signin from './auth/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
serviceWorker.unregister();
