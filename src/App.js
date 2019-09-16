import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
//import Confetti from 'react-confetti';
  
class App extends Component {
  
    render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/register' component={Register} /> 
            <Route path='/' component={Login} /> 
          </Switch>       
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

//<Confetti width="1510px" height="750px"/> 