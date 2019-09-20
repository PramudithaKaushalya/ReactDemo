import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'antd/dist/antd.css';
import { Button } from 'antd';

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
        data : []
    }
   
    handleSubmit(user) {
        // axios.get('http://localhost:5000/')
        // .then(res => {
        //     console.log("res", res.data);
        //     this.setState({
        //         data : res.data
        //     })
        // })
        console.log(user) 
    }

    render() {
        const { data } = this.state; 

        return (
            <div style={loginStyle} className="white card z-depth-0 card-content center">
                <h5>Favorites of Users</h5><hr/>
                <div className="scrollable-container-readfav">       
                <div className="background">
                <Table striped bordered hover >
                    <thead>
                       <tr>
                            <td><h6>User</h6></td>
                            <td><h6>Food</h6></td>
                            <td><h6>Drink</h6></td>
                            <td><h6>Animal</h6></td>
                            <td><h6>Bird</h6></td>
                            <td><h6>Hobby</h6></td>
                            <td><h6>Place</h6></td>
                            <td><h6>Details</h6></td>
                        </tr>
                    </thead>
                    <tbody>
                        {  data.map(item => (
                        <React.Fragment key={item.favorite_id}>                        
                            <tr>
                                <td> {item.user_name} </td>
                                <td> {item.food} </td>
                                <td> {item.drink} </td>
                                <td> {item.animal} </td>
                                <td> {item.bird} </td>
                                <td> {item.hobby} </td>
                                <td> {item.place} </td>
                                <td> <Button type="primary" onClick={this.handleSubmit.bind(this,item.user_name)} shape="circle" icon="search" /> </td>
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

