import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'antd/dist/antd.css';
import { Button, Descriptions, Popover } from 'antd';
import swal from 'sweetalert';

const loginStyle = {
    width: "100%",
    heigt: "550",
    maxWidth: "1300px",
    margin: "30px auto",
    border: "5px solid #ddd",
    borderRadius: "3px",
    padding: "10px"
}

export default class Dashboard extends Component {
    
    componentDidMount(){
        axios.get('http://localhost:5000/favo')
        .then(res => {
            console.log("res", res.data);
            this.setState({
                data : res.data
            })
        }) 
    } 

    state = {
        data : [],
        details : []
    }
   
    handleSubmit(id) {
        axios.get('http://localhost:5000/detail/'+id)
        .then(res => {
            console.log("res", res.data);
            this.setState({
                details : res.data
            })
            console.log("state"+this.state.details);
        })
    }

    handleDelete(id,e) {
        e.preventDefault();
        
        swal({
            text: "Wanna delete that favorites?",
            buttons: {
                confirm: "Delete",
                cancel: true,
            }
        })
        .then(willSearch => {
            if (willSearch) {
                axios.get('http://localhost:5000/deletefavo/'+id)
                .then(res => {
                    swal("Yeah!",res.data,"success"); 
                }).catch( err => {
                    swal("Oops!","Something went wrong!!!","error");
                })
            }
        })
    }

    render() {
        const { data } = this.state; 
        const text = <h6>{this.state.details.name}'s Details</h6>;
        const content = (
        <div style={{maxWidth: "600px"}}>
           <Descriptions >
                <Descriptions.Item label="Id">{this.state.details.user_id}</Descriptions.Item>
                <Descriptions.Item label="Name">{this.state.details.name}</Descriptions.Item>
                <Descriptions.Item label="Salary"> {this.state.details.salary}</Descriptions.Item>
                <Descriptions.Item label="Contact">{this.state.details.contact}</Descriptions.Item>
                <Descriptions.Item label="Email">{this.state.details.email}</Descriptions.Item>
            </Descriptions>
        </div>
        );      

        return (
            <div style={loginStyle} className="white card z-depth-0 card-content center">
                <h5>Favorites of Users</h5><hr/>
                <div className="scrollable-container-readfav">       
                <div className="background">
                <Table striped bordered hover >
                    <thead>
                       <tr>
                            <td> &nbsp;&nbsp; </td>
                            <td><h6>User</h6></td>
                            <td><h6>Food</h6></td>
                            <td><h6>Drink</h6></td>
                            <td><h6>Animal</h6></td>
                            <td><h6>Bird</h6></td>
                            <td><h6>Hobby</h6></td>
                            <td><h6>Place</h6></td>
                            <td><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    </h6></td>
                        </tr>
                    </thead>
                    <tbody>
                        {  data.map(item => (
                        <React.Fragment key={item.id}>                        
                            <tr>
                                <td> &nbsp;&nbsp; </td>
                                <td> {item.user_name} </td>
                                <td> {item.food} </td>
                                <td> {item.drink} </td>
                                <td> {item.animal} </td>
                                <td> {item.bird} </td>
                                <td> {item.hobby} </td>
                                <td> {item.place} </td>
                                <td> 
                                    <div className="demo">
                                    <div style={{ clear: 'both', whiteSpace: 'nowrap' }}>
                                        <Popover placement="bottomRight" title={text} content={content} trigger="click">
                                        <Button type="primary" onClick={this.handleSubmit.bind(this,item.id)} shape="circle" icon="search" /> 
                                        </Popover>
                                        &nbsp;&nbsp;&nbsp;
                                        <Button type="danger" onClick={this.handleDelete.bind(this, item.id)} shape="circle" icon="delete" />
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        </React.Fragment>
                            ))
                        }
                    </tbody>
                </Table>
                </div>
                </div>
            </div>
        )
    }
}

