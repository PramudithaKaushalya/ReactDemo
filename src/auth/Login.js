import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Icon, Input, Button, Checkbox, Card, Row, Col } from 'antd';
import Sidebar from '../container/Sidebar';

class NormalLoginForm extends React.Component {
  
  state = {
    redirectToReferrer: false
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const user = {
        name: values.username || undefined
      }
      if (!err) {
        console.log('Received values of form: ', user);
        axios.post('http://localhost:5000/login', user)
        .then(res => {
          console.log("res", res.data)
          
          var passwordHash = require('password-hash');
          
          if(passwordHash.verify(values.password, res.data.password)){
            swal("Yeah!","User logging successfully!!!","success");
            localStorage.setItem("id", res.data.user_id);
            localStorage.setItem("user", user.name);
            this.setState({redirectToReferrer: true});
          }else{
            swal("Oops!","Invalid password!!!","error");
          }
          
        }).catch(e => {
          swal("Oops!","User doesn't exist!!!","error");
          window.location.reload();
        });
      }
    });
  };

  render() {
    const {redirectToReferrer} = this.state
    if (redirectToReferrer) {
      return (<Sidebar/>)
    }
      
    const { getFieldDecorator } = this.props.form;
    
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 16,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };

    return (
      <div style={{ background: '#ECECEC', padding: '150px', height: '760px' }}>
        <Row gutter={0}>
          <Col span={14}>
          <img height= '500px' alt="example" src="https://vitamin-resource.com/wp-content/uploads/2012/05/computer-users.jpg" />
          </Col> 
          <Col span={10}>
          <Card title="Login Here" bordered={false} style={{ width: 400, height: '500px'}}>
        
        <Form  {...formItemLayout} className="login-form">
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
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <br/>
          <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(<Checkbox className='box'>Remember me</Checkbox>)}
            <Link className="login-form-forgot" to='/signup'>Forgot Password</Link>
            <Button onClick={this.handleLogin} type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button><br/>
            Or <Link to='/register'>Register Now!!!</Link>
          </Form.Item>
        </Form>
        </Card>
          </Col> 
        </Row>
  </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm