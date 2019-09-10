import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './container/Sidebar';
import Signin from './auth/Signin';
//import Confetti from 'react-confetti';
// import BackgroundSlideshow from 'react-background-slideshow';
// import image1 from './1.png';
// import image2 from './2.jpg';
//import image3 from './3.jpg';

class App extends Component {
  
    render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar/>
           
          <Route path='/signin' component={Signin} />              
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

//<Confetti width="1510px" height="750px"/> 