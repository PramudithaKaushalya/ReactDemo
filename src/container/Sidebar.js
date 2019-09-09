
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Dashboard from './Dashboard';
import Delete from './Delete';
import Update from './Update';
import Calendar from './Header';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
          collapsible collapsed={this.state.collapsed} 
          onCollapse={this.onCollapse}
        >
          <div className="logo" ></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <Menu.Item key="1">
              <Link to='/'/>
              <Icon type="read" />
              <span>Read</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/signup'/>
              <Icon type="plus-circle" />
              <span> Create </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/update'/>
              <Icon type="edit" />
              <span>Update</span>
            </Menu.Item>
            <Menu.Item key="4">
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
              <Menu.Item key="5">
                <Link to='/calendar'/>
                <Icon type="calendar" />
                <span>Calendar</span>
              </Menu.Item>
              <Menu.Item key="6">Bill</Menu.Item>
              <Menu.Item key="7">Alex</Menu.Item>
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
            <li><Link to='/#'/> <Avatar style={{ backgroundColor: 'blue' }} icon="user" /></li>
            </ul>
            </nav>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path='/signup' component={Signup} />
                <Route path='/signin' component={Signin} />
                <Route path='/delete' component={Delete} />
                <Route path='/update' component={Update} />
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/calendar' component={Calendar} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>React | Spring-Boot | MySQL ©2019 Created by Pramuditha</Footer>
        </Layout>
      </Layout>
    );
  }
}

          