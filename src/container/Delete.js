import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert'; 
//import { Card } from 'antd'; 
//import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const loginStyle = {
    width: "90%",
    maxWidth: "500px",
    margin: "100px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px",
    float: 'right'
}

//const { Meta } = Card;

class Delete extends Component {
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

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.id!==''){
            swal({
                text: "Wanna delete that user?",
                buttons: {
                  confirm: "Delete",
                  cancel: true,
                }
              })
              .then(willSearch => {
                if (willSearch) {
                    axios.get('http://localhost:5000/delete/'+this.state.id)
                    .then(res => {
                    swal("Omg!",res.data,"success"); 
                    }).catch( err => {
                    swal("Oops!","User does not exist!!!","error");
                })
                }
              })
             
              
        }else{
            swal("Ohh!","Id Number is empty!!!","warning");
        }
        this.props.history.push('/dashboard'); 
    }

    render() {
        
        return (
            <div>
                <div style={{float: 'left', height: '545px', paddingTop: '20px', paddingLeft: '20px'}}>
                    <img height= '450px' alt="example" src="https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/fotolia-92027264european-day-forest-green-forest.jpg?itok=MwdU0DK-" />
                </div>
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
                            <button onClick={this.handleSubmit} className="btn blue lighten-1 z-depth-0">Delete</button>  
                        </div>
                </div>  
            </div>
        )
    }
}

export default Delete