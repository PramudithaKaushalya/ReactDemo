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

class favorite extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        
        const favorite = {
            user_id: localStorage.getItem("id"),
            user_name: localStorage.getItem("user"),
            food: values.food || undefined,
            drink: values.drink || undefined,
            animal: values.animal || undefined,
            bird: values.bird || undefined,
            hobby: values.hobby || undefined,
            place: values.place || undefined
        }
        axios.post('http://localhost:5000/savefavo', favorite)
        .then(res => {
            console.log("res", res.data);
            swal("OMG!","User Favorite Submited!!!","success");
        }).catch(e => console.log("eeeeeeeeeeee",e));
        this.props.history.push('/read'); 
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
      <div style={{ background: '#ECECEC', paddingLeft: '130px', paddingRight: '135px', height: '420px' }}>
      
      <div style={{float: 'left', height: '510px'}}>
        <img height= '510px' alt="example" src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/10/best-hiking-trails-canada-1200x1200.jpg" />
      </div>
      <div className="scrollable-container-fav">       
      <div className="background">
      <div style={{float: 'right'}}>
      <Card title="Your Favorite Things" bordered={false} style={{ width: 450, height: '680px'}}>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item >
          {getFieldDecorator("food", {
            rules: [
              {
                required: true,
                message: "Please input your favorite food!",
                whitespace: true
              }
            ]
          })(
            <Input
              prefix={<Icon type="shopping-cart" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Food"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("drink", {
            rules: [
              {
                required: true,
                message: "Please input your favorite drink"
              }
            ]
          })(<Input 
            prefix={<Icon type="coffee" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Drink"
            />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("animal", {
            rules: [
              {
                required: true,
                message: "Please input your favorite animal!"
              }
            ]
          })(<Input 
            prefix={<Icon type="bug" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Animal"
          />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("bird", {
            rules: [
              {
                required: true,
                message: "Please input your favorite bird!"
              }
            ]
          })(<Input 
            prefix={<Icon type="qq" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Bird"
          />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("hobby", {
            rules: [
              { required: true, message: "Please input your favorite hobby!" }
            ]
          })(<Input
            prefix={<Icon type="video-camera" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Hobby" 
            />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("place", {
            rules: [
              { required: true, message: "Please input your favorite place!" }
            ]
          })(<Input
            prefix={<Icon type="environment" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Place" 
            />)}
        </Form.Item>
        <br/><br/>
        <Form.Item>
          <Button onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Card>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "favorite" })(
  favorite
);


export default WrappedRegistrationForm;

