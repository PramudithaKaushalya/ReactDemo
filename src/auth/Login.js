
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import Sidebar from '../container/Sidebar';

class NormalLoginForm extends React.Component {
  
  state = {
    redirectToReferrer: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const user = {
        name: values.username || undefined,
        password: values.password || undefined
      }
      if (!err) {
        console.log('Received values of form: ', user);
        if(user.name === undefined || user.password === undefined){
          swal("Ohh!","All fields are required!!!", "warning");
          window.location.reload();
        }
        else{
        axios.post('http://localhost:5000/signin', user)
        .then(res => {
          console.log("res", res.data)
          if(res.data){
            swal("OMG!","User logging successfully!!!","success");
            this.setState({redirectToReferrer: true})

          }else{
            swal("Oops!","Invalid password!!!","error");
          }
          
        }).catch(e => {
          swal("Oops!","User doesn't exist!!!","error");
          window.location.reload();
        });
          
        }
      }
    });
  };

  render() {
    const {redirectToReferrer} = this.state
    if (redirectToReferrer) {
      return (<Sidebar/>)
    }
      
    const { getFieldDecorator } = this.props.form;
    
    return (
      <div style={{ background: '#ECECEC', padding: '150px', height: '760px' }}>
      <div style={{float: 'left', height: '300px'}}>
        <img height= '500px' alt="example" src="https://vitamin-resource.com/wp-content/uploads/2012/05/computer-users.jpg" />
      </div>
      <div style={{float: 'right', paddingRight: '55px'}}>
      <Card title="Login Here" bordered={false} style={{ width: 400, height: '500px'}}>
        
      <Form  className="login-form">
        <br/>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <br/>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Link className="login-form-forgot" to='/signup'>Forgot Password</Link>
          <Button onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to='/signup'>Register Now!!!</Link>
        </Form.Item>
      </Form>
      </Card>
  </div>
  </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm
          