import React from "react";
import axios from 'axios';
import swal from 'sweetalert';
//import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Input,
  Icon,
  Button,
  Card
} from "antd";

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const user = {
            name: values.name || undefined,
            password: values.password || undefined,
            salary: values.salary || undefined
        }
        axios.post('http://localhost:5000/signup', user)
        .then(res => {
            console.log("res", res.data);
            swal("OMG!","User created successfully!!!","success");
        }).catch(e => console.log("eeeeeeeeeeee",e));
          
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div style={{ background: '#ECECEC', padding: '50px', height: '760px' }}>
          <div style={{float: 'left', height: '800px', paddingLeft: '80px'}}>
        <img height= '650px' alt="example" src="https://ds.ecisolutions.com/pixere.com/EciHorizon/completebusiness/live/images/office-furniture.jpg" />
      </div>
      <div style={{float: 'right', paddingRight: '150px'}}>
      <Card title="Register Here" bordered={false} style={{ width: 500, height: '650px'}}>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item >
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="User Name"
            />
          )}
        </Form.Item>
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
        <Form.Item hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password 
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
            />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur}
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Confirm Password"
          />)}
        </Form.Item>
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
        <Form.Item>
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(<Input
            prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Contact Number" 
            />)}
        </Form.Item>
        <Form.Item>
          <Button onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          <a href='/'>Login Now!!!</a>
        </Form.Item>
      </Form>
      </Card>
      </div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);


export default WrappedRegistrationForm;
