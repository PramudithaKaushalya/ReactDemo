import React, { Component } from 'react';
import Pdf from "react-to-pdf";
import "./index.css";
import {Button, Descriptions} from 'antd';
import axios from 'axios'; 
import swal from 'sweetalert';

const ref = React.createRef();
const loginStyle = {
    maxHeight: '440px',
    width: "90%",
    maxWidth: "900px",
    margin: "30px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    paddingLeft: "60px",
    float: 'center'
}

export default class Pdfs extends Component {

    componentDidMount(){
        axios.get('http://localhost:5000/search/'+this.state.id)
        .then(res => {
            this.setState({
                data : res.data
            })
            console.log("aaa", this.state.data);
        }).catch( err => {
            console.log(err)
            swal("Oops!","Something Went Wrong!!!","error");
        }) 
        
        // axios.get('http://localhost:5000/searchfavo/'+this.state.id)
        // .then(res => {
        //     this.setState({
        //         favorite : res.data
        //     })
        // }).catch( err => {
        //     console.log(err)
        //     swal("Oops!","Something Went Wrong!!!","error");
        // }) 
    }

    state = {
        data: [],
        favorite: [],
        id: localStorage.getItem("id")
    } 

    render() {

        return (
            <div>
                <div style={{float: 'right'}}>
                <Pdf x = '0' y = '0' targetRef={ref} filename="User Details.pdf">
                    {({ toPdf }) => <Button  type="primary" onClick={toPdf} shape="circle" icon="download" />}
                </Pdf>
                </div>
                <br/>
                <div style={loginStyle} ref={ref} className="white">
                <div className="scrollable-container-pdf">
                <div className="background">
                    <br/>
                    <img float= 'right' height= '50px' alt="example" src="https://rakiya.lk/files/recruiters/1805/logo.png" />
                    <br/>
                    <br/>
                    <Descriptions style={{maxWidth: '400px'}} title="User Info" bordered>
                       
                        <Descriptions.Item label="Id" span={4}>
                            {this.state.data.user_id}
                        </Descriptions.Item>
                        <Descriptions.Item label="Name" span={4}>
                            {this.state.data.name}
                        </Descriptions.Item>
                        <Descriptions.Item label="Email" span={5}>
                            {this.state.data.email}
                        </Descriptions.Item>
                        <Descriptions.Item label="Contact" span={6}>
                            {this.state.data.contact}
                        </Descriptions.Item>
                        <Descriptions.Item label="Salary">
                            {this.state.data.salary}
                        </Descriptions.Item>
                    </Descriptions>
                </div>
                </div>
                </div>
            </div>
        )
    }
}




// <h5>Your details </h5>
//                         <br/>
//                         <h6>Id:</h6> <input id="id" type="text" value = {this.state.data.user_id} /> 
//                         <h6>Name:</h6> <input id="id" type="text" value = {this.state.data.name} /> 
//                         <h6>Email</h6> <input id="id" type="text" value = {this.state.data.email} /> 
//                         <h6>Contact: </h6> <input id="id" type="text" value = {this.state.data.contact} /> 
//                         <h6>Salary Amount:</h6> <input id="id" type="text" value = {this.state.data.salary} /> 
//                         <h6>Favorite Food:</h6> <input id="id" type="text" value = {this.state.favorite.food} /> 
//                         <h6>Favorite Drink:</h6> <input id="id" type="text" value = {this.state.favorite.drink} /> 
//                         <h6>Favorite Animal:</h6> <input id="id" type="text" value = {this.state.favorite.animal} /> 
//                         <h6>Favorite Bird:</h6> <input id="id" type="text" value = {this.state.favorite.bird} /> 
//                         <h6>Favorite Hobby:</h6> <input id="id" type="text" value = {this.state.favorite.hobby} /> 
//                         <h6>Favorite Place:</h6> <input id="id" type="text" value = {this.state.favorite.place} /> 