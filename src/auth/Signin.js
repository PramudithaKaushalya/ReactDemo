import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

const loginStyle = {
    width: "90%",
    maxWidth: "500px",
    margin: "100px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px"
}

class Signin extends Component {
    
    state = {
            name: undefined,
            password: undefined,
            authError: undefined
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id] : e.target.value
      })
    }

    handleSubmit = (e) => {
      const user = {
        name: this.state.name || undefined,
        password: this.state.password || undefined
      }
      
      
      console.log(user);
    }

    render() {
        return (
        <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

        <h5>Sign In</h5>
        
        <br/>
        <label htmlFor="name"> Name </label>  
        <div className="input-field">  
          <input id="name" type="text" onChange={this.handleChange}/>       
        </div>
        
        <label htmlFor="password"> Password </label> 
        <div className="input-field"> 
          <input id="password" type="password" onChange={this.handleChange}/>
        </div> 
        
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Sign In</button>  
        </div>
        </form>
        <p>Haven't account? <Link to='/signup'>Sign Up</Link></p> 
      </div>
        )
    }
}

export default Signin;