
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Drawer, Form, Button, Row, Input } from 'antd';

class DrawerForm extends React.Component {
  state = { 
      visible: false 
    };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
      
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Drawer
          title="Create a new account"
          width={300}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
                <Form.Item label="Current Password">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please enter current password' }],
                  })(<Input placeholder="Please enter current password" />)}
                </Form.Item>
              
            </Row>
            <Row gutter={16}>
            <Form.Item label="New Password">
                  {getFieldDecorator('new', {
                    rules: [{ required: true, message: 'Please enter new password' }],
                  })(<Input placeholder="Please enter new password" />)}
                </Form.Item>
            </Row>
            <Row gutter={16}>
            <Form.Item label="Confirm Password">
                  {getFieldDecorator('confirm', {
                    rules: [{ required: true, message: 'Please enter again new password' }],
                  })(<Input placeholder="Please enter again new password" />)}
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
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const App = Form.create()(DrawerForm);

export default App;
