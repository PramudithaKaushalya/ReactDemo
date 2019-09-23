
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar, Drawer, Form, Button, Row, Input } from 'antd';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import Dashboard from './Dashboard';
import Delete from './Delete';
import Update from './Update';
import Calendar from './Header';
import Profile from './Profile';
import Favorite from './favorite';
import ReadFav from './ReadFav';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class SiderDemo extends React.Component {
  
  state = {
    collapsed: false,
    redirectToReferrer: false,
    color: '#00a2ae',
    visible: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  handleClick = () => {
    this.setState({redirectToReferrer: true});
    localStorage.removeItem("user");
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
    console.log("huha"+this.state.visible);
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const {redirectToReferrer, visible} = this.state;
    const { getFieldDecorator } = this.props.form;
    const menu = (
      <Menu>
        <Menu.Item onClick={this.showDrawer}>
          Change Password
        </Menu.Item>
        <Menu.Item onClick={this.handleClick}>
          Log Out
        </Menu.Item>
      </Menu>
    );
    const user = localStorage.getItem("user");
    if (redirectToReferrer) {
      return (<Login/>)
    }
    else{
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
          collapsible collapsed={this.state.collapsed} 
          onCollapse={this.onCollapse}
        >
          <div className="logo" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img height= '35px' alt="example" src="https://rakiya.lk/files/recruiters/1805/logo.png" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} selectedKeys={[]} mode="inline">
            
            <Menu.Item key="1">
              <Link to='/dashboard'/>
              <Icon type="read" />
              <span>Read</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/update'/>
              <Icon type="edit" />
              <span>Update</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/delete'/>
              <Icon type="delete" />
              <span>Delete</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Applications</span>
                </span>
              }
            >
              <Menu.Item key="4">
                <Link to='/favorite'/>
                <Icon type="heart" />
                <span>Add Favorite</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to='/read'/>
                <Icon type="hourglass" />
                <span>View Favorites</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to='/calendar'/>
                <Icon type="calendar" />
                <span>Calendar</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'gray', padding: 0 }} >
            <nav className="nav-wrapper black darken-3">
            <div>
            <h5 className="brand-logo center">React | Spring-Boot | MySQL</h5>
            </div>
            <ul className="right">
              <li>
              <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                {user}
              </Avatar>
              </li>
              <li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              </li>
              <li>
                <Dropdown overlay={menu} placement="bottomRight">
                  <Icon type="menu" />  
                </Dropdown>&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
            </ul>
            </nav>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 30, background: '#ECECEC', minHeight: 570 }}>
              <Switch>
                <Route path='/signup' component={Signup} />
                <Route path='/profile' component={Profile} />
                <Route path='/delete' component={Delete} />
                <Route path='/update' component={Update} />
                <Route path='/favorite' component={Favorite} />
                <Route path='/read' component={ReadFav} />
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/calendar' component={Calendar} />
              </Switch>
            </div>
            <div>
          <Drawer
          title="Change Password"
          width={300}
          onClose={this.onClose}
          visible={visible}
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
          </Content>
          
          <Footer style={{ textAlign: 'center' }}>React | Spring-Boot | MySQL ©2019 Created by Pramuditha</Footer>
        </Layout>
      </Layout>
    );}
  }
}

const Main = Form.create()(SiderDemo);

export default Main;

// <Menu.Item key="2">
// <Link to='/signup'/>
// <Icon type="plus-circle" />
// <span> Create </span>
// </Menu.Item>          