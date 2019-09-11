import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Sidebar from './container/Sidebar';
import Signin from './auth/Login';
//import Confetti from 'react-confetti';
  
class App extends Component {
  
    render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Signin/>       
          <Route path='/signin' component={Signin} />   
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

//<Confetti width="1510px" height="750px"/> 