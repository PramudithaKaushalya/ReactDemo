import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

const loginStyle = {
    width: "90%",
    maxWidth: "500px",
    margin: "100px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px"
}

class Signup extends Component {
    
    state = {
            name: undefined,
            salary: undefined,
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
        salary: this.state.salary || undefined,
        password: this.state.password || undefined
      }

      if(user.name === undefined || user.password === undefined || user.salary === undefined){
        alert("All fields are required!!!");
      }
      else{
      axios.post('http://localhost:5000/signup', user)
      .then(res => {
        console.log("res", res.data);
      })
      alert("User created successfully!!!");
      }
    }

    render() {
        return (
        <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

        <h5>Add User</h5>
        
        <br/>
        <label htmlFor="name"> Name </label>  
        <div className="input-field"> 
          <input id="name" type="text" onChange={this.handleChange}/>       
        </div>
        <label htmlFor="salary"> Salary </label> 
        <div className="input-field">
          <input id="salary" type="text" onChange={this.handleChange}/>       
        </div>
        <label htmlFor="password"> Password </label> 
        <div className="input-field"> 
          <input id="password" type="password" onChange={this.handleChange}/>
        </div> 
        
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Sign Up</button>  
        </div>
        </form></div>
        )
    }
}

export default Signup;

//<p>Already have account? <Link to='/signin'>Sign In</Link></p>
      