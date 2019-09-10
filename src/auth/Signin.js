import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

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
      e.preventDefault();
      const user = {
        name: this.state.name || undefined,
        password: this.state.password || undefined
      }
      if(user.name === undefined || user.password === undefined){
        swal("Ohh!","All fields are required!!!", "warning");
        window.location.reload();
      }
      else{
      axios.post('http://localhost:5000/signin', user)
      .then(res => {
        if(res.data){
          swal("OMG!","User logging successfully!!!","success");
          this.props.history.push('/signin');
        }else{
          swal("Oops!","Invalid password!!!","error");
        }
        
      }).catch(
        swal("Oops!","User doesn't exist!!!","error"));
        window.location.reload();
      }
      console.log(user);
      this.setState({ 
        name: undefined,
        password: undefined 
      });
      console.log(this.state.name);
    }

    render() {
        return (
        <div style={loginStyle} className="white">
       
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
          <button onClick={this.handleSubmit} className="btn blue lighten-1 z-depth-0">Sign In</button>  
        </div>
        <p>Haven't account? <Link to='/signup'>Sign Up</Link></p> 
      </div>
        )
    }
}

export default Signin;