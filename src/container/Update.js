import React, { Component } from 'react';
import axios from 'axios'; 
import swal from 'sweetalert';

const loginStyle = {
    width: "90%",
    maxWidth: "500px",
    margin: "30px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px",
    float: 'right'
}

export default class Update extends Component {
    
    componentDidMount(){
        axios.get('http://localhost:5000/search/'+this.state.id)
        .then(res => {
            this.setState({
                data : res.data,
                name : res.data.name,
                email: res.data.email,
                contact: res.data.contact,
                salary : res.data.salary,
                password : res.data.password
            })
        }).catch( err => {
            console.log(err)
            swal("Oops!","User does not exist!!!","error");
        }) 
    }

    state = {
        data: [],
        id: localStorage.getItem("id"),
        name: undefined,
        salary: undefined,
        contact: undefined,
        email: undefined,
        password: undefined
    }   
    
    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        })
    }

    update = (e) => {
        e.preventDefault();
        const user = {
          name: this.state.name || undefined,
          email: this.state.email || undefined,
          contact: this.state.contact || undefined,
          salary: this.state.salary || undefined,
          password: this.state.password || undefined
        }

        
        if(user.name === undefined || user.password === undefined || user.salary === undefined || user.email === undefined || user.contact === undefined){
            swal("Oops!","All fields are required!!!", "warning");
        }
        else if(user.name !== this.state.data.name || user.password !== this.state.data.password || user.salary !== this.state.data.salary || user.email !== this.state.data.email || user.contact !== this.state.data.contact){
            axios.put('http://localhost:5000/update/'+this.state.id, user)
            .then(res => {
            console.log("res", res.data);
            swal("Yeah!","User updated!!!","success");
            }).catch(e=>{console.log("error", e);})
            
            //this.props.history.push('/dashboard');
        }else{
            swal("Ohhh!","Didn't change any field!!!", "warning");
        }
        console.log("state", user);
        //window.location.reload();
    }

    render() {
        return (
            <div>
                <div style={{float: 'left', height: '550px', paddingTop: '30px', paddingLeft: '25px'}}>
                    <img height= '465px' alt="example" src="https://packagetoursturkey.com/wp-content/uploads/2018/06/beach-calm-clouds-457882.jpg" />
                </div>
                <div style={loginStyle} className="white">
                        <h5>Update User</h5>
                        <br/>
                    <div className="scrollable-container-update">
                    <div className="background">    
                    <form onSubmit={this.update}>
                        <label htmlFor="name"> Name </label>  
                        <div className="input-field"> 
                        <input id="name" value={this.state.name} type="text" onChange={this.handleChange}/>       
                        </div>
                        <label htmlFor="email"> Email </label>  
                        <div className="input-field"> 
                        <input id="email" value={this.state.email} type="text" onChange={this.handleChange}/>       
                        </div>
                        <label htmlFor="contact"> Contact </label>  
                        <div className="input-field"> 
                        <input id="contact" value={this.state.contact} type="text" onChange={this.handleChange}/>       
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
                    </div>
                </div>
            </div>
        )
    }
}
