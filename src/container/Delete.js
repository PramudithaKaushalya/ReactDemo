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
    padding: "30px"
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
            axios.get('http://localhost:5000/delete/'+this.state.id)
            .then(res => {
                swal("Omg!",res.data,"success"); 
            }).catch( err => {
                swal("Oops!","User does not exist!!!","error");
            })
        }else{
            swal("Ohh!","Id Number is empty!!!","warning");
        }
        this.props.history.push('/delete');
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
                            <button onClick={this.handleSubmit} className="btn blue lighten-1 z-depth-0">Delete</button>  
                        </div>
                </div>  
            </div>
        )
    }
}

export default Delete




// <Card
//                     hoverable
//                     style={{ width: 24 }}
//                     cover={<img height="100px" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//                 >
                    
//                 </Card> 

/* 
const { getFieldDecorator } = this.props.form;

<Form className="login-form" onSubmit={this.handleSubmit}>
<Form.Item>
    {getFieldDecorator('Id', {
    rules: [{ required: true, message: 'Please input Id number!' }],
    })(
    <Input
    id="id"
    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    placeholder="Id Number"
    onChange={this.handleChange}
    />
    )}
</Form.Item>

<Form.Item>
<Button type="primary" htmlType="submit">
    Delete
</Button>
</Form.Item>
</Form> */