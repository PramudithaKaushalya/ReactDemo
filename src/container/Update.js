import React, { Component } from 'react';
import axios from 'axios'; 
import swal from 'sweetalert';

const loginStyle = {
    width: "90%",
    maxWidth: "500px",
    margin: "30px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px"
}

export default class Update extends Component {
    state = {
        data: [],
        id: '',
        name: '',
        salary: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        })
    }

    click = (e) => {
        if(this.state.id!==''){
            axios.get('http://localhost:5000/search/'+this.state.id)
            .then(res => {
                this.setState({
                    data : res.data,
                    name : res.data.name,
                    salary : res.data.salary,
                    password : res.data.password
                })
            }).catch( err => {
                console.log(err)
                swal("Oops!","User does not exist!!!","error");
            }) 
        }else{
            swal("Ohh!","Id Number is empty!!!","warning");
        }     
    }    
    
    update = (e) => {
        e.preventDefault();
        const user = {
          name: this.state.name || undefined,
          salary: this.state.salary || undefined,
          password: this.state.password || undefined
        }

        axios.put('http://localhost:5000/update/'+this.state.id, user)
        .then(res => {
          console.log("res", res.data);
        })
        if(user.name === undefined || user.password === undefined || user.salary === undefined){
            swal("Oops!","All fields are required!!!", "warning");
        }else{
            swal("OMG!","User updated!!!","success");
        }
        this.props.history.push('/');
    }

    render() {
        return (
                <div style={loginStyle} className="white">
                        <h5>Update User</h5>
                        <br/>
                        <label htmlFor="id"> ID </label>  
                        <div className="input-field">  
                            <input id="id" type="text" onChange={this.handleChange}/>       
                        </div>
                                                
                        <div className="input-field">
                            <button onClick={this.click} className="btn blue lighten-1 z-depth-0">Search</button>  
                        </div>
                    <form onSubmit={this.update}>
                        <label htmlFor="name"> Name </label>  
                        <div className="input-field"> 
                        <input id="name" value={this.state.name}type="text" onChange={this.handleChange}/>       
                        </div>
                        <label htmlFor="salary"> Salary </label> 
                        <div className="input-field">
                        <input id="salary" value={this.state.salary} type="text" onChange={this.handleChange}/>       
                        </div>
                        <label htmlFor="password"> Password </label> 
                        <div className="input-field"> 
                        <input id="password" value={this.state.password} type="text" onChange={this.handleChange}/>
                        </div> 
                        
                        <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Update</button>  
                        </div>
                    </form>
                </div>
        )
    }
}
