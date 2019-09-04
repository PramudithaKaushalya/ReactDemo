import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Dashboard from './container/Dashboard';
import Delete from './container/Delete';
import Update from './container/Update';
import Sidebar from "./container/Sidebar";
// import BackgroundSlideshow from 'react-background-slideshow';
// import image1 from './1.png';
// import image2 from './2.jpg';
//import image3 from './3.jpg';

class App extends Component {
  
    render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Sidebar/>
          <Switch>
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Route path='/delete' component={Delete} />
            <Route path='/update' component={Update} />
            <Route exact path='/' component={Dashboard} />
          </Switch>      
        </div>
      </BrowserRouter>
    )
  }
}

export default App;