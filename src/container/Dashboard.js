import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'antd/dist/antd.css';
import { AutoComplete, Button, Descriptions, Popover, Drawer, Form, Row, Input, Icon } from 'antd';
import swal from 'sweetalert';

const loginStyle = {
    width: "100%",
    maxWidth: "1300px",
    margin: "0px auto",
    border: "5px solid #ddd",
    borderRadius: "3px",
    padding: "0px"
}

class Dashboard extends Component {
    
    componentWillMount(){
        this.setState({
            data : []
        })
        axios.get('http://localhost:5000/all')
        .then(res => {
            console.log("res", res.data);
            this.setState({
                data : res.data
            })
        }) 
    } 

    state = {
        user : false,
        value : '',
        dataSource : [],
        data : [],
        filter : [],
        favorites : [],
        user_name : undefined,
        visible : false,

        name: undefined,
        salary: undefined,
        contact: undefined,
        email: undefined
    }
   
    showDrawer = (id) => {
        this.setState({
          visible: true,
          id : id
        });
        axios.get('http://localhost:5000/search/'+id)
        .then(res => {
            this.setState({
                name : res.data.name,
                email: res.data.email,
                contact: res.data.contact,
                salary : res.data.salary
            })
            console.log("aaaaaaaa",res.data)
        }).catch( err => {
            console.log(err)
            swal("Oops!","Something Went Wrong!!!","error");
        }) 
      };
    
    onClose = () => {
        this.setState({
          visible: false
        });
    };

    handleClick(id) {
        axios.get('http://localhost:5000/favorites/'+id)
        .then(res => {
            console.log("res", res.data);
            this.setState({
                favorites : res.data,
                user_name : res.data[0].user_name
            })
            console.log(this.state.user_name);
        }).catch(e => {
            const data = this.state.data;
            for(let i=0; i<data.length;i++){
                if(this.state.data[i].user_id === id){
                    let user = this.state.data[i].name;
                    this.setState({
                        favorites : [],
                        user_name : user
                    })
                    swal("Oops!",  user+" hasn't any favorites!!!", "warning" );
                }
            }
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const user = {
                    name: values.name || undefined,
                    email: values.email || undefined,
                    contact: values.contact || undefined,
                    salary: values.salary || undefined
                }

                if(user.name === this.state.name && user.password === this.state.password && user.salary === this.state.salary && user.email === this.state.email && user.contact === this.state.contact){
                    
                    swal("Ohhh!","Didn't change any field!!!", "warning");
                
                }else{

                    axios.put('http://localhost:5000/update/'+this.state.id, user)
                    .then(res => {
                        console.log("res", res.data);
                        swal("Yeah!","User is updated!!!","success");
                        this.onClose();
                        this.props.history.push('/dashboard');
                    }).catch(e=>{
                        console.log("error", e);
                        swal("Oops!","User not updated!!!","error");
                        this.onClose();
                    })
                }
                console.log("state", user);
            }
        });
    }

    handleDelete(id,e) {
        e.preventDefault();
        
        swal({
            text: "Wanna delete that user?",
            buttons: {
                confirm: "Delete",
                cancel: true,
            }
        })
        .then(willSearch => {
            if (willSearch) {
                axios.get('http://localhost:5000/delete/'+id)
                .then(res => {
                    swal("Yeah!",res.data,"success"); 
                    this.props.history.push('/dashboard'); 
                }).catch( err => {
                    swal("Oops!","Something Went Wrong!!!","error");
                })
            }
        })
    }

    onSelect = (value) => {
        const data = this.state.data;
        let len = data.length;
        for(var i=0; i<len; i++){
          var string = data[i]["name"];
          if(value===string){
            this.setState({
                user : true,
                filter : data[i]
              });
          }}
        
      }
    
      onSearch = searchText => {
        const data = this.state.data;
        let len = data.length;
        var arr = [];
        for(var i=0; i<len; i++){
          var re = new RegExp(searchText, 'gi');
          var string = data[i]["name"];
          if(string.match(re)){
            arr.push(string);
          }}
        this.setState({
          dataSource: arr
        });
      };
    
      onChange = value => {
        this.setState({ value });
      };

    render() {
        const { dataSource, value, data, user, filter, favorites, user_name, visible} = this.state; 
        let us = user; 
        const { getFieldDecorator } = this.props.form;
       
        const text = <h6>{user_name}'s Favorites</h6>;
        const content = (
            
            <div className="scrollable-container-pop">
            <div className="background-pop">
            {favorites.map(item => (
                <React.Fragment key={item.id}>                        
                   <div style={{maxWidth: "600px"}}>
                        <Descriptions >
                            <Descriptions.Item label="Food">{item.food}</Descriptions.Item>
                            <Descriptions.Item label="Drink">{item.drink}</Descriptions.Item>
                            <Descriptions.Item label="Animal">{item.animal}</Descriptions.Item>
                            <Descriptions.Item label="Bird"> {item.bird}</Descriptions.Item>
                            <Descriptions.Item label="Hobby">{item.hobby}</Descriptions.Item>
                            <Descriptions.Item label="Place"> {item.place} </Descriptions.Item>
                        </Descriptions>
                        <hr/>
                    </div>
                </React.Fragment>
            ))}
            </div>
            </div>
        );      

        return (
            <div style={loginStyle} className="white card z-depth-0 card-content center">
                <div style={{ backgroundColor: 'gray'}}>
                    <br/>
                    <AutoComplete
                    value={value}
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={this.onSelect}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    placeholder="Filter Here By Name"
                    />
                </div>
                <div className="scrollable-container-dash">
                <div className="background">
                <Table striped bordered hover >
                    <thead>
                       <tr>
                            <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                            <td><h6>Id</h6></td>
                            <td> &nbsp;&nbsp;&nbsp;&nbsp; </td>
                            <td><h6>Name</h6></td>
                            <td><h6>Email</h6></td>
                            <td><h6>Contact</h6></td>
                            <td><h6> Salary</h6></td>
                            <td><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6></td>
                        </tr>
                    </thead>
                    <tbody>
                        {us && value!==''? 
                        <tr>
                            <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                            <td> {filter.user_id} </td>
                            <td> &nbsp;&nbsp;&nbsp;&nbsp; </td>
                            <td> {filter.name} </td>
                            <td> {filter.email} </td>
                            <td> {filter.contact} </td>
                            <td> {filter.salary} </td>
                            <td> 
                                <div className="demo">
                                <div style={{ clear: 'both', whiteSpace: 'nowrap' }}>
                                    <Popover placement="bottomRight" title={text} content={content} trigger="click">
                                    <Button type="primary" onClick={this.handleClick.bind(this, filter.user_id)} shape="circle" icon="search" />
                                    </Popover>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" onClick={this.showDrawer.bind(this, filter.user_id)} shape="circle" icon="edit" />
                                    &nbsp;&nbsp;&nbsp;
                                    <Button type="danger" onClick={this.handleDelete.bind(this, filter.user_id)} shape="circle" icon="delete" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        :   data.map(item => (
                            <React.Fragment key={item.user_id}>                        
                                <tr>
                                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                                    <td> {item.user_id} </td>
                                    <td> &nbsp;&nbsp;&nbsp;&nbsp; </td>
                                    <td> {item.name} </td>
                                    <td> {item.email} </td>
                                    <td> {item.contact} </td>
                                    <td> {item.salary} </td>
                                    <td> 
                                        <div className="demo">
                                        <div style={{ clear: 'both', whiteSpace: 'nowrap' }}>
                                            <Popover placement="bottomRight" title={text} content={content} trigger="click">
                                            <Button type="primary" onClick={this.handleClick.bind(this, item.user_id)} shape="circle" icon="search" />
                                            </Popover>
                                            &nbsp;&nbsp;&nbsp;
                                            <Button type="primary" onClick={this.showDrawer.bind(this, item.user_id)} shape="circle" icon="edit" />
                                            &nbsp;&nbsp;&nbsp;
                                            <Button type="danger" onClick={this.handleDelete.bind(this, item.user_id)} shape="circle" icon="delete" />
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
                <div>
          <Drawer
          title="User Update"
          width={400}
          onClose={this.onClose}
          visible={visible}
          >
          <Form layout="vertical" hideRequiredMark>
            
            <Row gutter={16}>
            <Form.Item >
                {getFieldDecorator("name", {
                    rules: [
                    {
                        required: true,
                        message: "Please input your nickname!",
                        whitespace: true
                    }
                    ]
                })(<Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="User Name"
                />)
                }
            </Form.Item>
            </Row>
            <Row gutter={16}>
            <Form.Item>
                {getFieldDecorator("email", {
                    rules: [
                    {
                        type: "email",
                        message: "The input is not valid E-mail!"
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!"
                    }
                    ]
                })(<Input 
                    prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Email"
                    />)}
            </Form.Item>
            </Row>
            <Row gutter={16}>
            <Form.Item>
                {getFieldDecorator("salary", {
                    rules: [
                    {
                        required: true,
                        message: "Please input your Salary Amount!"
                    }
                    ]
                })(<Input 
                    prefix={<Icon type="dollar" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Salary"
                />)}
            </Form.Item>
            </Row>
            <Row gutter={16}>
            <Form.Item>
                {getFieldDecorator("contact", {
                    rules: [
                    { required: true, message: "Please input your phone number!" }
                    ]
                })(<Input
                    prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Contact Number" 
                    />)}
            </Form.Item>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.handleUpdate} type="primary">
              Update
            </Button>
          </div>
        </Drawer>
        </div>
                </div>
              
            </div>
        )
    }
}    

const Dash = Form.create({name: "dashboard"})(Dashboard);

export default Dash;