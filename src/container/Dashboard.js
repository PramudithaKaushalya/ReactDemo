import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'

const loginStyle = {
    width: "100%",
    maxWidth: "1300px",
    margin: "100px auto",
    border: "5px solid #ddd",
    borderRadius: "3px",
    padding: "30px"
}

export default class Dashboard extends Component {
    
    componentDidMount(){
        axios.get('http://localhost:5000/all')
        .then(res => {
            console.log("res", res.data);
            this.setState({
                data : res.data
            })
        }) 
    } 
    state = {
        data: []
    }
   
    
    render() {
                    
        return (
            <div style={loginStyle} className="section notf">
            <div className="card z-depth-0">
                <div className="card-content center">
                    
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <td><h6>Id</h6></td>
                            <td><h6>Name</h6></td>
                            <td><h6>Salary</h6></td>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {this.state.data.map(item => (
                        <React.Fragment key={item.id}>
                        <tr>
                        <td> {item.id} </td>
                        <td> {item.name} </td>
                        <td> {item.salary} </td>
                        </tr>
                        </React.Fragment>
                        ))}
                        
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        )
    }
}

