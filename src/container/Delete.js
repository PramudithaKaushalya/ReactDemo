import React, { Component } from 'react';
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

export default class Delete extends Component {
    state = {
        data: undefined,
        id: ''
    }

    componentDidMount(){
        this.setState({
            id: ''
        })
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        })
    }

    click = (e) => {
        axios.get('http://localhost:5000/delete/'+this.state.id)
        .then(res => {
            swal("OMG!",res.data,"success");  
        }).catch( err => {
            console.log(err)
            swal("Oops!","User does not exist!!!","error");
        })
    }

    render() {
        return (
            <div>
                <div style={loginStyle} className="white">
                        <form>
                        <h5>Delete User</h5>
                        <br/>
                        <label htmlFor="id"> ID </label>  
                        <div className="input-field">  
                            <input id="id" type="text" onChange={this.handleChange}/>       
                        </div>
                        </form>                        
                        <div className="input-field">
                            <button onClick={this.click} className="btn blue lighten-1 z-depth-0">Delete</button>  
                        </div>
                </div>
        </div>
        )
    }
}
