import React, { Component } from 'react';
import axios from 'axios'; 

const loginStyle = {
    width: "90%",
    maxWidth: "500px",
    margin: "100px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px"
}

export default class Delete extends Component {
    state = {
        data: undefined,
        id: ''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        })
    }

    click = (e) => {
        axios.get('http://localhost:5000/delete/'+this.state.id)
        .then(res => {
            alert(res.data);  
        }).catch( err => {
            console.log(err)
            alert("User does not exist!!!");
        })
    }

    render() {
        return (
            <div>
                <div style={loginStyle} className="white">
       
                    <form onSubmit={this.click}>

                        <h5>Delete User</h5>
                        <br/>
                        <label htmlFor="id"> ID </label>  
                        <div className="input-field">  
                            <input id="id" type="text" onChange={this.handleChange}/>       
                        </div>
                                                
                        <div className="input-field">
                            <button className="btn blue lighten-1 z-depth-0">Delete</button>  
                        </div>
                    </form>
                </div>
        </div>
        )
    }
}
